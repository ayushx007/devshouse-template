"use client";

import handdrawnCircle from "../../public/images/HanddrawnCircle.svg";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useWindowDimensions from "@/Hooks/useWindowDimensions";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";

import devfolio from "../../public/images/SponsorIcons/devfolio 1.png";
import dubeat from "../../public/images/SponsorIcons/du beat.png";
import fossunited from "../../public/images/SponsorIcons/foss uninted 1.png";
import fossip from "../../public/images/SponsorIcons/fossip.png";
import gdglogo from "../../public/images/SponsorIcons/gdg logo.png";
import zeeve from "../../public/images/SponsorIcons/zeeve.png";

export default function PrevSponsors() {
  const images = [devfolio, dubeat, fossunited, fossip, gdglogo, zeeve];

  const { width } = useWindowDimensions();

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><path stroke="none" fill="#20be86" d="M59 2.8867513459481a10 10 0 0 1 10 0l45.425625842204 26.226497308104a10 10 0 0 1 5 8.6602540378444l0 52.452994616207a10 10 0 0 1 -5 8.6602540378444l-45.425625842204 26.226497308104a10 10 0 0 1 -10 0l-45.425625842204 -26.226497308104a10 10 0 0 1 -5 -8.6602540378444l0 -52.452994616207a10 10 0 0 1 5 -8.6602540378444"></path></svg>`;

  return (
    <div id="sponsors" className="flex flex-col p-8">
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
          pagination={true}
          modules={[Navigation, Pagination]}
          className="mySwiper w-3/4"
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
                    <Image src={e} alt={"image" + i} className="opacity-0" />
                    <Image src={e} alt={"image" + i} className={`[clip-path: url(${svg})]`} />
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
