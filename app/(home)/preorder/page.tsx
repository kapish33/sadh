'use client'
import React from 'react'
import Image from "next/image";

const page = () => {
    return (
        <div className='bg-product-main-bg pt-[114.12px] mb-[579px]'>
            <div className='w-full h-screen flex justify-center'>
                <div className="w-1/2">
                    <Image
                        src="/tab.png"
                        alt="picture"
                        width={1001}
                        height={887}
                    />
                </div>
                <div className="w-1/2 text-left text-white font-sans mt-[70px] p-8 ">
                    <div className="w-[533px] h-[214px] text-white text-[60px] font-light font-['Open Sans'] leading-[67px]">Discover the Power of the Sadhana Tablet Summary<br/></div>
                    <br />
                    <div className="w-[562px] text-orange-200 text-[25px] font-normal font-['Open Sans'] leading-[30px]">Beyond being a device, it's your premium custom gateway to a profound spiritual journey.</div>
                </div>
            </div>
            <div className='text-white'>
                <div className='p-4 m-auto'>
                    <p className='text-[40px] font-semibold text-center text-[#FFD5A4]'>Key Features</p>
                    <div className='flex p-[7rem] gap-4 justify-evenly'>
                        <div className='text-center items-center flex flex-col max-w-[17rem]'>
                            <Image
                                src="/Group1000006699.png"
                                alt="picture"
                                width={89.01}
                                height={103.7}
                            />
                            <br />
                            <p className='text-[25px] font-semibold'>Sacred Vedic Devotion Hub</p>
                            <br />
                            <p className='font-light text-[25px] text-center w-[274px]'>Dive into distraction-free devotion and access the essence of the Vedas, nurturing your spiritual journey.</p>
                        </div>
                        <div className='text-center items-center flex flex-col max-w-[13rem]'>
                            <Image
                                src="/Group1000006701.png"
                                alt="picture"
                                width={62.08}
                                height={116.12}
                            />
                            <br />
                            <p className='text-[25px] font-semibold'>Flagship Sadhana App</p>
                            <br />
                            <p className='font-light text-[25px] text-center w-[326px]'>Interact with our revolutionary App for interactive Vedic worship, ad-free, subscription-free, and accessible to all.</p>
                        </div>
                        <div className='text-center items-center flex flex-col max-w-[17rem]'>
                            <Image
                                src="/Group1000006700.png"
                                alt="picture"
                                width={104}
                                height={104.12}
                            />
                            <br />
                            <p className='text-[25px] font-semibold'>Curated Spiritual Content</p>
                            <br />
                            <p className='font-light text-[25px]  text-center w-[334px]'>Handpicked spiritual books licensed from renowned authors, podcasts, soulful music, and guided meditation courses.</p>

                        </div>
                    </div>
                </div>

            </div>
            <div className='text-white h-[200rem]'>
                <h1 className='text-center text-[#ABE1FF] text-[40px] text-semibold'>$1500 Worth of Pre-Installed Spiritual <br /> Content at Your Fingertips</h1>
                <br />
                <Image
                    src="/knowyourtablet1.png"
                    alt="picture"
                    width={980}
                    height={546}
                    className='m-auto'
                />
                <div className='flex mt-8 justify-evenly'>
                    <div className='flex gap-4'>
                        <Image
                            src="/Group1000006703.png"
                            alt="picture"
                            width={73}
                            height={73.1}
                            className='m-auto'
                        />
                        <p className='max-w-[19rem] font-semibold text-[25px]'>A 10-inch ultraportable model with a spacious liquid retina display.</p>
                    </div>
                    <div className='flex gap-4'>
                        <Image
                            src="/Group1000006702.png"
                            alt="picture"
                            width={53}
                            height={71.66}
                            className='m-auto'
                        />
                        <p className='max-w-[16rem] font-semibold text-[25px]'>Supercharged by the xx chip, with battery life up to 18 hours.</p>
                    </div>
                </div>
                <div className='flex justify-center mt-[97px]'>
                    <div className='flex gap-4'>
                        <Image
                            src="/Vector.png"
                            alt="picture"
                            width={73}
                            height={73.1}
                            className='m-auto'
                        />
                        <p className='max-w-[25rem] font-semibold text-[25px]'>Blazing fast performance, latest Bluetooth technology and enhanced augmented reality.</p>
                    </div>
                </div>
                <br />
                <h1 className='text-[40px] font-semibold text-center text-[#ABE1FF] mt-[103px]'>Pro Benefits</h1>
                <div className='flex mt-8 justify-evenly'>
                    <div className='flex gap-4'>
                        <Image
                            src="/Group.png"
                            alt="picture"
                            width={73}
                            height={73.1}
                            className='m-auto'
                        />
                        <div>
                            <p className='font-bold text-[25px]'>Insure and Assure</p>
                            <br />
                            <p className='max-w-[28rem] text-[25px] text-center'>Peace of mind with 1-year warranty, 24/7 support, and the assurance of a replacement if needed.</p>
                        </div>
                    </div>
                    <hr className='text-white border-[1px] h-[120px]' />
                    <div className='flex gap-4'>
                        <Image
                            src="/Group(1).png"
                            alt="picture"
                            width={53}
                            height={71.66}
                            className='m-auto'
                        />
                        <div>
                            <p className='font-bold text-[25px]'>Exclusive Access to New Apps</p>
                            <br />
                            <p className='max-w-[29rem] text-[25px] text-center'>Be among the first to explore two new apps launching in 2024 before the general audience.</p>
                        </div>
                    </div>
                </div>
                <br />
                <h1 className='text-[40px] font-semibold text-center text-[#FFD5A4] mt-[178px]'>What’s in the box</h1>
                <br />
                <div className='flex justify-center mt-[112px]'>
                    <video width="1280" height="777" autoPlay className='rounded-[20px]' loop muted>
                        <source src="/Galaxy.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='w-[1011px] m-auto mt-[112px] flex flex-col justify-flex-start items-center gap-4'>
                    <p className='font-semibold text-center text-[#FFD5A4] text-[25px]'>Unlock a Wealth of Spiritual Wisdom featuring a treasure trove of spiritual wisdom, <br /> including interactive Vedic rituals, scriptures, e-books, podcasts, music and more.</p>
                    <Image
                        src="/Group1000006715.png"
                        alt="picture"
                        width={238}
                        height={220}
                        className='cursor-pointer'
                    />
                    <h3 className='text-[25px] font-semibold'>Starting $XXX</h3>
                    <p className='text-[16px] font-light'>33% discount on the subscription when bundled with your Sadhana Tablet purchase.</p>
                </div>
                <div className='mt-[131px] w-[1077px] h[408px] m-auto mt-[131px]'>
                    <h1 className='font-bold text-center text-[#FFD5A4] text-[36px]'>Additional Section</h1>
                    <div className="m-4 space-y-2 mt-[61px]">
                        <div
                            className="group flex flex-col gap-2 p-2 text-white border-t-[1px]"
                            tabIndex={1}
                        >
                            <div className="flex cursor-pointer items-center justify-between">
                                <span className='text-[24px]'> Technical Specifications </span>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                    className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div
                                className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </div>
                        </div>
                        <div
                            className="group flex flex-col gap-2 p-2 text-white border-t-[1px]"
                            tabIndex={2}
                        >
                            <div className="flex cursor-pointer items-center justify-between">
                                <span className='text-[24px]'> Support & Assistance </span>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                    className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div
                                className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </div>
                        </div>
                        <div
                            className="group flex flex-col gap-2 p-2 text-white border-t-[1px]"
                            tabIndex={3}
                        >
                            <div className="flex cursor-pointer items-center justify-between">
                                <span className='text-[24px]'> Warranty & Returns </span>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                    className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div
                                className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </div>
                        </div>
                        <div
                            className="group flex flex-col gap-2 p-2 text-white border-t-[1px]"
                            tabIndex={4}
                        >
                            <div className="flex cursor-pointer items-center justify-between">
                                <span className='text-[24px]'>FAQs </span>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
                                    className="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
                                />
                            </div>
                            <div
                                className="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default page