import Image from "next/image";
import {
    MdOutlinePhoneIphone,
    MdOutlineLocationOn,
    MdOutlineMail,
    MdPublic,
} from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { BsServer } from "react-icons/bs";
import { FcMindMap } from "react-icons/fc";
import { RiPagesFill } from "react-icons/ri";
import { GoTextSize } from "react-icons/go";
import { GrGraphQl } from "react-icons/gr";
import { FaAward } from "react-icons/fa";
import { AiTwotoneExperiment } from "react-icons/ai";

import { LuFolderSearch2 } from "react-icons/lu";
import Heading from "../components/Heading";
import { IoMdSchool } from "react-icons/io";

const resume = () => {
    const myEducation = [
        {
            year: "2021-Present",
            course: "B.Tech  Computer Science and Engineering",
            organization: "NIT Surat, Surat, Gujarat",
            academic: {
                label: "CGPA",
                value: "9.08",
            },
            color: "text-[#f95054]",
            bg: "bg-[#f95054]/10",
        },
        {
            year: "2019-2021",
            course: "Higher Secondary School Certificate",
            organization: "School GSEB, Bhavnagar , Gujarat",
            academic: {
                label: "Percentile",
                value: "99.48",
            },
            color: "text-[#6ab5b9]",
            bg: "bg-[#6ab5b9]/10",
        },
        {
            year: "2018-2019",
            course: "Secondary School Certificate",
            organization: "School GSEB, Bhavnagar , Gujarat",
            academic: {
                label: "Percentile",
                value: "99.42",
            },
            color: "text-[#269fff]",
            bg: "bg-[#269fff]/10",
        },
    ];

    const myAwards = [
        {
            year: "2021-Present",
            course: "Solved 300+ DSA Question on Leetcode",
            organization: "Leetcode",
            color: "text-[#269fff]",
            bg: "bg-[#269fff]/10",
        },
        {
            year: "2022-2023",
            course: "1st In ACM Inception 2.0",
            organization: "ACM NIT Surat",
            color: "text-[#f95054]",
            bg: "bg-[#f95054]/10",
        },
    ];
    const myExperience = [
        {
            year: "2022-2023",
            course: "Junior Developer",
            organization: "GDSC NIT Surat",

            color: "text-[#6ab5b9]",
            bg: "bg-[#6ab5b9]/10",
        },
    ];

    const mySkills = [
        {
            skill: "Programming Languages",
            tools: ["C", "C++", "Javascript", "C#", "Python"],
            bg: "bg-[#269fff]/10",
        },
        {
            skill: "Frontend Development",
            tools: [
                "HTML",
                "CSS",
                "SCSS",
                "ReactJs",
                "NextJs",
                "TailwindCSS",
                "MUI",
                "Bootstrap",
            ],
            bg: "bg-[#f95054]/10",
        },
        {
            skill: "Backend Development",
            tools: [
                "NodeJs",
                "ExpressJs",
                "NextJs Server Actions",
                "SQL",
                "My-SQL",
                "PostGresSQl",
                "SanityIO",
            ],
            bg: "bg-[#269fff]/10",
        },
        {
            skill: "Databases",
            tools: [
                "MongoDB",
                "Firebase",
                "Supabase",
                "PlanetScale",
                "Prisma ORM",
            ],
            bg: "bg-[#f95054]/10",
        },
    ];

    return (
        <div className='container lg:rounded-2xl bg-white px-4 sm:px-5 md:px-10 md:pt-10 lg:px-20 max-w-[1280px] mx-auto h-auto'>
            <div data-aos='fade' className='aos-init aos-animate'>
                <div className='pt-12'>
                    <Heading title='Resume' />

                    <div className='my-8 md:mt-0 space-y-2.5'>
                        <div className='md:mr-12 xl:mr-16'>
                            <h3 className='text-2xl font-medium mb-2.5 flex gap-2 items-center'>
                                <span className='text-[#f95054]'>
                                    <IoMdSchool size={32} />
                                </span>
                                Education
                            </h3>
                        </div>
                        <div className='flex flex-col md:flex-row flex-wrap gap-4 my-12'>
                            {myEducation.map((item) => (
                                <div
                                    key={item.year}
                                    className={`p-4 ${item.bg} w-full lg:w-[31%] md:w-[45%]  rounded-lg space-y-2 relative hover:shadow-md`}
                                >
                                    <span
                                        className={`text-sm text-gray-600 font-medium`}
                                    >
                                        {item.year}
                                    </span>
                                    <div className='font-semibold t'>
                                        {item.course}
                                    </div>

                                    <div className=' text-gray-600'>
                                        {item.organization}
                                    </div>
                                    <div className='absolute shadow-sm bg-white p-1 pl-4 w-fit top-1 right-0 text-green rounded-l-full'>
                                        <span className='font-medium text-gray-600'>
                                            {item.academic.label}:{" "}
                                        </span>
                                        <span className='font-medium text-green-600 pr-2'>
                                            {item.academic.value}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='my-8 md:mt-0 space-y-2.5'>
                        <div className='md:mr-12 xl:mr-16'>
                            <h3 className='text-2xl font-medium mb-2.5 flex gap-2 items-center'>
                                <span className='text-[#f95054]'>
                                    <FaAward size={32} />
                                </span>
                                Awards
                            </h3>
                        </div>
                        <div className='flex flex-col md:flex-row flex-wrap gap-4 my-12'>
                            {myAwards.map((item) => (
                                <div
                                    key={item.year}
                                    className={`p-4 ${item.bg} w-full lg:w-[31%] md:w-[45%]  rounded-lg space-y-2 relative hover:shadow-md`}
                                >
                                    <span
                                        className={`text-sm text-gray-600 font-medium`}
                                    >
                                        {item.year}
                                    </span>
                                    <div className='font-semibold t'>
                                        {item.course}
                                    </div>

                                    <div className=' text-gray-600'>
                                        {item.organization}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='my-8 md:mt-0 space-y-2.5'>
                        <div className='md:mr-12 xl:mr-16'>
                            <h3 className='text-2xl font-medium mb-2.5 flex gap-2 items-center'>
                                <span className='text-[#f95054]'>
                                    <LuFolderSearch2 size={32} />
                                </span>
                                Skills
                            </h3>
                        </div>
                        <div className='flex flex-col  md:flex-row flex-wrap gap-2 bg-gray-400/10 p-4 rounded-md'>
                            {mySkills.map((item) => (
                                <div
                                    key={item.skill}
                                    className={`p-4 w-full lg:w-[24%] md:w-[49%] rounded-lg space-y-2 relative `}
                                >
                                    <h3
                                        className={`text-lg text-gray-600 font-semibold `}
                                    >
                                        {item.skill}
                                    </h3>
                                    <div className='flex flex-wrap gap-2'>
                                        {item.tools.map((item) => (
                                            <span
                                                key={item}
                                                className='bg-gray-600/5 p-2 rounded-sm'
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='py-4 w-full text-center text-gray-600'>
                        © 2023 All Rights Reserved by Bharat.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default resume;
