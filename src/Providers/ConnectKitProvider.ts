'use client'
import { getDefaultConfig } from 'connectkit'
import { WagmiConfig, createConfig } from 'wagmi'
export { ConnectKitProvider, ConnectKitButton } from 'connectkit'
import { localhost, polygonMumbai } from 'wagmi/chains'

const chains = [localhost, polygonMumbai]

export const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    infuraId: process.env.NEXT_PUBLIC_INFURA_KEY, // or infuraId
    walletConnectProjectId: `${process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}`,
    chains,
    // Required
    appName: 'Decenterai',

    // Optional
    appDescription: 'Your App Description',
    appUrl: 'https://decenterai.com', // your app's url
    appIcon: 'https://family.co/logo.png', // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
)
