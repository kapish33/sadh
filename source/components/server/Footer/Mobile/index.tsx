"use client";
import { Navigation } from "@/source/components/Headers/const";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Index: React.FC = () => {
    const route = usePathname();
    return <footer className="md:hidden lg:hidden xl:hidden visible text-base-white  pb-5">
        {/* Footer center part */}
        <div className="flex-col px-[32px] relative flex min-h-[1115px] w-full items-center">
            <div className="relative flex justify-center items-center">
                <img
                    loading="lazy"
                    src="/sadhana_main_logo.png"
                    className="aspect-[1.05] z-10 object-contain object-center w-40 shadow-sm overflow-hidden self-center max-w-full"
                />
                <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="313" height="78" viewBox="0 0 313 78" fill="none">
                    <g filter="url(#filter0_f_574_1053)">
                        <ellipse cx="156.5" cy="38.7555" rx="127.5" ry="9.53379" fill="#04C8FF" />
                    </g>
                    <defs>
                        <filter id="filter0_f_574_1053" x="0" y="0.22168" width="313" height="77.0674" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="14.5" result="effect1_foregroundBlur_574_1053" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="text-white text-center text-[15.213px] font-light tracking-[1.217px] leading-[27px] uppercase self-center relative mt-[30px]">
                A VEDIC SADHANA FOUNDATION <br /> Initiative
            </div>
            <div
                className="text-white text-[15px] font-semibold flex flex-col items-center leading-[26px] tracking-wide capitalize self-center relative whitespace-nowrap mt-24"
            >
                <p>Follow Us On :</p>
                <div>
                    <div
                        className="self-center relative flex w-[175px] max-w-full items-stretch gap-5 mt-6"
                    >
                        <img
                            loading="lazy"
                            src="/linkedin-icon.png"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                        <img
                            loading="lazy"
                            src="/youtube-icon.png"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                        <img
                            loading="lazy"
                            src="/instagram-icon.png"
                            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                        />
                    </div>
                </div>
            </div>

            <div
                className="self-center relative flex w-full max-w-[365px] justify-between gap-5 mt-20 "
            >
                <div className="text-white text-xs font-light tracking-wide capitalize">
                    <span className="font-bold">QUICK lINKS :</span>
                    <br />
                    <div className="flex flex-col mt-1">
                        {
                            Navigation.map((nav) => (
                                <Link
                                    href={nav.path}
                                    className={`text-[12px] ${route === nav.path ? "font-bold" : "font-normal"}  leading-[36.5px] tracking-[0.36px] capitalize relative flex items-center justify-start`}
                                >
                                    <p>{nav.name}</p>
                                    {
                                        route === nav.path && <svg className="absolute -top-3 -left-9" xmlns="http://www.w3.org/2000/svg" width="117" height="59" viewBox="0 0 117 59" fill="none">
                                            <g filter="url(#filter0_f_574_1054)">
                                                <ellipse cx="58.5" cy="29.5" rx="36.5" ry="7.5" fill="#04C8FF" />
                                            </g>
                                            <defs>
                                                <filter id="filter0_f_574_1054" x="0" y="0" width="117" height="59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <feGaussianBlur stdDeviation="11" result="effect1_foregroundBlur_574_1054" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    }

                                </Link>
                            ))
                        }
                    </div>

                </div>
                <div>
                    <div className="flex flex-col items-stretch self-start">
                        <div className="text-white text-xs font-bold leading-3 tracking-wide capitalize">
                            REACH US AT :
                        </div>
                        <div
                            className="text-white text-xs font-semibold leading-3 tracking-wide capitalize mt-7"
                        >
                            +91 99988223334
                        </div>
                        <div
                            className="text-white text-xs font-semibold leading-3 tracking-wide underline lowercase whitespace-nowrap mt-7"
                        >
                            sadhana.app@tempmail.com
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="text-white text-center text-xs font-semibold leading-5 tracking-wide capitalize self-center relative w-[366px] mt-20 flex flex-col gap-5"
            >
                <p>Vedic Sadhana Foundation is a non-profit organization established in the
                    service of humanity.</p>
                <p>If you wish to contribute your resources in any other way, please write to us
                    at serve@sadhana.app</p>
                <p>All content Ⓒ 2023 - 24</p>
                <p>Share & Subscribe</p>
            </div>
            <div className="bg-white self-stretch relative shrink-0 h-px mt-24"></div>
            <div
                className="text-white text-[15px] font-light capitalize mt-6 tracking-[0.45px] text-center"
            >
                Copyright © 2024 Sadhana Tablet. All rights reserved.
            </div>
            <div
                className="self-center relative flex items-center justify-between gap-5 -ml-3.5 mt-7"
            >
                <div className="text-white text-xs leading-3 tracking-wide capitalize my-auto">
                    Terms & Conditions*
                </div>
                <div
                    className="text-white text-2xl leading-3 tracking-wider capitalize self-stretch"
                >
                    I
                </div>
                <div
                    className="text-white text-xs leading-3 tracking-wide capitalize mt-1 self-start"
                >
                    Privacy Policy
                </div>
            </div>


        </div>


    </footer>;
};

export default Index;
