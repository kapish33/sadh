import Image from "next/image";

const Index: React.FC = () => {
    return <footer className=" md:hidden lg:hidden xl:hidden visible text-base-white bg-[#001d2d45] pt-[150px] pb-[150px]">

        {/* <div className="px-[40px] flex justify-center flex-col items-end pb-[204px]">

            <div className="flex">
            <h3 className="font-open-sans text-center text-[12px] italic font-[600] tracking-[0.36px] leading-[16.7px] quote">
                As the beautiful process of awakening unfolds,
                the oneness you experience with the universe
                becomes a permanent feature of your consciousness
            </h3>
            </div>
            <h6 className="pt-[13px] items-end text-[12px] italic font-medium font-open-sans">- Om Swami</h6>
        </div> */}

      {/* Footer center part */}
      <div className="flex flex-col justify-center items-center mb-[199px]">
        <Image src={"/sadhana_main_logo.png"} alt="Sadhana" width={135} height={129} />
        <p className="mt-[12px] text-[15px] uppercase font-open-sans font-[300] leading-[60px] tracking-[3.8px]">A VEDIC SADHANA FOUNDATION</p>
        <p className="text-[15px] uppercase font-open-sans font-[300] leading-[50px] tracking-[3.8px] mt-[-29px]">Initiative</p>
      </div>

        <div className="md:hidden lg:hidden xl:hidden flex flex-col text-base-white text-[11px] font-[600] capitalize font-open-sans pt-[9px] justify-between items-start w-full px-[30px] pb-[149px]">

            <div className="h-[256px] flex justify-between w-full">
                <div className="h-full w-fit">
                    <ul className="h-full flex flex-col justify-between">
                        <li>Company</li>
                        <li>About</li>
                        <li>Privacy</li>
                        <li>Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Partner</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="h-[180px] w-fit">
                    <ul className="h-full flex flex-col justify-between">
                        <li>Product</li>
                        <li>Pricing</li>
                        <li>Features</li>
                        <li>Benfits</li>
                        <li>VFS</li>
                    </ul>
                </div>

                <div className="h-[180px] w-fit">
                    <ul className="h-full flex flex-col justify-between">
                        <li>Resources</li>
                        <li>Resources</li>
                        <li>Blog</li>
                        <li>Tools</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>

            <div className="h-full flex flex-col justify-between w-full text-[10px] mt-[87px]">
                <div className="flex mb-[87px] font-[300] flex-col gap-[8px] w-full items-center text-center">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                    <p>nonummy nibh euismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud</p>
                    <p>exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                    <p>nonummy nibh euismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad e</p>
                </div>
                <div className="flex justify-between px-[18px] w-full gap-[22px]">
                    <p>+91 99988223334</p>
                    <p className="underline">sadhana.app@tempmail.com</p>
                </div>
            </div>
        </div>

    </footer>;
};

export default Index;
