"use client";
import { Globe1 } from "@/svg/globe1";
import { Globe2 } from "@/svg/globe2";
import { Globe4 } from "@/svg/globe4";
import { Globe5 } from "@/svg/globe5";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

const Features = () => {
  const { ref: vRef, inView } = useInView({
    threshold: 0.4,
  });

  const { ref: vRef2, inView: inView2 } = useInView({
    threshold: 1,
  });
  const { ref: vRef3, inView: inView3 } = useInView({
    threshold: 1,
  });
  const { ref: vRef4, inView: inView4 } = useInView({
    threshold: 1,
  });
  const { ref: vRef5, inView: inView5 } = useInView({
    threshold: 1,
  });

  const bot1 = useAnimation();
  const bot2 = useAnimation();
  const bot3 = useAnimation();
  const bot4 = useAnimation();
  const bot5 = useAnimation();
  const text1 = useAnimation();

  useEffect(() => {
    if (inView) {
      //bot animation
      bot1.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
        },
      });



      //text animation

    } else {
      bot1.start({
        y: "10vh",
        opacity: 0,

        transition: {
          duration: 3,
        },
      });




    }
  }, [inView]);

  useEffect(() => {
    if (inView2) {
      //bot animation

      bot2.start({
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
        },
      });
    } else {
      bot2.start({
        y: "10vh",

        opacity: 0,
        transition: {
          duration: 2,
        },
      });
    }
  }, [inView2]);

  useEffect(() => {
    if (inView3) {
      //bot animation

      bot3.start({
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          duration: 2,
        },
      });
    } else {
      bot3.start({
        y: "10vh",
        opacity: 0,
        transition: {
          duration: 2,
        },
      });
    }
  }, [inView3]);

  useEffect(() => {
    if (inView4) {
      //bot animation

      bot4.start({
        opacity: 1,
        transition: {
          duration: 2,
        },
      });
    } else {
      bot4.start({
        opacity: 0,
        transition: {
          duration: 2,
        },
      });
    }
  }, [inView4]);

  useEffect(() => {
    if (inView5) {
      //bot animation

      bot5.start({
        opacity: 1,
        transition: {
          duration: 2,
        },
      });
    } else {
      bot5.start({
        opacity: 0,
        transition: {
          duration: 2,
        },
      });
    }
  }, [inView5]);

  return (
    <>
      <section className="min-h-[90vh]  relative flex justify-center">
        <Globe1 />
        <div
          ref={vRef}
          className="absolute inset-0  w-[80%]  m-auto text-primary_1"
        >
          <h2 className="font-logirentBold text-center text-3xl mt-[15%]">
            The Future of AI Model Training Is Here
          </h2>

          <div className="h-[70%] flex items-center  ">
            <div className="w-[50%] ">
              <h2 className="font-logirentBold text-3xl leading-loose">
                Decenter Teams
              </h2>

              <p className="font-archivo text-xl">
                Collaboratively Train, Run, and Maintain AI Models
              </p>
              <ul className="font-archivo leading-loose text-sm font-normal mt-6 list-disc pl-6">
                <li>Create private or public teams</li>
                <li>Admins can create  tasks and assign to team members</li>
                <li>
                  Monitor progress with built-in project and team management
                  tools
                </li>
              </ul>
            </div>
            <motion.div animate={bot1} className="w-[50%] flex justify-center">
              <Image
                src="/bot1.png"
                alt="decenter image"
                className="grayscale"
                width={400}
                height={400}
                style={{
                  objectFit: "contain",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="min-h-[60vh]  relative flex justify-center">
        <div className="absolute inset-0 h-full  w-[80%]  m-auto text-primary_1">
          <div ref={vRef2} className="h-[70%] flex items-center  ">
            <motion.div animate={bot2} className="w-[50%] flex justify-center">
              <Image
                src="/bot2.png"
                alt="decenter image"
                className="grayscale"
                width={400}
                height={400}
                style={{
                  objectFit: "contain",
                }}
              />
            </motion.div>

            <div className="w-[50%]  flex flex-col items-center">
              <div className="w-fit">
                <h2 className="font-logirentBold text-3xl leading-loose">
                  DecentralIsed AutotraIn
                </h2>
                <p className="font-archivo text-xl">
                  AI Tool for Quicker and More Efficient Model Training
                </p>
                <ul className="font-archivo leading-loose text-sm font-normal mt-6 list-disc pl-6">
                  <li>
                    Select from a wide range of pre-trained models and model
                    templates
                  </li>
                  <li>
                    Parallel training systems train models on split datasets to
                    drastically increase training speed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[60vh]  relative flex justify-end">
        <div className="absolute -top-64">
          <Globe2 />
        </div>
        <div className="absolute inset-0  w-[80%]  m-auto text-primary_1">
          <div className="h-[100%] flex items-center  ">
            <div className="w-[50%] ">
              <h2
                ref={vRef3}
                className="font-logirentBold text-3xl leading-loose"
              >
                Decenter reposItory
              </h2>

              <p className="font-archivo text-xl">
                DeCenter Repository Access a Robust Library of AI Models,
                <br />
                Datasets and Tools
              </p>
              <ul className="font-archivo leading-loose text-sm font-normal mt-6 list-disc pl-6">
                <li>Securely store a diverse range of AI models.</li>
                <li>Track and manage model updates with ease.</li>{" "}
                <li>Access, share, customize, and collaborate on models.</li>{" "}
                <li>
                  Seamlessly download and integrate models into your
                  applications.
                </li>
              </ul>
            </div>
            <motion.div animate={bot3} className="w-[50%] flex justify-center">
              <Image
                src="/bot3.png"
                alt="decenter image"
                className="grayscale"
                width={400}
                height={400}
                style={{
                  objectFit: "contain",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="min-h-[60vh]  relative flex justify-between">
        <div className="absolute top-3/4 left-96">
          <Globe4 />
        </div>
        <div className="absolute top-60 right-96">
          <Globe5 />
        </div>

        <div className="absolute inset-0  w-[80%]  m-auto text-primary_1">
          <div className="h-[100%] flex items-center  ">
            <motion.div animate={bot4} className="w-[50%] flex justify-center">
              <Image
                src="/bot4.png"
                alt="decenter image"
                className="grayscale"
                width={400}
                height={400}
                style={{
                  objectFit: "contain",
                }}
              />
            </motion.div>
            <div className="w-[50%] ">
              <h2
                ref={vRef4}
                className="font-logirentBold text-3xl leading-loose"
              >
                Decenter IncentIves
              </h2>

              <p className="font-archivo text-xl">
                DIncentivization Systems Powered by the DCEN
                <br />
                token
              </p>
              <ul className="font-archivo leading-loose text-sm font-normal mt-6 list-disc pl-6">
                <li>Earn incentives for completing tasks.</li>{" "}
                <li>Receive rewards for providing feedback.</li>{" "}
                <li>
                  Get rewards for conducting reviews, ratings and testing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-[60vh]  relative flex justify-end">
        <div className="absolute top-96 right-72">
          <Globe5 />
        </div>
        <div className="absolute inset-0  w-[80%]  m-auto text-primary_1">
          <div className="h-[100%] flex items-center  ">
            <div className="w-[50%] ">
              <h2
                ref={vRef5}
                className="font-logirentBold text-3xl leading-loose"
              >
                TestIng And AnalytIcs
              </h2>

              <p className="font-archivo text-xl">
                AI Tool to Test Models and Generate Analysis
                <br />
                Report
              </p>
              <ul className="font-archivo leading-loose text-sm font-normal mt-6 list-disc pl-6">
                <li>
                  Algorithms score, select and mint the best possible version of
                  each trained model
                </li>
                <li>
                  Utilize AutoTrain to automatically select, optimize, and
                  fine-tune hyperparameters
                </li>
              </ul>
            </div>
            <motion.div animate={bot5} className="w-[50%] flex justify-center">
              <Image
                src="/bot5.png"
                alt="decenter image"
                className="grayscale"
                width={400}
                height={400}
                style={{
                  objectFit: "contain",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
