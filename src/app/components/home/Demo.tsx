import { Rain } from '@/svg/rain'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Demo = () => {
  return (
    <section className="min-h-[80vh]  relative flex justify-end">
      <Rain />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] relative bg-primary_12 border border-primary_8 bg-opacity-90 rounded-xl shadow-[0px_-2px_16px_0px_#4a5568] py-10 px-10 text-primary_1">
          <h2 className="font-logirentBold text-xl md:text-3xl">
            Integrate AI models With ease
          </h2>
          <ul className="font-archivo leading-loose text-sm font-normal mt-6 list-disc pl-6">
            <li>Train AI models from scratch</li>
            <li>Access a library of fully trained models</li>
            <li>Customize AI models for diverse use cases</li>
            <li>Deploy and run models for apps and dapps seamlessly</li>
            <li>Integrate data services to keep your AI models up-to-date</li>
          </ul>

          <Link href="https://app.decenterai.com">
            <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 mt-6 cursor-pointer rounded-xl">
              Explore
            </button>
          </Link>

          <div className="absolute right-2 -top-3 -bottom-3 w-[25%] h-full hidden md:block ">
            <Image
              src="/pc.png"
              alt="decenter image"
              fill={true}
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo
