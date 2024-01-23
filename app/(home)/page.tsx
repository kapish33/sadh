import { authOptions } from "@/source/config/authOptions";
import { getServerSession } from "next-auth";
import trishul from "../../assets/trishul.png";
import shivaTableOne from "../../assets/shiva_page_tablet1.png";
import sadhanaLogo from "../../assets/sadhana_home_logo.png";
import sangeetLogo from "../../assets/sangeet_home_logo.png";
import satsangLogo from "../../assets/satsang_home_logo.png";
import savadhyaLogo from "../../assets/svadhyaya_home_logo.png";
import hindiLogo1 from "../../assets/homapage_hindi_images/hindi1.png";
import hindiLogo2 from "../../assets/homapage_hindi_images/hindi_2.png";
import hindiLogo3 from "../../assets/homapage_hindi_images/hindi_3.png";
import hindiLogo4 from "../../assets/homapage_hindi_images/hindi_4.png";
import tab1 from "../../assets/home_tab1.png";
import tab2 from "../../assets/home_tab2.png";
import tab3 from "../../assets/home_tab3.png";
import tab4 from "../../assets/home_tab4.png";
import tab5 from "../../assets/home_tab5.png";
import React from 'react'
import logo1 from "../../assets/omswami icons/omswami_icon1.png"
import logo2 from "../../assets/omswami icons/omswami_icon2.png"
import logo3 from "../../assets/omswami icons/omswami_icon3.png"
import logo4 from "../../assets/omswami icons/omswami_icon4.png"
import logo5 from "../../assets/omswami icons/omswami_icon5.png"
import Image, { StaticImageData } from 'next/image'
import featureLogo1 from "../../assets/homepage_features_logo/feature_logo1.png"
import featureLogo2 from "../../assets/homepage_features_logo/feature_logo2.png"
import featureLogo3 from "../../assets/homepage_features_logo/feature_logo3.png"
import featureLogo4 from "../../assets/homepage_features_logo/feature_logo4.png"
import featureLogo5 from "../../assets/homepage_features_logo/feature_logo5.png"
import featureLogo6 from "../../assets/homepage_features_logo/feature_logo6.png"
import featureLogo7 from "../../assets/homepage_features_logo/feature_logo7.png"
import featureLogo8 from "../../assets/homepage_features_logo/feature_logo8.png"
import featureLogo9 from "../../assets/homepage_features_logo/feature_logo9.png"
import featureLogo10 from "../../assets/homepage_features_logo/feature_logo10.png"
import featureLogo11 from "../../assets/homepage_features_logo/feature_logo11.png"
import featureLogo12 from "../../assets/homepage_features_logo/feature_logo12.png"
import featureLogo13 from "../../assets/homepage_features_logo/feature_logo13.png"
import featureLogo14 from "../../assets/homepage_features_logo/feature_logo14.png"
import featureLogo15 from "../../assets/homepage_features_logo/feature_logo15.png"
import sadhanaBook from "../../assets/sadhanaBook.png";
import AnimatedTab from "../../assets/tab_gif.gif";
import QuoteContainer from "@components/Quote";
import { redirect } from "next/navigation";
import Link from "next/link";
import ScrollToTop from "@/source/components/ScrollToTop";
import AppsContainer from "@/source/components/AppsContainer";
import PrimaryButton from "@/source/components/PrimaryButton";

export default async function Home() {
  const user = await getServerSession(authOptions);
  if (user?.user) redirect(`/dashboard/1/10`);
  return (
      <section id="main" className="font-open-sans pb-[150px] md:pb-[220px]">
        {/* Hero Part */}
        <div className="flex md:flex-row flex-col-reverse justify-center items-center w-full h-fit md:h-screen pt-[73px] md:pt-0 md:gap-[72px] mt-[53px] md:mt-0 mb-[150px] md:mb-0">
          <div className="flex flex-col gap-[18px] md:gap-[100px] items-center mt-[-30%] md:mt-0">
            <h1 className="font-open-sans text-base-white text-[37px] md:text-[59px] font-[300] md:leading-[55px] tracking-[0.37px] md:tracking-[0.59px] md:text-left text-center">
              Your Sacred<br />Digital Altar, Awaits
            </h1>
            <p className="md:text-right text-center text-[#FFE8BA] text-[15px] md:text-[25px] capitalize md:font-[300] leading-[30px] tracking-[0.15px] md:tracking-[0.25px] font-open-sans">
              Transform with Every Tap, Distraction-Free<br />Spirituality at Your Fingertips
            </p>
          </div>
          <div>
            <Image src={trishul} alt="Trishul" width={135} height={434} />
          </div>
        </div>

        {/* Animated Tab */}
          <div className="flex justify-center items-center flex-col gap-[10px] relative md:pt-[165px]">
            <h1 className="text-base-white px-[70px] md:px-0 text-center capitalize font-open-sans text-[37px] md:text-[48px] font-[300] leading-[55px] tracking-[0.37px] md:tracking-[0.48px] mb-[20px] md:mb-0">
              Welcome to sadhana Tablet
            </h1>

            <div className="
                flex flex-col
                items-center 
              text-amber-100
                text-[15px]
                text-center
                md:text-2xl
                font-open-sans
                font-[300]
                leading-[24px]
                tracking-[0.45px]
                md:leading-[38px]
                md:tracking-[0.72px]"
            >
              <p>Vedic wisdom meets modern ease <br />
                  Elevate your spiritual with sacred sadhanas, e-books, <br className="md:hidden" /> music, podcasts <br className="hidden md:block" /> and meditations
              </p>
            </div>

            <div className="flex justify-center items-center w-full">
              <Image src={AnimatedTab} alt="Tab" className="w-full md:w-[65%]" />
          </div>
            <p
              className="
              text-base-white
              text-lg
              font-[400]
              !text-[11px]
              md:!text-[18px]
              mt-[-8%]
              md:mt-[-4%]
              font-open-sans
              capitalize
              leading-[38px]
              tracking-[0.33px]
              mb-[91px]
              md:mb-[63px]"
            >
              Crafted By OM Swami
            </p>

            <div className="flex justify-center flex-col items-center text-white">
              <p className="text-[#FFE8BB] md:text-[27px] font-[400] text-[15px] leading-[22px] tracking-[0.45px] text-center pb-[10px] md:pb-[17px]">Your trusted companion <br className="md:hidden" /> for inner peace</p>
              <h6 className="text-[15px] md:text-[26px] font-[400] leading-[30.5px] tracking-[0.45px] pb-[4px] md:pb-[11px]">From $499</h6>
              <PrimaryButton text={"Preorder"} pathUrl={"preorder"}/>
              <Link href={""} className="text-[#FF1F00] text-[10px] md:text-[21px] font-[600] leading-[30.5px] tracking-[0.3px] underline">
                  Learn More {">"}
              </Link>
            </div>

            <div className="mt-[49px] md:mt-[155px] md:mb-[111px] mb-[77px]">
              <QuoteContainer quote="The Vedas offers mantras, odes, chants,and reflections, guiding seekers toward complete liberation. Prioritising self-discovery over self-improvement, they emphasise on the transformative power of self-healing." authorName="Om Swami" />
            </div>
          <div className="bg-shiva-bg absolute bg-no-repeat bg-cover inset-0 h-[567px] w-full md:h-[1252px] bg-[85%_-32vw] md:bg-[right_-15vw] mix-blend-color-dodge pointer-events-none"></div>
        </div>

        <AppsContainer />

        {/* Section 1 */}

        <div className="w-full flex flex-col justify-center items-center text-center md:pt-[200px] pt-[178px] relative" id="sadhana">
          <div className="flex flex-col md:gap-[44px] gap-[45px]">
            <TitleContainer image={sadhanaLogo} heading="Sadhana" subHeading="Realise the Sacred 5 Vedic Rituals" />
            <LogoCard />
          </div>
          <ImageContainer tabImage={tab1} hindiLogoImage={hindiLogo1} text="Know Your Self" />
          <div className="bg-durga-bg bg-no-repeat absolute inset-0 bg-cover h-[40%] md:h-[70%] bg-left mix-blend-color-dodge"></div>
        </div>

        <FeaturesContainer
          fLogo1={featureLogo1}
          fLogo2={featureLogo2}
          fLogo3={featureLogo3}
          fLogo4={featureLogo4}
          fHeading1="Perform Vedic Rituals"
          fHeading2="Discover Siddhāshrama"
          fHeading3="Access Ancient Wisdom"
          fHeading4="Unlock Premium Features"
          fSubHeading1="Japa, Abhishekam Yagna, Sadhana 
          Nitya-pooja in a digital space, With greaterfocus"
          fSubHeading2="150 awakened mantras, 
          11 powerful deities and grand 
          Temples to choose from"
          fSubHeading3="Potent wisdom from the Vedas to
          Expand your consciousness"
          fSubHeading4="Early access to special upcoming apps and
          Content like Sri ChakraNagar/ premium 
          Access/preview for tablet users only"
        />

        {/* Section 2 */}

        <div className="w-full flex flex-col justify-center items-center text-center md:pt-[200px] pt-[163px]" id="satsang">
          <div className="flex flex-col md:gap-[44px] gap-[45px]">
            <TitleContainer image={satsangLogo} heading="SATSANG" subHeading="Absorb the distilled essence of spiritual truths" />
            <LogoCard />
          </div>
          <ImageContainer tabImage={tab2} hindiLogoImage={hindiLogo2} text="Through the company of the wise
  arises non-attachment."/>
        </div>

        <FeaturesContainer
          fLogo1={featureLogo5}
          fLogo2={featureLogo6}
          fLogo3={featureLogo7}
          fLogo4={featureLogo8}
          fHeading1="Auto-Play"
          fHeading2="Personalisation"
          fHeading3="Advanced Search"
          fHeading4="Bookmark"
          fSubHeading1="Play podcasts from an 
          Album with multiple tracks"
          fSubHeading2="Create custom collections
          with tracks across albums"
          fSubHeading3="Search across content
          for quick access"
          fSubHeading4="Bookmark for easy relistening
          and future reference"
        />

        {/* Section 3 */}

        <div className="w-full flex flex-col justify-center items-center text-center md:pt-[200px] pt-[163px]" id="svadhaya">
          <div className="flex flex-col md:gap-[44px] gap-[45px]">
            <TitleContainer image={savadhyaLogo} heading="SVADHAYA" subHeading="Ignite The Fire of Knowledge Within" />
            <LogoCard />
          </div>
          <ImageContainer tabImage={tab3} hindiLogoImage={hindiLogo3} text="Be your own light" />
        </div>

        <FeaturesContainer
          fLogo1={featureLogo9}
          fLogo2={featureLogo10}
          fLogo3={featureLogo11}
          fLogo4={featureLogo12}
          fHeading1="Personalisation"
          fHeading2="Offline"
          fHeading3="Advanced Search"
          fHeading4="Highlights"
          fSubHeading1="Advanced e-book reader with 
          customisation options for a 
          personalised reading experience"
          fSubHeading2="Access books in offline mode for
          Reading when the internet is unavailable"
          fSubHeading3="Search text across books to find 
          what you are looking for"
          fSubHeading4="Highlight liked content for future 
          Reference with easy access"
        />

        {/* Section 4 */}

        <div className="w-full flex flex-col justify-center items-center text-center md:pt-[200px] pt-[163px]" id="sangeet">
          <div className="flex flex-col md:gap-[44px] gap-[45px]">
            <TitleContainer image={sangeetLogo} heading="sangeet" subHeading="Plunge in the divine sentiment of Bhakti through
  Timeless Classics and bhajans."/>
            <LogoCard />
          </div>
          <ImageContainer tabImage={tab4} hindiLogoImage={hindiLogo4} text="Om, may we hear with our ears
  only 
  that which is auspicious"/>
        </div>

        <div className="relative">

        <FeaturesContainer
          fLogo1={featureLogo5}
          fLogo2={featureLogo7}
          fLogo3={featureLogo10}
          fLogo4={featureLogo6}
          fHeading1="Auto-Play"
          fHeading2="Advanced Search"
          fHeading3="Offline"
          fHeading4="Personalisation"
          fSubHeading1="Advanced e-book reader with 
          customisation options for a 
          personalised reading experience"
          fSubHeading2="Access books in offline mode for
          Reading when the internet is unavailable"
          fSubHeading3="Search text across books to find 
          what you are looking for"
          fSubHeading4="Highlight liked content for future 
          Reference with easy access"
        />

          <div className="flex flex-col justify-center items-center md:mt-[88px] mt-[117px]">
            <div className="h-[220px] w-[210px] bg-sadhana-background-logo flex justify-center items-center relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="286" height="54" viewBox="0 0 286 54" fill="none" className="absolute">
                    <g filter="url(#filter0_f_181_13)">
                    <ellipse cx="143" cy="27" rx="122" ry="6" fill="#00C7FF"/>
                    </g>
                    <defs>
                    <filter id="filter0_f_181_13" x="0" y="0" width="286" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur_181_13"/>
                    </filter>
                    </defs>
                </svg>
                <PrimaryButton text={"Preorder"} pathUrl={"preorder"}/>
            </div>
          </div>
          <div className="md:mt-[74px] mt-[117px] md:pb-[158px] pb-[71px]">
            <QuoteContainer quote="As the beautiful process of awakening unfolds,
          the oneness you experience with the universe
          becomes a permanent feature of your consciousness" authorName="Om Swami" />
          </div>
          <div className="absolute bottom-0 w-full h-[346px] md:h-[799px] bg-center bg-water-bg bg-no-repeat bg-cover mix-blend-color-dodge"></div>
        </div>
        {/* <div className="flex flex-col justify-center items-center md:mb-[117px] mb-[114px]">
          <div className="flex flex-col justify-center items-center gap-[33px] md:gap-0 mb-[33px] md:mb-0">
            <h5 className="text-base-white text-[22.3px] md:text-[39px] font-[Open Sans] font-[600] leading-[26.6px] md:leading-[37px] md:tracking-[1.17px] uppercase">know your tablet</h5>
            <Image src={tab5} alt="Tab" className="md:mr-[-10%] hidden md:block" />
            <Image src={shivaTableOne} alt="Tab" className="md:mr-[-10%] md:hidden"/>
          </div>
          <FeaturesContainer
            fLogo1={featureLogo13}
            fLogo2={featureLogo14}
            fLogo3={featureLogo15}
            fSubHeading1="A 10-inch ultraportable
            model with a spacious
            liquid retina display."
            fSubHeading2="Supercharged by the
            xx chip, with battery
            life up to 18 hours."
            fSubHeading3="Blazing fast performance,
            latest Bluetooth technology
            and enhanced augmented
            reality."
            subHeadingStyle
          />
        </div> */}

        <div className="flex flex-col md:flex-row w-full bg-[#ffffff99] justify-center items-center">
            <div className="w-[45vw] md:flex flex-col justify-center items-start md:pl-[195px] md:gap-[50px] hidden">
                <h3 className="text-[#0292B5] font-[Open Sans] md:text-[56px] font-[600] md:leading-[59.5px] md:tracking-[1.68px] uppercase">
                  Offer A Gift Of Dharma To Your Loved Ones 
                </h3>
                <PrimaryButton text={"Preorder"} pathUrl={"preorder"}/>
            </div>
            <p className="text-[#0292B5] text-[36px] font-[600] leading-[39px] uppercase text-center mt-[37px] md:hidden">
            Offer A Gift <br />
            Of Dharma To <br />
            Your Loved Ones 
            </p>
            <div className="md:w-[55vw] flex items-end justify-end">
                <Image src={sadhanaBook} alt=""/>
            </div>
            <div className="mb-[52px] md:hidden">
              <PrimaryButton text={"Preorder"} pathUrl={"preorder"}/>
            </div>

        </div>
      </section>
  );
}

interface FeaturesContainerInterface {
  fLogo1?: StaticImageData,
  fLogo2?: StaticImageData,
  fLogo3?: StaticImageData,
  fLogo4?: StaticImageData,
  fHeading1?: string,
  fHeading2?: string,
  fHeading3?: string,
  fHeading4?: string,
  fSubHeading1?: string,
  fSubHeading2?: string,
  fSubHeading3?: string,
  fSubHeading4?: string,
  subHeadingStyle?: boolean
}

const FeaturesContainer: React.FC<FeaturesContainerInterface> = ({
  fLogo1,
  fLogo2,
  fLogo3,
  fLogo4,
  fHeading1,
  fHeading2,
  fHeading3,
  fHeading4,
  fSubHeading1,
  fSubHeading2,
  fSubHeading3,
  fSubHeading4,
  subHeadingStyle
}) => {
  return (
    <div className="flex justify-center items-center md:gap-[24px] md:px-[217px] w-full">

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-[55px] md:gap-y-[31px] gap-y-[54px] place-items-start w-full">
        {
          fLogo1 && (
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:gap-[30px] w-full">
                <div className="w-full md:w-[21%] flex justify-center items-center">
                    <Image src={fLogo1} alt="" />
                  </div>
                  <div className="w-full flex flex-col items-center md:items-start justify-center gap-[6px] md:gap-0 mt-[12px] md:mt-0">
                    <h6 className="text-[#FFE6BB] text-[24.9px] md:text-[24px] font-[600] font-[Open Sans] leading-[37px] md:tracking-[0.72px]">{fHeading1}</h6>
                    <p 
                    className={subHeadingStyle ? "text-base-white text-[15px] leading-[20px] px-[85px] md:px-0 text-center md:text-start md:text-[25px] font-[600] md:leading-[30.5px] md:tracking-[0.75px]" : `text-base-white text-[15px] md:text-[17px] font-[400] leading-[23px] md:!tracking-[0.75px] text-center md:text-start px-[85px] md:px-0`}
                    >
                      {fSubHeading1}
                    </p>
                </div>
            </div>
          )
        }
        {
          fLogo2 && (
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:gap-[30px] w-full">
                  <div className="w-full md:w-[21%] flex justify-center items-center">
                    <Image src={fLogo2} alt="" width={0} height={0} style={{
                      // width: '70px',
                      // height: '70px'
                    }} />
                  </div>
                  <div className="w-full flex flex-col items-center md:items-start justify-center gap-[6px] md:gap-0 mt-[12px] md:mt-0">
                    <h6 className="text-[#FFE6BB] text-[24.9px] md:text-[24px] font-[600] font-[Open Sans] leading-[37px] md:tracking-[0.72px]">{fHeading2}</h6>
                    <p className={subHeadingStyle ? "text-base-white text-[15px] leading-[20px] px-[85px] md:px-0 md:text-start text-center md:text-[25px] font-[600] md:leading-[30.5px] md:tracking-[0.75px]" : `text-base-white text-[15px] md:text-[17px] font-[400] leading-[23px] md:tracking-[0.51px] text-center md:text-start px-[85px] md:px-0`}>{fSubHeading2}
                    </p>
                </div>
            </div>
          )
        }

        {
          fLogo3 && (
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:gap-[30px] w-full">
                <div className="w-full md:w-[21%] flex justify-center items-center">
                    <Image src={fLogo3} alt="" />
                  </div>
                  <div className="w-full flex flex-col items-center md:items-start justify-center gap-[6px] md:gap-0 mt-[12px] md:mt-0">
                    <h6 className="text-[#FFE6BB] text-[24.9px] md:text-[24px] font-[600] font-[Open Sans] leading-[37px] md:tracking-[0.72px]">{fHeading3}</h6>
                    <p className={subHeadingStyle ? "text-base-white text-[15px] leading-[20px] px-[85px] md:px-0 md:text-start text-center md:text-[25px] font-[600] md:leading-[30.5px] md:tracking-[0.75px]" : `text-base-white text-[15px] md:text-[17px] font-[400] leading-[23px] md:tracking-[0.51px] text-center md:text-start px-[85px] md:px-0`}>{fSubHeading3}
                    </p>
                </div>
            </div>
          )
        }
        {
          fLogo4 && (
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:gap-[30px] w-full">
                  <div className="w-full md:w-[21%] flex justify-center items-center">
                      <Image src={fLogo4} alt="" className="" />
                    </div>
                    <div className="w-full flex flex-col items-center md:items-start justify-center gap-[6px] md:gap-0 mt-[12px] md:mt-0">
                      <h6 className="text-[#FFE6BB] text-[24.9px] md:text-[24px] font-[600] font-[Open Sans] leading-[37px] md:tracking-[0.72px]">{fHeading4}</h6>
                      <p className={subHeadingStyle ? "text-base-white text-[15px] leading-[20px] px-[85px] md:px-0 md:text-start text-center md:text-[25px] font-[600] md:leading-[30.5px] md:tracking-[0.75px]" : `text-base-white text-[15px] md:text-[17px] font-[400] leading-[23px] md:tracking-[0.51px] text-center md:text-start px-[85px] md:px-0`}>{fSubHeading4}
                      </p>
                  </div>
              </div>
          )
        }
      </div>
    </div>
  );
}

interface TitleContainerInterface {
  image: StaticImageData,
  heading: string,
  subHeading: string
}

const TitleContainer: React.FC<TitleContainerInterface> = ({ image, heading, subHeading }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className="relative flex justify-center items-center">
          <Image src={image} alt="Sadhana" className="relative z-10"  />
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 134 134" fill="none" className="absolute ">
            <g filter="url(#filter0_f_646_220)">
              <circle cx="67" cy="67" r="45" fill="#04C8FF"/>
            </g>
            <defs>
              <filter id="filter0_f_646_220" x="0" y="0" width="134" height="134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="11" result="effect1_foregroundBlur_646_220"/>
              </filter>
            </defs>
          </svg>
          <div className=" w-[322px] absolute h-[21px] bg-[#04C8FF] rounded-[322px] blur-[20px]">
          </div>
      </div>
      <div className="relative flex justify-center items-center">
        <h1 className="text-base-white font-open-sans text-[39px] font-[600] leading-[37px] md:tracking-[1.17px] uppercase mt-[20px] md:mt-[25px]">{heading}</h1>
        <div className="absolute w-[293px] md:w-[333px] h-[37px] md:h-[42px] bg-[#04C8FF4D] rounded-[293px]
        mt-[20px] md:mt-[25px] blur-[11px]"></div>
      </div>
      <h6 className="text-base-white text-[15px] md:text-[26px] leading-[23px] md:leading-[37px] md:tracking-[0.78px] tracking-[0.45px] font-open-sans font-[400] capitalize md:mt-[25px] mt-[28px] xl:px-[380px] lg:px-[250px] px-[60px] md:px-[150px]">{subHeading}</h6>
    </div>
  );
}

interface ImageContainerInterface {
  tabImage: StaticImageData,
  hindiLogoImage: StaticImageData,
  text: string
}

const ImageContainer: React.FC<ImageContainerInterface> = ({ tabImage, hindiLogoImage, text }) => {
  return (
    <div className="flex flex-col justify-center items-center md:pb-[63px] pb-[66px]">
      <Image src={tabImage} alt="Tab" className="md:mt-[-5%]" />
      <Image src={hindiLogoImage} alt="" className="md:mt-[-10%] px-[82px] md:px-0" />
      <h5 className="md:text-[26px] text-[15px] text-base-white font-[600] leading-[23px] md:leading-[37px] md:tracking-[0.78px] tracking-[0.45px] px-[82px] ">{text}</h5>
    </div>
  );
}


const LogoCard = () => {
  return (
    <div className='grid grid-cols-2 place-items-center justify-items-center md:flex justify-center items-center md:gap-[37px] gap-y-[33px] px-[40px] md:px-0'>
      <div className="col-span-2">
        <Card text="Perform Yagna" imageUrl={logo1} />
      </div>
      <Card text="Offer Abhishekam" imageUrl={logo3} />
      <Card text="Perform Japa" imageUrl={logo2} />
      <Card text="Do Nitya Puja" imageUrl={logo4} />
      <Card text="Take up Sadhana" imageUrl={logo5} />
    </div>
  )
}

interface CardInterface {
  text: string,
  imageUrl: StaticImageData,
}

const Card: React.FC<CardInterface> = ({ text, imageUrl }) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image src={imageUrl} alt={text} />
      <h5 className='text-base-white text-[15px] md:text-[18px] font-open-sans font-[400] md:leading-[37px] md:tracking-[0.54px] '>{text}</h5>
    </div>
  );
}

