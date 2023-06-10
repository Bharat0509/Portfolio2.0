"use client";

import Link from "next/link";
import useRoutes from "../hooks/useRouter";
import { SiCodenewbie } from "react-icons/si";
import LiComponent from "./LiComponent";
import { RiBarChartHorizontalLine, RiCloseFill } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
    const routes = useRoutes();
    const [isMobileNav, setIsMobileNav] = useState(false);
    const handleClick = () => {
        setIsMobileNav(false);
    };
    return (
        <div className='lg:pb-0'>
            <div className='mx-auto container max-w-[1280px]'>
                <header className='py-2 px-4 lg:px-0 md:py-0 flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111] transition-all duration-500 ease-in-out bg-white/90 md:bg-transparent'>
                    <div className='md:block font-medium text-2xl text-red-600 p-2 '>
                        {/* <SiCodenewbie size={50} /> */}
                        <h1 className='font-mono italic'>
                            <span className='font-extrabold'>B</span>
                            harat
                        </h1>
                    </div>
                    <nav className='md:block relative '>
                        <div className='md:hidden'>
                            <RiBarChartHorizontalLine
                                size={34}
                                onClick={(e) => setIsMobileNav(true)}
                            />
                        </div>
                        <ul className='hidden md:flex flex-col md:flex-row my-12'>
                            {routes.map((route) => (
                                <LiComponent
                                    key={route.href}
                                    label={route.label}
                                    href={route.href}
                                    icon={route.icon}
                                    active={route.active}
                                    onClick={handleClick}
                                />
                            ))}
                        </ul>
                    </nav>
                    {isMobileNav && (
                        <div
                            className={`fixed ${
                                isMobileNav ? "top-0" : "top-[-400%]"
                            } left-0  w-[100vw] h-[100vh] bg-gradient-to-b from-[#933030b6] to-[#fa525281] transition-all duration-500 ease-in-out`}
                        >
                            <ul className=' md:flex flex-col md:flex-row my-12'>
                                {routes.map((route) => (
                                    <LiComponent
                                        key={route.href}
                                        label={route.label}
                                        href={route.href}
                                        icon={route.icon}
                                        active={route.active}
                                        onClick={handleClick}
                                    />
                                ))}
                            </ul>
                            {isMobileNav && (
                                <div
                                    className='md:hidden flex  m-auto justify-center text-black-400 text-4xl rounded-full active:bg-red-600 h-12 w-12 active:text-white'
                                    onClick={(e) => setIsMobileNav(false)}
                                >
                                    <RiCloseFill className='h-12 w-12' />
                                </div>
                            )}
                        </div>
                    )}
                </header>
            </div>
        </div>
    );
};

export default Navbar;
