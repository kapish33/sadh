import { Montserrat, Open_Sans, Tiro_Gurmukhi } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const tiroGurmukhi = Tiro_Gurmukhi({
  subsets: ["latin"],
  weight: ["400"],
});

export { montserrat, openSans, tiroGurmukhi };
