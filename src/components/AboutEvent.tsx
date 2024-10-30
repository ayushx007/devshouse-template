import React from "react";
import { MdSend } from "react-icons/md";
import { BiSolidMicrophone } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import devsHouseImage from "../../public/devshouse_banner-cropped.png"; 
const AboutEvent = () => {
	return (
		<div id='about' className="mx-6 sm:mx-10 md:mx-16 my-20 scroll-mt-16">
			<div className="bg-[#F3F6FC] px-4 sm:px-6 md:px-8 py-10 rounded-lg">
				<p className="font-bold text-xl sm:text-2xl ">
					DevsHouse ‘25
				</p>
				<p className="p-2 sm:p-4 text-neutral-500 text-md font-medium">
					DevsHouse Hackathon by GDG On Campus - VIT Chennai, an annual tech innovation
					event, calls upcoming engineers, designers, and entrepreneurs from
					across the country to explore new ideas for the future. It offers
					students the opportunity to create, connect, and showcase their
					innovative solutions to solve real-world challenges.
				</p>
				{/* <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-2 gap-6 mb-2">
					<div className="bg-white rounded-xl p-2 sm:p-4">
						<p className="text-xl font-bold mb-2 bg-gradient-to-r from-[#CF8D7C] to-[#A77CB4] text-transparent bg-clip-text">
							Design
						</p>
						<p className="bg-[#F3F6FC] py-2 px-4  mb-2 rounded-full w-fit font-medium text-sm">
							Ideathon
						</p>
						<p className="bg-[#F3F6FC] py-2 px-4  mb-2 rounded-full w-fit font-medium text-sm">
							innovative Thinking
						</p>
						<p className="bg-[#F3F6FC] py-2 px-4  rounded-full w-fit font-medium text-sm">
							Conceptualization
						</p>
					</div>
					<div className="bg-white rounded-xl p-4">
						<p className="text-xl font-bold mb-2 bg-gradient-to-r from-[#A77CB4] to-[#7F7DD1] text-transparent bg-clip-text">
							Develop
						</p>
						<p className="bg-[#F3F6FC] py-2 px-4  mb-2 rounded-full w-fit font-medium text-sm">
							Collaboration
						</p>
						<p className="bg-[#F3F6FC] py-2 px-4  mb-2 rounded-full w-fit font-medium text-sm">
							Tech Stack Selection
						</p>
						<p className="bg-[#F3F6FC] py-2 px-4  rounded-full w-fit font-medium text-sm">
							Iteration
						</p>
					</div>
					<div className="bg-white rounded-xl p-4">
						<p className="text-xl font-bold mb-2 bg-gradient-to-r from-[#7F7DD1] via-[#548DD9] to-[#548DD9] text-transparent bg-clip-text">
							Deploy
						</p>
						<p className="bg-[#F3F6FC] py-2 px-4  mb-2 rounded-full w-fit font-medium text-sm">
							Implementation
						</p>
						<p className="bg-[#F3F6FC] py-2 px-4  mb-2 rounded-full w-fit font-medium text-sm">
							Scalability
						</p>
						<p className="bg-[#F3F6FC] py-2 px-4  rounded-full w-fit font-medium text-sm">
							Strategies
						</p>
					</div>
				</div> */}

<div className="flex flex-col items-center pt-4">
					<Image src={devsHouseImage} width={350}
						height={350}
						alt="DevsHouse Poster" className="pt-8 bg-transparent" />
				</div>
				
			</div>
		</div>
	);
};

export default AboutEvent;
