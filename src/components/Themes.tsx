"use client";

import Image from "next/image";
import { useState } from "react";

const Theme = () => {
  const [hoverItem, sethoverItem] = useState(0);
  const deptDesc = [
    <div key="1" className="h-[160px] md:h-[100px] mx-auto text-center px-4 text-white text-2xl font-normal font-['Inter'] italic">
      Embark on a journey where the{" "}
      <span className="text-white text-2xl max-md:text-base font-extrabold font-['Inter']">
        boundaries
      </span>{" "}
      of possibility are pushed to new horizons.
    </div>,
    <div key="2" className="h-[160px] md:h-[100px] mx-auto text-center px-4 text-white text-2xl font-normal font-['Inter'] italic">
      Uncover hidden insights in data to shape a smarter tomorrow through
      <span className="text-yellow-500"> analysis</span> and{" "}
      <span className="text-yellow-500">modeling.</span>
    </div>,
    <div key="3" className="h-[160px] md:h-[100px] mx-auto text-center px-4 text-white text-2xl font-normal font-['Inter'] italic">
      Reinvent <span className="text-blue-500">trust</span> and{" "}
      <span className="text-blue-500"> transparency </span>with decentralized
      technology solutions for a more secure future.
    </div>,
    <div key="4" className="h-[160px] md:h-[100px] mx-auto text-center px-4 text-white text-2xl font-normal font-['Inter'] italic">
      Create immersive, user-centered experiences that blendand
      <span className="text-red-500"> form </span> and
      <span className="text-red-500"> function.</span>
    </div>,
    <div key="5" className="h-[160px] md:h-[100px] mx-auto text-center px-4 text-white text-2xl font-normal font-['Inter'] italic">
      Empower change by coding the{" "}
      <span className="text-green-500"> power </span> of transformation to{" "}
      <span className="text-green-500"> streamline </span> processes.
    </div>,
    <div key="6" className="h-[160px] md:h-[100px] mx-auto text-center px-4 text-white text-2xl font-normal font-['Inter'] italic">
      Fuel<span className="text-purple-600"> creative </span> thinking and
      <span className="text-purple-600"> collaboration </span>to develop
      groundbreaking ideas to drive industry evolution.
    </div>,
  ];

  return (
    <div className="bg-[#242425] w-screen">
      <div className="flex justify-center items-center">
        <div className="absolute text-white text-[3em] max-md:text-2xl font-medium font-['Inter']">
          Themes
        </div>
        <div className="opacity-10 text-neutral-200 text-[6em] font-extrabold font-['Inter'] max-md:text-5xl">
          TRACKS
        </div>
      </div>
      {deptDesc[hoverItem]}
      <div
        style={{ backgroundImage: `url('/images/blend(${hoverItem}).png')` }}
        className={`flex justify-evenly items-center flex-wrap bg-[url('/images/blend(${hoverItem}).png')] bg-no-repeat h-[490px] bg-cover`}
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
          <Image
            width={40}
            height={40}
            alt='Data Science Icon'
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
          <Image
            width={40}
            height={40}
            alt= 'Blockchain Icon'
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
          <Image
            width={40}
            height={40} 
            alt= 'UX Design Icon'
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
          <Image
            width={40}
            height={40}
            alt= 'Development Icon'
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
          <Image
            width={40}
            height={40}
            alt= 'Open Innovation Icon'
            src="/images/open innovation icon.png"
            className="absolute top-[35px] left-[-16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Theme;
