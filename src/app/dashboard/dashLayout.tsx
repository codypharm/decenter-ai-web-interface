import Image from 'next/image';
import React from 'react'
import { RxDashboard } from "react-icons/rx"
import { HiOutlineChip } from "react-icons/hi"
import { BsDatabase } from "react-icons/bs"
import { PiUsersThree, PiClipboardLight, PiTrophyBold } from "react-icons/pi"
import { IoSettingsOutline } from "react-icons/io5"
import { GoSearch, GoBell } from "react-icons/go"
import Link from 'next/link';

export const DashLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className='w-screen h-screen flex  bg-primary_12 relative'>
            <aside className='h-full w-[10%] border-r border-primary_8'>
                <Link href="/">
                    <div className='w-full h-[10%] flex items-center justify-center'>
                        <Image
                            src="/icon.png"
                            alt="DECENTER Icon"
                            width={100}
                            height={100}
                            className="max-w-[25%] max-h-[50%]"
                        />
                    </div>
                </Link>
                <div className='w-full h-[90%] overflow-y-auto font-archivo text-primary_8'>
                    <Link href="/dashboard">
                        <div className='flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 hover:text-primary_1'>
                            <div className='flex justify-center '>
                                <RxDashboard size={25} />
                            </div>
                            <p className='text-sm'>Dashboard</p>
                        </div>
                    </Link>
                    <Link href="/dashboard/train">
                        <div className='flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 hover:text-primary_1'>
                            <div className='flex justify-center '>
                                <HiOutlineChip size={25} />
                            </div>
                            <p className='text-sm'>Train</p>
                        </div></Link>
                    <div className='flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 hover:text-primary_1'>
                        <div className='flex justify-center '>
                            <BsDatabase size={25} />
                        </div>
                        <p className='text-sm'>Repository</p>
                    </div>
                    <div className='flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 hover:text-primary_1'>
                        <div className='flex justify-center '>
                            <PiUsersThree size={25} />
                        </div>
                        <p className='text-sm'>Teams</p>
                    </div>
                    <div className='flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 hover:text-primary_1'>
                        <div className='flex justify-center '>
                            <PiClipboardLight size={25} />
                        </div>
                        <p className='text-sm'>Testing</p>
                    </div>
                    <div className='flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 hover:text-primary_1'>
                        <div className='flex justify-center '>
                            <PiTrophyBold size={25} />
                        </div>
                        <p className='text-sm'>Rewards</p>
                    </div>
                    <div className='flex flex-col items-center cursor-pointer justify-center gap-3 w-full py-4 hover:bg-primary_11 hover:text-primary_1'>
                        <div className='flex justify-center '>
                            <IoSettingsOutline size={25} />
                        </div>
                        <p className='text-sm'>Settings</p>
                    </div>
                </div>
            </aside>

            <main className='h-full w-[90%] '>
                <div className='w-full h-[10%] flex items-center   border-b border-primary_8 px-10'>
                    <div className='h-full w-[50%] flex items-center'>
                        <div className='rounded-full h-[60%] max-h-[50px] w-[80%] max-w-[500px]  bg-primary_11 relative text-primary_8 pb-1'>
                            <div className='absolute top-0 left-5 h-full flex items-center'>
                                <GoSearch size={20} />
                            </div>
                            <input placeholder='search' className='w-full pl-12 h-full rounded-full bg-transparent outline-none focus:ring-0 text-primary_1 text-sm font-archivo' />
                        </div>
                    </div>
                    <div className='h-full w-[50%] flex gap-6 items-center justify-end font-archivo '>
                        <div className='text-primary_8 '>
                            <GoBell size={25} />
                        </div>
                        <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl">
                            Connect Wallet
                        </button>
                    </div>
                </div>
                <div className='w-full h-[90%] px-10'>
                    {children}
                </div>
            </main>
        </div>
    )
}
