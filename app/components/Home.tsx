"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillCloudDownloadFill } from "react-icons/bs";
const Hero = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-32 lg:pt-0  '>
            <motion.div
                initial={{ x: -200, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='bg-red-500/10 h-72 w-72 overflow-hidden rounded-full'
            >
                <Image
                    src='/myImg.jpg'
                    alt='Bhammar Bharat'
                    height={400}
                    width={400}
                />
            </motion.div>

            <motion.div
                initial={{ x: 200, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className='font-semibold text-3xl mt-8 text-center'>
                    Bharat Bhammar
                </div>
                <div className='flex items-center justify-center w-full  text-gray-500 text-sm mt-2 tracking-wide'>
                    Full Stack Web Developer
                </div>
                <div className='flex justify-center my-6'>
                    <div className='px-2 rounded-md  cursor-pointer font-poppins bg-white text-blue-800 font-medium mx-2.5 flex text-sm py-2.5 md:px-3 xl:px-3 items-center transition-all duration-300 ease-in-out  hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#212425]'>
                        <FaFacebookF />
                    </div>
                    <div className='px-2 rounded-md  cursor-pointer font-poppins bg-white text-[#1c9cea] font-medium mx-2.5 flex text-sm py-2.5 md:px-3 xl:px-3 items-center transition-all duration-300 ease-in-out  hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#212425]'>
                        <FaTwitter size={22} />
                    </div>

                    <div className='px-2 rounded-md  cursor-pointer font-poppins bg-white text-black font-medium mx-2.5 flex text-sm py-2.5 md:px-3 xl:px-3 items-center transition-all duration-300 ease-in-out  hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#212425] dark:text-blue-400 dark:hover:text-white'>
                        <FaGithub size={22} />
                    </div>

                    <div className='px-2 rounded-md  cursor-pointer font-poppins bg-white text-[#0072b1] font-medium mx-2.5 flex text-sm py-2.5 md:px-3 xl:px-3 items-center transition-all duration-300 ease-in-out  hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:bg-[#212425]'>
                        <FaLinkedinIn size={22} />
                    </div>
                </div>
            </motion.div>
            <motion.a
                initial={{ y: 200, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                download={"/prof.png"}
                href='/bg.png'
                className='flex  gap-2 justify-center items-center p-4 text-2xl rounded-full  cursor-pointer font-poppins  font-medium py-2.5 md:px-4 xl:px-6 transition-all duration-300 ease-in-out  text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476]  font-mono'
            >
                <span className='text-white'>
                    <BsFillCloudDownloadFill size={22} />
                </span>
                Download Resume
            </motion.a>
        </div>
    );
};

export default Hero;
