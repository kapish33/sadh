"use client";
import { useRef } from "react";
import { Navigation, preorder } from "../const";
import Link from "next/link";
import Image from "next/image";
import { HomeImage } from "@/assets/home";
import { usePathname, useRouter } from "next/navigation";
import hamburgerOpen from "@/assets/hamburgerOpen.png"
import hamburgerClose from "@/assets/hamburgerClose.png"
import gsap from "gsap";
import PreOrderButton from "../../PrimaryButton";

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const route = usePathname();
  const router = useRouter();
  const boxRef:any = useRef();
  const linksRef:any = useRef();
  const timeline = gsap.timeline({paused: false});

  const onOpen = () => {
    timeline.to(boxRef.current, {
      y: 0,
      duration: .6,
    }).to("#animation a", {
      opacity: 1,
      y: 0,
      stagger: 0.2
    })
   };

   const onClose = () => {
    gsap.to(boxRef.current, {
      y: "-100%",
      duration: .6
    });
    gsap.to("#animation a", {
      opacity: 0,
      y: -100,
      stagger: 0.2
    })
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
          <PreOrderButton text={"Preorder"} pathUrl={"preorder"}/>
          <Image src={hamburgerOpen} alt="" onClick={() => {onOpen();}} width={16} height={12}/>
        </div>
      </div>
      <div ref={boxRef} className="-translate-y-full absolute top-0 w-full z-50">
        {
            <div id="mobile-header" className="h-screen w-full bg-main">
              <div className="relative w-full h-full">
                <div className="flex justify-end px-[24px] py-[17px] " onClick={() => {onClose();}}
                onScroll={() => {onClose();}}>
                  <Image src={hamburgerClose} alt="Menu" height={41} width={41}/>
                </div>
                <div className="px-[38px]" id="animation">
                  {Navigation.map((nav) => (
                      <Link
                        className={`block py-3 md-regular ${
                          route === nav.path
                            ? "!text-warning-700 font-bold"
                            : "text-base-white"
                        } text-[28px] font-open-sans font-semibold pb-[31px] -translate-y-full opacity-0`}
                        onClick={onClose}
                        ref={linksRef}
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
