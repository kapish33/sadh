"use client"
import 'swiper/css';
import charger from "../../../assets/charger.png"
import shiva from "../../../assets/shiva.png"
import shivaTablet from "../../../assets/shiva_tablet.png"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';


const Product: React.FC = () => {

    const slider = [
        {
            id: 1,
            image: charger,
            name: "Charger",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 2,
            image: shivaTablet,
            name: "Tab",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: 3,
            image: shiva,
            name: "Shiva",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]

    return (
        <div className='container'>
            <p className="text-[36px] pb-[100px] text-center text-base-white font-[700]">What’s Inside The Box</p>
        </div>
    );
}

export default Product;