import { formatEther, parseEther } from 'viem'
import hre from 'hardhat'
import dotenv from 'dotenv'

dotenv.config()

const maticDecimal = 8
const maticInitailPrice = 4283849655582n

const usdtDecimal = 8
const usdtInitailPrice = 253641999999n

async function main() {
  const treasury = process.env.TREASURY
  const stableCoin = await hre.viem.deployContract('Token')
  const dcen = await hre.viem.deployContract('Dcen')
  const maticPriceFeeds = await hre.viem.deployContract('MockV3Aggregator', [
    maticDecimal,
    maticInitailPrice,
  ])

  const usdtPriceFeeds = await hre.viem.deployContract('MockV3Aggregator', [
    usdtDecimal,
    usdtInitailPrice,
  ])

  const presale = await hre.viem.deployContract('PresaleContract', [
    stableCoin.address,
    treasury,
    parseEther('0.22', 'wei'),
    maticPriceFeeds.address,
    usdtPriceFeeds.address,
  ])

  await stableCoin.write.transfer([
    '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
    parseEther('100', 'wei'),
  ])

  console.log(
    await stableCoin.read.balanceOf(['0x70997970C51812dc3A010C7d01b50e0d17dc79C8']),
  )

  console.log('Stable Coin Address:', stableCoin.address)
  console.log('Dcen token Address:', dcen.address)
  console.log('Presale contract Address:', presale.address)
  console.log('Matic price feed:', maticPriceFeeds.address)
  console.log('Usdt price feed:', usdtPriceFeeds.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
