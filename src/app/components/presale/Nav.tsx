'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logo from 'public/dec-logo.png'
import { ConnectKitButton } from 'connectkit'

const Nav = () => {
  const [wallet, setWallet] = useState('Connect Wallet')

  return (
    <nav className="flex  justify-between items-center w-[90%] mx-auto py-6  ">
      <Image src={logo} alt="Logo" />

      <ConnectKitButton />
    </nav>
  )
}

export default Nav
