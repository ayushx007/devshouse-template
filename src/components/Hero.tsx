"use client";
import React from "react";
import devManiaLogo from "../../public/images/DevsHouse.svg";
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
    <div className="flex mt-10 h-[90vh] flex-col items-center justify-center gap-4 bg-[url('/images/background.png')] bg-cover bg-no-repeat bg-center">
      <Image src={DevHouse} alt="devManiaLogo" className="px-12 md:p-0"></Image>
      <div className="flex flex-row gap-8">
        <span className="flex flex-row items-center gap-2 ">
          <Image src={calendarIcon} alt="gcalicon"></Image>
          <p className="font-Inter-800 text-md sm:text-2xl">
            March 15th-17th 2024
          </p>
        </span>
        <span className="flex flex-row items-center gap-4">
          <Image src={locationIcon} alt="location icon"></Image>
          <Link
            href="https://maps.app.goo.gl/N25y8LdXWP7zgfSM6"
            target="_blank"
            rel="noopener noreferrer"
            className="font-Inter-800 text-md sm:text-2xl hover:scale-110 transition-transform ease-out"
          >
            VIT Chennai
          </Link>
        </span>
      </div>
      <span className="bg-blue-500 rounded-md font-bold text-2xl px-4 py-3 text-white hover:scale-110 transition-transform ease-out z-50">
        <Link href="/">Register Now! </Link>
      </span>
    </div>
  );
}
