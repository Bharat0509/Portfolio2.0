import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillCloudDownloadFill } from "react-icons/bs";
const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-32 lg:pt-0 '>
            <div className='bg-red-500 h-60 w-60 overflow-hidden image-blob'>
                <Image src='/myImg.jpg' alt='bharat' height={400} width={400} />
            </div>
            <div>
                <div className='font-semibold text-3xl mt-8 text-center'>
                    Bharat Bhammar
                </div>
                <div className='flex items-center justify-center w-full font-semibold text-gray-500 text-sm mt-2'>
                    Full Stack Web Developer
                </div>
                <div className='flex justify-center my-6'>
                    <div className='px-2 rounded-md  cursor-pointer font-poppins bg-white text-blue-800 font-medium mx-2.5 flex text-xtiny py-2.5 md:px-3 xl:px-3 items-center transition-all duration-300 ease-in-out  hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] '>
                        <FaFacebookF />
                    </div>
                    <div className='px-2 rounded-md  cursor-pointer font-poppins bg-white text-[#1c9cea] font-medium mx-2.5 flex text-xtiny py-2.5 md:px-3 xl:px-3 items-center transition-all duration-300 ease-in-out  hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]'>
                        <FaTwitter size={22} />
                    </div>

                    <div className='px-2 rounded-md  cursor-pointer font-poppins bg-white text-black font-medium mx-2.5 flex text-xtiny py-2.5 md:px-3 xl:px-3 items-center transition-all duration-300 ease-in-out  hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]'>
                        <FaGithub size={22} />
                    </div>

                    <div className='px-2 rounded-md  cursor-pointer font-poppins bg-white text-[#0072b1] font-medium mx-2.5 flex text-xtiny py-2.5 md:px-3 xl:px-3 items-center transition-all duration-300 ease-in-out  hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]'>
                        <FaLinkedinIn size={22} />
                    </div>
                </div>
            </div>
            <a
                download={"/prof.png"}
                href='/bg.png'
                className='flex  gap-2 justify-center items-center p-4 text-2xl rounded-full  cursor-pointer font-poppins  font-medium py-2.5 md:px-4 xl:px-6 transition-all duration-300 ease-in-out  text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476] '
            >
                <span className='text-white'>
                    <BsFillCloudDownloadFill size={22} />
                </span>
                Download CV
            </a>
        </div>
    );
};

export default Hero;
