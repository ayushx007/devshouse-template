import React from "react";
import { MdSend } from "react-icons/md";
import { BiSolidMicrophone } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import img from "public/assets/vitimage.png"


const AboutVit = () => {
	return (
		<div className="mx-6 sm:mx-10 md:mx-16">
			<div className="flex my-4 gap-2">
				<GiHamburgerMenu color="black" size="25" />
				<p className="font-semibold">Bard</p>
				<p className="rounded-md border-2 border-[#5392F6] text-xs py-0.5 px-2 text-[#5392F6]">
					Experiment
				</p>
			</div>
			<div className="bg-[#F3F6FC] px-4 sm:px-6 md:px-8 py-2 rounded-lg">
				<img
					src="https://www.gstatic.com/lamda/images/sparkle_resting_v2_darkmode_2bdb7df2724e450073ede.gif
"
					alt="bard Gif"
					className="h-6"
				/>
				<p className="font-bold text-xl sm:text-2xl ">
					Hello again! Vellore Institute of Technology, Chennai
				</p>
				<p className="p-2 sm:p-4 text-neutral-500 text-sm font-medium">
				Vellore Institute of Technology, founded in 1984 is one of the leading engineering colleges in India. It aims to provide a world-class education that not only polishes technical mastery and analytical skills but also imbibes strong ethical values in their students.
				</p>
				
					<div className="flex flex-col items-center pt-12">
            <p className="font-bold text-[1.689rem] border-2 max-w-max rounded-[1.875rem] kl pl-8 pr-8 pt-2 pb-2 border-black ">A Place To Learn,A Chance To Grow</p>
            <Image src={img} width={500}
      height={500}  
      alt="Picture of  VIT" className="pt-8 bg-transparent"/>
      </div>
				<div className="py-2 flex mb-2 gap-1">
					<div className="h-10 w-full bg-white text-sm py-2 px-1 sm:px-4 rounded-full sm:mx-6 text-neutral-500 border-2 border-black flex justify-between gap-1">
						<p className="ml-4 overflow-hidden">
							Can you give me a brief description of VIT Chennai?
						</p>
						<BiSolidMicrophone size="20" />
					</div>
					<div className="flex items-center ">
						<MdSend color="black" size="25" />
					</div>
				</div>
			</div>
		</div>
		
	);
};

export default AboutVit;
