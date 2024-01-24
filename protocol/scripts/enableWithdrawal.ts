import { formatEther, parseEther } from 'viem'
import hre, { viem } from 'hardhat'
import dotenv from 'dotenv'

dotenv.config()

async function main() {
  const presale_address = process.env.PRESALE
  const dcen_address = process.env.DECEN_TOKEN
  const presale = await viem.getContractAt(
    'Presale',
    `0x${presale_address?.substring(2)}`,
  )
  const dcen = await viem.getContractAt('Dcen', `0x${dcen_address?.substring(2)}`)

  await presale.write.setTokenAddress([`0x${dcen_address?.substring(2)}`])
  await presale.write.enableWithdrawal()
  await dcen.write.transfer([
    `0x${presale_address?.substring(2)}`,
    parseEther('100', 'wei'),
  ])
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
