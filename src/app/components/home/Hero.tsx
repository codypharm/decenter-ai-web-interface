'use client'
import Spiral from '@/svg/spiral'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { RxHamburgerMenu } from 'react-icons/rx'

const Hero = () => {
  const [menu, setMenu] = useState<boolean>(false)
  return (
    <section id="/" className="min-h-[70vh] md:min-h-[80vh flex justify-end relative z-10">
      {menu && (
        <div className="absolute top-0 w-full  z-50">
          <div className=" w-[90%] h-[70vh] z-50  bg-primary_12  m-auto mt-2 border border-primary_8  rounded-xl shadow-[0px_-2px_16px_0px_#4a5568] py-6 px-4 text-primary_1">
            <div className="h-[10%] flex">
              <div className="w-[50%] h-full  relative">
                <Image
                  src="/logo.png"
                  alt="logo image"
                  fill={true}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className="w-[50%] h-full  flex justify-end items-center">
                <LiaTimesSolid size={30} onClick={() => setMenu(!menu)} />
              </div>
            </div>

            <div className="h-[70%]">
              <ul className="h-full w-full text-primary_7 text font-archivo">
                <Link href="#/"> <li className="h-[25%] w-full flex items-center hover:text-primary_1">
                  Home
                </li></Link>
                <Link href="#about">
                  <li className="h-[25%] w-full flex items-center hover:text-primary_1">
                    About Us
                  </li>
                </Link>
                <li className="h-[25%] w-full flex items-center hover:text-primary_1">
                  Team
                </li>
                <Link href="#contact"><li className="h-[25%] w-full flex items-center hover:text-primary_1">
                  Contact US
                </li></Link>
              </ul>
            </div>
            <div className="h-[20%] text-center">

              <Link href="https://app.decenterai.com">

                <button className="bg-primary_11 w-full text-sm text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-full">
                  Try Demo
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <Spiral />
      <div className="absolute inset-0 bg-primary_13 bg-opacity-50 z-10">
        <div className="w-[80%] h-[10%] m-auto mt-[2%] rounded-full bg-primary_13 bg-opacity-80  border-primary_8 text-white flex justify-between">
          <div className="w-[50%] md:w-[10%] relative">
            <Image
              src="/logo.png"
              alt="logo image"
              fill={true}
              style={{
                objectFit: 'contain',
              }}
            />
          </div>

          <div className="hidden md:flex space-x-12 justify-center font-primaryArchivo w-[60%] items-center">
            <Link href="#/">
              <div className="text-primary_8 font-semibold text-md cursor-pointer hover:text-primary_1 ">
                Home
              </div>
            </Link>
            <Link href="#about"><div className="text-primary_8 font-semibold text-md cursor-pointer hover:text-primary_1 ">
              About Us
            </div></Link>
            <div className="text-primary_8 font-semibold text-md cursor-pointer hover:text-primary_1 ">
              Team
            </div>
            <Link href="#contact"><div className="text-primary_8 font-semibold text-md cursor-pointer hover:text-primary_1 ">
              Contact Us
            </div></Link>
          </div>

          <div className=" w-[50%] md:w-[20%] h-full flex items-center justify-end">


            <Link href="https://app.decenterai.com" className="hidden md:block">


              <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl">
                Try Demo
              </button>
            </Link>
            <RxHamburgerMenu
              size={30}
              className="cursor-pointer md:hidden"
              onClick={() => setMenu(!menu)}
            />
          </div>
        </div>

        <div className="h-[85%] w-[80%] m-auto flex flex-col justify-center gap-6 ">
          <h1 className="font-logirentBold text-2xl md:text-5xl text-primary_1 leading-normal">
            DecentralIzed and DemocratIzed AI <br />
            Model TraInIng Infrastructure
          </h1>
          <p className="font-archivo text-sm text-primary_6 ">
            Train ML/DL/ ANN/LLM models with ease.
          </p>
          <div className="flex space-x-9 md:space-x-16  md:mt-10">

            <Link href="https://app.decenterai.com">



              <button className="bg-primary_11 text-sm text-primary_1 font-normal font-primaryArchivo py-1 md-py-2 px-3 cursor-pointer rounded-3xl">
                Try Demo
              </button>
            </Link>

            <button className="border border-primary_11 text-sm text-primary_1 font-normal font-primaryArchivo py-1 md-py-2 px-3 cursor-pointer rounded-3xl">
              DCEN
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
