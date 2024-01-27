'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import Nav from '../components/presale/Nav'
import Image from 'next/image'
import logo from 'public/logo-big.png'
import { LuArrowBigDown } from 'react-icons/lu'
import usdt from 'public/usdt.png'
import matic from 'public/matic.png'
import icon from 'public/small.png'
import { PiCaretDown } from 'react-icons/pi'
import { AnyCnameRecord } from 'dns'
import { useContractRead, useContractWrite } from 'wagmi'
import priceFeedAbi from '@abi/contracts/PriceFeed.json'
import stableAbi from '@abi/contracts/Token.sol/Token.json'
import presaleAbi from '@abi/contracts/Presale.sol/PresaleContract.json'
import { parseEther } from 'viem/utils'

import RingLoader from 'react-spinners/RingLoader'
import { ClipLoader } from 'react-spinners'

const PresalePage = () => {
  // default
  const price = 0.022
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false)
  const [selectedToken, setSelectedToken] = useState<string>('USDT')
  const [decenRate, setDecenRate] = useState<number>(0.22)
  const [usdtRate, setUsdtRate] = useState<number>(0)
  const [maticRate, setMaticRate] = useState<number>(0)
  const [tokenField, setTokenField] = useState<string>('')
  const [decenField, setDecenField] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { data: maticFeed } = useContractRead({
    abi: priceFeedAbi,
    address: `0x${process.env.NEXT_PUBLIC_MATIC_FEED_ADDRESS?.substring(2)}`,
    functionName: 'latestRoundData',
  })
  const { data: usdtFeed } = useContractRead({
    abi: priceFeedAbi,
    address: `0x${process.env.NEXT_PUBLIC_USDT_FEED_ADDRESS?.substring(2)}`,
    functionName: 'latestRoundData',
  })

  const { write: paynative } = useContractWrite({
    address: `0x${process.env.NEXT_PUBLIC_PRESALE_ADDRESS?.substring(2)}`,
    abi: presaleAbi,
    functionName: 'payNative',
    onSuccess: () => {
      setTokenField('')
      setDecenField('')
      setIsLoading(false)
    },
    onError() {
      setIsLoading(false)
    },
  })

  const { write: contributeErc } = useContractWrite({
    address: `0x${process.env.NEXT_PUBLIC_PRESALE_ADDRESS?.substring(2)}`,
    abi: presaleAbi,
    functionName: 'contributeERC20',
    onSuccess() {
      setTokenField('')
      setDecenField('')
      setIsLoading(false)
    },
    onError() {
      setIsLoading(false)
    },
  })

  const { write: approve } = useContractWrite({
    address: `0x${process.env.NEXT_PUBLIC_STABLE_TOKEN_ADDRESS?.substring(2)}`,
    abi: stableAbi,
    functionName: 'approve',
    onSuccess() {
      contributeErc({
        args: [parseEther(tokenField, 'wei')],
      })
    },
    onError() {
      setIsLoading(false)
    },
  })

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const handleTokenChange = (token: string) => {
    setSelectedToken(token)
    setDropdownOpen(false)
  }
  const getTokenImage = (token: string) => {
    switch (token) {
      case 'USDT':
        return <Image src={usdt} alt="USDT" className="w-6 h-6 mr-2" />
      case 'MATIC':
        return <Image src={matic} alt="USDT" className="w-6 h-6 mr-2" />

      default:
        return null
    }
  }

  const calcToken = (val: number) => {
    const decenInUSD = val * decenRate
    const amtInUSDT = decenInUSD * usdtRate
    const amtInMATIC = decenInUSD * maticRate

    if (selectedToken == 'USDT') {
      amtInUSDT > 0 ? setTokenField(String(amtInUSDT)) : setTokenField('0')
    } else if (selectedToken == 'MATIC') {
      amtInMATIC > 0 ? setTokenField(String(amtInMATIC)) : setTokenField('0')
    }
  }

  const changeDecen = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setDecenField(e.target.value)
    if (usdtRate == 0 && maticRate == 0) return
    calcToken(Number(e.target.value))
  }

  const calcDecen = (val: number = Number(tokenField)) => {
    const usdtInUSD = val / usdtRate
    const maticInUSD = val / maticRate

    let qtyDecen = 0
    if (selectedToken == 'USDT') {
      qtyDecen = usdtInUSD / decenRate
    } else if (selectedToken == 'MATIC') {
      qtyDecen = maticInUSD / decenRate
    }

    qtyDecen > 0 ? setDecenField(String(qtyDecen)) : setDecenField(String(0))
  }

  const changeToken = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setTokenField(e.target.value)
    if (usdtRate == 0 && maticRate == 0) return
    calcDecen(Number(e.target.value))
  }

  const handleMaticFeed = () => {
    //@ts-ignore
    const maticUsd = maticFeed[1] / BigInt(Math.pow(10, 8))
    setMaticRate(Number(maticUsd))
  }
  const handleUsdtFeed = () => {
    //@ts-ignore
    const usdtUsd = usdtFeed[1] / BigInt(Math.pow(10, 8))
    setUsdtRate(Number(usdtUsd))
  }

  const depositNative = async () => {
    paynative({
      // args: [69],
      value: parseEther(tokenField, 'wei'),
    })
  }

  const depositErc = async () => {
    approve({
      args: [`${process.env.NEXT_PUBLIC_PRESALE_ADDRESS}`, parseEther(tokenField, 'wei')],

    })
  }

  const submitForm = (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    if (selectedToken == 'USDT') {
      depositErc()
    } else if (selectedToken == 'MATIC') {
      depositNative()
    }
  }

  useEffect(() => {
    if (maticFeed) {
      handleMaticFeed()
    }

    if (usdtFeed) {
      handleUsdtFeed()
    }
  })

  useEffect(() => {
    calcDecen()
  }, [selectedToken])

  return (
    <main className="w-full min-h-screen flex flex-col justify-center bg-primary_13">
      <Nav />

      <div className="flex flex-col gap-6  items-center mt-12 md:mt-0 font-archivo shadow-xl  ">
        <Image src={logo} alt="Decenter logo" className="w-[40%] sm:w-[20%] md:w-[15%]" />

        <div className=" rounded-lg shadow bg-[rgba(5,5,5,0.80)] border border-primary_11 p-6  w-[90%] mx-auto max-w-[400px] ">
          <form
            action=""
            onSubmit={(e) => submitForm(e)}
            className="flex flex-col   gap-4 "
          >
            <div className="flex flex-col ">
              <div className="flex flex-col gap-1 text-sm relative">
                <label htmlFor="token" className="text-sm">
                  <div className="relative">
                    <div
                      className="flex items-center py-2 gap-1  rounded-lg cursor-pointer"
                      onClick={handleToggleDropdown}
                    >
                      {getTokenImage(selectedToken)}
                      <span className="text-white">{selectedToken}</span>
                      <PiCaretDown size={20} className="text-primary_7" />
                    </div>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 bg-primary_10 rounded-lg mt-2 p-2">
                        <div
                          className="p-2 cursor-pointer flex gap-1 items-center"
                          onClick={() => handleTokenChange('USDT')}
                        >
                          <Image src={usdt} alt="USDT" className="w-6 h-6 mr-2" />
                          <span className="text-white">USDT</span>
                        </div>
                        <div
                          className="p-2 cursor-pointer flex gap-1 items-center"
                          onClick={() => handleTokenChange('MATIC')}
                        >
                          <Image src={matic} alt="USDT" className="w-6 h-6 mr-2" />
                          <span className="text-white">MATIC</span>
                        </div>
                      </div>
                    )}
                  </div>
                </label>
                <input
                  type="number"
                  className="border text-white  rounded-2xl border-primary_10 bg-transparent focus-within:outline-none p-3  placeholder:px-2"
                  id="token"
                  placeholder="0.0"
                  onChange={(e) => changeToken(e)}
                  value={tokenField}
                />
                <LuArrowBigDown size={40} className="w-max mx-auto text-primary_8" />
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <label htmlFor="dcen" className="flex items-center gap-2 pl-2 mb-1">
                  <Image src={icon} alt="decenter icon" />
                  DCEN
                </label>
                <input
                  type="number"
                  className="border text-white  rounded-2xl border-primary_10 bg-transparent focus-within:outline-none p-3 placeholder:px-2"
                  id="dcen"
                  placeholder="0.0"
                  onChange={(e) => changeDecen(e)}
                  value={decenField}
                />
                <p className="text-primary_6">Price: ${price}</p>
              </div>
            </div>
            <div className="flex justify-center">
              <ClipLoader
                aria-label="Loading Spinner"
                size={30}
                loading={isLoading}
                data-testid="loader"
                color="#ffffff"
              />
            </div>

            {!isLoading && <button
              type="submit"
              className="text-base font-medium text-white opacity-40 bg-primary_8 p-2 rounded-full hover:bg-primary_7 ">
              Proceed
            </button>}

          </form>
          <div className="flex flex-col gap-2 text-sm mt-4">
            <div className="flex  justify-between gap-4 items-center">
              <p className=" text-primary_7">Minimum Allocation</p>
              <span className="font-medium text-primary_5">$50</span>
            </div>
            <div className="flex  justify-between gap-4 items-center">
              <p className=" text-primary_7">Maximum Allocation</p>
              <span className="font-medium text-primary_5">$25,000</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PresalePage
