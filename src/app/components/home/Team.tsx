import { Grid } from '@/svg/grid'
import Image from 'next/image'
import { AiOutlineLinkedin, AiOutlineBehance } from 'react-icons/ai'
import React from 'react'

const Team = () => {
  return (
    <section className="min-h-[120vh] -mt-44  relative ">
      {/* <div className="absolute inset-0">
        <Image src="/gridone.png" alt="background image" fill />
      </div> */}
      <div className="absolute inset-0 w-[80%] m-auto">
        {/* <Grid /> */}
        <Image src="/gridone.png" alt="background image" fill />
        <div className="absolute inset-0 flex flex-col gap-10 text-primary_1">
          <h2 className="font-logirentBold text-3xl text-center h-[10%]">TEAM</h2>
          <div className="w-full flex h-[45%]  justify-between gap-10 ">
            <div className="w-[40%]  xl:w-[25%]  border border-primary_8 p-4 py-8  rounded-xl bg-primary_13">
              <div className="h-[50%] flex justify-center">
                <Image
                  src="/victor.png"
                  alt="CEO DECENTER"
                  width={200}
                  height={200}
                  className="max-w-[100%] max-h-[100%]"
                />
              </div>
              <div className="h-[50%] text-primary_1 px-6 tracking-tighter">
                <div className="font-archivo text-2xl font-semibold mt-6 flex justify-between items-center">
                  <p>Victor (CEO)</p>
                  <AiOutlineLinkedin size={30} className="pt-1 text-primary_7" />
                </div>
                <p className="text-primary_7 text-lg mt-3 text-justify">
                  Founded SureCrypto a blockchain service company with projects like
                  GamerHub, Kryptotoday, Finality.
                </p>
              </div>
            </div>
            <div className="w-[40%]  xl:w-[25%]  border border-primary_8 p-4 py-8  rounded-xl bg-primary_13">
              <div className="h-[50%] flex justify-center">
                <Image
                  src="/hiro.png"
                  alt="CTO DECENTER"
                  width={200}
                  height={200}
                  className="max-w-[100%] max-h-[100%]"
                />
              </div>
              <div className="h-[50%] text-primary_1 px-6 tracking-tighter">
                <div className="font-archivo text-2xl font-semibold mt-6 flex justify-between items-center">
                  <p>HIRO (CTO)</p>
                  <AiOutlineLinkedin size={30} className="pt-1 text-primary_7" />
                </div>
                <p className="text-primary_7 text-lg mt-3 text-justify">
                  Data scientist and machine learning engineer with over 5 years of
                  experience at AIChats, PYOR, HyperTest.
                </p>
              </div>
            </div>

            <div className="w-[40%]  xl:w-[25%]  border border-primary_8 p-4 py-8  rounded-xl bg-primary_13">
              <div className="h-[50%] flex justify-center">
                <Image
                  src="/glory.png"
                  alt="CMO DECENTER"
                  width={200}
                  height={200}
                  className="max-w-[100%] max-h-[100%]"
                />
              </div>
              <div className="h-[50%] text-primary_1 px-6 tracking-tighter">
                <div className="font-archivo text-2xl font-semibold mt-6 flex justify-between items-center">
                  <p>HIRO (CTO)</p>
                  <AiOutlineLinkedin size={30} className="pt-1 text-primary_7" />
                </div>
                <p className="text-primary_7 text-lg mt-3 text-justify">
                  Founded Mindspace solutions, a Web3 marketing agency with clients like
                  Private AI, YOM, Riva Metaverse
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex h-[45%]  justify-center gap-20  ">
            <div className="w-[40%]  xl:w-[25%]  border border-primary_8 p-4 py-8  rounded-xl bg-primary_13">
              <div className="h-[50%] flex justify-center">
                <Image
                  src="/nonso.png"
                  alt="Developer DECENTER"
                  width={200}
                  height={200}
                  className="max-w-[100%] max-h-[100%]"
                />
              </div>
              <div className="h-[50%] text-primary_1 px-6 tracking-tighter">
                <div className="font-archivo text-2xl font-semibold mt-6 flex justify-between items-center">
                  <p>William (DEV)</p>
                  <AiOutlineLinkedin size={30} className="pt-1 text-primary_7" />
                </div>
                <p className="text-primary_7 text-lg mt-3 text-justify">
                  Co-founder and Dev at FreshCoast Blockchain and OpenSafari. Core
                  Contributor at RnDAO.
                </p>
              </div>
            </div>

            <div className="w-[40%]  xl:w-[25%]  border border-primary_8 p-4 py-8  rounded-xl bg-primary_13">
              <div className="h-[50%] flex justify-center">
                <Image
                  src="/boye.png"
                  alt="UI/UX Designer DECENTER"
                  width={200}
                  height={200}
                  className="max-w-[100%] max-h-[100%]"
                />
              </div>
              <div className="h-[50%] text-primary_1 px-6 tracking-tighter">
                <div className="font-archivo text-2xl font-semibold mt-6 flex justify-between items-center">
                  <p>Adeboye (UI/UX)</p>
                  <AiOutlineBehance size={30} className="pt-1 text-primary_7" />
                </div>
                <p className="text-primary_7 text-lg mt-3 text-justify">
                  Software product designer; partnering with clients like Sabedoria,
                  Minority Africa, and Intrapair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
