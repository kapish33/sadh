import React from 'react'
import bg_two_mobile from "@/assets/about-bg-two-mobile.png";
import bg_one from "@/assets/about-bg1.png";
import bg_two from "@/assets/about_bg2.png";
import bg_damru from "@/assets/about-damru-bg.png";
import om_swami from "@/assets/om-swami.png";
import Image from 'next/image';

import logo1 from "@/assets/aboutLogos/Forbes_logo 1 1.png"
import logo2 from "@/assets/aboutLogos/news logos 1.png"
import logo3 from "@/assets/aboutLogos/india-today-logo-0218513CB5-seeklogo.png"
import logo4 from "@/assets/aboutLogos/Bloomberg-Logo.png"
import logo5 from "@/assets/aboutLogos/Untitled design 1.png"
import logo6 from "@/assets/aboutLogos/Group 1000006673.png"

import QuoteContainer from '@/source/components/Quote';

const About = () => {
  return (
    <section className='min-h-fit bg-about-main-bg w-full bg-cover'>
      {/* Hero Section */}
      <div className='relative md:h-screen h-[796px] px-[50px] xl:px-[240px] lg:px-[130px] md:px-[70px] flex flex-col font-open-sans gap-[61px] md:gap-[46px] pt-[45vw] md:pt-[11vw] w-full md:items-center'>
        <h1 className='text-base-white text-[34.892px] text-center md:text-left md:text-[59px] font-light leading-[44.322px] md:leading-[67px] md:w-[70%] z-10'>Empowering Your Spiritual Journey through Interactive Vedas</h1>
        <div className='flex md:justify-end'>
          <h4 className='text-accent-yellowPrimary text-[13px] text-center md:text-right md:text-[25px] font-normal leading-[21.008px] md:leading-[30px] md:w-[55%] z-10'>Rekindle your connection with the Vedic roots with each tap on the Sadhana tablet, infusing wisdom and spirituality into daily life.</h4>
        </div>
        {/* BG Image */}
        <div className='md:hidden absolute inset-0 bg-about-bg-one bg-cover bg-[35%]' />
        <Image src={bg_one} alt='' className='hidden md:block absolute !h-full !w-full pointer-events-none' unoptimized />
      </div>

      {/* Our Sacred Mission Section min-h-[623px] */}
      <div className='text-base-white flex flex-col items-center md:items-end font-open-sans relative mt-[-10%] md:mt-0'>
        <div className='flex flex-col gap-[78.31px] md:w-[743px] md:gap-[61px] items-center md:mt-[10%] md:mx-[100px] md:h-screen'>
          <h4 className='text-accent-yellowPrimary text-[33px] font-semibold z-10 md:text-[40px]'>Our Sacred Mission</h4>
          <div className='flex flex-col items-center gap-[32px] md:gap-[45px] z-10'>

            <div className='flex items-center gap-[6px] md:gap-[13px]'>
              {/* Mobile */}
              <svg className='md:hidden' xmlns="http://www.w3.org/2000/svg" width="74" height="34" viewBox="0 0 74 34" fill="none">
                <g clipPath="url(#clip0_1_1674)">
                  <path d="M0.0515442 16.8541C0.862541 17.9005 3.24707 19.4837 9.86273 17.0957C16.106 14.8416 19.5118 18.0618 22.836 18.0618C19.1059 15.8077 18.4574 11.4609 19.8357 8.72424C30.2145 20.9597 45.215 3.17002 62.4859 15.7274C54.1343 12.0244 44.4852 13.1514 36.7824 18.8669C54.0534 11.7831 69.6214 18.9473 74 28.2042C55.2699 10.6561 42.5396 27.6407 19.0251 27.6407C6.3757 27.6407 -0.678566 19.752 0.0512009 16.8541H0.0515442ZM70.6754 27.8823C65.5668 25.1453 65.1616 30.5386 60.0533 30.7802C60.0533 30.7802 61.5937 28.5264 60.4588 27.3187C57.2967 33.5171 52.1071 30.4579 49.4314 34C47.323 20.9594 65.8105 20.7984 70.6754 27.8823ZM37.4378 0.217886C38.5501 2.79592 41.7358 3.21678 43.9766 2.45333C42.9182 2.03281 42.5031 1.01115 42.6918 0C45.6549 2.35981 48.6945 0.127749 53.7974 2.15514C59.0682 4.24894 63.2945 9.7337 63.9478 13.9033C55.4965 5.90528 47.2035 8.72831 42.0331 6.88288C39.9715 6.14689 36.752 3.93855 37.4374 0.217886H37.4378Z" fill="#BE9354" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1674">
                    <rect width="74" height="34" fill="white" transform="matrix(-1 0 0 1 74 0)" />
                  </clipPath>
                </defs>
              </svg>
              {/* WEB */}
              <svg className='hidden md:block' xmlns="http://www.w3.org/2000/svg" width="133" height="61" viewBox="0 0 133 61" fill="none">
                <g clipPath="url(#clip0_1_1634)">
                  <path d="M0.0926361 30.2383C1.55025 32.1156 5.83595 34.956 17.7263 30.6717C28.9473 26.6277 35.0685 32.405 41.0431 32.405C34.3391 28.3609 33.1735 20.5621 35.6507 15.6523C54.3045 37.6042 81.2647 5.68738 112.306 28.2168C97.2953 21.5731 79.9531 23.5952 66.1089 33.8495C97.15 21.1403 125.13 33.9936 133 50.6016C99.3364 19.1182 76.4563 49.5906 34.1937 49.5906C11.459 49.5906 -1.21957 35.4375 0.0920258 30.2383H0.0926361ZM127.025 50.0241C117.843 45.1136 117.115 54.7898 107.934 55.2232C107.934 55.2232 110.702 51.1798 108.662 49.013C102.979 60.1337 93.6519 54.6451 88.8429 61C85.0535 37.6036 118.281 37.3148 127.025 50.0241ZM67.2868 0.390913C69.2861 5.01621 75.0116 5.77128 79.0391 4.40157C77.1367 3.6471 76.3907 1.81413 76.7299 0C82.0555 4.23377 87.5185 0.229197 96.6898 3.86657C106.163 7.6231 113.759 17.4634 114.933 24.9442C99.7437 10.5948 84.8388 15.6596 75.5459 12.3487C71.8406 11.0282 66.0543 7.06622 67.2862 0.390913H67.2868Z" fill="#BE9354" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1634">
                    <rect width="133" height="61" fill="white" transform="matrix(-1 0 0 1 133 0)" />
                  </clipPath>
                </defs>
              </svg>

              <div className='flex flex-col items-center'>
                <p className='text-[14.078px] font-light md:font-normal md:text-[22.913px] capitalize'>play the</p>
                <p className='text-[17px] font-semibold uppercase md:text-[37.45px] '>trailer</p>
              </div>
              {/* Mobile */}
              <svg className='md:hidden' xmlns="http://www.w3.org/2000/svg" width="74" height="34" viewBox="0 0 74 34" fill="none">
                <g clipPath="url(#clip0_1_1672)">
                  <path d="M73.9485 16.8541C73.1375 17.9005 70.7529 19.4837 64.1373 17.0957C57.894 14.8416 54.4882 18.0618 51.164 18.0618C54.8941 15.8077 55.5426 11.4609 54.1643 8.72424C43.7855 20.9597 28.785 3.17002 11.5141 15.7274C19.8657 12.0244 29.5148 13.1514 37.2176 18.8669C19.9466 11.7831 4.37858 18.9473 0 28.2042C18.7301 10.6561 31.4604 27.6407 54.9749 27.6407C67.6243 27.6407 74.6786 19.752 73.9488 16.8541H73.9485ZM3.32455 27.8823C8.43324 25.1453 8.8384 30.5386 13.9467 30.7802C13.9467 30.7802 12.4063 28.5264 13.5412 27.3187C16.7033 33.5171 21.8929 30.4579 24.5686 34C26.677 20.9594 8.18953 20.7984 3.32455 27.8823ZM36.5622 0.217886C35.4499 2.79592 32.2642 3.21678 30.0234 2.45333C31.0818 2.03281 31.4969 1.01115 31.3082 0C28.3451 2.35981 25.3055 0.127749 20.2026 2.15514C14.9318 4.24894 10.7055 9.7337 10.0522 13.9033C18.5035 5.90528 26.7965 8.72831 31.9669 6.88288C34.0285 6.14689 37.248 3.93855 36.5626 0.217886H36.5622Z" fill="#BE9354" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1672">
                    <rect width="74" height="34" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {/* WEB */}
              <svg className='hidden md:block' xmlns="http://www.w3.org/2000/svg" width="133" height="61" viewBox="0 0 133 61" fill="none">
                <g clipPath="url(#clip0_1_1632)">
                  <path d="M132.907 30.2383C131.45 32.1156 127.164 34.956 115.274 30.6717C104.053 26.6277 97.9315 32.405 91.9569 32.405C98.6609 28.3609 99.8265 20.5621 97.3493 15.6523C78.6955 37.6042 51.7353 5.68738 20.6942 28.2168C35.7047 21.5731 53.0469 23.5952 66.8911 33.8495C35.85 21.1403 7.86961 33.9936 0 50.6016C33.6636 19.1182 56.5437 49.5906 98.8063 49.5906C121.541 49.5906 134.22 35.4375 132.908 30.2383H132.907ZM5.97521 50.0241C15.157 45.1136 15.8852 54.7898 25.0664 55.2232C25.0664 55.2232 22.2978 51.1798 24.3376 49.013C30.0208 60.1337 39.3481 54.6451 44.1571 61C47.9465 37.6036 14.719 37.3148 5.97521 50.0241ZM65.7132 0.390913C63.7139 5.01621 57.9884 5.77128 53.9609 4.40157C55.8633 3.6471 56.6093 1.81413 56.2701 0C50.9445 4.23377 45.4815 0.229197 36.3102 3.86657C26.8369 7.6231 19.2409 17.4634 18.0667 24.9442C33.2563 10.5948 48.1612 15.6596 57.4541 12.3487C61.1594 11.0282 66.9457 7.06622 65.7138 0.390913H65.7132Z" fill="#BE9354" />
                </g>
                <defs>
                  <clipPath id="clip0_1_1632">
                    <rect width="133" height="61" fill="white" />
                  </clipPath>
                </defs>
              </svg>

            </div>

            <div className='w-full md:md:w-[743px] px-[60px] md:px-0 flex flex-col gap-[18px] md:gap-[30px] md:items-end'>
              <p className='text-center md:text-left text-[13px] leading-[21px] font-normal md:text-[25px] md:leading-[30px]'>The Vedic Sadhana Foundation, a non-profit organisation, is dedicated to reviving India&apos;s ancient Vedic heritage. With a strong commitment to accessibility and inclusivity, we make the timeless teachings of the Vedas accessible to all in today&apos;s fast-paced world.</p>
              <p className='text-center md:text-left text-[13px] font-normal md:text-[25px] leading-[30px]'>At our core, we serve humanity, nurturing holistic well-being, fostering spiritual growth, and preserving Vedic traditions for generations to come.</p>
            </div>

          </div>
        </div>

        {/* BG Image */}
        <Image src={bg_two} alt='BackgroundImage' className='absolute top-0 h-[80vh] md:h-[1203px] pointer-events-none transform -scale-x-100 md:scale-x-100 object-left-top object-cover' unoptimized />
        {/* <Image src={bg_two_mobile} className='absolute !h-[80vh] md:h-full w-full object-cover object-left-top mt-[-5%] pointer-events-none md:hidden' fill alt="" unoptimized /> */}

        <div className='z-10 pt-[161px] md:pt-0 relative pb-[114px] md:pb-[183px] flex flex-col items-center'>
          <div className='px-[60px]'>
            <h5 className='text-accent-yellowPrimary text-[33px] md:text-[40px] text-center font-semibold capitalize'>The birth of the sadhana tablet</h5>
          </div>
          <div className='px-[60px] text-center pt-[34px] md:px-[110px] md:pt-[96px] z-10 relative'>
            <div className='flex flex-col md:flex-row md:gap-[61px] md:items-center'>
              <p className='text-[13px] font-normal leading-[21px] md:leading-[30px] !z-10 md:text-start md:flex-1 md:text-[25px]'>In my journey, inspired by the timeless Vedas, I have dedicated myself to making their sacred teachings accessible in their purest form. This led me to create the Sadhana Tablet, a sanctuary in our digitally distracted world, where seekers can connect with the divine for inner peace and spiritual growth.</p>
              <p className='md:text-[25px] text-[13px] font-normal md:leading-[30px] leading-[21px] pt-[39px] md:pt-0 !z-10 md:text-start md:flex-1'>The tablet&apos;s flagship, the Sadhana App, was crafted by me with a world-class team over two years, involving a significant investment to ensure its excellence. It offers a tranquil space for transformative experiences. Alongside the Sadhana App, I&apos;ve handpicked the content of all four apps on the tablet, each a vital step on your journey to self-healing.</p>
            </div>
            <div className='flex flex-col md:flex-row md:gap-[61px] md:pt-[56px]'>
              <p className='md:text-[25px] text-[13px] font-normal md:leading-[30px] leading-[21px] pt-[39px] md:pt-0 !z-10 md:text-start md:flex-1'>Designed as a sacred digital altar, the Sadhana Tablet is more than a device; it&apos;s a journey into the heart of Vedic wisdom, a testament to the Vedas&apos; timeless teachings.</p>
              <p className='md:text-[25px] text-[13px] font-normal md:leading-[30px] leading-[21px] pt-[43px] md:pt-0 !z-10 md:text-start md:flex-1'>In the stillness of devotion, the heart finds its true home, and this tablet is designed to guide you to that sacred stillness.</p>
            </div>

            <p className='text-[14.46px] italic font-semibold text-right pt-[29px] md:pt-[68px] md:text-[22.764px] !z-10'>~ Om Swami</p>
          </div>
          {/* BG Image */}
          <Image src={bg_damru} alt='' className='absolute object-center bottom-36 px-[30px] pointer-events-none opacity-[0.51]' unoptimized />
        </div>

      </div>

      {/* Om Swami Section */}
      <div className='px-[60px] md:px-[110px] font-open-sans flex flex-col gap-[83px] md:gap-[72px] pb-[108px] md:pb-[95px]'>
        <h5 className='text-accent-yellowPrimary text-[33px] font-semibold capitalize text-center'>Meet the Visionary - Om Swami</h5>
        <div className='flex flex-col md:flex-row gap-[48px] md:gap-[50px] md:items-start'>
          <Image src={om_swami} alt='' className='md:h-[470px] md:w-[412px]' />
          <div className='flex flex-col gap-[48px] md:gap-[31px] text-white'>
            <p className='text-[15px] md:text-[25px] md:leading-[30px] font-normal leading-[21px] text-center md:text-start'>Om Swami, an unconventional revered monk and celebrated author, brings over 15,000 hours of meditation and Mantra Sadhana expertise. With 16 best-selling books on meditation, wellness, and spirituality, his unique perspective blends ancient wisdom with contemporary insights, touching the lives of millions worldwide. Swami&apos;s transformation from a millionaire entrepreneur to a monk embodies the fusion of spirituality and modernity.</p>
            <p className='text-[15px] md:text-[25px] md:leading-[30px] font-normal leading-[21px] text-center md:text-start'>His entrepreneurial vision has been pivotal in integrating traditional spiritual practices with cutting-edge technology. Om Swami&apos;s commitment to making Vedic teachings and practices accessible powers the mission of the Vedic Sadhana Foundation.</p>
          </div>
        </div>
      </div>

      {/* Quotes */}
      <QuoteContainer authorName='Om Swami' quote='Service is the highest form of spiritual practice, and sharing inner wisdom with humanity is my devotion.' authorNameClassName='text-[15px] md:text-[18px] font-bold' quoteClassName='text-[15px] md:text-[27px]' quotationsColor='#E1C7A0' />

      {/* OUR IMPACT */}
      <div style={{
        background: 'rgba(0, 24, 42, 0.55)'
      }} className='flex flex-col items-center pt-[40px] md:pt-[34px] md:pb-[45px] pb-[80px] mt-[136px]'>
        <h1 className='text-accent-yellowPrimary pb-[51px] md:pb-[70px]'>Our Impact</h1>
        <div className='grid md:grid-cols-3 gap-[57px] w-full md:px-[138px] md:justify-between'>
          <div className='flex flex-col items-center gap-[25px]'>
              <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" className='h-[50px] w-[50px] md:h-[75px] md:w-[75px]' viewBox="0 0 75 75" fill="none">
                <path d="M0 57.7114C0.295312 56.5393 0.528261 55.3489 0.898777 54.2006C1.66916 51.8088 3.07602 49.8058 4.84239 48.0394C10.556 42.3276 16.2697 36.6158 21.9797 30.9022C25.4115 27.4685 29.5459 25.7975 34.3975 26.1166C38.2916 26.3716 41.6464 27.9362 44.3941 30.7206C45.5771 31.9202 45.5423 33.8113 44.3941 35.02C43.2678 36.2068 41.4263 36.3572 40.1625 35.2585C38.84 34.1084 37.4588 33.0886 35.7291 32.6685C32.2569 31.8266 29.1791 32.6153 26.6423 35.1282C20.7471 40.9685 14.8775 46.8343 9.03912 52.7333C6.4822 55.3177 5.64578 58.4781 6.65278 61.9595C7.64877 65.4078 10.0021 67.6456 13.522 68.4618C16.9502 69.2561 19.9327 68.2784 22.4181 65.8095C25.2593 62.9903 28.0767 60.1472 30.9142 57.3244C32.1047 56.1413 33.5299 55.9138 34.8395 56.6585C36.494 57.5995 36.9305 59.7584 35.7695 61.268C35.6649 61.4037 35.5585 61.5394 35.4393 61.6587C32.3248 64.7567 29.2488 67.8932 26.0792 70.9362C23.7442 73.1777 20.8865 74.4249 17.6747 74.8505C17.539 74.8688 17.4106 74.9459 17.2804 74.9954H14.0576C13.8723 74.944 13.6908 74.8762 13.5018 74.845C7.44334 73.849 3.25394 70.496 1.00149 64.797C0.517255 63.5681 0.326494 62.2254 0 60.9341C0 59.8593 0 58.7862 0 57.7114Z" fill="white" />
                <path d="M38.8363 50.6845C35.72 50.6442 32.0607 49.1749 29.003 46.2346C27.6842 44.9672 27.6053 43.0761 28.7957 41.7756C29.9586 40.5027 31.8277 40.3944 33.1924 41.616C34.7185 42.9807 36.3913 43.9895 38.4475 44.2904C41.2575 44.7031 43.7594 44.0152 45.9513 42.2103C46.2522 41.9627 46.5346 41.6912 46.8098 41.4143C53.1104 35.1192 59.4036 28.8167 65.7097 22.5253C67.7494 20.4911 68.7803 18.0773 68.7032 15.1737C68.5932 11.0154 65.2127 7.10852 61.0948 6.43535C57.7712 5.89242 54.9281 6.82605 52.5528 9.19221C49.1484 12.5856 45.7551 15.9917 42.3526 19.3869C41.1053 20.6305 39.6452 20.8653 38.3099 20.0637C36.6994 19.0971 36.3014 16.9822 37.4478 15.491C37.5524 15.3553 37.6569 15.2195 37.778 15.1003C41.5143 11.3841 45.1718 7.58175 49.0108 3.97381C55.4967 -2.1232 66.4214 -1.04283 71.7481 6.10703C76.1411 12.0041 76.0824 19.5171 71.5775 25.3592C71.1171 25.9553 70.5852 26.5019 70.0514 27.0357C63.8095 33.2868 57.5639 39.5342 51.3147 45.7779C48.0369 49.052 44.2712 50.6717 38.8363 50.6808V50.6845Z" fill="white" />
              </svg>
            <p className='text-center text-[23px] font-normal capitalize text-white'>200k reconnected to<br />vedic roots</p>
          </div>
          <div className='flex flex-col items-center gap-[25px]'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-[50px] w-[50px] md:h-[75px] md:w-[75px]' width="75" height="64" viewBox="0 0 75 64" fill="none">
              <g clipPath="url(#clip0_53_23)">
                <path d="M43.7035 17.3521C47.3065 12.139 50.3018 7.44621 53.7185 3.07562C54.7858 1.70881 56.9286 0.608152 58.6845 0.43605C62.6338 0.045818 66.6539 0.414037 70.6376 0.279957C73.5581 0.181899 75.0102 1.12846 75.0001 4.24631C74.9373 22.9334 74.9535 41.6185 74.992 60.3056C74.9981 62.8891 73.9004 64.0258 71.2736 63.9798C66.9901 63.9037 62.7006 63.8457 58.4212 63.9898C55.2496 64.0979 54.3159 62.619 54.3585 59.7353C54.4618 52.9452 54.3909 46.1512 53.522 39.081C51.1322 42.495 48.6978 45.883 46.3627 49.3331C44.5298 52.0427 42.8488 52.0887 41.0038 49.3551C38.7193 45.9711 36.3538 42.6391 32.9635 39.3852C32.9635 44.6443 32.9635 49.9034 32.9635 55.1625C32.9635 65.4947 33.3159 63.8757 24.2548 63.9478C12.5305 64.0418 12.5305 63.9818 12.5305 52.537C12.5305 42.7792 12.5305 33.0214 12.5305 22.5312C9.27382 22.7613 6.40603 23.1055 3.54026 23.0995C2.36763 23.0975 0.87095 22.6212 0.149952 21.8127C-0.273331 21.3385 0.267418 19.6114 0.838545 18.7509C4.49012 13.2617 8.17409 7.79442 12.0363 2.45125C14.5598 -1.03883 31.0779 -0.700625 33.5872 2.81146C36.8945 7.44021 40.0904 12.145 43.7035 17.3521ZM33.6986 10.38C30.8774 24.2842 33.4981 35.803 44.1815 45.0706C46.7819 41.3403 49.2406 37.5381 52.0071 33.968C53.4187 32.1489 55.3833 30.748 57.0987 29.1591C57.6516 31.4164 58.6257 33.6658 58.6824 35.9351C58.8809 43.7598 58.7594 51.5924 58.7594 59.5952H70.0118C70.263 59.0088 70.4756 58.7447 70.4756 58.4785C70.5404 41.4164 70.6052 24.3563 70.5911 7.29412C70.5911 6.40559 70.1637 5.14485 69.4934 4.69258C66.7208 2.82347 57.4551 4.83866 55.5352 7.5963C52.5256 11.9189 49.4674 16.2154 46.5875 20.622C44.467 23.868 42.7536 23.6398 40.7486 20.532C38.6282 17.246 36.293 14.0982 33.6946 10.38H33.6986ZM28.3863 4.33236C25.077 4.33236 22.0027 4.20629 18.9486 4.3904C17.5896 4.47245 15.7243 4.76462 15.0256 5.66916C11.929 9.68154 9.17053 13.9501 5.98275 18.5748C8.37662 18.5748 10.0171 18.803 11.5705 18.5308C15.5542 17.8344 16.8078 19.3733 16.664 23.2616C16.4068 30.1217 16.5891 36.9978 16.5891 43.8658C16.5891 49.0809 16.5891 54.294 16.5891 59.5211H28.3884V4.33236H28.3863Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_53_23">
                  <rect width="75" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className='text-center text-[23px] font-normal capitalize text-white'>1 million rituals<br />performed</p>
          </div>
          <div className='flex flex-col items-center gap-[25px]'>
            <svg xmlns="http://www.w3.org/2000/svg" className='h-[50px] w-[50px] md:h-[75px] md:w-[75px]' width="83" height="71" viewBox="0 0 83 71" fill="none">
              <path d="M41.5742 0.829956C53.1938 0.829956 64.8147 0.824909 76.4343 0.83248C81.1531 0.835004 82.9745 2.6003 82.982 7.30438C83.006 20.8097 83.006 34.3138 82.982 47.8191C82.9745 52.5774 81.254 54.2569 76.4457 54.2594C58.0753 54.2708 39.7048 54.2935 21.3357 54.2228C19.3276 54.2153 18.0423 54.7402 16.9613 56.5093C14.7375 60.1496 12.293 63.6563 9.90276 67.1932C8.12677 69.8215 6.11617 70.6619 3.60859 69.9124C1.36337 69.2411 0.0238103 67.2865 0.0200263 64.3301C-0.00267816 45.0998 -0.0140304 25.8671 0.0301171 6.63562C0.0389466 2.74162 2.04829 0.84636 5.94462 0.838789C17.8216 0.816076 29.6972 0.831218 41.5742 0.829956ZM41.7583 5.01291C30.1375 5.01291 18.5153 5.01669 6.89442 5.00912C5.47414 5.00912 4.21152 4.88925 4.21656 7.03561C4.2708 26.0122 4.24305 44.9901 4.27332 63.9679C4.27332 64.5786 4.64542 65.1881 4.84346 65.7988C5.41737 65.4127 6.1704 65.149 6.5362 64.619C9.05891 60.966 11.593 57.3131 13.9353 53.544C15.507 51.0165 17.5655 50.0323 20.5183 50.0449C38.9758 50.1206 57.4332 50.0475 75.8907 50.1307C78.093 50.1408 78.8246 49.6348 78.8044 47.3068C78.6909 34.1434 78.6934 20.9775 78.8031 7.81416C78.8221 5.47221 78.0224 4.95486 75.8528 4.97127C64.488 5.06086 53.1232 5.01291 41.7583 5.01417V5.01291Z" fill="white" />
              <path d="M19.4717 17.208C20.8 21.5547 23.6316 23.1511 27.8487 23.4777C24.2964 26.1031 23.4381 29.3312 24.7157 33.5631C21.1585 31.2921 17.8779 30.6868 14.2847 33.5896C15.205 29.4107 14.766 26.0476 10.921 23.4789C15.3402 23.3377 18.023 21.4059 19.4704 17.208H19.4717Z" fill="white" />
              <path d="M63.8172 17.208C65.203 21.5184 67.9683 23.272 72.6251 23.1005C70.916 25.1667 69.2686 26.3904 68.7681 27.9827C68.2827 29.5292 68.9744 31.4531 69.241 34.1356C65.574 31.5382 62.249 30.711 58.626 33.7417C59.417 29.5762 59.1957 26.1058 55.1514 23.5859C59.5453 23.3178 62.4112 21.5679 63.8184 17.208H63.8172Z" fill="white" />
              <path d="M50.2369 23.4285C46.3262 26.0597 45.841 29.328 47.0169 33.4554C43.3718 31.3798 39.9947 30.5433 36.3292 33.5896C37.1182 29.4509 36.9011 26.0133 32.7632 23.5414C37.1488 23.1978 40.1811 21.6263 41.4349 17.208C43.2045 20.9892 45.4439 23.6142 50.2369 23.4285Z" fill="white" />
            </svg>
            <p className='text-center text-[23px] font-normal capitalize text-white'>4.8 star ratings<br />from 15k reviews</p>
          </div>
        </div>
      </div>

      {/* Sadhana is been featured in Section */}
      <div className='px-[60px] md:px-[138px] pt-[50px] md:pt-[79px] pb-[116px] md:pb-[105px]'>
        <h4 className='text-accent-yellowPrimary text-[33px] font-normal capitalize font-open-sans text-center'>Sadhana is been featured in</h4>
        <div className='grid grid-cols-2 md:grid-cols-6 items-center place-content-center justify-center pt-[90px] gap-x-7 gap-y-20 '>
          <div className='flex justify-center items-center'>
            <Image src={logo1} alt='Logo' className='h-[28.332px] w-[108.017px] md:h-[32px] md:w-[122px]'/>
          </div>
          <div className='flex justify-center items-center'>
            <Image src={logo2} alt='Logo' className='h-[42.499px] w-[115.1px] md:h-[48px] md:w-[130px]'/>
          </div>
          <div className='flex justify-center items-center'>
            <Image src={logo3} alt='Logo' className='h-[52.238px] w-[108.903px] md:h-[59px] md:w-[123px]'/>
          </div>
          <div className='flex justify-center items-center'>
            <Image src={logo4} alt='Logo' className='h-[19.479px] w-[107.132px] md:h-[22px] md:w-[121px]'/>
          </div>
          <div className='flex justify-center items-center'>
            <Image src={logo5} alt='Logo' className='h-[15.052px] w-[143.433px] md:h-[17px] md:w-[162px]'/>
          </div>
          <div className='flex justify-center items-center'>
            <Image src={logo6} alt='Logo' className='h-[24.883px] w-[107px] md:h-[28.104px] md:w-[130px]'/>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About