'use client'
import React from 'react'
import UploadFile from '../components/fvm/UploadFile'

const test = () => {
    const parentCallback = (hash)=>{
        console.log(hash);
    }
  return (
    <UploadFile parentCallback={parentCallback}/>
  )
}

export default test