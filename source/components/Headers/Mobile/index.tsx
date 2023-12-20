"use client";
import { useState } from "react";
import { Navigation, preorder } from "../const";
import Link from "next/link";
import Image from "next/image";
import { HomeImage } from "@/assets/home";
import { usePathname } from "next/navigation";

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const [iconsVisible, setIconsVisible] = useState(false);
  const route = usePathname();

  const toggleIcons = () => {
    setIconsVisible(!iconsVisible);
  };

  return (
    <nav className={`md:hidden visible bg-primary-500 fixed w-full top-0 z-50`}>
      <div className="flex justify-between px-[24px] py-[12px]">
        <Image
          src={HomeImage.sadhanaLogo.img}
          alt={HomeImage.sadhanaLogo.alt}
        />
        <div className="flex items-center gap-[21px]">
        <div className="bg-red-500 rounded-xl" style={{
          boxShadow: "0px 0px 9px 2px rgba(255,255,255,0.49)",
          border: "2px solid #C9A25E",
        }} >
          <p className="text-base-white font-open-sans text-[9.56px] font-[700] px-[4px]" >Preorder</p>
        </div>
          <svg
            onClick={toggleIcons}
            className="w-6 h-6 cursor-pointer my-auto text-warning-700 hover:text-warning-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
      </div>

      {iconsVisible && (
        <div
          onClick={toggleIcons}
          onScroll={toggleIcons}
          className="text-right px-[24px] bg-gradient-to-b h-screen from-primary-600/40 from-10% via-primary-600/70 via-30% to-primary-600/50 to-90%"
        >
          {Navigation.map((nav) => (
            <Link
              className={`block py-3 md-regular ${
                route === nav.path
                  ? "text-warning-700 font-bold"
                  : "text-base-white"
              }`}
              key={nav.path}
              href={nav.path}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
    // <nav className="md:hidden visible bg-primary-500 fixed w-full top-0 z-50">
    // <div className="md:hidden lg:hidden xl:hidden visible flex items-center justify-between px-[24px] py-[12px]">
    //   <div>
    //     <Image src={"sadhana_logo.svg"} alt="Sadhana" width={124} height={33} />
    //   </div>
    //   <div className="flex items-center gap-[20px]">
      // <div className="bg-red-500 rounded-xl" style={{
      //     boxShadow: "0px 0px 9px 2px rgba(255,255,255,0.49)",
      //     border: "2px solid #C9A25E",
      //   }} >
      //     <p className="text-base-white font-open-sans text-[9.56px] font-[700] px-[4px]" >Preorder</p>
      //   </div>
    //     <svg xmlns="http://www.w3.org/2000/svg" width="23" height="14" viewBox="0 0 23 14" fill="none" onClick={toggleIcons}>
    //       <path d="M5.75 1.18516C5.75 0.65576 6.26489 0.226562 6.9 0.226562H21.85C22.4851 0.226562 23 0.65576 23 1.18516C23 1.71456 22.4851 2.14376 21.85 2.14376H6.9C6.26489 2.14376 5.75 1.71452 5.75 1.18516ZM21.85 5.97815H1.15C0.514895 5.97815 0 6.40739 0 6.93675C0 7.46615 0.514895 7.89535 1.15 7.89535H11.5H21.85C22.4851 7.89535 23 7.46615 23 6.93675C23 6.40739 22.4851 5.97815 21.85 5.97815ZM21.85 11.7297H11.5C10.8649 11.7297 10.35 12.1589 10.35 12.6883C10.35 13.2177 10.8649 13.6469 11.5 13.6469H21.85C22.4851 13.6469 23 13.2177 23 12.6883C23 12.1589 22.4851 11.7297 21.85 11.7297Z" fill="#E77300" />
    //     </svg>
    //   </div>

    //   {iconsVisible && (
    //     <div
    //       onClick={toggleIcons}
    //       onScroll={toggleIcons}
    //       className="text-right  p-2 bg-gradient-to-b h-screen from-primary-600/40 from-10% via-primary-600/70 via-30% to-primary-600/50 to-90%"
    //     >
    //       {Navigation.map((nav) => (
    //         <Link
    //           className={`block py-3 md-regular ${
    //             route === nav.path
    //               ? "text-warning-700 font-bold"
    //               : "text-base-white"
    //           }`}
    //           key={nav.path}
    //           href={nav.path}
    //         >
    //           {nav.name}
    //         </Link>
    //       ))}
    //     </div>
    //   )}
    // </div>
    // </nav>

  );
};

export default Index;
