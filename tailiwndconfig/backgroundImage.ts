import { StaticImageData } from "next/image";

type BackgroundImage = {
    name: string;
    url: string | StaticImageData;
  };
  
  const backgroundImageArray: BackgroundImage[] = [
    {
      name: "arrow",
      url: "https://cdn.buttercms.com/5eSKNlDlTaeD7Q40KTKG",
    },
    {
      name: "rm-dark",
      url: "https://cdn.buttercms.com/bFwK1Ya5TNCfVEVOedhb",
    },
    {
      name: "tick",
      url: "https://cdn.buttercms.com/83c7yZXITgGntmLH7KiZ",
    },
    {
      name: "lock",
      url: "https://cdn.buttercms.com/02fJfiqSc652idXvd0xg",
    },
    {
      name: "sadhana-background-logo",
      url: "../assets/sadhana_background_logo.png"
    },
    {
      name: "btn",
      url: "../assets/buttonImage.png"
    },
    {
      name: "main",
      url: "../assets/background_image.png"
    },
    {
      name: "main-mobile",
      url: "../assets/main-bg-mobile.png"
    },
    {
      name: "shiva-bg",
      url: "../assets/shiva_bg.png"
    },
    {
      name: "durga-bg",
      url: "../assets/durga.png"
    },
    {
      name: "water-bg",
      url: "../assets/water-bg.png"
    },
    {
      name: "white-bg",
      url: "../assets/white-bg-product.png"
    },
    {
      name: "about-bg-one",
      url: "../assets/about-bg1.png"
    },
    {
      name: "about-bg-two",
      url: "../assets/about_bg2.png"
    },
    {
      name: "about-bg-two-mobile",
      url: "../assets/about-bg-two-mobile.png"
    },
    {
      name: "about-bg-damru",
      url: "../assets/about-damru-bg.png"
    },
    {
      name: "about-main-bg",
      url: "../assets/about_main_bg.png"
    },
    {
      name: "product-main-bg",
      url: "../assets/backgroud_website.png"
    }
  ];
  
  const finalObject: Record<string, string> = {};
  
  backgroundImageArray.forEach(({ name, url }) => {
    finalObject[name] = `url(${url})`;
  });
  
  export default finalObject;