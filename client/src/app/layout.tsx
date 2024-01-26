import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppMetaData } from "@config/app";

import { WagmiConfig } from "wagmi"
import RainbowKitProvider from '@/Providers/RainbowKitProvider';
import '@rainbow-me/rainbowkit/styles.css';
const inter = Inter({ subsets: ['latin'] })
export const metadata = AppMetaData

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Decenter AI</title>
      </head>
      <body className={inter.className}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </body>
    </html>
  )
}
