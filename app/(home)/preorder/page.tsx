import Faq from '@/source/components/Faq'
import Product from '@/source/components/Products'
import QuoteContainer from '@/source/components/Quote'
import { randomInt } from 'crypto'
import Image from 'next/image'
import React from 'react'
import checkIcon from "@/assets/check-icon.png"
import unCheckIcon from "@/assets/uncheck-icon.png"
import tab1 from "@/assets/cart_tab1.png"
import product1 from "@/assets/cart_tab2.png"
import product2 from "@/assets/cart_tab1.png"
import product3 from "@/assets/cart_box.png"
import product4 from "@/assets/cart_charger.png"
import Review from '@/source/components/Review'
import PrimaryButton from '@/source/components/PrimaryButton'
import freeDeliveryIcon from "@/assets/freeDeliveryIcon.png";
import panIndiaIcon from "@/assets/panIndiaIcon.png";
import walletIcon from "@/assets/walletIcon.png";
import prdtsImage from "@/assets/productsImage.png";

const PreOrder = () => {

    const productsImage = [product1, product2, product3, product4];

    return (
        <div className='min-h-screen relative md:pt-[5vw] font-inter'>
            {/* Shiv Image */}
            <div className='h-[452px] md:h-[1344.195px] bg-cover w-full md:bg-[80%_-17vw] mix-blend-color-dodge bg-[85%] bg-shiva-bg absolute top-0 pointer-events-none'></div>

            <div className='pt-[87vw] md:pt-[32vw] '>
                {/* Place order Indicator */}
                <div className='px-[24px] md:px-[106px] flex flex-col md:gap-[21px] bg-[#001d2d45] md:pt-[38px] gap-[6px] pt-[17px]'>
                    <div className='flex justify-between text-base-white font-roboto'>
                        <p className='text-[7.87px] font-normal leading-[11.81px] md:text-[22px] md:font-medium md:leading-[20px]'>Add To Bag</p>
                        <p className='text-[7.87px] font-normal leading-[11.81px] md:text-[22px] md:font-medium md:leading-[20px]'>Review Bag</p>
                        <p className='text-[7.87px] font-normal leading-[11.81px] md:text-[22px] md:font-medium md:leading-[20px]'>Check Out</p>
                    </div>
                    <div className='flex justify-between items-center md:px-[20px] px-[7px]'>
                        <Image src={checkIcon} alt='' width={0} height={0} className='w-[22px] h-[22px] md:w-[54px] md:h-[54px]'/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="471" height="6" viewBox="0 0 471 6" fill="none" className='hidden md:block'>
                            <path d="M3 3L468 3.00009" stroke="white" stroke-width="5" stroke-linecap="round"/>
                        </svg>
                        {/* Mobile */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="127" height="4" viewBox="0 0 127 4" fill="none" className='md:hidden'>
                            <path d="M2.3042 1.53516H125.371" stroke="white" stroke-width="2.95361" stroke-linecap="round"/>
                        </svg>

                        <Image src={unCheckIcon} alt=''width={0} height={0} className='w-[22px] h-[22px] md:w-[54px] md:h-[54px]'/>

                        <svg xmlns="http://www.w3.org/2000/svg" width="471" height="6" viewBox="0 0 471 6" fill="none" className='hidden md:block'>
                            <path d="M3 3L468 3.00009" stroke="white" stroke-width="5" stroke-linecap="round"/>
                        </svg>
                        {/* Mobile */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="127" height="4" viewBox="0 0 127 4" fill="none" className='md:hidden'>
                            <path d="M2.3042 1.53516H125.371" stroke="white" stroke-width="2.95361" stroke-linecap="round"/>
                        </svg>
                        <Image src={unCheckIcon} alt='' width={0} height={0} className='w-[22px] h-[22px] md:w-[54px] md:h-[54px]'/>
                    </div>
                </div>
                {/* Product Add to Bag */}
                <div className='flex bg-[#001d2d45] flex-col md:flex-row justify-center md:gap-[52px] pt-[29px] md:pt-[196px]'>
                    <div className='flex flex-col justify-center items-center gap-[17.3px] md:gap-[48px]'>
                        <div className='bg-white-bg bg-cover w-[311px] h-[311px] md:w-[515px] md:h-[515px] flex justify-center items-center'>
                            <Image src={tab1} alt='Tab' width={389} height={349} className='w-[234.911px] h-[210.755px] md:w-[389px] md:h-[349px]'/>
                        </div>
                        <div className='text-white text-xs font-inter md:hidden'>
                            <p>Show in 360 view.</p>
                        </div>
                        <div className='flex gap-[8.13px] md:gap-[12px]'>
                            {
                                productsImage.map((prd) => (
                                    <div key={prd.toString()} className='w-[57.566px] h-[57.566px] md:w-[85px] md:h-[85px] bg-white flex justify-center items-center rounded-md relative p-1'>
                                        <Image src={prd} alt=''
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='text-white font-open-sans px-[61px] md:px-0 pt-[57px] md:pt-0'>
                        <h1 className='pb-[31px] md:pb-[36px] text-[25px] md:text-[36px] font-bold font-inter md:font-open-sans'>Shiva tablet 10-inch xxxxxx</h1>
                        <div className='flex flex-col gap-[20px] md:gap-[46px] pb-[40px] md:pb-[30px]'>
                            <p className='text-[15px] md:text-[24px] font-normal font-inter md:font-open-sans'>Shiva tablet 10-inch xxxxxx</p>
                            <p className='text-[15px] md:text-[24px] font-normal font-inter md:font-open-sans'>Shiva tablet 10-inch xxxxxx</p>
                            <p className='text-[15px] md:text-[24px] font-normal font-inter md:font-open-sans'>Shiva tablet 10-inch xxxxxx</p>
                            <p className='text-[15px] md:text-[24px] font-normal font-inter md:font-open-sans'>Shiva tablet 10-inch xxxxxx</p>
                        </div>
                        <div className='flex flex-col gap-[12px] md:gap-[9px] mb-[24px] md:mb-[27px] font-open-sans'>
                            <h5 className='text-[28px] md:text-[32px] font-bold'>INR 3,900 + GST</h5>
                            <h5 className='text-[16px] md:text-[24px] font-normal'>M.R.P : <span className='line-through'>INR 4,300 + GST</span></h5>
                        </div>
                        <div className='mb-[18px]'>
                            <PrimaryButton text={"Add to Bag"} pathUrl={""}/>
                        </div>
                        <h5 className='text-[10px] md:text-[24px] font-inter font-normal text-center md:text-left'>Only 3 stocks left.</h5>
                        <div className='w-full md:w-[424px] flex bg-[#C4E6FF] px-[17px] md:px-[24px] py-[10px] md:py-[17px] font-inter rounded-lg mt-[15px] md:mt-[37px]' style={{
                            boxShadow: "0px 0px 16.4px 0px rgba(255, 255, 255, 0.69)"
                        }}>
                            <input type="text" placeholder='Enter Coupon Code' className='flex-grow outline-none border-none bg-inherit z-10 text-black text-[11.9px] md:text-[20px] font-normal' />
                            <button className='outline-none border-none text-black text-[11.9px] md:text-[20px] font-bold'>APPLY</button>
                        </div>
                    </div>
                </div>
                {/* Fast Delivery */}
                <div className='bg-[#001d2d45] flex justify-end pt-[50px] md:pt-[68px]'>
                    <div className='border-y-2 w-full mx-[20px] md:mx-0 md:w-[40%] md:mr-[10%] flex justify-center items-center pt-[18px] md:pt-[25px] pb-[15px] gap-[86px]'>
                        <div className='flex flex-col items-center gap-[5px] md:gap-[10px]'>
                            <Image src={freeDeliveryIcon} alt='Free Delivery' width={50} height={50} className='h-[27.984px] w-[27.984px] md:h-[50px] md:w-[50px]'/>
                            <p className='text-[10px] md:text-[16px] text-white font-normal font-open-sans'>Fast Delivery</p>
                        </div>
                        <div className='flex flex-col items-center gap-[10px]'>
                            <Image src={panIndiaIcon} alt='Free Delivery' width={50} height={50} className='h-[27.984px] w-[27.984px] md:h-[50px] md:w-[50px]'/>
                            <p className='text-[10px] md:text-[16px] text-white font-normal font-open-sans'>PAN India Warranty</p>
                        </div>
                    </div>
                </div>
                {/* Delivery Details */}
                <div className='bg-[#001d2d45] flex justify-center items-start pt-[75px] gap-[20px] md:gap-[47px] px-[10px]'>
                        <div className='flex md:flex-row flex-col gap-[10px] md:gap-[16px] flex-1 md:flex-initial items-center justify-between'>
                            <div className='relative w-[27px] h-[27px] md:w-[51px] md:h-[51px]'>
                                <Image src={walletIcon} alt='Icon' width={0} height={0}/>
                            </div>
                            <p className='text-center text-[10px] md:text-[24px] text-white font-normal font-open-sans'>Your Tablet will be delivered<br />within 2 weeks.</p>
                        </div>
                        <div className='flex flex-1 md:flex-initial text-center'>
                            <p className='text-[10px] md:text-[24px] text-white font-normal font-open-sans pt-[34%] md:pt-0'>Slip Case & Choose your Plan</p>
                        </div>
                        <div className='flex flex-col gap-[2px] md:gap-[8px] items-center justify-between flex-1 md:flex-initial'>
                            <div className='flex flex-col md:flex-row items-center gap-[18px] md:gap-[13px]'>
                                <div className='bg-white h-[21px] w-[21px] md:h-[32px] md:w-[32px] rounded-[3px]'></div>
                                <p className='text-[10px] md:text-[24px] text-white font-normal font-inter text-center'>Personalize as a gift</p>
                            </div>
                            <div>
                                <p className='text-[#BEBEBE] text-[8px] md:text-[20px] font-normal font-open-sans text-center'>(If yes, will impact delivery<br />country & address)</p>
                            </div>
                        </div>
                </div>

                {/* Products */}
                <div className='bg-[#001d2d45] flex flex-col items-center justify-center pt-[134px] md:pt-[149px] pb-[128px] md:pb-[232px]'>
                    <p className='text-[18px] md:text-[36px] text-white font-inter font-bold mb-[52px] md:mb-[54px]'>What&apos;s Inside The Box</p>
                    <Image src={prdtsImage} alt='Products'/>
                    <div className='flex flex-col justify-center items-center gap-[32px] md:gap-[8px]'>
                        <p className='uppercase text-white text-[14px] md:text-[36px] font-inter font-bold '>tab</p>
                        <p className='text-white text-[12px] md:text-[20.4px] font-normal font-open-sans text-center px-[70px] xl:px-[390px] lg:px-[290px] md:px-[90px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div>
                    <Review/>
                    <Faq/>
                    <div className='bg-[#001d2d45] pt-[94px] md:pt-[97px]'>
                        <QuoteContainer authorName='Om Swami' quote='As the beautiful process of awakening unfolds, the oneness you experience with the universe becomes a permanent feature of your consciousness' key={randomInt(100)} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PreOrder