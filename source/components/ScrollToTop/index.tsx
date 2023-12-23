"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import topArrowIcon from "@/assets/top-arrow.png";
import { useRouter } from 'next/navigation';

const ScrollToTop = () => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);

  // Show the button when the user scrolls down
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listeners when the component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    console.log("clicked")
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-to-top-button ${isVisible ? 'block' : 'hidden'}`}>
        <Image src={topArrowIcon} alt="" height={51} width={51} className="fixed bottom-5 right-5 md:bottom-10 md:right-10 z-50" onClick={() => scrollToTop()}/>
    </div>
  )
}

export default ScrollToTop