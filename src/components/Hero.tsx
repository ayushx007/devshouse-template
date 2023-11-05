"use client";
import React from "react";
import DevHouse from "../../public/images/DevHouse.png";
import calendarIcon from "../../public/images/cal-icon.png";
import locationIcon from "../../public/images/location.png";
import HeroImage1 from "../../public/gifs/1.gif";
import HeroImage2 from "../../public/gifs/2.gif";
import HeroImage3 from "../../public/gifs/3.gif";
import HeroImage4 from "../../public/gifs/4.gif";
import HeroImage5 from "../../public/gifs/5.gif";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex mt-10 h-[90vh] flex-col items-center justify-center gap-4 bg-white bg-cover bg-no-repeat bg-center">
      <div className="absolute -right-52 rotate-90 -top-36">
        <Image src={HeroImage1} alt="devManiaLogo"></Image>
      </div>
      <div className="absolute left-2 top-0">
        <Image src={HeroImage2} width={430} alt="devManiaLogo"></Image>
      </div>
      <div className="absolute -left-10 -bottom-10">
        <Image src={HeroImage3} width={430} alt="devManiaLogo"></Image>
      </div>
      <div className="absolute -right-8 -bottom-10">
        <Image src={HeroImage4} width={430} alt="devManiaLogo"></Image>
      </div>
      <div className="absolute">
        <Image
          src={HeroImage5}
          width={500}
          alt="devManiaLogo"
          className="opacity-40"
        ></Image>
      </div>
      <Image
        src={DevHouse}
        alt="devManiaLogo"
        className="px-12 md:p-0 z-50"
      ></Image>
      <div className="flex flex-row gap-8 z-50">
        <span className="flex flex-row items-center gap-2 ">
          <Image src={calendarIcon} alt="gcalicon"></Image>
          <p className="font-Inter-800 text-md sm:text-2xl">15th March 2024</p>
        </span>
        <span className="flex flex-row items-center gap-2">
          <Image src={locationIcon} alt="location icon"></Image>
          <p className="font-Inter-800 text-md sm:text-2xl">Chennai</p>
        </span>
      </div>
      <span className="bg-blue-500 rounded-md font-bold text-2xl px-4 py-3 text-white hover:scale-110 transition-transform ease-out z-50">
        <Link href="/">Register Now! </Link>
      </span>
    </div>
  );
}
