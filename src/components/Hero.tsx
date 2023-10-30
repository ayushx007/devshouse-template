"use client";
import React from "react";
import DevHouse from "../../public/images/DevHouse.png";
import calendarIcon from "../../public/images/cal-icon.png";
import locationIcon from "../../public/images/location.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex mt-10 h-[90vh] flex-col items-center justify-center gap-4 bg-[url('/images/background.png')] bg-cover bg-no-repeat bg-center">
      <Image src={DevHouse} alt="devManiaLogo" className="px-12 md:p-0"></Image>
      <div className="flex flex-row gap-8">
        <span className="flex flex-row items-center gap-2 ">
          <Image src={calendarIcon} alt="gcalicon"></Image>
          <p className="font-Inter-800 text-md sm:text-2xl">15th March 2024</p>
        </span>
        <span className="flex flex-row items-center gap-2">
          <Image src={locationIcon} alt="location icon"></Image>
          <p className="font-Inter-800 text-md sm:text-2xl">Chennai</p>
        </span>
      </div>
      <span className="bg-blue-500 rounded-md font-bold text-2xl px-4 py-3 text-white hover:scale-110 transition-transform ease-out">
        <Link href="/">Register Now! </Link>
      </span>
    </div>
  );
}
