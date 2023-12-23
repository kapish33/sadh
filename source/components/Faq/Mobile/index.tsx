interface IndexProps {

}

const Index: React.FC<IndexProps> = () => {
    return (
        <div className="md:hidden lg:hidden xl:hidden visible relative w-full xl:px-[212px] lg:px-[150px] md:px-[70px] text-base-white px-[20px] flex flex-col justify-center items-center gap-[100px] bg-[#001d2d45] font-open-sans">
            <p className="text-[18px] text-center font-[700] pt-[64px]">FAQs</p>
            <div className="font-[400]">
                <div className="px-[40px] border-b border-white flex justify-center items-center">
                    <p className="text-[12px] font-[400] pb-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="px-[40px] border-b border-white flex justify-center items-center">
                    <p className="text-[12px] font-[400] pb-[27px] pt-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
                <div className="px-[40px] flex justify-center items-center">
                    <p className="text-[12px] font-[400] pt-[24px] pb-[27px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
            </div>
            <div className="bg-durga-bg absolute top-0 left-0 h-[562px] w-full bg-cover mix-blend-color-dodge"></div>
        </div>
    )
}

export default Index;