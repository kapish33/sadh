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
  );
};

export default Index;
