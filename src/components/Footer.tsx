"use client"
import Image from 'next/image';
import Link from 'next/link';
import { IconContext } from "react-icons";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { RiThreadsFill, RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <IconContext.Provider value={{ color: "white", size: '25px' }}>

            <div className="flex justify-evenly items-center bg-gray-900 py-20" id="contacts">
                <div className="flex flex-col" data-aos="fade-right" data-aos-delay="600">
                    <div className="w-full px-8">
                        <h1 className="font-sans text-4xl text-white mb-10">Reach out to Us!</h1>
                        <div className="mb-8">
                            <h2 className="font-medium text-2xl text-white">Syed Omar Albeez</h2>
                            <h3 className="font-normal text-base text-white">Point of Contact</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <Link className="text-sm sm:text-md hover:text-blue-500" href="mailto:syedomar.albeez2022@vitstudent.ac.in">
                                <AiOutlineMail />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-medium text-2xl text-white">Amritansh Sharma</h2>
                            <h3 className="font-normal text-base text-white">Point of Contact</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <Link className="text-sm sm:text-md hover:text-blue-500" href="mailto:amritansh.code@gmail.com">
                                <AiOutlineMail />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-8 ">
                        <div className="flex justify-center gap-14 pt-8">
                            <Link href="https://www.instagram.com/gdscvitchennai/" target="_blank" rel="noreferrer">
                                <AiOutlineInstagram />                            </Link>
                            <Link href="https://www.linkedin.com/company/dsc-vit-chennai/" target="_blank" rel="noreferrer">
                                <AiOutlineLinkedin />                            </Link>
                            <Link href="mailto:gdsc.vitc@gmail.com" target="_blank" rel="noreferrer">
                                <AiOutlineMail />                                </Link>
                                <Link href="https://discord.gg/ACW93GrK" target="_blank" rel="noreferrer">
                                <BsDiscord />                            </Link>
                                <Link href="https://twitter.com/gdscvitc" target="_blank" rel="noreferrer">
                                <RiTwitterXFill />                            </Link>
                                <Link href="https://www.threads.net/@gdscvitchennai" target="_blank" rel="noreferrer">
                                <RiThreadsFill />                            </Link>

                        </div>
                    </div>
                </div>
                <div className="w-1/2 md:w-1/4">
                    <Image src="/Pasted Graphic 7.png" layout="responsive" height={1040} width={1040} alt="footer" />
                </div>
            </div>
        </IconContext.Provider>

    );
}

export default Footer;
