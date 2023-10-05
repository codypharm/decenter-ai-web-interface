import Spiral from "@/svg/spiral";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex justify-end relative">
      <Spiral />
      <div className="absolute inset-0 bg-primary_13 bg-opacity-50 z-10">
        <div className="w-[80%] h-[10%] m-auto mt-[2%] rounded-full bg-primary_13 bg-opacity-80  border-primary_8 text-white flex justify-between">
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

          <div className=" flex space-x-12 justify-center font-primaryArchivo w-[60%] items-center">
            <div className="text-primary_8 font-semibold text-md cursor-pointer hover:text-primary_1 ">
              Home
            </div>
            <div className="text-primary_8 font-semibold text-md cursor-pointer hover:text-primary_1 ">
              About Us
            </div>
            <div className="text-primary_8 font-semibold text-md cursor-pointer hover:text-primary_1 ">
              Team
            </div>
            <div className="text-primary_8 font-semibold text-md cursor-pointer hover:text-primary_1 ">
              Contact Us
            </div>
          </div>

          <div className="w-[20%] h-full flex items-center">
            <Link href="/demo">
              <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl">
                Try Demo
              </button>
            </Link>
          </div>
        </div>
        <div className="h-[85%] w-[80%] m-auto flex flex-col justify-center ">
          <h1 className="font-logirentBold text-5xl text-primary_1 leading-normal">
            DecentralIzed and DemocratIzed AI <br />
            Model TraInIng Infrastructure
          </h1>
          <p className="font-archivo text-sm text-primary_6 ">
            Train ML/DL/ ANN/LLM models with ease.
          </p>
          <div className="flex space-x-16 mt-10">
            <Link href="/demo">
              <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-3xl">
                Try Demo
              </button>
            </Link>
            <button className="border border-primary_8 text-primary_8 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-3xl">
              DCEN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
