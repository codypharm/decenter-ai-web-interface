"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, filecoinCalibration } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
// const lilypad = {
//   id: 1337,
//   name: "Lilypad Lalechuza testnet",
//   network: "Lilypad Lalechuza testnet",
//   iconUrl: "",
//   iconBackground: "#fff",
//   nativeCurrency: {
//     decimals: 18,
//     name: "Lilypad Lalechuza testnet",
//     symbol: "ETH",
//   },
//   rpcUrls: {
//     public: { http: ["http://testnet.lilypadnetwork.org:8545"] },
//     default: { http: ["http://testnet.lilypadnetwork.org:8545"] },
//   },
//   // blockExplorers: {
//   //   default: { name: "SnowTrace", url: "https://snowtrace.io" },
//   //   etherscan: { name: "SnowTrace", url: "https://snowtrace.io" },
//   // },
//   // contracts: {
//   //   multicall3: {
//   //     address: "0xca11bde05977b3631167028862be2a173976ca11",
//   //     blockCreated: 11_907_934,
//   //   },
//   // },
//   testnet: true,
// };

const { chains, publicClient } = configureChains(
  [mainnet, polygon, filecoinCalibration],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Paper Stack",
  projectId: "db1b8a46ffa835bd9a48a89ff540f990",
  chains,
});

const demoAppInfo = {
  appName: "Paper Stack",
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export function Providers({ children }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={demoAppInfo}
        theme={midnightTheme()}
        coolMode
        modalSize="compact"
      >
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
