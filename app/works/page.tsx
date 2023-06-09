import Image from "next/image";
import Heading from "../components/Heading";
import { HiDocumentAdd, HiOutlineDocumentAdd } from "react-icons/hi";

import { BsCode } from "react-icons/bs";

import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

const works = () => {
    const myWorks = [
        {
            id: "Full Stack",
            img: "https://bostami-next.vercel.app/_next/image?url=%2Fimages%2Fwork_images%2Fsmall%2F1.jpg&w=384&q=75",
            preview: "https://google.com",
            project: "Website",
            language: "MERN",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
            extra: {
                username: "User1",
                password: "User@1234",
            },
            bg: "bg-[#f95054]/10",
        },
        {
            id: "Full Stack",
            img: "https://bostami-next.vercel.app/_next/image?url=%2Fimages%2Fwork_images%2Fsmall%2F1.jpg&w=384&q=75",
            project: "Website",
            preview: "https://google.com",
            language: "MERN",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
            extra: {
                username: "User1",
                password: "User@1234",
            },
            bg: "bg-[#6ab5b9]/10",
        },
        {
            id: "Full Stack",
            img: "https://bostami-next.vercel.app/_next/image?url=%2Fimages%2Fwork_images%2Fsmall%2F1.jpg&w=384&q=75",
            project: "Website",
            language: "MERN",
            preview: "https://google.com",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
            extra: {
                username: "User1",
                password: "User@1234",
            },
            bg: "bg-[#269fff]/10",
        },
        {
            id: "Full Stack",
            img: "https://bostami-next.vercel.app/_next/image?url=%2Fimages%2Fwork_images%2Fsmall%2F1.jpg&w=384&q=75",
            project: "Website",
            preview: "https://google.com",
            language: "MERN",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
            extra: {
                username: "User1",
                password: "User@1234",
            },
            bg: "bg-[#f95054]/10",
        },
        {
            id: "Full Stack",
            img: "https://bostami-next.vercel.app/_next/image?url=%2Fimages%2Fwork_images%2Fsmall%2F1.jpg&w=384&q=75",
            project: "Website",
            preview: "https://google.com",
            language: "MERN",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
            extra: {
                username: "User1",
                password: "User@1234",
            },
            bg: "bg-[#6ab5b9]/10",
        },
    ];
    return (
        <div
            className='container lg:rounded-2xl bg-white px-4 sm:px-5 md:px-10 md:pt-10
        
        
        
        
        
         lg:px-20 max-w-[1280px] h-auto mx-auto'
        >
            <div data-aos='fade' className='aos-init aos-animate'>
                <div className='pt-12'>
                    <Heading title='Portfolio' />
                    <div className='flex flex-wrap gap-4 '>
                        {myWorks.map((item) => (
                            <div
                                key={item.project}
                                className={`flex flex-col gap-2 w-[49%] rounded-md overflow-hidden ${item.bg}`}
                            >
                                <div className='relative w-full h-80'>
                                    <Image
                                        alt={item.project}
                                        src={item.img}
                                        fill
                                    />
                                </div>
                                <div className='p-4'>
                                    <div className='flex gap-2 items-center text-lg text-gray-600'>
                                        <span>
                                            <HiOutlineDocumentAdd />
                                        </span>
                                        Project :
                                        <span className='font-medium'>
                                            {item.project}
                                        </span>
                                    </div>
                                    <div className='flex gap-2 items-center text-lg text-gray-600'>
                                        <span>
                                            <BsCode />
                                        </span>
                                        Tech Used :
                                        <span className='font-medium'>
                                            {item.language}
                                        </span>
                                    </div>
                                    <div className='flex gap-2 items-center text-lg text-gray-600'>
                                        <span>
                                            <FiExternalLink />
                                        </span>
                                        Preview :
                                        <span className='font-medium'>
                                            {item?.preview}
                                        </span>
                                    </div>
                                </div>
                                <div className='p-4'>{item.desc}</div>
                                <div className='relative'>
                                    <div className=' p-4 flex flex-col justify-center -bottom-10 -right-5 m-auto absolute bg-green-600/10 rounded-full h-40 w-40'>
                                        <h3 className='font-bold text-red'>
                                            Demo Account
                                        </h3>
                                        <div className='text-xs font-semibold '>
                                            UserName: {item.extra.username}
                                        </div>
                                        <div className='text-xs font-semibold '>
                                            Password: {item.extra.password}
                                        </div>
                                    </div>
                                    <div className='flex items-center w-full p-4 gap-4 '>
                                        <Link
                                            href='#'
                                            className='transition-all duration-500 text-md bg-gradient-to-r  from-[#FA5252]/50 to-[#DD2476] border-2 border-[#d28282] hover:from-transparent hover:to-transparent rounded-md p-2 px-4 '
                                        >
                                            View Code
                                        </Link>
                                        <Link
                                            href='#'
                                            className='transition-all duration-500 text-md bg-gradient-to-r  hover:from-[#FA5252]/50 hover:to-[#DD2476] border-2 border-[#d28282] from-transparent to-transparent rounded-md p-2 px-4 '
                                        >
                                            Live Demo
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='py-4 w-full text-center text-gray-600'>
                        © 2023 All Rights Reserved by Bharat.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default works;
