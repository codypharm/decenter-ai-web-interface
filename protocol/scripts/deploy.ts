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
  const presale = await hre.viem.deployContract('Presale', [
    stableCoin.address,
    treasury,
    parseEther('1', 'wei'),
    parseEther('1', 'wei'),
  ])

  const maticPriceFeeds = await hre.viem.deployContract('ChainlinkMock', [
    maticDecimal,
    maticInitailPrice,
  ])

  const usdtPriceFeeds = await hre.viem.deployContract('ChainlinkMock', [
    usdtDecimal,
    usdtInitailPrice,
  ])

  console.log('Stable Coin Address:', stableCoin.address)
  console.log('Dcen token Address:', dcen.address)
  console.log('Presale contract Address:', presale.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
