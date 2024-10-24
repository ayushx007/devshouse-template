import Image from "next/image";
import img from "../../public/images/GDSC-Team.svg";


const AboutVit = () => {
	return (
		<div className="mx-6 sm:mx-10 md:mx-16 my-20">

			<div className="bg-[#F3F6FC] px-4 sm:px-6 md:px-8 py-10 rounded-lg">
				<p className="font-bold text-xl sm:text-2xl ">
					Vellore Institute of Technology, Chennai
				</p>
				<p className="p-2 sm:p-4 text-neutral-500 text-sm font-medium">
					Vellore Institute of Technology, founded in 1984 is one of the leading engineering colleges in India. It aims to provide a world-class education that not only polishes technical mastery and analytical skills but also imbibes strong ethical values in their students.
				</p>

				<div className="flex flex-col items-center pt-12">
					<p className="font-bold text-[1.689rem] border-2 max-w-max rounded-[1.875rem] kl pl-8 pr-8 pt-2 pb-2 border-black ">A Place To Learn,A Chance To Grow</p>
					<Image src={img} width={500}
						height={500}
						alt="Picture of  VIT" className="pt-8 bg-transparent" />
				</div>

			</div>
		</div>

	);
};

export default AboutVit;
