'use client'
import React, { useEffect, useState } from 'react'
import Nav from '@/app/components/presale/Nav'
import Image from 'next/image'
import logo from 'public/logo-big.png'
import presaleAbi from '@abi/contracts/Presale.sol/PresaleContract.json'
import { useContractRead, useContractWrite, useAccount } from 'wagmi'
import { formatEther } from 'viem'
import { ClipLoader } from 'react-spinners'

const Page = () => {
  const { address } = useAccount()
  const [benefit, setBenefit] = useState<string>('')
  const [amountInMatic, setAmountInMatic] = useState<string>('')
  const [amountInUsdt, setAmountInUsdt] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { write: getTokens } = useContractWrite({
    address: `0x${process.env.NEXT_PUBLIC_PRESALE_ADDRESS?.substring(2)}`,
    abi: presaleAbi,
    functionName: 'claimTokens',
    onSuccess() {
      setIsLoading(false)
    },
    onError() {
      setIsLoading(false)
    },
  })

  const { data: benefits } = useContractRead({
    abi: presaleAbi,
    address: `0x${process.env.NEXT_PUBLIC_PRESALE_ADDRESS?.substring(2)}`,
    functionName: 'benefits',
    args: [address],
  })

  const { data: nativeDeposits } = useContractRead({
    abi: presaleAbi,
    address: `0x${process.env.NEXT_PUBLIC_PRESALE_ADDRESS?.substring(2)}`,
    functionName: 'nativeDeposited',
    args: [address],
  })

  const { data: ercDeposits } = useContractRead({
    abi: presaleAbi,
    address: `0x${process.env.NEXT_PUBLIC_PRESALE_ADDRESS?.substring(2)}`,
    functionName: 'ercDeposited',
    args: [address],
  })

  const claimToken = async () => {
    setIsLoading(true)
    getTokens({
      args: [],
    })
  }

  useEffect(() => {
    if (benefits) setBenefit(String(benefits))
  }, [benefits, address])

  useEffect(() => {
    if (nativeDeposits) {
      setAmountInMatic(String(nativeDeposits))
    }
  }, [nativeDeposits, address])

  useEffect(() => {
    if (ercDeposits) {
      setAmountInUsdt(String(ercDeposits))
    }
  }, [ercDeposits, address])

  return (
    <main className="bg-primary_13 min-h-screen ">

      <div className='h-[15%] w-full max-h-[150px]'>

        <Nav />

      </div>
      <div className='h-[75%] flex flex-col justify-center'>
        <div className="flex flex-col gap-6  items-center mt-12 md:mt-0 font-archivo shadow-xl  ">
          <Image src={logo} alt="Decenter logo" className="w-[40%] sm:w-[20%] md:w-[15%]" />


          <div className=" rounded-lg shadow bg-[rgba(5,5,5,0.80)] border border-primary_11 p-8  w-[90%] mx-auto max-w-[400px]">
            <div className="flex flex-col gap-4 ">
              <div className="flex justify-between gap-4 items-center border-b border-primary_10 text-base pb-2">
                <span className=" text-primary_7">Purchase Status</span>
                <span className="text-primary_5">Complete</span>
              </div>
              <div className="flex justify-between gap-4 items-center border-b border-primary_10 text-base pb-2">
                <span className=" text-primary_7">Your Contribution</span>

                <span className="text-primary_5">
                  {formatEther(BigInt(amountInUsdt))} USDT
                </span>
              </div>
              <div className="flex justify-between gap-4 items-center border-b border-primary_10 text-base pb-2">
                <span className=" text-primary_7">Your Contribution</span>
                <span className="text-primary_5">
                  {formatEther(BigInt(amountInMatic))} Matic
                </span>

              </div>
              <div className="flex justify-between gap-4 items-center border-b border-primary_10 text-base pb-2">
                <span className=" text-primary_7">Price Per Token</span>
                <span className="text-primary_5">$0.022</span>
              </div>
              <div className="flex justify-between gap-4 items-center border-b border-primary_10 text-base pb-2">
                <span className=" text-primary_7">Active Allocation</span>


                <span className="text-primary_5">
                  {Number(formatEther(BigInt(benefit))).toFixed(4)} DCEN
                </span>

              </div>
              <div className="flex justify-between gap-4 items-center border-b border-primary_10 text-base pb-2">
                <span className=" text-primary_7">Purchase Date</span>
                <span className="text-primary_5">Complete</span>
              </div>
            </div>
            <div className='flex justify-center py-3' >
              <ClipLoader aria-label="Loading Spinner" size={30}
                loading={isLoading}
                data-testid="loader" color='#ffffff' />
            </div>
           {!isLoading && <button
              type="button"
              onClick={claimToken}
              className="text-base  font-medium text-white  bg-primary_8 p-2 rounded-full w-full mt-6 hover:bg-primary_7 ">
              Proceed
            </button>}


          </div>
        </div>
      </div>
    </main>
  )
}

export default Page
