"use client";
import JSZip from "jszip";
import { parseEther } from "viem";
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import UploadFile from "../components/fvm/UploadFile";
import { switchNetwork } from "@wagmi/core";
import { useNetwork } from "wagmi";
import { readContracts } from "@wagmi/core";

import {
  useContractWrite,
  useAccount,
  useWaitForTransaction,
  useContractRead,
} from "wagmi";
import SDXL from "@/abi/SDXLCaller_metadata.json";
import DatasetNFT from "@/abi/DatasetNFT_metadata.json";

interface IFile {
  file: {
    name: string;
  };
  path: string;
}

const Demo = () => {
  const [fileList, setFileList] = useState<IFile[]>([]);
  const [noteBookList, setNoteBookList] = useState<IFile[]>([]);
  const [modelName, setModelName] = useState<string>("");
  const [selectedNoteBook, setSelectedNoteBook] = useState<{}>();
  const [jobIdData, setJobIdData] = useState<number | unknown>(0);
  const [genCid, setGenCid] = useState<string>("");
  const { address, isConnected } = useAccount();
  const { chain, chains } = useNetwork();

  //write to lily pad
  const { write, data } = useContractWrite({
    address: "0xedfe10A0C699Cb5D9070a070e3654a05007C4b38",
    abi: SDXL.output.abi,
    chainId: 1337,
    functionName: "runSDXL",
  });

  //mint NFT
  const { write: mintNFT, data: mintedNFT } = useContractWrite({
    address: "0x6c902D133A6C6c2CbC3Ec4Ff9fD7113cF2816965",
    abi: DatasetNFT.output.abi,
    chainId: chain?.id,
    functionName: "mintNFT",
  });

  // const {
  //   data: jobIdData,
  //   isError,
  //   isLoading,
  // } = useContractRead({
  //   address: "0xedfe10A0C699Cb5D9070a070e3654a05007C4b38",
  //   abi: SDXL.output.abi,
  //   chainId: 1337,
  //   functionName: "userJobId",
  //   args: [address],
  //   watch: true,

  //   onSuccess(data) {
  //     console.log("Success", data);
  //     console.log(jobIdData);
  //   },
  // });

  //switch to file coin
  const switchToFil = async () => {
    if (chain?.id != 314159)
      await switchNetwork({
        chainId: 314159,
      });
  };

  //Get matching CID for a job id
  const {
    data: cidData,
    isError: cidError,
    isLoading: cidLoading,
  } = useContractRead({
    address: "0xedfe10A0C699Cb5D9070a070e3654a05007C4b38",
    abi: SDXL.output.abi,
    chainId: 1337,
    functionName: "cidRecord",
    args: [jobIdData],
    watch: true,

    onSuccess(data) {
      console.log("Success", data);
      if (data) {
        switchToFil();
        setGenCid(data.toString());
      }
    },
  });

  //wait of nft minting
  const waitForNFTTransaction = useWaitForTransaction({
    chainId: chain?.id,
    hash: mintedNFT?.hash,
    onSuccess(data) {
      console.log(data, "nft minted");
    },
  });

  //mint nft
  const proceedToMint = () => {
    mintNFT({
      args: [`${genCid}`],
      //@ts-ignore
      from: address,
    });
  };

  //get users nfts
  const {
    data: nftData,
    isError,
    isLoading,
  } = useContractRead({
    address: "0x6c902D133A6C6c2CbC3Ec4Ff9fD7113cF2816965",
    abi: DatasetNFT.output.abi,
    chainId: chain?.id,
    functionName: "getNFTS",
    args: [address],

    onSuccess(data) {
      console.log("Success", data);
      //@ts-ignore
      let match = data.filter(
        //@ts-ignore
        (item) => item.uri.toUpperCase() === genCid.toUpperCase()
      );

      //@ts-ignore
      if (match.length == 0 && genCid) proceedToMint();
    },
  });

  //get job ID for a user
  const fetchData = async () => {
    const data = await readContracts({
      contracts: [
        {
          address: "0xedfe10A0C699Cb5D9070a070e3654a05007C4b38",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userJobId",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
          ],
          functionName: "userJobId",
          args: [`${address}`],
        },
      ],
    });

    setJobIdData(data[0].result);
  };

  //wait for job Id generation
  const waitForTransaction = useWaitForTransaction({
    chainId: 1337,
    hash: data?.hash,
    onSuccess(data) {
      console.log(data);

      fetchData();
    },
  });

  const execute = async () => {
    if (chain?.id != 1337)
      await switchNetwork({
        chainId: 1337,
      });

    write({
      args: ["white horse"],
      //@ts-ignore
      from: address,
      value: parseEther("4"),
    });
  };

  const parentCallback = (hash: string) => {
    console.log(hash);
  };

  //extract zip file
  const extractFile = async (e: React.FormEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files ? e.currentTarget.files[0] : [];
    const zip = new JSZip();
    const extractedFiles = await zip.loadAsync(file);
    const regex = new RegExp("[^.]+$");

    //loop through extracted files
    extractedFiles.forEach(async (relativePath, file) => {
      const content = await file.async("string");

      //skip directories
      if (!file.dir) {
        //set file list
        setFileList((fileList) => [
          ...fileList,
          { file: file, path: relativePath },
        ]);

        //set note book list
        if (relativePath.match(regex)?.[0] === "ipynb") {
          setNoteBookList((noteBookList) => [
            ...noteBookList,
            { file: file, path: relativePath },
          ]);
        }
      }
    });
  };

  const selectNoteBook = (e: React.FormEvent<HTMLSelectElement>) => {
    const fileName = e.currentTarget.value;
    //fillter matching note book file
    noteBookList.forEach((item) => {
      if (item.file.name.toUpperCase() === fileName.toUpperCase())
        //select the matching notebook
        setSelectedNoteBook(item.file);
    });
  };

  return (
    <main className="bg-primary_13 h-screen flex flex-col justify-center items-center">
      <div className="w-full flex justify-end pt-10 pr-3">
        <ConnectButton showBalance={false} />
      </div>
      <div className="w-[50%] m-auto ">
        <h1 className="font-logirentBold text-center text-3xl text-primary_1">
          AI Infrastructure For Model Training
        </h1>
        <form className="font-archivo">
          <label htmlFor="name">Model name</label>
          <input
            type="text"
            placeholder="Enter Model name"
            className="rounded-md bg-primary_8 text-primary_1 p-2 w-full border-none focus:ring-0 focus:border-none outline-none"
          />

          <p className="text-primary_1 mt-4">
            Upload working directory of notebook
          </p>
          <div className="bg-primary_8 rounded-md h-28 p-2 flex">
            <div className="w-[50%] h-full flex space-x-10 items-center text-primary_1">
              <AiOutlineCloudUpload size={40} />
              <div>
                <p className="font-semibold text-lg">Drag and drop file here</p>
                <p className="font-thin text-sm">Limit 1GB per file.zip</p>
              </div>
            </div>

            <div className="w-[50%] h-full flex justify-end items-center text-primary_1">
              {/* <input
                type="file"
                accept=".zip"
                onChange={(e) => extractFile(e)}
                className=" text-primary_1 rounded-xl mt-4 bg-primary_13  border border-primary_8 py-4 px-2"
              /> */}

              <UploadFile
                parentCallback={parentCallback}
                extractFile={extractFile}
              />
            </div>
          </div>

          <div className="bg-primary_11 rounded-md h-12 p-2 text-primary_1 mt-4 flex items-center ">
            Input archive not found using sample.
          </div>

          <p className="text-primary_1 mt-4">Select a notebook</p>
          <select
            onChange={(e) => selectNoteBook(e)}
            className="rounded-md bg-primary_8 text-primary_1 p-4 cursor-pointer w-full border-none focus:ring-0 focus:border-none outline-none"
          >
            <option value="">Select </option>
            {noteBookList.map((item, idx) => (
              <option value={item.file.name} key={idx}>
                {item.file.name}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={execute}
            className=" text-primary_1 rounded-xl mt-4 bg-primary_13  border border-primary_8 py-4 px-6"
          >
            Execute
          </button>

          <button
            type="submit"
            className=" text-primary_1 rounded-xl mt-4 bg-primary_13  flex justify-between items-center border border-primary_8 py-4 w-52 px-4"
          >
            Download Model <AiOutlineCloudDownload size={30} />
          </button>
        </form>
      </div>
    </main>
  );
};

export default Demo;
