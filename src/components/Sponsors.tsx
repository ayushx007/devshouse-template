import React from "react";
import Image from "next/image";

import devfolioLogo from "public/Devfolio - Normal.svg";
import polygon from "public/Primary_Logo.svg";
import replit from "public/Logotype-Horiz-Transparent-Light@512h.png";

export default function Sponsors() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center overflow-hidden my-12">
      <div className="flex flex-col items-center gap-12 w-full">
        <h1 className="text-3xl md:text-5xl font-Inter-500 text-center mb-4">Sponsors</h1>
        <div className="flex flex-row gap-24 w-[90%] justify-center  bg-gray-100 rounded-2xl p-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-12">
              <Image src={devfolioLogo} alt="devfolio" height={100}></Image>
              <Image src={polygon} alt="polygon" height={100}></Image>
            </div>
            <p className="text-3xl md:text-5xl font-Inter-500 text-center mb-4">Ruby</p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-8">
              <Image src={replit} alt="replit" height={100}></Image>
            </div>
            <p className="text-3xl md:text-5xl font-Inter-500 text-center mb-4">Sapphire</p>
          </div>
        </div>
      </div>
    </div>
  );
}
