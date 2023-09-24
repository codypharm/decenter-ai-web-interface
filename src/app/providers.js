'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  midnightTheme
} from '@rainbow-me/rainbowkit';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
    filecoinCalibration
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [
    mainnet,
    polygon,
    filecoinCalibration,
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Paper Stack',
  projectId: 'db1b8a46ffa835bd9a48a89ff540f990',
  chains
});


const demoAppInfo = {
  appName: 'Paper Stack',
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
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo} theme={midnightTheme()} coolMode modalSize='compact' >
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}