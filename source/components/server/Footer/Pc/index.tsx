import Image from "next/image";
import Link from "next/link";

const Index: React.FC = () => {
  return (

    <footer className="hidden md:block text-base-white bg-[#001d2d45] pt-[220px] pb-[170px]">

      {/* Footer center part */}
      <div className="flex flex-col justify-center items-center mb-[285px]">
        <Image src={"/sadhana_main_logo.png"} alt="Sadhana" width={217} height={207} />
        <p className="mt-[11px] text-[29px] uppercase font-open-sans font-[300] leading-[59.5px] tracking-[7.25px]">A VEDIC SADHANA FOUNDATION</p>
        <p className="text-[29px] uppercase font-open-sans font-[300] leading-[59.5px] tracking-[7.25px] mt-[-20px]">Initiative</p>
      </div>

      {/* Footer part */}
      <div className="hidden md:flex xl:px-[231px] lg:px-[113px] md:px-[50px] text-base-white text-[11px] font-[600] capitalize font-open-sans pt-[9px] justify-between items-start h-[256px] w-full">
        <div className="h-full w-fit">
          <ul className="h-full flex flex-col justify-between">
            <li>Company</li>
            <li>About</li>
            <li><Link href={"/privacy-policy"}>Privacy</Link></li>
            <li><Link href={"/privacy-policy"}>Policy</Link></li>
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

        <div className="w-[405px] h-full flex flex-col justify-between">
          <div className="flex flex-col gap-[8px] w-full">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
            <p>nonummy nibh euismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud</p>
            <p>exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
            <p>nonummy nibh euismod tincidunt ut laoreet dolore magna ali- quam erat volutpat. Ut wisi enim ad e</p>
          </div>
          <div className="flex justify-end px-[18px] w-full gap-[22px]">
            <p>+91 99988223334</p>
            <p className="underline">sadhana.app@tempmail.com</p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Index;
