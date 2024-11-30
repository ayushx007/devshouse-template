"use client";
import React, { useEffect } from "react";
import devManiaLogo from "../../public/images/DevsHouse.svg";
import calendarIcon from "../../public/images/cal-icon.png";
import locationIcon from "../../public/images/location.png";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdEventAvailable } from "react-icons/md";
import HeroImage1 from "../../public/gifs/1.gif";
import HeroImage2 from "../../public/gifs/2.gif";
import HeroImage3 from "../../public/gifs/3.gif";
import HeroImage4 from "../../public/gifs/4.gif";
import HeroImage5 from "../../public/gifs/5.gif";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="flex mt-10 h-[90vh] flex-col items-center justify-center gap-4 bg-white bg-cover bg-no-repeat bg-center">
      <div className="absolute -right-52 rotate-90 -top-36 hidden md:block">
        <Image src={HeroImage1} alt="devManiaLogo"></Image>
      </div>
      <div className="absolute left-2 top-0 hidden md:block">
        <Image src={HeroImage2} width={400} alt="devManiaLogo"></Image>
      </div>
      <div className="absolute -left-10 -bottom-10 hidden md:block">
        <Image src={HeroImage3} width={400} alt="devManiaLogo"></Image>
      </div>
      <div className="absolute -right-8 -bottom-10 hidden md:block">
        <Image src={HeroImage4} width={400} alt="devManiaLogo"></Image>
      </div>
      <div className="absolute">
        <Image src={HeroImage5} width={500} alt="devManiaLogo" className="opacity-40"></Image>
      </div>
      <Image src={devManiaLogo} alt="devManiaLogo" className="px-12 md:p-0 z-50"></Image>
      <div className="flex flex-col gap-4 z-50 items-center">
        <span className="flex flex-row items-center gap-2 underline">
          <Link
            href={
              "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250214T013000Z%2F20250216T133000Z&details=&location=VIT%20Chennai&text=DevsHouse '25"
            }
            className="font-Inter-800 text-md sm:text-2xl"
          >
            February 14th - 16th, 2025
          </Link>
        </span>

        <span className="flex flex-row items-center gap-2 underline">
          <Link
            target="_blank"
            href={"https://maps.app.goo.gl/CPiU5WWe2WAAR6peA"}
            className="font-Inter-800 text-md sm:text-2xl"
          >
            VIT, Chennai
          </Link>
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center relative">
        <div
          className="apply-button-wrapper z-50 bg-blue-500 rounded-md font-bold text-sm md:text-xl px-2 md:px-4 py-2 md:py-3 text-white hover:scale-110 transition-transform ease-out"
          style={{ position: 'relative', zIndex: 50 }} 
        >
          <div
            className="apply-button"
            data-hackathon-slug="devshouse25"
            data-button-theme="light"
            style={{ height: '44px', width: '312px' }}
          ></div>
        </div>

        <span className="flex items-center gap-2 bg-blue-500 rounded-md font-bold text-sm md:text-xl px-2 md:px-4 py-2 md:py-3 text-white hover:scale-110 transition-transform ease-out z-50">
          <HiOutlineSpeakerphone />
          <Link target="_blank" href="https://discord.gg/UFfPjTtzh7">
            Join our Community
          </Link>
        </span>
      </div>
    </div>
  );
}
