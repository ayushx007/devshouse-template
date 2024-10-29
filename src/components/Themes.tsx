"use client";

import Image from "next/image";
import { useState } from "react";

const Theme = () => {
  const [hoverItem, sethoverItem] = useState(0);
  const deptDesc = [
    <div
      key="1"
      className="h-[160px] md:h-[100px] mx-auto text-center px-4 text-white text-lg md:text-2xl font-normal italic"
    >
      Embark on a journey where the{" "}
      <span className="text-white text-2xl max-md:text-base font-extrabold">boundaries</span> of possibility are pushed
      to new horizons.
    </div>,
    <div
      key="11"
      className="h-auto md:h-[100px] mx-auto text-center px-4 text-white text-lg md:text-2xl font-normal italic"
    >
      Build secure, transparent apps with blockchain, tackling data ownership and trust in decentralized systems.
    </div>,
    <div
      key="2"
      className="h-auto md:h-[100px] mx-auto text-center px-4 text-white text-lg md:text-2xl font-normal italic"
    >
      Drive innovation in digital finance with secure, user-focused solutions for seamless transactions and financial empowerment. Empower businesses with cutting-edge tools.
    </div>,
    <div
      key="3"
      className="h-auto md:h-[100px] mx-auto text-center px-4 text-white text-lg md:text-2xl font-normal italic"
    >
      Create tech solutions that promote eco-friendly practices, energy efficiency, and environmental conservation.
    </div>,
    <div
      key="4"
      className="h-auto md:h-[100px] mx-auto text-center px-4 text-white text-lg md:text-2xl font-normal italic"
    >
      From virtual learning environments to gamified experiences, Create immersive AR and VR experiences that redefine digital interaction, from learning to entertainment.
    </div>,
    <div
      key="5"
      className="h-auto md:h-[100px] mx-auto text-center px-4 text-white text-lg md:text-2xl font-normal italic"
    >
      Explore cutting-edge hardware innovations,intelligent devices from IoT devices to embedded systems, pushing the boundaries of technology and automation.
    </div>,
    <div
      key="6"
      className="h-auto md:h-[100px] mx-auto text-center px-4 text-white text-lg md:text-2xl font-normal italic"
    >
      Collaborate on diverse real world challenged and bring any innovative idea to life in an open and flexible track.
    </div>,
  ];

  return (
    <div id="theme" className="bg-[#242425] w-full py-24 flex flex-col">
      <div className="flex justify-center items-center">
        <div className="absolute text-white text-[3em] max-md:text-2xl font-medium">Themes</div>
        <div className="opacity-10 text-neutral-200 text-[6em] font-extrabold max-md:text-5xl">TRACKS</div>
      </div>
      {deptDesc[hoverItem]}
      <div className="bg-[url('/images/blend(1).png" />
      <div className="bg-[url('/images/blend(2).png" />
      <div className="bg-[url('/images/blend(3).png" />
      <div className="bg-[url('/images/blend(4).png" />
      <div className="bg-[url('/images/blend(5).png" />
      <div className="bg-[url('/images/blend(6).png" />
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
          <p>Blockchain & Decentralized Applications</p>
          <Image
            width={40}
            height={40}
            alt="Finance Icon"
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
          <p>FinTech</p>
          <Image
            width={40}
            height={40}
            alt="Environmental Sustainability Icon"
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
          <p>Environmental Sustainability</p>
          <Image
            width={40}
            height={40}
            alt="Developer Productivity Icon"
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
          <p>AR & VR</p>
          <Image
            width={40}
            height={40}
            alt="Development Icon"
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
          <p>IoT & Smart Devices</p>
          <Image
            width={40}
            height={40}
            alt="Diversity and Inclusion Icon"
            src="/images/diversity.png"
            className="absolute top-[35px] left-[-16px]"
          />
        </div>
        <div
          onMouseEnter={() => {
            sethoverItem(6);
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
            alt="Open Innovation Icon"
            src="/images/open innovation icon.png"
            className="absolute top-[35px] left-[-16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Theme;
