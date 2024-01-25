import { time, loadFixture } from '@nomicfoundation/hardhat-toolbox-viem/network-helpers'
import { expect } from 'chai'
import hre from 'hardhat'
import { getAddress, parseEther, formatEther } from 'viem'

describe('Presale', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContractsNeeded() {
    // Contracts are deployed using the first signer/account by default
    const [owner, user, treasury] = await hre.viem.getWalletClients()
    const stableCoin = await hre.viem.deployContract('Token')
    const maticDecimal = 8
    const maticInitailPrice = 4283849655582n

    const usdtDecimal = 8
    const usdtInitailPrice = 253641999999n

    const maticPriceFeeds = await hre.viem.deployContract('MockV3Aggregator', [
      maticDecimal,
      maticInitailPrice,
    ])

    const usdtPriceFeeds = await hre.viem.deployContract('MockV3Aggregator', [
      usdtDecimal,
      usdtInitailPrice,
    ])

    const dcen = await hre.viem.deployContract('Dcen')
    const presale = await hre.viem.deployContract('PresaleContract', [
      stableCoin.address,
      treasury.account.address,
      parseEther('0.22', 'wei'),
      maticPriceFeeds.address,
      usdtPriceFeeds.address,
    ])

    const publicClient = await hre.viem.getPublicClient()
    return {
      stableCoin,
      dcen,
      presale,
      owner,
      user,
      treasury,
      publicClient,
      maticPriceFeeds,
      usdtPriceFeeds,
    }
  }

  describe('Deployment', function () {
    it('Should set withdrawal state', async function () {
      const { presale, maticPriceFeeds } = await loadFixture(deployContractsNeeded)
      console.log(await maticPriceFeeds.read.latestRoundData())
      expect(await presale.read.withdrawalEnabled()).to.equal(false)
    })
  })

  describe('Payments', function () {
    it('Should pay native token', async function () {
      const { presale, owner, user, treasury, maticPriceFeeds, publicClient } =
        await loadFixture(deployContractsNeeded)
      const initialBalance = await publicClient.getBalance({
        address: treasury.account.address,
      })
      const finalBalance =
        Number(formatEther(initialBalance)) + Number(formatEther(parseEther('10', 'wei')))

      await user.sendTransaction({
        to: presale.address,
        value: parseEther('10', 'wei'),
      })
      expect(
        await publicClient.getBalance({
          address: treasury.account.address,
        }),
      ).to.equal(parseEther(`${finalBalance}`, 'wei'))
    })
    it('Should calculate benefit properly', async function () {
      const { presale, owner, user, treasury, maticPriceFeeds, publicClient } =
        await loadFixture(deployContractsNeeded)
      const rate = await presale.read.rate()
      const data = await maticPriceFeeds.read.latestRoundData()
      await user.sendTransaction({
        to: presale.address,
        value: parseEther('0.001', 'wei'),
      })

      const amountDeposited = parseEther('0.001', 'wei') * BigInt(Math.pow(10, 8))
      const tokenWorthUSD = amountDeposited / data[1]
      const calcBenefit = (tokenWorthUSD * BigInt(Math.pow(10, 18))) / rate
      const benefit = await presale.read.benefits([user.account.address])
      expect(benefit).to.equal(calcBenefit)
    })
    it('Should calculate debt and deposits', async function () {
      const { presale, owner, user, treasury, maticPriceFeeds, publicClient } =
        await loadFixture(deployContractsNeeded)
      const rate = await presale.read.rate()
      const data = await maticPriceFeeds.read.latestRoundData()
      await user.sendTransaction({
        to: presale.address,
        value: parseEther('0.001', 'wei'),
      })

      const amountDeposited = parseEther('0.001', 'wei') * BigInt(Math.pow(10, 8))
      const tokenWorthUSD = amountDeposited / data[1]
      const calcBenefit = (tokenWorthUSD * BigInt(Math.pow(10, 18))) / rate
      expect(await presale.read.totalTokensOwed()).to.equal(calcBenefit)
      expect(await presale.read.totalNativeTokensDeposited()).to.equal(
        parseEther('0.001', 'wei'),
      )
    })

    it('Should accept ERC20', async function () {
      const { presale, dcen, usdtPriceFeeds, owner, stableCoin, treasury } =
        await loadFixture(deployContractsNeeded)
      const rate = await presale.read.rate()
      const data = await usdtPriceFeeds.read.latestRoundData()
      const amtToSend = parseEther('100', 'wei')
      await stableCoin.write.approve([presale.address, amtToSend])
      const expectedBal =
        (await stableCoin.read.balanceOf([owner.account.address])) - amtToSend
      await presale.write.contributeERC20([amtToSend])
      expect(await stableCoin.read.balanceOf([owner.account.address])).to.equal(
        expectedBal,
      )

      const amountDeposited = parseEther('100', 'wei') * BigInt(Math.pow(10, 8))
      const tokenWorthUSD = amountDeposited / data[1]
      const calcBenefit = (tokenWorthUSD * BigInt(Math.pow(10, 18))) / rate
      expect(await presale.read.totalTokensOwed()).to.equal(calcBenefit)
      expect(await presale.read.totalERC20TokensDeposited()).to.equal(
        parseEther('100', 'wei'),
      )
      expect(await stableCoin.read.balanceOf([treasury.account.address])).to.equal(
        amtToSend,
      )
    })
  })

  describe('Withdrawal', function () {
    it('Should pay expected decen token', async function () {
      const { presale, dcen, maticPriceFeeds, owner, stableCoin, treasury, user } =
        await loadFixture(deployContractsNeeded)
      const rate = await presale.read.rate()
      const data = await maticPriceFeeds.read.latestRoundData()

      await owner.sendTransaction({
        to: presale.address,
        value: parseEther('0.001', 'wei'),
      })

      const amountDeposited = parseEther('0.001', 'wei') * BigInt(Math.pow(10, 8))
      const tokenWorthUSD = amountDeposited / data[1]
      const calcBenefit = (tokenWorthUSD * BigInt(Math.pow(10, 18))) / rate
      console.log(calcBenefit)
      await presale.write.enableWithdrawal([dcen.address])
      const initialBalance = await dcen.read.balanceOf([owner.account.address])
      const newBal = (await dcen.read.balanceOf([owner.account.address])) - calcBenefit
      await dcen.write.transfer([presale.address, calcBenefit])
      expect(await dcen.read.balanceOf([presale.address])).to.equal(calcBenefit)
      expect(await dcen.read.balanceOf([owner.account.address])).to.equal(newBal)
      await presale.write.claimTokens()
      expect(await dcen.read.balanceOf([owner.account.address])).to.equal(initialBalance)
    })
  })
})
