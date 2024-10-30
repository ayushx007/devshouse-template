"use client";

import handdrawnCircle from "../../public/images/HanddrawnCircle.svg";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowDimensions from "@/Hooks/useWindowDimensions";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import dubeat from "../../public/images/SponsorIcons/du beat.png";
import fossunited from "../../public/images/SponsorIcons/foss uninted 1.png";
import fossip from "../../public/images/SponsorIcons/fossip.png";
import gdglogo from "../../public/images/SponsorIcons/gdg logo.png";
import zeeve from "../../public/images/SponsorIcons/zeeve.png";
import aops from "../../public/images/SponsorIcons/aops.png";
import axure from "../../public/images/SponsorIcons/axure.png";
import beeceptor from "../../public/images/SponsorIcons/beeceptor.png";
import berger from "../../public/images/SponsorIcons/berger.png";
import choice from "../../public/images/SponsorIcons/choice.png";
import cybrance from "../../public/images/SponsorIcons/cybrance.png";
import devfolio from "../../public/images/SponsorIcons/devfolio.png";
import echo3d from "../../public/images/SponsorIcons/echo3d.png";
import esales from "../../public/images/SponsorIcons/esales.png";
import github from "../../public/images/SponsorIcons/github.png";
import iblogotransparent from "../../public/images/SponsorIcons/iblogotransparent.png";
import integra from "../../public/images/SponsorIcons/integra.png";
import NB from "../../public/images/SponsorIcons/NB-2.0-logo-1.png";
import netweb from "../../public/images/SponsorIcons/netweb.png";
import polygon from "../../public/images/SponsorIcons/polygon.png";
import quillaudits from "../../public/images/SponsorIcons/quillaudits.png";
import redbull from "../../public/images/SponsorIcons/redbull.png";
import replit from "../../public/images/SponsorIcons/replit.png";
import skynyx from "../../public/images/SponsorIcons/skynyx.png";
import solana from "../../public/images/SponsorIcons/solana.png";
import superteam from "../../public/images/SponsorIcons/superteam.png";
import sybgen from "../../public/images/SponsorIcons/sybgen.png";
import verbwire from "../../public/images/SponsorIcons/verbwire.png";
import wolfgram from "../../public/images/SponsorIcons/wolfram.png";
import zsecurity from "../../public/images/SponsorIcons/ZSecurity.png";

export default function PrevSponsors() {
  const images = [
    devfolio, dubeat, fossunited, fossip, gdglogo, zeeve, aops, axure, beeceptor, berger,
    choice, cybrance, echo3d, esales, github, iblogotransparent, integra, NB, netweb, polygon,
    quillaudits, redbull, replit, skynyx, solana, superteam, sybgen, verbwire, wolfgram, zsecurity
  ];

  const { width } = useWindowDimensions();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><path stroke="none" fill="#20be86" d="M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444"></path></svg>`;

  return (
    <div id="sponsors" className="flex flex-col p-8 scroll-mt-12">
      <div className="md:ml-8">
        <div className="flex flex-col items-center">
          <span className="mr-32 md:mr-64 w-fit bg-[url('../../public/images/HanddrawnCircle.svg')] bg-no-repeat bg-center bg-contain">
            <p className="text-3xl md:text-5xl font-Inter-500 my-6 mx-12 p-4">Previous</p>
          </span>
          <span className="md:-mt-16 -mt-6 md:ml-64 ml-32 -z-10  w-fit bg-[url('../../public/images/sponsorsBox.svg')] bg-no-repeat bg-contain ">
            <p className="text-3xl md:text-5xl font-Inter-500 pb-12 px-12 mt-6">Sponsors</p>
          </span>
        </div>
      </div>
      <div className="my-12">
        <Swiper
          slidesPerView={width! < 1267 ? 2 : 4}
          spaceBetween={0}
          navigation={true}
          mousewheel={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper md:w-3/4"
        >
          {images.map((e, i) => {
            return (
              <SwiperSlide key={i}>
                {i % 2 === 0 ? (
                  <div className="flex flex-row items-center justify-center p-12 ">
                    <Image src={e} alt={"image" + i} />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center -mt-20 p-12">
                    <Image src={e} alt={"image" + i} className={`[clip-path: url(${svg})] m-12`} />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
