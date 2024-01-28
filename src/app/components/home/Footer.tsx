import Image from 'next/image'
import React from 'react'
import { PiTwitterLogo, PiDiscordLogoBold } from 'react-icons/pi'
import { LiaTelegramPlane } from 'react-icons/lia'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { HiOutlineMailOpen, HiOutlineLocationMarker } from 'react-icons/hi'
import { GrLocation } from 'react-icons/gr'
import Link from 'next/link'

const Footer = () => {
  return (
    <section id="contact" className="min-h-[40vh]  relative  py-8 ">
      <div className="w-[80%] h-[80%] flex gap-y-10 md:gap-y-0 flex-col md:flex-row m-auto">
        <div className="w-full md:w-[30%] relative">
          <div className=" w-full ">
            <Link href="/">
              {' '}
              <Image
                src="/logo.png"
                alt="logo image"
                width={150}
                height={200}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
            </Link>
          </div>
          <div className=" hidden md:flex space-x-8 text-primary_8 absolute bottom-0">
            {/* <Link href=""><PiDiscordLogoBold size={25} /></Link> */}
            <Link href="https://www.linkedin.com/company/decenter-ai/" target="_blank">
              <AiOutlineLinkedin size={25} />
            </Link>
            <Link href="https://t.me/decenteraicomchat" target="_blank">
              <LiaTelegramPlane size={25} />
            </Link>
            <Link
              href="https://twitter.com/decenteraicom?s=21&t=th7q1ztmiuaE2PoODm3k0A"
              target="_blank"
            >
              <PiTwitterLogo size={25} />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[20%] text-primary_7 font-archivo ">
          <Link href="#about">
            {' '}
            <p className="text-sm md:text-lg text-left md:text-center  pt-1">AboutUs</p>
          </Link>
        </div>
        <div className="w-full md:w-[25%] text-primary_7 font-archivo ">
          <Link href="#team">
            {' '}
            <p className="text-sm md:text-lg text-left md:text-center pt-1">Team</p>
          </Link>
        </div>
        <div className="w-full md:w-[25%] text-primary_7 font-archivo ">
          <Link href="#contact">
            <p className="text-sm md:text-lg    pt-1">Contact US</p>
          </Link>
          <div className="flex space-x-8 items-center text-primary_8 mt-10">
            <HiOutlineMailOpen size={20} />

            <Link href="mailto:admin@decenterai.com">
              <p className="font-archivo pt-1">Admin@decenterai.com</p>
            </Link>

          </div>
          <div className="flex space-x-8 items-center  text-primary_8 mt-10">
            <HiOutlineLocationMarker size={20} className="text-primary_8" />
            <p className="font-archivo pt-1">Sydney, Australia</p>
          </div>
          <div className="flex space-x-8 text-primary_8  py-10 md:hidden">
            {/* <Link href=""><PiDiscordLogoBold size={25} /></Link> */}
            <Link href="https://www.linkedin.com/company/decenter-ai/" target="_blank">
              <AiOutlineLinkedin size={25} />
            </Link>
            <Link href="https://t.me/decenteraicomchat" target="_blank">
              <LiaTelegramPlane size={25} />
            </Link>
            <Link
              href="https://twitter.com/decenteraicom?s=21&t=th7q1ztmiuaE2PoODm3k0A"
              target="_blank"
            >
              <PiTwitterLogo size={25} />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[80%] h-[20%] border-t border-primary_8 flex flex-col md:flex-row m-auto mt-10">
        <div className="font-archivo font-semibold mt-6 text-primary_8 w-full md:w-[50%]">
          DECENTER AI 2023. All right reserved.
        </div>
        <div className="font-archivo font-semibold flex space-x-8 justify-end mt-6 text-primary_8 w-full m:w-[50%]">
          <p>Privacy</p>
          <p>Policy</p>
          <p>TermsandCondition</p>
        </div>
      </div>
    </section>
  )
}
export default Footer
