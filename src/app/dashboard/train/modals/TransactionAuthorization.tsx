import React from 'react'
import { BsChevronDown } from "react-icons/bs"

const TransactionAuthorization = () => {
    return (
        <div className='fixed inset-0 bg-primary_13 bg-opacity-80 flex items-center justify-center'>
            <div className='w-[25%] h-[50%] bg-primary_12 rounded-xl p-4'>
                <div className='h-[10%]'>
                    <h3 className='text-primary_1 font-logirentRegular'>AuthorIze TransactIon</h3>
                </div>
                <div className='h-[80%] font-archivo pb-4'>
                    <div className='h-[20%] flex items-center justify-between text-primary_1'>
                        <small className='text-xs font-light text-primary_7'>Amount</small>
                        <p className='text-xl font-bold'>$700</p>
                    </div>
                    <div className='h-[30%] flex items-center justify-between text-primary_1'>
                        <div className='border border-primary_9  rounded-lg w-10 h-12'></div>
                        <div className='flex flex-col justify-end gap-2'>
                            <div className='text-primary_1 text-sm'>0x09750ad...360fdb7</div>
                            <div className='text-primary_7 flex justify-end text-sm'>Wallet name</div>
                        </div>
                    </div>
                    <div className='h-[50%] flex flex-col  p-3  text-primary_1 border border-primary_9 rounded-xl'>
                        <div className='flex justify-between items-center w-full h-[20%]'>
                            <p className='text-primary_1 text-sm'>Details</p>
                            <div className='text-primary_9'> <BsChevronDown size={20} /></div>
                        </div>
                        <div className='flex justify-between items-center w-full h-[40%] border-b border-primary_9'>
                            <p className='text-primary_9 text-sm'>Training script</p>
                            <div className='flex space-x-2'><span className='text-primary_1 font-semibold'>2 files</span>  <p className='text-primary_9'>(2.0 MB)</p></div>
                        </div>
                        <div className='flex justify-between items-center w-full h-[40%] '>
                            <p className='text-primary_9 text-sm'>Dataset files</p>
                            <div className='flex space-x-2'><span className='text-primary_1 font-semibold'>2 files</span>  <p className='text-primary_9'>(2.0 GB)</p></div>
                        </div>
                    </div>


                </div>
                <div className='h-[10%] flex justify-end gap-6'>
                    <button className="border border-primary_11 text-primary_1 font-semibold font-primaryArchivo text-sm h-full w-[30%] cursor-pointer rounded-full">
                        Cancel
                    </button>
                    <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo text-sm h-full w-[30%] cursor-pointer rounded-full">
                        Proceed
                    </button>

                </div>
            </div>
        </div>
    )
}

export default TransactionAuthorization