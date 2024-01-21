'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logo from 'public/dec-logo.png'

const Nav = () => {
  const [wallet, setWallet] = useState('Connect Wallet')

  return (
    <nav className="flex  justify-between items-center w-[90%] mx-auto py-6  ">
      <Image src={logo} alt="Logo" />

      <button className="rounded-full text-sm md:text-base bg-primary_11 text-primary_3 font-archivo font-medium px-3 py-2">
        {wallet}
      </button>
    </nav>
  )
}

export default Nav
