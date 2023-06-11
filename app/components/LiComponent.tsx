"use client";
import Link from "next/link";
import React from "react";
interface LiComponentProps {
    label: string;
    href: string;
    icon: any;
    active?: boolean;
    onClick: () => void;
}
const LiComponent: React.FC<LiComponentProps> = ({
    label,
    href,
    icon: Icon,
    active,
    onClick,
}) => {
    return (
        <li className='mb-1' onClick={onClick}>
            <Link
                className={`px-2 rounded-md  cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-sn py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6]  ${
                    active
                        ? "bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-white"
                        : ""
                }
                `}
                href={href}
            >
                <span className='mr-2 text-xl  '>
                    <Icon />
                </span>
                {label}
            </Link>
        </li>
    );
};

export default LiComponent;
