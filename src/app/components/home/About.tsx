"use client";
import Star1 from "@/svg/star1";
import Star3 from "@/svg/star3";
import Star2 from "@/svg/star2";
import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { El1 } from "@/svg/el1";
import { El2 } from "@/svg/el2";
import { Globe } from "@/svg/globe";
import { Star4 } from "@/svg/star4";
import { Star5 } from "@/svg/star5";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { ref: vRef, inView } = useInView({
    threshold: 0.4,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const star = useAnimation();
  const globe = useAnimation();

  useEffect(() => {
    if (inView) {
      //star animation
      star.start({
        y: 0,
        transition: {
          duration: 2,
        },
      });

      //globe animation
      globe.start({
        rotateZ: 360,
        transition: {
          duration: 2,
        },
      });
    } else {
      star.start({
        y: "-20vh",
      });

      //globe animation
      globe.start({
        rotateZ: -360,
        transition: {
          duration: 3,
        },
      });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      // style={{
      //   scale: scaleProgress,
      //   opacity: opacityProgress,
      // }}
      className=" min-h-[80vh]  relative"
    >
      <motion.div animate={star} className=" w-[80%] m-auto h-[10%] ">
        <Star1 />
      </motion.div>
      <div className="flex w-[80%] mx-auto   ">
        <motion.div
          animate={star}
          className=" p-2 w-[10%] h-[600px] flex flex-col justify-end text-white"
        >
          <Star2 />
          <Star3 />
        </motion.div>
        <div className=" w-[80%] h-full">
          <div className=" flex justify-center relative ">
            <div className="h-full w-[80vw] hidden 2xl:flex justify-center items-center m-auto">
              <El1 />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="h-full w-[80vw] hidden  2xl:flex justify-center  items-center">
                <El2 />
              </div>
              <motion.div
                animate={star}
                className="absolute bottom-20 right-28 flex items-center justify-center"
              >
                <Star4 />
              </motion.div>
              <motion.div
                // initial={{
                //   rotate: 0,
                // }}
                animate={globe}
                ref={vRef}
                className="absolute inset-0  h-[90vh] hidden 2xl:flex items-center justify-center"
              >
                <Globe />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          animate={star}
          className=" p-2 w-[10%] h-[600px] flex items-center"
        >
          <Star5 />
        </motion.div>
      </div>
      <div className="absolute inset-0 flex flex-col md:flex-row md:space-x-8  items-center justify-center w-[80%]  m-auto">
        <div className="w-full md:w-[40%] py-20 px-10 bg-primary_12 border border-primary_8 bg-opacity-90 rounded-xl text-primary_1">
          <h3 className="font-logirentBold text-xl md:text-3xl">Web 3</h3>
          <ul className="font-archivo text-sm font-normal mt-6 list-disc pl-6">
            <li>Distributed compute networks </li>
            <li>Decentralized storage networks </li>
            <li>Incentivisation, tokenization and Data DAO</li>
          </ul>
        </div>
        <div className="w-full md:w-[40%] py-20 px-10 bg-primary_12 border border-primary_8 bg-opacity-90 rounded-xl text-primary_1">
          <h3 className="font-logirentBold text-xl md:text-3xl">AI</h3>
          <ul className="font-archivo text-sm font-normal mt-6 list-disc pl-6">
            <li>Training process optimization</li>
            <li> Auto testing and predictive analysis</li>
            <li>Dataset, model training and platform security.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
