import React from "react";
import { MdSend } from "react-icons/md";
import { BiSolidMicrophone } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const AboutEvent = () => {
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
					Hello again! DevMania ‘24
				</p>
				<p className="p-2 sm:p-4 text-neutral-500 text-sm font-medium">
					DevMania Hackathon by GDSC VIT Chennai, an annual tech innovation
					event, calls upcoming engineers, designers, and entrepreneurs from
					across the country to explore new ideas for the future. It offers
					students the opportunity to create, connect, and showcase their
					innovative solutions to solve real-world challenges.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-2 gap-6 mb-2">
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
				</div>
				<div className="py-2 flex mb-2 gap-1">
					<div className="h-10 w-full bg-white text-sm py-2 px-1 sm:px-4 rounded-full sm:mx-6 text-neutral-500 border-2 border-black flex justify-between gap-1">
						<p className="ml-4 overflow-hidden">
							Why is DevMania the go-to hackathon event?
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

export default AboutEvent;
