"use client";
import Input from '@/source/components/Input';
import React, { useState } from 'react'

const CustomerInfo = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [townCity, setTownCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [companyName, setCompanyName] = useState<string>("");
    const [pinCode, setPinCode] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [phoneNo, setPhoneNo] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [appartment, setAppartment] = useState<string>("");
    const [differentAccount, setdDifferentAccount] = useState<string>("false");

    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

    return (
        <section className='pt-[8vw] md:pl-[130px] md:pr-[118px] font-open-sans'>
            <h1 className='md:text-[48px] text-white font-semibold md:leading-[55px] md:tracking-[0.48px] capitalize' >checkout</h1>
            <h5 className='text-accent-yellowPrimary md:text-[25px] font-semibold md:leading-[38px] md:tracking-[0.75px] capitalize md:mt-[79px]'>Billing details</h5>

            <form onSubmit={(e) => onSubmitForm(e)}>
                <div className='grid grid-cols-2 gap-x-[88px] gap-y-[23px]'>
                    <Input
                        label='First name*'
                        value={firstName}
                        updateValueFunction={setFirstName}
                        required
                    />
                    <Input
                        label='Town/City*'
                        value={townCity}
                        updateValueFunction={setTownCity}
                        required
                    />
                    <Input
                        label='Last name*'
                        value={lastName}
                        updateValueFunction={setLastName}
                        required
                    />
                    <Input
                        label='State*'
                        value={state}
                        placeHolder='Select an option...'
                        updateValueFunction={setState}
                        required
                    />
                    <Input
                        label='Company name (optional)'
                        value={companyName}
                        updateValueFunction={setCompanyName}
                    />
                    <Input
                        label='PIN Code*'
                        value={pinCode}
                        updateValueFunction={setPinCode}
                        required
                        // inputType='tel'
                        pattern="\d*"
                        // max='999999'
                    />
                    <Input
                        label='Country/Region*'
                        value={country}
                        required
                        placeHolder='Select a country/region...'
                        updateValueFunction={setCountry}
                    />
                    <Input
                        label='Phone*'
                        value={phoneNo}
                        required
                        inputType='tel'
                        updateValueFunction={setPhoneNo}
                    />
                    <Input
                        label='Street address*'
                        value={address}
                        required
                        placeHolder='House number and street name'
                        updateValueFunction={setAddress}
                    />
                    <Input
                        label='Email address*'
                        value={email}
                        required
                        inputType='email'
                        updateValueFunction={setEmail}
                    />
                    <Input
                        label='Apartment, suite, unit, etc. (optional)'
                        value={appartment}
                        required
                        placeHolder='Apartment, suite, unit, etc. (optional)'
                        inputType='email'
                        updateValueFunction={setAppartment}
                    />
                </div>
                <div className='flex gap-[28px] items-center md:mt-[62px]'>
                    <input name='differentAddress' id='differentAddress' type="checkbox" value={differentAccount} onChange={(e) => setdDifferentAccount("true")} className='h-[29px] w-[29px]' />
                    <label id='differentAddress' htmlFor='differentAddress' className='text-white md:text-[24px] font-normal md:leading-[29.144px] md:tracking-[0.72px]'>Ship to a different address?</label>
                </div>
                
            </form>
        </section>
    );
}

export default CustomerInfo