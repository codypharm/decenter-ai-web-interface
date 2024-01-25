import { Grid } from '@/svg/grid'
import Image from 'next/image'
import { AiOutlineLinkedin, AiOutlineBehance } from 'react-icons/ai'
import React from 'react'
import Rock1 from '@/svg/Rock1'
import Rock2 from '@/svg/Rock2'
import Rock3 from '@/svg/Rock3'
import Rock4 from '@/svg/Rock4'
import Rock5 from '@/svg/Rock5'

const Mail = () => {
    return (
        <section id="team" className="h-[70vh]   relative  mb-14 ">

            <div className='flex w-full h-[20%] items-center gap-10'>
                <Rock1 />
                <Rock2 />
            </div>

            <div className='h-[60%] flex justify-center items-center' >
                <Rock3 />
            </div>
            <div className='h-[20%] flex justify-end items-end gap-10' >
                <Rock5 />
                <Rock4 />
            </div>


            <div className='absolute inset-0'>
                <div className="w-[80%] m-auto flex flex-col justify-center items-center h-[60vh]  gap-6 ">


                    <h2 className='text-2xl font-logirentBold text-center'>Join the AI Explorer waitlist</h2>
                    <p className='text-primary_8 font-semibold text-center'>Discover the unlimited potential of AI with our cutting-edge explorer</p>
                    <div className='border border-primary_9 h-14 p-1 rounded-xl w-[90%] max-w-[450px] flex'>
                        <form className='w-full h-full'>
                            <input placeholder='Email address' className='w-[50%]  lg:w-[70%] h-full 
                            rounded-l-xl bg-transparent text-white px-4
                            focus:outline-none outline-none focus:ring-0 focus:border-none' />
                            <button className='text-white font-semibold text-sm bg-primary_10 w-[50%] lg:w-[30%] h-full rounded-xl'> Join Wait List</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mail
