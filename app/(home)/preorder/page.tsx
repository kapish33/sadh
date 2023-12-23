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

const PreOrder = () => {

    const productsImage = [product1, product2, product3, product4];

    return (
        <div className='min-h-screen relative md:pt-[5vw] font-inter'>
            {/* Shiv Image */}
            <div className='h-[452px] md:h-[1344.195px] bg-cover w-full md:bg-[80%_-17vw] mix-blend-color-dodge bg-[85%] bg-shiva-bg absolute top-0'></div>

            <div className='pt-[87vw] md:pt-[32vw] '>
                {/* Place order Indicator */}
                <div className='px-[24px] md:px-[106px] flex flex-col md:gap-[21px] bg-[#001d2d45] md:pt-[38px] gap-[6px] pt-[17px]'>
                    <div className='flex justify-between text-base-white font-roboto'>
                        <h6 className='text-[7.87px] font-normal leading-[11.81px] md:text-[22px] md:font-medium md:leading-[20px]'>Add To Bag</h6>
                        <h6 className='text-[7.87px] font-normal leading-[11.81px] md:text-[22px] md:font-medium md:leading-[20px]'>Review Bag</h6>
                        <h6 className='text-[7.87px] font-normal leading-[11.81px] md:text-[22px] md:font-medium md:leading-[20px]'>Check Out</h6>
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
                <div className='flex bg-[#001d2d45] justify-center md:gap-[52px]'>
                    <div className='flex flex-col justify-center items-center gap-[48px]'>
                        <div className='bg-white-bg bg-cover w-[515px] h-[515px] flex justify-center items-center'>
                            <Image src={tab1} alt='Tab' width={389} height={349}/>
                        </div>
                        <div className='flex gap-[12px]'>
                            {
                                productsImage.map((prd) => (
                                    <div key={prd.toString()} className='w-[85px] h-[85px] bg-white flex justify-center items-center rounded-md relative p-1'>
                                        <Image src={prd} alt=''
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='text-white font-open-sans'>
                        <h1 className='pb-[36px]'>Shiva tablet 10-inch xxxxxx</h1>
                        <div className='flex flex-col gap-[46px] pb-[30px]'>
                            <h6>Shiva tablet 10-inch xxxxxx</h6>
                            <h6>Shiva tablet 10-inch xxxxxx</h6>
                            <h6>Shiva tablet 10-inch xxxxxx</h6>
                            <h6>Shiva tablet 10-inch xxxxxx</h6>
                        </div>
                        <div className='flex flex-col gap-[9px]'>
                            <h5>INR 3,900 + GST</h5>
                            <h5>M.R.P : INR 4,300 + GST</h5>
                        </div>
                    </div>
                </div>

                <div>
                    {/* <Product/> */}
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