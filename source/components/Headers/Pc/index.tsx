import { HomeImage } from "@/assets/home";
import Image from "next/image";
import Link from "next/link";
import { Navigation, preorder } from "../const";
interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  return (
    <div className="hidden md:block fixed bg-primary-500 opacity-90 shadow-nav-desktop">
      <div className="flex items-center w-screen justify-between">
        <Image
          src={HomeImage.sadhanaLogo.img}
          alt={HomeImage.sadhanaLogo.alt}
        />
        <ul className="flex gap-4 items-center">
          {Navigation.map((nav) => (
            <Link
              className={`block py-3 md-regular text-base-black `}
              key={nav.path}
              href={nav.path}
            >
              {nav.name}
            </Link>
          ))}
          <Link href={preorder.path}>
            <button className={preorder.class + " animate-pulse"}>
              {preorder.name}
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Index;
