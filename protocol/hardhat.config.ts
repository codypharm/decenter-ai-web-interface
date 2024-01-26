import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";

// dotenv.config();

// const PRIVATE_KEY  = String(process.env.PRIVATE_KEY)

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },

  abiExporter: [
    {
      path: "../client/src/abi",
      pretty: false,
      runOnCompile: true,
      only: ["Presale", "Dcen", "Token"],
    },
  ],
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
    only: ["Presale", "Dcen", "Token"],
  },

  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337, // Customize the chain ID here
    },
    // sepolia: {
    //   url: "https://sepolia.drpc.org",
    //   accounts: [ PRIVATE_KEY ]
    // },
  },
};

export default config;
