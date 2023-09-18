import Star1 from "@/svg/star1";
import Star3 from "@/svg/star3";
import Star2 from "@/svg/star2";
import React from "react";
import { El1 } from "@/svg/el1";
import { El2 } from "@/svg/el2";
import { Globe } from "@/svg/globe";
import { Star4 } from "@/svg/star4";
import { Star5 } from "@/svg/star5";

const About = () => {
  return (
    <section className="min-h-[80vh]  relative">
      <div className=" w-[80%] m-auto h-[10%] ">
        <Star1 />
      </div>
      <div className="flex w-[80%] mx-auto   ">
        <div className=" p-2 w-[10%] h-[600px] flex flex-col justify-end text-white">
          <Star2 />
          <Star3 />
        </div>
        <div className=" w-[80%] h-full">
          <div className=" flex justify-center relative">
            <El1 />

            <div className="absolute inset-0 flex items-center justify-center">
              <El2 />
              <div className="absolute bottom-20 right-28 flex items-center justify-center">
                <Star4 />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe />
              </div>
            </div>
          </div>
        </div>
        <div className=" p-2 w-[10%] h-[600px] flex items-center">
          <Star5 />
        </div>
      </div>
      <div className="absolute inset-0 flex space-x-8 items-center justify-center w-[80%]  m-auto">
        <div className="w-[40%] py-20 px-10 bg-primary_12 border border-primary_8 bg-opacity-90 rounded-xl text-primary_1">
          <h3 className="font-logirentBold text-3xl">Web 3</h3>
          <ul className="font-archivo text-sm font-normal mt-6 list-disc pl-6">
            <li>Distributed compute networks </li>
            <li>Decentralized storage networks </li>
            <li>Incentivisation, tokenization and Data DAO</li>
          </ul>
        </div>
        <div className="w-[40%] py-20 px-10 bg-primary_12 border border-primary_8 bg-opacity-90 rounded-xl text-primary_1">
          <h3 className="font-logirentBold text-3xl">AI</h3>
          <ul className="font-archivo text-sm font-normal mt-6 list-disc pl-6">
            <li>Training process optimization</li>
            <li> Auto testing and predictive analysis</li>
            <li>Dataset, model training and platform security.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
