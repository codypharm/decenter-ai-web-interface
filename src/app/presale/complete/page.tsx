import React from 'react'
import Nav from '@/app/components/presale/Nav'
import Image from 'next/image'
import logo from 'public/logo-big.png'
const page = () => {
  return (
    <main className="bg-primary_13">
      <Nav />

      <div className="flex flex-col gap-6  items-center mt-12 md:mt-0 font-archivo shadow-xl  ">
        <Image src={logo} alt="Decenter logo" className="w-[40%] sm:w-[20%] md:w-[15%]" />

        <div className=" rounded-lg shadow bg-[rgba(5,5,5,0.80)] border border-[#232323] p-8  w-[90%] mx-auto sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%]">
          <div className="flex flex-col gap-4 ">
            <div className="flex justify-between gap-4 items-center border-b border-primary_10 text-base pb-2">
              <span className=" text-primary_7">Purchase Status</span>
              <span className="text-primary_5">Complete</span>
            </div>
            <div className="flex justify-between gap-4 items-center border-b border-primary_10 text-base pb-2">
              <span className=" text-primary_7">Your Contribution</span>
              <span className="text-primary_5">50 USDT</span>
            </div>
            <div className="flex justify-between gap-4 items-center border-b border-primary_10 text-base pb-2">
              <span className=" text-primary_7">Price Per Token</span>
              <span className="text-primary_5">$0.022</span>
            </div>
            <div className="flex justify-between gap-4 items-center border-b border-primary_10 text-base pb-2">
              <span className=" text-primary_7">Active Allocation</span>
              <span className="text-primary_5">2,272.72 DCEN</span>
            </div>
            <div className="flex justify-between gap-4 items-center border-b border-primary_10 text-base pb-2">
              <span className=" text-primary_7">Purchase Date</span>
              <span className="text-primary_5">Complete</span>
            </div>
          </div>
          <button
            type="submit"
            className="text-base font-medium text-primary_3 opacity-40 bg-primary_11 p-2 rounded-full w-full mt-6">
            Proceed
          </button>
        </div>
      </div>
    </main>
  )
}

export default page
