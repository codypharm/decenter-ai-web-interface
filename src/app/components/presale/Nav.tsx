'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logo from 'public/dec-logo.png'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

const Nav = () => {
  const [wallet, setWallet] = useState('Connect Wallet')

  return (
    <Link href="/"><nav className="flex  justify-between items-center w-[90%] mx-auto py-6  ">
      <Image src={logo} alt="Logo" />

      <ConnectButton />
    </nav></Link>
  )
}

export default Nav
