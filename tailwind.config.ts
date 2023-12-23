import type { Config } from "tailwindcss";
import { fontFamily } from "./tailiwndconfig/custumTwPlugin/fonts";
import { colors } from "./tailiwndconfig/custumTwPlugin/color";
import { boxShadows as boxShadow } from "./tailiwndconfig/boxShadow";
import finalObject from "./tailiwndconfig/backgroundImage";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./source/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow,
      colors,
      fontFamily,
      backgroundImage: finalObject
    },
  },
  plugins: [require("./tailiwndconfig/custumTwPlugin/typography")],
};
export default config;