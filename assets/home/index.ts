import { StaticImageData } from "next/image";
import SadhanaLogo from "./SadhanaLogoTM.png";

interface HomeImage {
  [key: string]: {
    alt: string;
    img: StaticImageData;
  };
}

export const HomeImage: HomeImage = {
  sadhanaLogo: {
    alt: "SadhanaLogo",
    img: SadhanaLogo,
  },
};
