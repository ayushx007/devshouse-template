import React from "react";
import Image from "next/image";

import devfolioLogo from "@/app/devfolio.png";
import polygon from "@/app/polygon.png";
import ethindia from "../../public/images/SponsorIcons/ethindia.png";
import Link from "next/link";

export default function Sponsors() {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center overflow-hidden my-12">
      <div className="flex flex-col items-center gap-12 w-full">
        <h1 className="text-3xl md:text-5xl font-Inter-500 text-center mb-4">Sponsors</h1>
        <div className="w-[90%] bg-gray-100 rounded-2xl p-6">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-3xl font-Inter-500 text-center mb-4">Ruby</h2>
            <a href={"https://devfolio.co/"} target="_blank">
              <Image src={devfolioLogo} alt="DEVFOLIO LOGO" width={400} height={400}></Image>
            </a>
          </div>
          <div className="flex flex-col items-center gap-6 mt-12">
            <h2 className="text-2xl md:text-3xl font-Inter-500 text-center mb-4">Sapphire</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <a href={"https://polygon.technology/"} target="_blank">
                <Image src={polygon} alt="POLYGON LOGO" width={500} height={400}></Image>
              </a>
              <a href="https://ethindia.co" target="_blank">
                <Image src={ethindia} alt="ETHINDIA LOGO" height={100}></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}