import Faq from '@/source/components/Faq'
import Product from '@/source/components/Products'
import QuoteContainer from '@/source/components/Quote'
import { randomInt } from 'crypto'
import Image from 'next/image'
import React from 'react'
import checkIcon from "@/assets/check-icon.png"
import unCheckIcon from "@/assets/uncheck-icon.png"
import Review from '@/source/components/Review'

const PreOrder = () => {
    return (
        <div className='min-h-screen relative md:pt-[5vw] font-inter'>
            {/* Shiv Image */}
            <div className='h-[452px] md:h-[1344.195px] bg-cover w-full md:bg-[80%_-17vw] mix-blend-color-dodge bg-[85%] bg-shiva-bg absolute top-0'></div>

            <div className='pt-[87vw] md:pt-[25vw] '>
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