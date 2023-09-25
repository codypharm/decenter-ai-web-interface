"use client";
import React, { useState } from "react";
import { useContractWrite, useAccount, useWaitForTransaction } from "wagmi";
import { dealClient } from "@/abi/deal_client";
import lighthouse from "@lighthouse-web3/sdk";
import { ClipLoader } from "react-spinners";
import { filecoinCalibration } from "wagmi/chains";
import CID from "cids";

//@techyNonso add parentCallback function as props to get hash(cid) of data uploaded
const UploadFile = (props) => {
  const { address, isConnected } = useAccount();
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const { write, data } = useContractWrite({
    address: dealClient.address,
    abi: dealClient.abi,
    chainId: filecoinCalibration.id,
    functionName: "makeDealProposal",
  });
  const waitForTransaction = useWaitForTransaction({
    chainId: filecoinCalibration.id,
    hash: data?.hash,
    onSuccess(data) {
      setUploaded(true);
    },
  });

  // helper function for upload img function
  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const dataDeal = async (cid, carLink, fileSize) => {
    try {
      console.log("deal initiated ....");
      const cidHexRaw = new CID(cid).toV1().toString("base16").substring(1);
      const cidHex = "0x" + cidHexRaw;
      if (isConnected) {
        const extraParamsV1 = [carLink, 10000, false, false];
        const DealRequestStruct = [
          cidHex,
          fileSize,
          false,
          cid,
          940000, //startEpoch - be sure to check while final deploy
          9800000, // end epoch - '👆'
          0,
          0,
          0,
          1,
          extraParamsV1,
        ];
        write({
          args: [DealRequestStruct],
          from: address,
        });
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const uploadFile = async (e) => {
    setUploading(true);
    props.extractFile(e);
    const output = await lighthouse.upload(
      e.target.files,
      process.env.NEXT_PUBLIC_LH_API,
      progressCallback
    );

    console.log(
      "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data[0].Hash
    );
    console.log(output);
    const fileSize = output.data[0].Size;
    const hash = output.data[0].Hash;
    props.parentCallback(hash);
    const carLink = `https://ipfs.io/ipfs/${hash}?format=car`;
    await dataDeal(hash, carLink, fileSize);
  };
  return (
    <div>
      {uploading ? (
        <div
          style={{
            margin: "10px 0 10px 0",
            border: "2px solid rgb(200, 200, 200)",
            borderRadius: "20px",
            width: "100%",
            padding: "0.8em",
          }}
        >
          {uploaded ? (
            <span> ✅ Data deal created </span>
          ) : (
            <span>
              {" "}
              <ClipLoader size={15} /> Creating Data Deal on FVM
            </span>
          )}{" "}
        </div>
      ) : (
        <input
          type="file"
          name="DAOres"
          id="res"
          className="text-primary_1 rounded-xl mt-4 bg-primary_13  border border-primary_8 py-4 px-2"
          onChange={(e) => {
            uploadFile(e);
          }}
        />
      )}
      <span></span>
    </div>
  );
};

export default UploadFile;
