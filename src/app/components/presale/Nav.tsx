'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logo from 'public/dec-logo.png'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

const Nav = () => {
  const [wallet, setWallet] = useState('Connect Wallet')

  return (
    <nav className="flex  justify-between items-center w-[90%] mx-auto py-6  ">
      <Link href="/">  <Image src={logo} alt="Logo" />
      </Link>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading';
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus ||
              authenticationStatus === 'authenticated');
          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                'style': {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button className='bg-primary_10 px-3 py-2 rounded-xl' onClick={openConnectModal} type="button">
                      Connect Wallet
                    </button>
                  );
                }
                if (chain.unsupported) {
                  return (
                    <button className='bg-red-600 px-3 py-2 rounded-xl' onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }
                return (
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button
                      onClick={openChainModal}
                      style={{ display: 'flex', alignItems: 'center' }}
                      className='bg-primary_10 px-3 py-2 rounded-xl'
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              style={{ width: 12, height: 12 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </button>
                    <button
                      className='bg-primary_10 px-3 py-2 rounded-xl'
                      onClick={openAccountModal} type="button">
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ''}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </nav>

  )
}

export default Nav
