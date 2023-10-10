'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AiOutlinePlus } from "react-icons/ai"
import { PiGearFine } from "react-icons/pi"
import { TbTemplate } from "react-icons/tb"
import { CiTrash } from "react-icons/ci"
import { FiUploadCloud } from "react-icons/fi"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { DashLayout } from '../dashLayout';
import TransactionAuthorization from './modals/TransactionAuthorization';
import TransactionProcessing from './modals/TransactionProcessing';
import TransactionCompleted from './modals/TransactionCompleted';

const page = () => {
    return (
        <DashLayout >
            <div className='w-full h-full flex items-center justify-center px-10 gap-10'>
                <div className='w-[30%] h-[60%] border border-primary_8 rounded-xl p-10 flex flex-col items-center justify-center gap-10 text-primary_8'>
                    <AiOutlinePlus size={50} />
                    <h3 className='font-logirentRegular text-md text-primary_1'>New-model</h3>
                    <p className='font-archivo text-primary_8 text-lg text-center'>Create new appropriate model to suit your specific target use case.</p>
                    <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-sm py-3 w-full cursor-pointer rounded-xl">
                        Create Model
                    </button>
                </div>
                <div className='w-[30%] h-[60%] border bg-primary_10 border-primary_8 rounded-xl p-10 flex flex-col items-center justify-center gap-10 text-primary_8'>
                    <PiGearFine size={50} />
                    <h3 className='font-logirentRegular text-md text-primary_1'>FIne-tune</h3>
                    <p className='font-archivo text-primary_8 text-lg text-center'>Edit existing applications to align with your  objectives.</p>
                    <button disabled={true} className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-sm py-3 w-full  rounded-xl">
                        Fine Tune
                    </button>
                </div>
                <div className='w-[30%] h-[60%] border border-primary_8 rounded-xl p-10 flex flex-col items-center justify-center gap-10 text-primary_8'>
                    <TbTemplate size={50} />
                    <h3 className='font-logirentRegular text-md text-primary_1'>Template</h3>
                    <p className='font-archivo text-primary_8 text-lg text-center'>Explore our collection and choose the best-fit for your goals.</p>
                    <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-sm py-3 w-full cursor-pointer rounded-xl">
                        Use Template
                    </button>
                </div>
            </div>

            {/* <div className='w-full h-full px-5 py-3 font-archivo'>
                <div className='flex gap-6 items-center text-primary_7 h-[8%] '>
                    <div className='flex gap-1 text-xs h-full items-center'>
                        <MdKeyboardArrowLeft size={15} />
                        Back
                    </div>
                    <div className='flex gap-3 text-xs h-full items-center'>
                        Models <span>/</span> <span className='text-primary_1'>Create model</span>

                    </div>
                </div>

                <div className='h-[10%] border border-primary_8 rounded-xl p-5 '>
                    <h3 className='font-logirentRegular text-xl text-primary_1 '>New model</h3>
                </div>

                <div className='w-full h-[82%] flex justify-center pt-10 pb-5'>
                    <div className='w-[40%] h-full '>
                        <div className='w-full h-[90%] overflow-y-auto flex flex-col  gap-2 pr-1'>
                            <div className='h-auto  w-full'>
                                <div className='h-2 font-archivo flex items-center text-primary_1 text-xs py-2 '>
                                    <p> Training script</p>
                                </div>
                                <div className='border-2 border-primary_8 border-dashed h-20  rounded-xl '>
                                    <div className='h-[50%] flex justify-center items-center text-primary_8'>
                                        <FiUploadCloud size={30} />
                                    </div>
                                    <div className='h-[50%] flex justify-center items-center gap-3 font-archivo text-primary_8'>
                                        <span className='underline text-primary_1 cursor-pointer'>Browse file</span>
                                        <span>or</span>
                                        <span>Drag and drop</span>
                                    </div>
                                </div>
                                <div className='h-12 '>

                                    <div className='h-[50%] font-archivo flex items-center text-primary_1 text-xs py-2 '>
                                        <p> Uploading files</p>
                                    </div>
                                    <div className='h-[50%] font-archivo bg-primary_11 flex items-center justify-between text-primary_1 text-xs py-2 px-2 rounded-sm'>
                                        <p className='text-primary_1 text-sm '>file name.json   <span className='text-primary_9 text-xs'>10mb</span></p>
                                        <CiTrash size={15} />
                                    </div>

                                </div>
                            </div>

                            <div className='h-auto w-full'>
                                <div className='h-2 font-archivo flex items-center text-primary_1 text-xs py-2 '>
                                    <p> Dataset</p>
                                </div>
                                <div className='border-2 border-primary_8 border-dashed h-20  rounded-xl '>
                                    <div className='h-[50%] flex justify-center items-center text-primary_8'>
                                        <FiUploadCloud size={30} />
                                    </div>
                                    <div className='h-[50%] flex justify-center items-center gap-3 font-archivo text-primary_8'>
                                        <span className='underline text-primary_1 cursor-pointer'>Browse file</span>
                                        <span>or</span>
                                        <span>Drag and drop</span>
                                    </div>
                                </div>
                                <div className='h-2 font-archivo flex items-center text-primary_8 text-sm py-2 '>
                                    <p> Max. size: 1GB</p>
                                </div>

                            </div>

                            <div className='h-auto '>

                                <div className='h-6 font-archivo flex items-center text-primary_1 text-xs py-2 '>
                                    <p> Uploading files</p>
                                </div>

                                <div className='grid grid-cols-2 gap-2 h-auto'>
                                    <div className='h-6  font-archivo bg-primary_11 flex items-center justify-between text-primary_1 text-xs py-2 px-2 rounded-sm'>
                                        <p className='text-primary_1 text-sm '>file name.json   <span className='text-primary_9 text-xs'>10mb</span></p>
                                        <CiTrash size={15} />
                                    </div>
                                    <div className='h-6  font-archivo bg-primary_11 flex items-center justify-between text-primary_1 text-xs py-2 px-2 rounded-sm'>
                                        <p className='text-primary_1 text-sm '>file name.json   <span className='text-primary_9 text-xs'>10mb</span></p>
                                        <CiTrash size={15} />
                                    </div>
                                    <div className='h-6  font-archivo bg-primary_11 flex items-center justify-between text-primary_1 text-xs py-2 px-2 rounded-sm'>
                                        <p className='text-primary_1 text-sm '>file name.json   <span className='text-primary_9 text-xs'>10mb</span></p>
                                        <CiTrash size={15} />
                                    </div>
                                    <div className='h-6  font-archivo bg-primary_11 flex items-center justify-between text-primary_1 text-xs py-2 px-2 rounded-sm'>
                                        <p className='text-primary_1 text-sm '>file name.json   <span className='text-primary_9 text-xs'>10mb</span></p>
                                        <CiTrash size={15} />
                                    </div>
                                </div>
                            </div>
                            <div className='h-auto w-full'>
                                <div className='h-2 font-archivo flex items-center text-primary_1 text-xs py-2 '>
                                    <p> Requirements</p>
                                </div>
                                <div className='border-2 border-primary_8 border-dashed h-20 rounded-xl '>
                                    <div className='h-[50%] flex justify-center items-center text-primary_8'>
                                        <FiUploadCloud size={30} />
                                    </div>
                                    <div className='h-[50%] flex justify-center items-center gap-3 font-archivo text-primary_8'>
                                        <span className='underline text-primary_1 cursor-pointer'>Browse file</span>
                                        <span>or</span>
                                        <span>Drag and drop</span>
                                    </div>
                                </div>
                                <div className='h-2 font-archivo flex items-center text-primary_8 text-sm py-2 '>
                                    <p> Max. size: 1GB</p>
                                </div>

                            </div>
                        </div>
                        <div className='h-[10%]'>
                            <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-sm py-3 w-full cursor-pointer rounded-xl">
                                Train
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <TransactionAuthorization /> */}
            {/* <TransactionProcessing /> */}
            {/* <TransactionCompleted /> */}
        </DashLayout>
    );
}

export default page