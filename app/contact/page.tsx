"use client";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Heading from "../components/Heading";
import { FcPhone } from "react-icons/fc";
import { FaMap } from "react-icons/fa";
import Input from "../components/Input";

const works = () => {
    const handleChange = () => {};
    const myContact = [
        {
            icon: <FcPhone />,
            label: "Phone",
            line1: "+91 1234567899",
            line2: "+91 9876543211",
            bg: "bg-violet-500/10",
        },
        {
            icon: <MdOutlineMarkEmailRead />,
            label: "Email",
            line1: "bhartbhammar@gmail.com",
            line2: "bharat@gmail.com",
            bg: "bg-blue-600/10",
        },
        {
            icon: <FaMap />,
            label: "Address",
            line1: "NIT Surat, Surat",
            line2: "Gujarat, India",
            bg: "bg-cyan-800/10",
        },
    ];
    return (
        <div className='container lg:rounded-2xl bg-white px-4 sm:px-5 md:px-10 lg:px-20 max-w-[1280px] h-auto mx-auto'>
            <div data-aos='fade' className='aos-init aos-animate'>
                <div className='pt-12'>
                    <Heading title='Contact' />
                    <div className='flex flex-col md:flex-row gap-10'>
                        <div className='flex flex-col gap-4 md:w-[40%]'>
                            {myContact.map((item) => (
                                <div
                                    key={item.label}
                                    className={`rounded-lg p-2 md:p-4 ${item.bg}`}
                                >
                                    <div className='flex gap-2 text-2xl items-center my-4'>
                                        <span className='text-3xl'>
                                            {item.icon}
                                        </span>
                                        <span className='font-medium'>
                                            {item.label}{" "}
                                        </span>
                                        :
                                    </div>
                                    <div className=' pl-4 text-gray-600 my-1'>
                                        {item.line1}
                                    </div>
                                    <div className=' pl-4 text-gray-600 my-1'>
                                        {item.line2}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='md:w-2/3  rounded-lg p-4 md:p-10 bg-gray-600/10 h-auto'>
                            <h3 className='text-2xl text-gray-600 leading-10'>
                                I`m always open to discussing product
                                <br />
                                <span className='font-semibold text-gray-700'>
                                    design work or freelance work.
                                </span>
                            </h3>
                            <form className='py-4 flex flex-col gap-4'>
                                <Input
                                    id='name'
                                    label='Name *'
                                    onChange={handleChange}
                                    type='text'
                                />

                                <Input
                                    id='email'
                                    label='Email *'
                                    onChange={handleChange}
                                    type='email'
                                />

                                <Input
                                    id='desc'
                                    label='Message *'
                                    onChange={handleChange}
                                    type='text'
                                />
                                <button
                                    type='submit'
                                    className='transition-all duration-500 p-2 px-10 mt-4 border-gray-600 border hover:bg-gradient-to-r w-fit from-[#FA5252] to-[#DD2476] hover:border-none rounded-md'
                                >
                                    Submit
                                </button>
                            </form>
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

export default works;
