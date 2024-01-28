import { Grid } from '@/svg/grid'
import Image from 'next/image'
import { AiOutlineLinkedin, AiOutlineBehance } from 'react-icons/ai'
import React from 'react'
import Link from 'next/link'

const Team = () => {
  return (
    <section id="team" className="min-h-[70vh] h-auto -mt-44  relative  mb-14 ">
      {/* <div className="absolute inset-0">
        <Image src="/gridone.png" alt="background image" fill />
      </div> */}

      <h2 className="font-logirentBold text-3xl text-center h-[10%] mb-10">TEAM</h2>
      <div className="w-[80%] teamBackgroundImage bg-cover bg-center m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center h-auto    gap-6 ">
        <Image
          src="/gridone.png"
          alt="Your image alt text"
          layout="fill"
          className="bg-cover bg-center relative z-30"
        />
        <div className="  border border-primary_8 p-4 py-8  rounded-xl bg-primary_13 z-50">
          <div className="h-[50%] flex justify-center">
            <Image
              src="/victor.png"
              alt="CEO DECENTER"
              width={150}
              height={150}
              className="max-w-[100%] max-h-[100%]"
            />
          </div>
          <div className="h-[50%] text-primary_1 px-6 tracking-tighter">
            <div className="font-archivo text-sm  font-semibold mt-6 flex justify-between items-center">
              <p>Victor (CEO)</p>

              <Link href="https://www.linkedin.com/in/victor-kaycee/" target="_blank">
                {' '}
                <AiOutlineLinkedin size={30} className="pt-1 text-primary_7" />
              </Link>

            </div>
            <p className="text-primary_7 text-xs mt-3 text-center">
              Founded SureCrypto a blockchain service company with projects like GamerHub,
              Kryptotoday, Finality.
            </p>
          </div>
        </div>
        <div className="  border border-primary_8 p-4 py-8  rounded-xl bg-primary_13  z-50">
          <div className="h-[50%] flex justify-center">
            <Image
              src="/hiro.png"
              alt="CTO DECENTER"
              width={150}
              height={150}
              className="max-w-[100%] max-h-[100%]"
            />
          </div>
          <div className="h-[50%] text-primary_1 px-6 tracking-tighter">
            <div className="font-archivo text-sm font-semibold mt-6 flex justify-between items-center">
              <p>HIRO (CTO)</p>

              <Link href="https://www.linkedin.com/in/laciferin/" target="_blank">
                {' '}
                <AiOutlineLinkedin size={30} className="pt-1 text-primary_7" />
              </Link>

            </div>
            <p className="text-primary_7 text-xs mt-3 text-center">
              Data scientist and machine learning engineer with over 5 years of experience
              at AIChats, PYOR, HyperTest.
            </p>
          </div>
        </div>

        <div className="  border border-primary_8 p-4 py-8  rounded-xl bg-primary_13 z-50">
          <div className="h-[50%] flex justify-center">
            <Image
              src="/glory.png"
              alt="CMO DECENTER"
              width={150}
              height={150}
              className="max-w-[100%] max-h-[100%]"
            />
          </div>
          <div className="h-[50%] text-primary_1 px-6 tracking-tighter">
            <div className="font-archivo text-sm font-semibold mt-6 flex justify-between items-center">
              <p>Glory (CMO)</p>

              <Link href="https://www.linkedin.com/in/glorylucas/" target="_blank">
                {' '}
                <AiOutlineLinkedin size={30} className="pt-1 text-primary_7" />
              </Link>

            </div>
            <p className="text-primary_7 text-xs mt-3 text-center">
              Founded Mindspace solutions, a Web3 marketing agency with clients like
              Private AI, YOM, Riva Metaverse.
            </p>
          </div>
        </div>
        <div className=" border border-primary_8 p-4 py-8  rounded-xl bg-primary_13 z-50">
          <div className="h-[50%] flex justify-center">
            <Image
              src="/nonso.png"
              alt="Developer DECENTER"
              width={150}
              height={150}
              className="max-w-[100%] max-h-[100%]"
            />
          </div>
          <div className="h-[50%] text-primary_1 px-6 tracking-tighter">
            <div className="font-archivo text-sm font-semibold mt-6 flex justify-between items-center">
              <p>William (DEV)</p>

              <Link href="https://www.linkedin.com/in/codypharm/" target="_blank">
                <AiOutlineLinkedin size={30} className="pt-1 text-primary_7" />
              </Link>

            </div>
            <p className="text-primary_7 text-xs mt-3 text-center">
              Co-founder and Dev at FreshCoast Blockchain and OpenSafari. Core Contributor
              at RnDAO.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
