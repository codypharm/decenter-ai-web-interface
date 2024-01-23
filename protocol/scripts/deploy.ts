import { formatEther, parseEther } from "viem";
import hre from "hardhat";
import dotenv from "dotenv"

dotenv.config();



async function main() {

  const  treasury = process.env.TREASURY
   const stableCoin = await hre.viem.deployContract("Token");
    const dcen = await hre.viem.deployContract("Dcen");
    const presale = await hre.viem.deployContract("Presale", [stableCoin.address,treasury,parseEther('1','wei'),parseEther('1','wei')]);
   
    
    console.log("Stable Coin Address:", stableCoin.address)
    console.log("Dcen token Address:", dcen.address)
    console.log("Presale contract Address:", presale.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
