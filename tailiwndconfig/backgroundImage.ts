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
  ];
  
  const finalObject: Record<string, string> = {};
  
  backgroundImageArray.forEach(({ name, url }) => {
    finalObject[name] = `url(${url})`;
  });
  
  export default finalObject;