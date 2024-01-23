import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox-viem/network-helpers";
import { expect } from "chai";
import hre from "hardhat";
import { getAddress, parseEther,formatEther } from "viem";

describe("Presale", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContractsNeeded() {

    // Contracts are deployed using the first signer/account by default
    const [owner, user, treasury] = await hre.viem.getWalletClients();
    const stableCoin = await hre.viem.deployContract("Token");
      
    const dcen = await hre.viem.deployContract("Dcen");
    const presale = await hre.viem.deployContract("Presale", [stableCoin.address,treasury.account.address,parseEther('1','wei'),parseEther('1','wei')]);
    const publicClient = await hre.viem.getPublicClient();
    return {
      stableCoin,
      dcen,
      presale,
      owner,
        user,
      treasury,
      publicClient,
    };
  }

  describe("Deployment", function () {
    it("Should set withdrawal state", async function () {
      const { presale} = await loadFixture(deployContractsNeeded);
      expect(await presale.read.withdrawalEnabled()).to.equal(false);
    });
    it("Should set token rates", async function () {
      const { presale} = await loadFixture(deployContractsNeeded);
      expect(await presale.read.nativeRate()).to.equal(parseEther('1', 'wei'));
      expect(await presale.read.tokenRate()).to.equal(parseEther('1', 'wei'));
    });
    it("Should set treasury", async function () {
      const { presale, treasury} = await loadFixture(deployContractsNeeded);
      expect((await presale.read.treasuryAddress()).toLowerCase()).to.equal(treasury.account.address.toLowerCase());
      
    });
    it("Should set stable coin", async function () {
        const { presale, stableCoin } = await loadFixture(deployContractsNeeded);
        
      expect((await presale.read.acceptedToken()).toLowerCase()).to.equal(stableCoin.address.toLowerCase());
      
    });

  });
    
    
    describe("Setting States", function() {
        it("Should set token address", async function () {
            const { presale, dcen} = await loadFixture(deployContractsNeeded);
            await expect(presale.write.setTokenAddress([dcen.address])).to.be.fulfilled;
        })
        it("Should set token address", async function () {
            const {presale, dcen} = await loadFixture(deployContractsNeeded);
            await expect(presale.write.setTokenAddress([dcen.address])).to.be.fulfilled;
        })

        it("Should set native rate", async function () {
            const { presale, dcen} = await loadFixture(deployContractsNeeded);
            await expect(presale.write.setNativeRate([parseEther("1", 'wei')])).to.be.fulfilled;
        })
        it("Should set token rate", async function () {
            const { presale, dcen} = await loadFixture(deployContractsNeeded);
            await expect(presale.write.setTokenRate([parseEther("1", 'wei')])).to.be.fulfilled;
        })
        it("Should enable withdrwal", async function () {
            const { presale, dcen} = await loadFixture(deployContractsNeeded);
            await expect(presale.write.enableWithdrawal()).to.be.fulfilled;
        })
    })

    describe("Payments", function () { 
        it("Should pay eth and get contribution", async function () {
            const { presale, owner, treasury, publicClient } = await loadFixture(deployContractsNeeded)
            const initialBalance  = await publicClient.getBalance({
                address:treasury.account.address,
            })
            const finalBalance = Number(formatEther(initialBalance)) + Number(formatEther(parseEther("10", 'wei')))
            await presale.write.payNative({ value: parseEther("10", "wei") })
            expect(
                await publicClient.getBalance({
                address:treasury.account.address,
                })
            ).to.equal(parseEther(`${finalBalance}`, "wei"));
            expect(await presale.read.contributions([owner.account.address])).to.equal(BigInt(10))
        })
        it("Should pay stable and get contribution", async function () {
            const { presale, owner , stableCoin, treasury} = await loadFixture(deployContractsNeeded)
            await stableCoin.write.approve([presale.address, parseEther('10','wei')])
            await presale.write.contributeERC20([parseEther("10", 'wei')])
            expect (await stableCoin.read.balanceOf([treasury.account.address])).to.equal(parseEther("10",'wei'))
            expect(await presale.read.contributions([owner.account.address])).to.equal(BigInt(10))
        })

        it("Should receive eth", async function () {
            const { presale, owner, stableCoin, treasury ,publicClient} = await loadFixture(deployContractsNeeded)
            
            const initialBalance  = await publicClient.getBalance({
                address:treasury.account.address,
            })
            const finalBalance = Number(formatEther(initialBalance)) + Number(formatEther(parseEther("10", 'wei')))
           await owner.sendTransaction({
                to: presale.address,
                value: parseEther("10", "wei")
            })
            expect(
                await publicClient.getBalance({
                address:treasury.account.address,
                })
            ).to.equal(parseEther(`${finalBalance}`, "wei"));
            expect(await presale.read.contributions([owner.account.address])).to.equal(BigInt(10))
            
        })
    })

    });
