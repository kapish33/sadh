import React from 'react'

interface QuoteContainerInterface {
    quote: string,
    authorName: string
}

const QuoteContainer: React.FC<QuoteContainerInterface> = ({
    quote,
    authorName
}) => {
    return (
        <div className="xl:px-[290px] lg:px-[190px] md:px-[80px] px-[17px] min-h-[195px] flex justify-center flex-col items-end text-base-white">
            <div className="flex">
                <h3 className="p-4 font-open-sans text-center text-[14px] md:text-[27px] italic font-[600] tracking-[0.42px] md:tracking-[0.81px] leading-[18.5px] md:leading-[35px] quote">
                    {quote}
                </h3>
            </div>
            <h6 className="pt-[42px] items-end text-[14.4px] leading-[22px] tracking-[0.434px] md:text-[18px] italic font-medium font-open-sans">- {authorName}</h6>
        </div>
    );
}

export default QuoteContainer