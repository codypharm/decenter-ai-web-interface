"use client";
import React from "react";
import UploadFile from "../components/fvm/UploadFile";

const test = () => {
  const parentCallback = (hash) => {
    console.log(hash);
  };
  const extractFile = async (e) => {};
  return (
    <UploadFile parentCallback={parentCallback} extractFile={extractFile} />
  );
};

export default test;
