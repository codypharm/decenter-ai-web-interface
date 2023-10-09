import { Rain } from "@/svg/rain";
import Image from "next/image";
import React from "react";

const Demo = () => {
  return (
    <section className="min-h-[80vh]  relative flex justify-end">
      <Rain />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] relative bg-primary_12 border border-primary_8 bg-opacity-90 rounded-xl shadow-[0px_-2px_16px_0px_#4a5568] py-10 px-10 text-primary_1">
          <h2 className="font-logirentBold text-3xl">
            TraIn ML models on our demo
          </h2>
          <ul className="font-archivo leading-loose text-sm font-normal mt-6 list-disc pl-6">
            <li>Supports model prototyping</li>
            <li>Supports jupyter notebooks</li>
            <li>Trains models  in seconds (Up to 2GB)</li>
            <li>Tests and scores custom models for accuracy</li>
            <li>Produces the best performing model for download</li>
          </ul>
          <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 mt-6 cursor-pointer rounded-xl">
            Try Demo
          </button>
          <div className="absolute right-2 -top-3 -bottom-3 w-[25%] h-full ">
            <Image
              src="/pc.png"
              alt="decenter image"
              fill={true}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
