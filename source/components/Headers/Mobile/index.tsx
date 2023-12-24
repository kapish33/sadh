"use client";
import { useRef } from "react";
import { Navigation, preorder } from "../const";
import Link from "next/link";
import Image from "next/image";
import { HomeImage } from "@/assets/home";
import { usePathname, useRouter } from "next/navigation";
import hamburgerWhite from "@/assets/hamburger-white.png"
import hamburgerOrgange from "@/assets/Hamburger-orange.png"
import gsap from "gsap";
import PreOrderButton from "../../PrimaryButton";

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const route = usePathname();
  const router = useRouter();
  const boxRef:any = useRef();

  const onOpen = () => {
    gsap.to(boxRef.current, {
      y: 0,
      duration: .6
    });
   };

   const onClose = () => {
    gsap.to(boxRef.current, {
      y: "-100%",
      duration: .6
    });
   };

  return (
    <nav id="header" className={`md:hidden visible bg-primary-500 fixed w-full top-0 z-20 header`}>
      <div className="flex justify-between items-center px-[24px] py-[12px]">
        <Image
          src={HomeImage.sadhanaLogo.img}
          alt={HomeImage.sadhanaLogo.alt}
          onClick={() => router.push("/")}
        />
        <div className="flex justify-center items-center gap-[5px]">
        {/* <button className="bg-btn h-[30px] w-[100px] md:w-[201px] md:h-[60px] bg-cover bg-no-repeat bg-center glow text-[12px] md:text-[24px] md:font-[700] text-white flex justify-center items-center mb-[6px]" onClick={() => router.push("/preorder")}>
                Preorder
              </button> */}
          <PreOrderButton text={"Preorder"} pathUrl={"preorder"}/>

          <Image src={hamburgerWhite} alt="" onClick={() => {onOpen();}} width={35} height={35}/>
        </div>
      </div>
      <div ref={boxRef} className="-translate-y-full absolute top-0 w-full">
        {
            <div id="mobile-header" className="h-screen w-full bg-main">
              <div className="relative w-full h-full">
                <div className="flex justify-end px-[24px] py-[17px] z-50" onClick={() => {onClose();}}
                onScroll={() => {onClose();}}>
                  <Image src={hamburgerOrgange} alt="Menu" height={35} width={35}/>
                </div>
                <div className="px-[38px]">
                  {Navigation.map((nav) => (
                      <Link
                        className={`block py-3 md-regular ${
                          route === nav.path
                            ? "!text-warning-700 font-bold"
                            : "text-base-white"
                        } text-[28px] font-open-sans font-semibold pb-[31px]`}
                        onClick={onClose}
                        // onScroll={() => {onClose();}}
                        style={{
                          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }}
                        key={nav.path}
                        href={nav.path}
                      >
                        {nav.name}
                      </Link>
                    ))}
                </div>
                <div className="absolute top-0 bg-shiva-bg bg-cover w-full h-full bg-[93%_-42vw] mix-blend-color-dodge opacity-[0.5] z-10 pointer-events-none"></div>
              </div>
            </div>
        }
      </div>

    </nav>
  );
};

export default Index;
