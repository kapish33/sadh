import { HomeImage } from "@/assets/home";
import Image from "next/image";
import Link from "next/link";
import { Navigation, preorder } from "../const";
interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  return (
    <div className="hidden bg-primary-500 opacity-90 md:flex items-center xl:px-[193px] lg:px-[113px] md:px-[20px] justify-between pt-[11px] pb-[2px] font-open-sans fixed top-0 w-full z-50">
      <div>
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
        <div className="bg-red-500" style={{
          boxShadow: "0px 0px 9px 2px rgb(255,255,255,0.49)",
          border: "1.121px solid #C9A25E",
          borderRadius: "3.362px"
        }} >
          <p className="text-base-white font-open-sans text-[13.4px] font-[600] px-[4px]" >Preorder</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
