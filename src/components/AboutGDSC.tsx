import React from 'react';
import Image from 'next/image';

const AboutGDSC = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mt-10 py-10 -mb-96 overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="mb-4 md:mb-0 md:mr-4">
          <Image
            src="/Pasted Graphic 1.png"
            alt=""
            height={47}
            width={43}
            className='relative  bottom-24 mb:left-16 left-16 sm:inline-block hidden '
          />
        </div>

        <div className="text-center md:text-left md:ml-8">
          <h1 className="text-3xl md:text-5xl font-Inter-500 text-center mb-4">Google Developer Student Clubs</h1>
          <Image
            src="/Pasted Graphic 5.png"
            height={115}
            width={746}
            alt=""
            className="mb-4 md:mb-0"
          />
        </div>

        <div className="mt-4 md:mt-0">
          <Image
            src="/Pasted Graphic 6.png"
            height={84.1}
            width={84.1}
            alt=""
            className='sm:inline-block hidden relative bottom-10 right-3'
          />
        </div>
      </div>

      <p className="text-lg md:text-2xl text-slate-400 md:w-3/4 text-justify mt-5 leading-relaxed px-6">
        GDSC VIT Chennai is a student run community group powered by Google Developers. We are a passionate group of
        budding developers who work together to build solutions for local businesses and communities with Google
        technology and promote a healthy developer culture.
      </p>

      <Image src="/Pasted Graphic 7.png" alt="" height={418.21} width={668.3} />

      <div className="w-[110%] h-[348px] bg-[#242425] rounded-[50%] relative bottom-[158px] -z-10 "></div>
    </div>
  );
};

export default AboutGDSC;
