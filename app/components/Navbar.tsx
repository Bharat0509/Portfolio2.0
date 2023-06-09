"use client";

import Link from "next/link";
import useRoutes from "../hooks/useRouter";
import { SiCodenewbie } from "react-icons/si";
import LiComponent from "./LiComponent";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const Navbar = () => {
    const routes = useRoutes();
    return (
        <div className='lg:pb-0'>
            <div className='mx-auto container max-w-[1280px]'>
                <header className='py-2 px-4 lg:px-0 md:py-0 flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]'>
                    <div className='font-medium text-2xl text-red-600 p-2 '>
                        {/* <SiCodenewbie size={50} /> */}
                        <h1>Bharat Bhammar</h1>
                    </div>
                    <nav className='lg:block relative '>
                        <div className='md:hidden'>
                            <RiBarChartHorizontalLine size={34} />
                        </div>
                        <ul className='hidden md:flex flex-col md:flex-row my-12'>
                            {routes.map((route) => (
                                <LiComponent
                                    key={route.href}
                                    label={route.label}
                                    href={route.href}
                                    icon={route.icon}
                                    active={route.active}
                                />
                            ))}
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
};

export default Navbar;
