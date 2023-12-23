import { Montserrat, Open_Sans, Tiro_Gurmukhi, Roboto, Inter } from "next/font/google";

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
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100","200", "300", "400", "500","600", "700", "800", "900"],
});

export { montserrat, openSans, tiroGurmukhi, roboto, inter };
