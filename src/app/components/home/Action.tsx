import { RocketStar } from '@/svg/rocketstar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Action = () => {
  return (
    <section className="min-h-[60vh] -mt-44 md:-mt-0  relative flex justify-end">
      <div className="absolute bottom-0 right-0">
        <RocketStar />
      </div>

      <div className="absolute w-[60%] h-[35%] sm:h-[50%] md:w-[40%]  md:h-[100%]  right-10 md:right-36 top-48 md:top-10 ">
        <Image
          src="/rocket.png"
          alt="decenter image"
          className="grayscale"
          fill
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
          }}
        />
      </div>

      <div className="absolute inset-0  flex flex-col  justify-center  items-center">
        <h2 className="text-primary_1 font-logirentBold text-center text-xl md:text-3xl">
          Get Started wIth our model Try Demo
        </h2>
        <Link href="https://app.decenterai.com/signup">
          <button className="bg-primary_11 mt-8 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-2xl">
            Try Demo
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Action
