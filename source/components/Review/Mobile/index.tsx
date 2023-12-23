import Image from "next/image";
import profileLogo from "../../../../assets/profile_logo.png";

const Index: React.FC = () => {
    return (
        <section className="bg-[#001d2d45] flex md:hidden xl:hidden lg:hidden flex-col items-center text-base-white pt-[128px]">
            <p className="pb-[66px] text-[19px] font-[700]">What Customers Says About Us</p>
            <p className="pb-[40px] text-[14px] font-[700]">Top reviews from India</p>
            <div className="flex flex-col items-center pb-[57px]">
                {/* Image */}
                <div className="bg-[#D9D9D9] w-[35px] h-[35px] flex justify-center items-center rounded-full">
                    <Image src={profileLogo} alt="Profile" width={25} height={25} />
                </div>

                {/* Stars */}
                <div className="flex pt-[10px]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26" fill="none">
                            <path d="M13.9339 18.7066L20.6289 22.7474L18.8523 15.1316L24.7673 10.0074L16.9781 9.34656L13.9339 2.16406L10.8898 9.34656L3.10059 10.0074L9.01559 15.1316L7.23892 22.7474L13.9339 18.7066Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26" fill="none">
                            <path d="M13.9339 18.7066L20.6289 22.7474L18.8523 15.1316L24.7673 10.0074L16.9781 9.34656L13.9339 2.16406L10.8898 9.34656L3.10059 10.0074L9.01559 15.1316L7.23892 22.7474L13.9339 18.7066Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26" fill="none">
                            <path d="M13.9339 18.7066L20.6289 22.7474L18.8523 15.1316L24.7673 10.0074L16.9781 9.34656L13.9339 2.16406L10.8898 9.34656L3.10059 10.0074L9.01559 15.1316L7.23892 22.7474L13.9339 18.7066Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26" fill="none">
                            <path d="M14.1923 18.2785L13.9339 18.1225L13.6756 18.2785L7.99505 21.707L9.50251 15.2452L9.57107 14.9513L9.34297 14.7536L4.32367 10.4054L10.932 9.84477L11.2325 9.81928L11.3501 9.54168L13.9339 3.44536L16.5177 9.54168L16.6354 9.81928L16.9358 9.84477L23.5442 10.4054L18.5249 14.7536L18.2968 14.9513L18.3653 15.2452L19.8728 21.707L14.1923 18.2785Z" stroke="#F8F8F8" />
                            <path d="M24.9832 9.87511L17.2719 9.19638L14.2582 1.94922L11.2445 9.20732L3.5332 9.87511L9.38905 15.0532L7.63015 22.7492L14.2582 18.6658L20.8863 22.7492L19.1381 15.0532L24.9832 9.87511ZM14.2582 16.6187V6.43764L16.0922 10.8604L20.7897 11.2764L17.229 14.4292L18.3015 19.1147L14.2582 16.6187Z" fill="white" />
                        </svg>
                    </div>
                </div>

                <div className="max-w-[474px] pt-[8px] text-[#DBDBDB] flex flex-col justify-center items-center">
                    <p className="text-[#DBDBDB] text-[9px] text-center font-[400]">Reviewed in India on 15 September 2023</p>
                    <div className="flex items-center justify-end gap-[17px] pt-[11px]">
                            <p className="pl-[25px] text-[9px]">God : Shiva</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="18" viewBox="0 0 2 18" fill="none">
                                <path d="M0.802979 1.02344L0.802979 17.5901" stroke="white" stroke-width="0.662665" stroke-linecap="round"/>
                            </svg>
                            <p className="text-[9px]">Verified Purchase</p>
                    </div>
                </div>

                <p className="text-[12px] font-[400] text-base-white pt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            <div className="flex flex-col items-center pb-[57px]">
                {/* Image */}
                <div className="bg-[#D9D9D9] w-[35px] h-[35px] flex justify-center items-center rounded-full">
                    <Image src={profileLogo} alt="Profile" width={25} height={25} />
                </div>

                {/* Stars */}
                <div className="flex pt-[10px]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26" fill="none">
                            <path d="M13.9339 18.7066L20.6289 22.7474L18.8523 15.1316L24.7673 10.0074L16.9781 9.34656L13.9339 2.16406L10.8898 9.34656L3.10059 10.0074L9.01559 15.1316L7.23892 22.7474L13.9339 18.7066Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26" fill="none">
                            <path d="M13.9339 18.7066L20.6289 22.7474L18.8523 15.1316L24.7673 10.0074L16.9781 9.34656L13.9339 2.16406L10.8898 9.34656L3.10059 10.0074L9.01559 15.1316L7.23892 22.7474L13.9339 18.7066Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26" fill="none">
                            <path d="M13.9339 18.7066L20.6289 22.7474L18.8523 15.1316L24.7673 10.0074L16.9781 9.34656L13.9339 2.16406L10.8898 9.34656L3.10059 10.0074L9.01559 15.1316L7.23892 22.7474L13.9339 18.7066Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26" fill="none">
                            <path d="M14.1923 18.2785L13.9339 18.1225L13.6756 18.2785L7.99505 21.707L9.50251 15.2452L9.57107 14.9513L9.34297 14.7536L4.32367 10.4054L10.932 9.84477L11.2325 9.81928L11.3501 9.54168L13.9339 3.44536L16.5177 9.54168L16.6354 9.81928L16.9358 9.84477L23.5442 10.4054L18.5249 14.7536L18.2968 14.9513L18.3653 15.2452L19.8728 21.707L14.1923 18.2785Z" stroke="#F8F8F8" />
                            <path d="M24.9832 9.87511L17.2719 9.19638L14.2582 1.94922L11.2445 9.20732L3.5332 9.87511L9.38905 15.0532L7.63015 22.7492L14.2582 18.6658L20.8863 22.7492L19.1381 15.0532L24.9832 9.87511ZM14.2582 16.6187V6.43764L16.0922 10.8604L20.7897 11.2764L17.229 14.4292L18.3015 19.1147L14.2582 16.6187Z" fill="white" />
                        </svg>
                    </div>
                </div>

                <div className="max-w-[474px] pt-[8px] text-[#DBDBDB] flex flex-col justify-center items-center">
                    <p className="text-[#DBDBDB] text-[9px] text-center font-[400]">Reviewed in India on 15 September 2023</p>
                    <div className="flex items-center justify-end gap-[17px] pt-[11px]">
                            <p className="pl-[25px] text-[9px]">God : Shiva</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="18" viewBox="0 0 2 18" fill="none">
                                <path d="M0.802979 1.02344L0.802979 17.5901" stroke="white" stroke-width="0.662665" stroke-linecap="round"/>
                            </svg>
                            <p className="text-[9px]">Verified Purchase</p>
                    </div>
                </div>

                <p className="text-[12px] font-[400] text-base-white pt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            <div className="flex flex-col items-center pb-[174px]">
                {/* Image */}
                <div className="bg-[#D9D9D9] w-[35px] h-[35px] flex justify-center items-center rounded-full">
                    <Image src={profileLogo} alt="Profile" width={25} height={25} />
                </div>

                {/* Stars */}
                <div className="flex pt-[10px]">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26" fill="none">
                            <path d="M13.9339 18.7066L20.6289 22.7474L18.8523 15.1316L24.7673 10.0074L16.9781 9.34656L13.9339 2.16406L10.8898 9.34656L3.10059 10.0074L9.01559 15.1316L7.23892 22.7474L13.9339 18.7066Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26" fill="none">
                            <path d="M13.9339 18.7066L20.6289 22.7474L18.8523 15.1316L24.7673 10.0074L16.9781 9.34656L13.9339 2.16406L10.8898 9.34656L3.10059 10.0074L9.01559 15.1316L7.23892 22.7474L13.9339 18.7066Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26" fill="none">
                            <path d="M13.9339 18.7066L20.6289 22.7474L18.8523 15.1316L24.7673 10.0074L16.9781 9.34656L13.9339 2.16406L10.8898 9.34656L3.10059 10.0074L9.01559 15.1316L7.23892 22.7474L13.9339 18.7066Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 26 26" fill="none">
                            <path d="M14.1923 18.2785L13.9339 18.1225L13.6756 18.2785L7.99505 21.707L9.50251 15.2452L9.57107 14.9513L9.34297 14.7536L4.32367 10.4054L10.932 9.84477L11.2325 9.81928L11.3501 9.54168L13.9339 3.44536L16.5177 9.54168L16.6354 9.81928L16.9358 9.84477L23.5442 10.4054L18.5249 14.7536L18.2968 14.9513L18.3653 15.2452L19.8728 21.707L14.1923 18.2785Z" stroke="#F8F8F8" />
                            <path d="M24.9832 9.87511L17.2719 9.19638L14.2582 1.94922L11.2445 9.20732L3.5332 9.87511L9.38905 15.0532L7.63015 22.7492L14.2582 18.6658L20.8863 22.7492L19.1381 15.0532L24.9832 9.87511ZM14.2582 16.6187V6.43764L16.0922 10.8604L20.7897 11.2764L17.229 14.4292L18.3015 19.1147L14.2582 16.6187Z" fill="white" />
                        </svg>
                    </div>
                </div>

                <div className="max-w-[474px] pt-[8px] text-[#DBDBDB] flex flex-col justify-center items-center">
                    <p className="text-[#DBDBDB] text-[9px] text-center font-[400]">Reviewed in India on 15 September 2023</p>
                    <div className="flex items-center justify-end gap-[17px] pt-[11px]">
                            <p className="pl-[25px] text-[9px]">God : Shiva</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="18" viewBox="0 0 2 18" fill="none">
                                <path d="M0.802979 1.02344L0.802979 17.5901" stroke="white" stroke-width="0.662665" stroke-linecap="round"/>
                            </svg>
                            <p className="text-[9px]">Verified Purchase</p>
                    </div>
                </div>

                <p className="text-[12px] font-[400] text-base-white pt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
        </section>
    );
}

export default Index;