import { Globe1 } from "@/svg/globe1";
import { Globe2 } from "@/svg/globe2";
import { Globe4 } from "@/svg/globe4";
import { Globe5 } from "@/svg/globe5";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <>
      <section className="min-h-[90vh]  relative flex justify-center">
        <Globe1 />
        <div className="absolute inset-0  w-[80%]  m-auto text-primary_1">
          <h2 className="font-logirentBold text-center text-3xl mt-[15%]">
            The Future of AI Model Training is Here
          </h2>

          <div className="h-[70%] flex items-center  ">
            <div className="w-[50%] ">
              <h2 className="font-logirentBold text-3xl leading-loose">
                DECENTER TEAMS
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
            <div className="w-[50%] flex justify-center">
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
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[60vh]  relative flex justify-center">
        <div className="absolute inset-0 h-full  w-[80%]  m-auto text-primary_1">
          <div className="h-[70%] flex items-center  ">
            <div className="w-[50%] flex justify-center">
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
            </div>
            <div className="w-[50%]  flex flex-col items-center">
              <div className="w-fit">
                <h2 className="font-logirentBold text-3xl leading-loose">
                  DECENTERALISED AUTOTRAIN
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
              <h2 className="font-logirentBold text-3xl leading-loose">
                DECENTER REPOSITORY
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
            <div className="w-[50%] flex justify-center">
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
            </div>
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
            <div className="w-[50%] flex justify-center">
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
            </div>
            <div className="w-[50%] ">
              <h2 className="font-logirentBold text-3xl leading-loose">
                DECENTER INCENTIVES
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
              <h2 className="font-logirentBold text-3xl leading-loose">
                TESTING AND ANALYTICS
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
            <div className="w-[50%] flex justify-center">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
