'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai"
import { PiEyeClosedLight, PiGoogleLogoBold } from "react-icons/pi"
import { SiWalletconnect } from "react-icons/si"

const page = () => {
    const [view, setView] = useState<boolean>(false)
    return (
        <div className='bg-primary_13 h-screen flex flex-col gap-4 '>
            <div className='h-[10%] flex pl-10'>
                <div className="w-[10%] relative">
                    <Image
                        src="/logo.png"
                        alt="logo image"
                        fill={true}
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
            </div>
            <div className='h-[90%] w-full flex  justify-center items-center'>
                <div className='w-[30%] h-[80%] '>
                    <div className='h-[10%] '>
                        <h1 className='font-logirentBold text-primary_1 text-center font-bold text-4xl'> Log In</h1>
                    </div>
                    <div className='h-[90%]'>
                        <form className='h-[45%] flex flex-col gap-4 text-primary_1'>
                            <div className='h-[30%] flex flex-col'>
                                <div className='h-[30%] '>
                                    <p className='font-archivo text-primary_1 text-xs'>Email address</p>
                                </div>
                                <input type='email' placeholder='Enter email address' className='block h-[90%] focus:outline-none focus:ring-1 ring-primary_7 focus:border-none border border-primary_11 rounded-xl px-6 bg-transparent text-sm font-archivo' />
                            </div>
                            <div className='h-[30%] flex flex-col'>
                                <div className='h-[30%] '>
                                    <p className='font-archivo text-primary_1 text-xs'>Password</p>
                                </div>
                                <div className='h-[90%] border border-primary_11 rounded-xl relative'>
                                    <div className='absolute top-0 right-4 h-full flex items-center  text-primary_1'>
                                        {!view && <AiOutlineEye size={20} className="cursor-pointer" onClick={() => setView(!view)} />}
                                        {view && <PiEyeClosedLight size={20} className="cursor-pointer" onClick={() => setView(!view)} />}
                                    </div>
                                    <input type={view ? "text" : "password"} placeholder='Enter your secure password here' className='h-full w-full focus:outline-none focus:ring-1 ring-primary_7 rounded-xl  pl-6 pr-12 bg-transparent text-sm font-archivo outline-none' />
                                </div>
                            </div>
                            <div className='h-[30%] w-full'>
                                <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-xs py-3 w-full cursor-pointer rounded-xl">
                                    Proceed
                                </button>
                            </div>
                        </form>
                        <div className='flex items-center justify-center h-[10%] relative'>
                            <div className='text-primary_8 text-md absolute top-0 h-full  flex items-center justify-center bg-primary_13 px-4'>or</div>
                            <div className='border border-primary_11 w-full'></div>
                        </div>
                        <div className='h-[45%] flex flex-col gap-3'>
                            <button className="border flex  items-center justify-center gap-4 border-primary_11 hover:border-primary_7 text-primary_7 font-semibold font-primaryArchivo text-sm w-full h-12 cursor-pointer rounded-xl">
                                <SiWalletconnect size={20} className="text-primary_7" /> Sign up with Wallet
                            </button>
                            <button className="border flex  items-center justify-center gap-4 border-primary_11 hover:border-primary_7 text-primary_7 font-semibold font-primaryArchivo text-sm w-full h-12 cursor-pointer rounded-xl">
                                <PiGoogleLogoBold size={20} className="text-primary_7" /> Sign up with Wallet
                            </button>
                            <div className='text-primary_8 text-xs font-archivo '> <p className='font-light text-center'>Are you new here?   <span className='text-primary_1 pl-3 cursor-pointer'> Create Account</span> </p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page