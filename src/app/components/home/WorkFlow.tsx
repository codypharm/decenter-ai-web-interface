import { Grid } from '@/svg/grid'
import Image from 'next/image'
import { AiOutlineLinkedin, AiOutlineBehance } from 'react-icons/ai'
import React from 'react'

const WorkFlow = () => {
  return (
    <section className=" h-auto   mb-14 ">
      <h2 className="font-logirentBold text-3xl text-center  ">WORKFLOW</h2>
      <div className="px-10 w-full md:w-[80%]  h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[90vh] m-auto relative">
        <Image
          src="/workflow.png"
          className="h-full w-full"
          alt="background image"
          fill
        />
      </div>
    </section>
  )
}

export default WorkFlow
