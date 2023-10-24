"use client";

import { useState } from "react";

const Theme = () => {
  const [hoverItem, sethoverItem] = useState(0);
  const deptDesc = [
    <div className="h-[100px] mx-auto text-center px-4 text-white text-2xl font-normal font-['Inter'] italic">
      Embark on a journey where the{" "}
      <span className="text-white text-2xl font-extrabold font-['Inter']">
        boundaries
      </span>{" "}
      of possibility are pushed to new horizons.
    </div>,
    <div className="h-[130px] md:h-[100px] mx-auto text-center px-4 text-white text-2xl font-normal font-['Inter'] italic">
      Uncover hidden insights in data to shape a smarter tomorrow through
      <span className="text-yellow-500"> analysis</span> and{" "}
      <span className="text-yellow-500">modeling.</span>
    </div>,
    <div className="h-[170px] md:h-[100px] mx-auto text-center px-4 text-white text-2xl font-normal font-['Inter'] italic">
      Reinvent <span className="text-blue-500">trust</span> and{" "}
      <span className="text-blue-500"> transparency </span>with decentralized
      technology solutions for a more secure future.
    </div>,
    <div className="h-[100px] mx-auto text-center px-4 text-white text-2xl font-normal font-['Inter'] italic">
      Create immersive, user-centered experiences that blendand
      <span className="text-red-500"> form </span> and
      <span className="text-red-500"> function.</span>
    </div>,
    <div className="h-[100px] mx-auto text-center px-4 text-white text-2xl font-normal font-['Inter'] italic">
      Empower change by coding the{" "}
      <span className="text-green-500"> power </span> of transformation to{" "}
      <span className="text-green-500"> streamline </span> processes.
    </div>,
    <div className="h-[140px] md:h-[100px] mx-auto text-center px-4 text-white text-2xl font-normal font-['Inter'] italic">
      Fuel<span className="text-purple-600"> creative </span> thinking and
      <span className="text-purple-600"> collaboration </span>to develop
      groundbreaking ideas to drive industry evolution.
    </div>,
  ];

  return (
    <div className="bg-[#242425] w-screen">
      <div className="flex justify-center items-center">
        <div className="absolute text-white text-[64px] font-medium font-['Inter']">
          Themes
        </div>
        <div className="opacity-10 text-neutral-200 md:text-[120px] font-extrabold font-['Inter'] text-[90px]">
          TRACKS
        </div>
      </div>

      {/* <div className="h-[95px] mx-auto text-center px-4 text-white text-2xl font-normal font-['Inter'] italic">
        Embark on a journey where the{" "}
        <span className="text-white text-2xl font-extrabold font-['Inter']">
          boundaries
        </span>{" "}
        of possibility are pushed to new horizons.
      </div> */}
      {deptDesc[hoverItem]}

      <div
        style={{ backgroundImage: `url('/images/blend(${hoverItem}).png')` }}
        className={`flex justify-evenly items-center flex-wrap bg-[url('/images/blend(${hoverItem}).png')] bg-no-repeat h-[490px] `}
      >
        <div
          onMouseEnter={() => {
            sethoverItem(1);
          }}
          onMouseLeave={() => {
            sethoverItem(0);
          }}
          className="relative flex items-center justify-center w-[199px] h-[67px] bg-neutral-800 rounded-[10px] 
          border-2 border-white text-center text-white mx-3 hover:border-black hover:text-black hover:bg-white"
        >
          <p>Data Science</p>
          <img
            src="/images/datascience icon.png"
            className="absolute top-[40px] left-[-16px]"
          />
        </div>
        <div
          onMouseEnter={() => {
            sethoverItem(2);
          }}
          onMouseLeave={() => {
            sethoverItem(0);
          }}
          className="relative flex items-center justify-center w-[199px] h-[67px] bg-neutral-800 rounded-[10px]
           border-2 border-white text-center text-white mx-3  hover:border-black hover:text-black hover:bg-white"
        >
          <p>Blockchain</p>
          <img
            src="/images/blockchain icon.png"
            className="absolute top-[40px] left-[-16px]"
          />
        </div>
        <div
          onMouseEnter={() => {
            sethoverItem(3);
          }}
          onMouseLeave={() => {
            sethoverItem(0);
          }}
          className="relative flex items-center justify-center w-[199px] h-[67px] bg-neutral-800 rounded-[10px]
           border-2 border-white text-center text-white mx-3  hover:border-black hover:text-black hover:bg-white"
        >
          <p>UX Design</p>
          <img
            src="/images/ux design icon.png"
            className="absolute top-[25px] left-[-18px]"
          />
        </div>
        <div
          onMouseEnter={() => {
            sethoverItem(4);
          }}
          onMouseLeave={() => {
            sethoverItem(0);
          }}
          className="relative flex items-center justify-center w-[199px] h-[67px] bg-neutral-800 rounded-[10px]
           border-2 border-white text-center text-white mx-3  hover:border-black hover:text-black hover:bg-white"
        >
          <p>Development</p>
          <img
            src="/images/development icon.png"
            className="absolute top-[40px] left-[-16px]"
          />
        </div>
        <div
          onMouseEnter={() => {
            sethoverItem(5);
          }}
          onMouseLeave={() => {
            sethoverItem(0);
          }}
          className="relative flex items-center justify-center w-[199px] h-[67px] bg-neutral-800 rounded-[10px]
          hover:border-black hover:text-black hover:bg-white border-2 border-white text-center text-white mx-3"
        >
          <p>Open Innovation</p>
          <img
            src="/images/open innovation icon.png"
            className="absolute top-[35px] left-[-16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Theme;
