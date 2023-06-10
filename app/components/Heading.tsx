interface HeadingProps {
    title: string;
}
const Heading: React.FC<HeadingProps> = ({ title }) => {
    return (
        <h2 className='relative font-semibold text-4xl lg:mt-0 my-6'>
            <span className=''>{title}</span>
            <span className='absolute top-1/2 ml-5 h-[0.150rem] w-32 sm:w-25 rounded-md bg-gradient-to-r from-[#FA5252] to-[#DD2476]'></span>
        </h2>
    );
};

export default Heading;
