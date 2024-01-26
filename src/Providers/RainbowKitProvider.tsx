'use client'

import { ReactNode } from 'react'
import { RainbowKitProvider, darkTheme, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygon, localhost, polygonMumbai } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [localhost, polygon, polygonMumbai],
  [
    alchemyProvider({ apiKey: `${process.env.NEXT_PUBLIC_ALCHEMY_KEY}` }),
    publicProvider(),
  ],
)
const { connectors } = getDefaultWallets({
  appName: 'Decenterai',
  projectId: `${process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}`,
  chains,
})
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient
})


const appInfo = {
  appName: "Decenterai"
}


function CustomRainbowKitProvider({ children }: { children: ReactNode }) {
  return (

    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        appInfo={appInfo}
        modalSize='compact'
        theme={darkTheme()}
        coolMode
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>

  )
}

export default CustomRainbowKitProvider