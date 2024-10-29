import React from "react";
import Image from "next/image";

import devfolioLogo from "@/app/devfolio.png";
import polygon from "@/app/polygon.png";
import replit from "@/app/replit.png";
import Link from "next/link";


export default function Sponsors() {
  return (
    // <div className="w-full h-auto flex flex-col justify-center items-center overflow-hidden my-12">
    //   <div className="flex flex-col items-center gap-12 w-full">
    //     <h1 className="text-3xl md:text-5xl font-Inter-500 text-center mb-4">Sponsors</h1>
    //     <div className="flex flex-row gap-24 md:gap-48 w-[90%] justify-center  bg-gray-100 rounded-2xl p-6">
    //         <div className="flex flex-col gap-6 md:gap-12">
    //           <a href={"https://devfolio.co/"} target="_blank">
    //             <Image src={devfolioLogo} alt="DEVFOLIO LOGO" width={400} height={400}></Image>
    //           </a>
    //           <a href={"https://polygon.technology/"} target="_blank">
    //             <Image src={polygon} alt="POLYGON LOGO" width={500} height={400}></Image>
    //           </a>
    //         <p className="text-2xl md:text-5xl font-Inter-500 text-center mb-4">Ruby</p>  
    //         </div>
    //       <div className="flex flex-col justify-evenly">
    //         <div className="flex flex-row gap-8">
    //           <a href="https://replit.com" target="_blank">
    //             <Image src={replit} alt="REPLIT LOGO" height={100}></Image>
    //           </a>
    //         </div>
    //         <p className="text-3xl md:text-5xl font-Inter-500 text-center mb-4">Sapphire</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full h-auto flex flex-col justify-center items-center overflow-hidden my-12">
      <div className="flex flex-col items-center gap-12 w-full">
        <h1 className="text-3xl md:text-5xl font-Inter-500 text-center mb-4">Sponsors</h1>
        <div className="flex flex-row gap-24 w-[90%] justify-center bg-gray-100 rounded-2xl p-12">
          <p className="text-3xl md:text-5xl font-Inter-500 text-center mb-4">COMING SOON</p>
        </div>
      </div>
    </div>
  );
}
