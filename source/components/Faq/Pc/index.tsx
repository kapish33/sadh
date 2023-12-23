interface IndexProps {

}

const Index: React.FC<IndexProps> = () => {
    return (
        <div className="hidden relative h-screen w-full md:flex flex-col justify-center items-center xl:px-[212px] lg:px-[150px] md:px-[70px] text-base-white bg-[#001d2d45] font-open-sans">
            <p className="text-[36px] font-[700] mb-[33px]">FAQs</p>
            <div className="font-[400]">
                <div className="border-t border-white">
                    <p className=" font-[400] pt-[29px] pb-[37px] pl-[25px] pr-[138px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="border-t border-white">
                    <p className="font-[400] pt-[29px] pb-[37px] pl-[25px] pr-[138px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="border-t border-white">
                    <p className="font-[400] pt-[29px] pb-[37px] pl-[25px] pr-[138px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <div className="bg-durga-bg absolute top-0 left-0 w-full h-full bg-cover mix-blend-color-dodge"></div>
        </div>
    )
}

export default Index;