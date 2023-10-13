import Image from 'next/image'
import React from 'react'
import { PiTwitterLogo, PiDiscordLogoBold } from 'react-icons/pi'
import { LiaTelegramPlane } from 'react-icons/lia'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { HiOutlineMailOpen, HiOutlineLocationMarker } from 'react-icons/hi'
import { GrLocation } from 'react-icons/gr'

const Footer = () => {
  return (
    <section className="min-h-[40vh]  relative  py-8 ">
      <div className="w-[80%] h-[80%] flex gap-y-10 md:gap-y-0 flex-col md:flex-row m-auto">
        <div className="w-full md:w-[30%] relative">
          <div className=" w-full ">
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
          </div>
          <div className=" hidden md:flex space-x-8 text-primary_8 absolute bottom-0">
            <PiDiscordLogoBold size={25} />
            <AiOutlineLinkedin size={25} />
            <LiaTelegramPlane size={25} />
            <PiTwitterLogo size={25} />
          </div>
        </div>
        <div className="w-full md:w-[20%] text-primary_7 font-archivo ">
          <p className="text-sm md:text-lg text-left md:text-center  pt-1">AboutUs</p>
        </div>
        <div className="w-full md:w-[25%] text-primary_7 font-archivo ">
          <p className="text-sm md:text-lg text-left md:text-center pt-1">Team</p>
        </div>
        <div className="w-full md:w-[25%] text-primary_7 font-archivo ">
          <p className="text-sm md:text-lg    pt-1">Contact US</p>
          <div className="flex space-x-8  text-primary_8 mt-10">
            <HiOutlineMailOpen size={25} />
            <p className="font-archivo pt-1">Admin@decenterai.com</p>
          </div>
          <div className="flex space-x-8  text-primary_8 mt-10">
            <HiOutlineLocationMarker size={50} className="text-primary_8" />
            <p className="font-archivo pt-1">
              Address: SURECRYPTO PTY LTD, 58 Kerwin circle Herbersham, 2770, Sydney,
              Australia
            </p>
          </div>
          <div className="flex space-x-8 text-primary_8  py-10 md:hidden">
            <PiDiscordLogoBold size={25} />
            <AiOutlineLinkedin size={25} />
            <LiaTelegramPlane size={25} />
            <PiTwitterLogo size={25} />
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
