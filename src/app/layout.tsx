import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppMetaData } from "@config/app";

import { WagmiConfig, createConfig } from "wagmi"
import { ConnectKitProvider, config } from '@/Providers/ConnectKitProvider';

const inter = Inter({ subsets: ['latin'] })
export const metadata = AppMetaData

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Decenter AI</title>
      </head>
      <body className={inter.className}>
        <WagmiConfig config={config}>
          <ConnectKitProvider>
            {children}
          </ConnectKitProvider>
        </WagmiConfig>
      </body>
    </html>
  )
}
