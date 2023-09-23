import React from "react";

const Models = () => {
  return (
    <div className="bg-primary_13 h-screen  text-primary_1 ">
      <div className="font-logirentBold flex justify-center items-center text-center text-2xl h-[10%]">
        Models
      </div>
      <div className="h-[90%] flex gap-10">
        <div className="w-[50%] h-full  ">
          <div className="h-[5%] bg-primary_7 font-archivo text-xl   flex items-center justify-center">
            Minted Models
          </div>
          <div className=" w-full h-[95%] overflow-y-auto ">
            <div className="w-full h-auto flex  my-2 border rounded-md px-3">
              <div className="h-auto w-[70%] flex items-center py-3 font-archivo leading-relaxed">
                jnidfnknfdjioj9ojflksdjjsdiupokodsk
              </div>
              <div className="h-auto w-[30%] flex items-center justify-center py-3  font-archivo leading-relaxed">
                <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-3 cursor-pointer rounded-xl">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full  ">
          <div className="h-[5%] bg-primary_7 font-archivo text-xl   flex items-center justify-center">
            UnMinted Models
          </div>
          <div className=" w-full h-[95%] overflow-y-auto ">
            <div className="w-full h-auto flex  my-2 border rounded-md px-3">
              <div className="h-auto w-[70%] flex items-center py-3 font-archivo leading-relaxed">
                jnidfnknfdjioj9ojflksdjjsdiupokodsk
              </div>
              <div className="h-auto w-[30%] flex items-center justify-center py-3  font-archivo leading-relaxed">
                <button className="bg-primary_11 text-primary_1 font-semibold font-primaryArchivo py-2 px-8 cursor-pointer rounded-xl">
                  Mint
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Models;
