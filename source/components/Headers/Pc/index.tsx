"use client";
import { HomeImage } from "@/assets/home";
import Image from "next/image";
import Link from "next/link";
import { Navigation, preorder } from "../const";
import { useRouter } from "next/navigation";
interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const router = useRouter();
  return (
    <div className="hidden bg-primary-500 opacity-90 md:flex items-center xl:px-[193px] lg:px-[113px] md:px-[20px] justify-between pt-[11px] pb-[2px] font-open-sans fixed top-0 w-full z-50">
      <div onClick={() => router.push("/")}>
        <Image src="sadhana_logo.svg" alt="Sadhana" width={165} height={50} />
      </div>
      <div className="flex justify-center items-center md:gap-[52px] lg:gap-[72px]">
        <ul style={{
          textShadow: "0px 4.482px 4.482px rgba(0, 0, 0, 0.25)"
        }} className="flex justify-center items-center text-[#024365] text-[13.447px] gap-[63px] font-[600]">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Products</Link></li>
          <li><Link href="#">Our Story</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>
          <button className="bg-btn h-[30px] w-[100px] md:w-[100px] md:h-[40px] bg-cover bg-no-repeat bg-center glow text-[13.44px] md:text-[16px] text-white flex justify-center items-center font-[600]" onClick={() => router.push("/preorder")}>
            Preorder
          </button>
      </div>
    </div>
  );
};

export default Index;
