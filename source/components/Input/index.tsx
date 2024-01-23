import React from 'react'

interface inputProps {
    label: string,
    inputType?: string,
    placeHolder?: string,
    value: string,
    required?: boolean,
    maxLength?: number,
    pattern?: string,
    max?: string,
    updateValueFunction: React.Dispatch<React.SetStateAction<string>>,
}

const Input: React.FC<inputProps> = ({
    label,
    inputType = "text",
    placeHolder,
    value,
    required = false,
    maxLength,
    pattern,
    max,
    updateValueFunction
}) => {

    return (
        <div className='flex flex-col items-start w-full md:gap-[36px]'>
            <label htmlFor="firstName" className='text-white md:text-[20px] font-normal md:leading-[29.144px] md:tracking-[0.6px]'>
                {label}
            </label>
            <input
                maxLength={maxLength}
                required={required}
                type={inputType}
                placeholder={placeHolder}
                value={value}
                pattern={pattern}
                max={max}
                onChange={(e) => updateValueFunction(e.target.value)}
                className='w-full py-[13px] bg-transparent outline-none border-b-[1px] md:text-[17px] placeholder:text-[#FFFFFF94] border-white border-solid' />
        </div>
    )
}

export default Input