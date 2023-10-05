import { RocketStar } from "@/svg/rocketstar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Action = () => {
  return (
    <section className="min-h-[60vh]  relative flex justify-end">
      <div className="absolute bottom-0 right-0">
        <RocketStar />
      </div>

      <div className="absolute w-[50%]  h-[100%] right-36 top-10 ">
        <Image
          src="/rocket.png"
          alt="decenter image"
          className="grayscale"
          fill
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
      </div>

      <div className="absolute inset-0  flex flex-col  justify-center  items-center">
        <h2 className="text-primary_1 font-logirentBold text-3xl">
          Get Started wIth our model Try Demo
        </h2>
        <Link href="/demo">
          <button className="bg-primary_11 mt-8 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-2xl">
            Try Demo
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Action;
