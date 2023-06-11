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
import Heading from "../components/Heading";
export const metadata = {
    title: "About Bharat Bhammar - Full Stack Web Developer",
    description:
        "Bharat Bhammar is a skilled Full Stack Web Developer with expertise in JavaScript, ReactJS, Node.js, and more. Explore Bharat's portfolio and projects.",
};
const about = () => {
    const personalInfo = [
        {
            label: "Phone",
            value: "+123 456 789",
            icon: <MdOutlinePhoneIphone />,
            color: "text-red-600",
            href: "tel:+918141467725",
        },
        {
            label: "Location",
            value: "Surat Gujrat",
            color: "text-red-400",
            icon: <MdOutlineLocationOn />,
        },
        {
            label: "Email",
            value: "example@gmail.com",
            icon: <MdOutlineMail />,
            color: "text-[#6ab5b9]",
            href: "mailto:bhartbhammar3336@gmail.com",
        },
        {
            label: "LinkedIn",
            value: "fafdaafveerrerrererer",
            href: "#",
            color: "text-[#c17ceb]",
            icon: <MdPublic />,
        },
    ];

    const whatiDo = [
        {
            icon: <BiCodeAlt />,
            label: "Full Stack Development",
            value: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. ",
            color: "text-[#269fff]",
            bg: "bg-[#269fff]/10",
        },
        {
            icon: <RiPagesFill />,
            label: "Frontend Development",
            value: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. ",
            color: "text-[#6ab5b9]",
            bg: "bg-[#6ab5b9]/10",
        },
        {
            icon: <BsServer />,
            label: "Backend Development",
            value: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. ",
            color: "text-[#c17ceb]",
            bg: "bg-[#c17ceb]/10",
        },
        {
            icon: <GoTextSize />,
            label: "UI/UX Development",
            value: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. ",
            color: "text-[#dda10c]",
            bg: "bg-[#dda10c]/10",
        },
        {
            icon: <FcMindMap />,
            label: "Native App Development",
            value: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. ",
            color: "text-[#269fff]",
            bg: "bg-[#269fff]/10",
        },
        {
            icon: <GrGraphQl />,
            label: "Data Structure and Algorithms",
            value: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. ",
            color: "text-[#ff6080]",
            bg: "bg-[#ff6080]/10",
        },
    ];
    return (
        <div className='container lg:rounded-2xl bg-white px-4 sm:px-5 md:px-10 md:pt-10 lg:px-20 max-w-[1280px] mx-auto h-auto dark:bg-[#111] text-white/80'>
            <div data-aos='fade' className='aos-init aos-animate'>
                <div className='pt-12'>
                    <Heading title='About Me' />

                    <div className='flex flex-col rounded-full md:flex-row md:gap-10 items-center'>
                        <div
                            className='object-cover relative col-span-12 md:col-span-4  
                        w-[90%]  md:w-1/2 h-80 rounded-3xl overflow-hidden '
                        >
                            <Image
                                alt='oc'
                                src='/myImg.jpg'
                                fill
                                className='bg-cover scale-150'
                            />
                        </div>
                        <div className='mt-4 md:mt-0 space-y-2.5'>
                            <div className='md:mr-12 xl:mr-16'>
                                <h3 className='text-2xl font-medium mb-2.5 '>
                                    Who am i?
                                </h3>

                                <p className='text-gray-lite dark:text-color-910 leading-7'>
                                    I`m Creative Director and UI/UX Designer
                                    from Sydney, Australia, working in web
                                    development and print media. I enjoy turning
                                    complex problems into simple, beautiful and
                                    intuitive designs.
                                </p>
                                <p className='text-gray-lite leading-7 mt-2.5 dark:text-color-910'>
                                    My aim is to bring across your message and
                                    identity in the most creative way. I created
                                    web design for many famous brand companies.
                                </p>
                            </div>
                            <div className='md:mr-12 xl:mr-16'>
                                <h3 className='text-2xl font-medium mb-2.5 '>
                                    Personal Info
                                </h3>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                    {personalInfo.map((item) => (
                                        <div key={item.label} className='flex'>
                                            <span
                                                className={`text-oriange shadow-md mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 ${item.color}  dark:bg-[#212020]`}
                                            >
                                                {item.icon}
                                            </span>
                                            <div className='space-y-1'>
                                                <h4 className='text-sm text-gray-600 '>
                                                    {item.label}
                                                </h4>
                                                <h2 className='font-medium cursor-pointer '>
                                                    <a
                                                        href={item.href}
                                                        className='hover:text-[#FA5252] dark:text-white/80 duration-300 transition'
                                                    >
                                                        {item.value}
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12 pb-12'>
                        <h3 className='text-[35px] font-medium pb-5 dark:text-white/80'>
                            What I do!
                        </h3>
                        <div className='flex flex-wrap items-center justify-center gap-4'>
                            {whatiDo.map((item) => (
                                <div
                                    key={item.label}
                                    className={`p-4 ${item.bg} w-full lg:w-[31%] md:w-[45%]  rounded-2xl space-y-2`}
                                >
                                    <div className='flex'>
                                        <span
                                            className={`text-5xl ${item.color}`}
                                        >
                                            {item.icon}
                                        </span>
                                        <span className='my-auto pl-2 text-xl font-semibold dark:text-white/80 '>
                                            {item.label}
                                        </span>
                                    </div>
                                    <div className='pl-14 text-gray-600'>
                                        {item.value}
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

export default about;
