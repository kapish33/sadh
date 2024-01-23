"use client";
import Image from "next/image";
import footerBg from "@/assets/footer-bg-image.png"
import linkedIn from "@/assets/linkedin-icon.png"
import youtube from "@/assets/youtube-icon.png"
import instagram from "@/assets/instagram-icon.png"
import { Navigation } from "@/source/components/Headers/const";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Index: React.FC = () => {
  const router = useRouter();
  const route = usePathname();
  return (
    <footer className="hidden md:block text-base-white">
      {/* Footer center part */}
      <div className="flex flex-col justify-center items-center">
        <Image src={"/sadhana_main_logo.png"} alt="Sadhana" width={217} height={207} />
        <p className="mt-[11px] text-[29px] uppercase font-open-sans font-[300] leading-[59.5px] tracking-[7.25px]">A VEDIC SADHANA FOUNDATION</p>
        <p className="text-[29px] uppercase font-open-sans font-[300] leading-[59.5px] tracking-[7.25px] mt-[-20px]">Initiative</p>
      </div>

      <div className="flex flex-col px-[75px] pt-[73px] pb-[39px] relative w-full mt-[166px] justify-between h-fit">
        <Image
          src={footerBg}
          alt="BG"
          fill
          objectFit="cover"
          className="pointer-events-none"
        />
        <div className="flex">
          <div className="z-10 flex flex-col gap-[30px]">
            <p className="text-[15px] font-bold leading-[12px] tracking-[0.45px]">FOLLOW US ON:</p>
            <div className="flex gap-5">
              <Image
                src={linkedIn}
                alt="LinkedIn"
                width={45}
                height={45}
              />
              <Image
                src={youtube}
                alt="youtube"
                width={45}
                height={45}
              />
              <Image
                src={instagram}
                alt="instagram"
                width={45}
                height={52}
              />
            </div>
          </div>
          <div className="z-10 flex gap-[70px] justify-end flex-1 px-[37px]">
            <div className="flex flex-col gap-7">
              <p className="text-[15px] font-bold leading-[12px] tracking-[0.45px]">QUICK LINKS :</p>
              <div className="flex flex-col gap-[42px]">
                {
                  Navigation.map((nav, index) => (
                    <Link
                      href={nav.path}
                      key={index}
                      className={`text-[15px] ${route === nav.path ? "font-bold" : "font-normal"} leading-[12px] tracking-[0.45px] relative flex justify-start items-center w-fit`}
                    >
                      <p className="z-10">
                        {nav.name}
                      </p>
                      {
                        route === nav.path &&
                        <div className="w-24 h-5 absolute -left-6 -top-1 bg-[#04C8FF] rounded-full blur-md" />
                      }
                    </Link>
                  ))
                }
              </div>
            </div>
            <div>
              <p className="text-[15px] font-bold leading-[12px] tracking-[0.45px]">REACH US AT : </p>
              <div className="flex flex-col justify-start mt-[28px] gap-6 text-[15px] font-bold leading-[12px] tracking-[0.45px]" >
                <Link href={"callto:+9199988223334"} >+91 99988223334</Link>
                <Link href={"mailto:sadhana.app@tempmail.com"} className="underline">sadhana.app@tempmail.com</Link>
              </div>
            </div>
          </div>
          <div className="gap-5 z-10 text-[15px] font-normal items-start tracking-[0.45px] flex flex-col mb-[110px]">
            <p className="leading-[26px]">Vedic Sadhana Foundation is a non-profit organization<br />established in the service of humanity.</p>
            <p className="leading-[26px]">If you wish to contribute your resources in any other<br />way, please write to us at serve@sadhana.app</p>
            <p className="leading-[26px]">All content Ⓒ 2023 - 24</p>
            <p className="leading-[26px]">Share & Subscribe</p>
          </div>
        </div>

        <div className="flex w-full h-[1px] bg-white z-10" />
        <div className="flex z-10 pt-[33px] gap-[85px] items-center">
          <p className="text-[15px] font-light leading-[12px] tracking-[0.45px]">Copyright © 2024 Sadhana Tablet. All rights reserved.</p>
          <div className="flex gap-[24px] text-[15px] font-normal leading-[12px] tracking-[0.45px]">
            <p>Terms & Conditions*</p>
            <div className="w-[2px] bg-white" />
            <p>Privacy Policy </p>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Index;
