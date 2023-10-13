import { Rings } from '@/svg/rings'
import { TokenMinor } from '@/svg/tokenMinor'
import { TokenStar } from '@/svg/tokenstar'
import React from 'react'

const Token = () => {
  return (
    <section className="min-h-[80vh] mt-52 md:-mt-96  relative ">
      <div className="h-[10%] w-[80%] m-auto flex justify-end">
        <TokenMinor />
      </div>
      <div className="w-[80%]  h-[10%] m-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-fit text-primary_1">
          <h2 className="font-logirentBold text-3xl leading-loose">Dcen tokens</h2>

          <div className="mt-20 font-archivo text-lg">
            <div className="py-2 pb-11 relative border-l  border-primary_8 ml-2   px-6">
              <div className="absolute -top-7 -left-3 p-1 border border-primary_8 rounded-full bg-primary_13 ">
                <div className="rounded-full p-2 bg-primary_1"></div>
              </div>
              DCEN Tokens DCEN Tokens facilitate transactions within the model trainer and
              marketplace for AI models, data, and services.
            </div>
            <div className="py-2 pb-11 relative border-l  border-primary_8 ml-2   px-6">
              <div className="absolute -top-7 -left-3 p-1 border border-primary_8 rounded-full bg-primary_13 ">
                <div className="rounded-full p-2 bg-primary_1"></div>
              </div>
              DCEN Tokens empower the community to influence platform decisions and shape
              its future.
            </div>
            <div className="py-2 pb-11 relative border-l  border-primary_8 ml-2   px-6">
              <div className="absolute -top-7 -left-3 p-1 border border-primary_8 rounded-full bg-primary_13 ">
                <div className="rounded-full p-2 bg-primary_1"></div>
              </div>
              DCEN Tokens reward active participation and contributions to model training,
              fostering community engagement and incentivised collaboration.
            </div>
          </div>
        </div>

        <div className="w-full md:w-[50vw] h-full flex justify-center">
          <Rings />
        </div>
      </div>
      <div className="h-[10%] -mt-96 flex justify-end">
        <TokenStar />
      </div>
    </section>
  )
}

export default Token
