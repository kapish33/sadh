"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

interface PrimaryButtonProps {
  text: String,
  pathUrl:String
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({text, pathUrl}) => {
    const router = useRouter();
  return (
    <button onClick={() => router.push(`/${pathUrl}`)} className="bg-btn h-[30px] w-[100px] md:w-[201px] md:h-[60px] bg-cover bg-no-repeat bg-center glow text-[12px] md:text-[24px] md:font-[700] text-white flex justify-center items-center z-10">
      {text}
    </button>
  )
}

export default PrimaryButton