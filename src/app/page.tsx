'use client'
import Image from "next/image";
import '@/css/first/main.css';
import { useEffect, useState } from "react";

const MAIL_INPUT = 1;
const PASS_INPUT = 2;
export default function Home() {
  const [logState, setLogState] = useState(MAIL_INPUT); 
  return (
    <main className="ctw-flex ctw-flex-col ctw-items-center ctw-justify-between ctw-pt-[80px]">
      <div className="sm:ctw-w-full md:ctw-w-[448px] ctw-border-solid ctw-border-[1px]  ctw-rounded-[18px] ctw-border-gray-500 ctw-p-[40px] ctw-pb-[24px] ctw-mb-[40px]">
        <div className="ctw-pb-[56px]">
          <span className="ctw-text-3xl ctw-color-white">coinbase</span>
        </div>
        <div className="ctw-pb-[24px]">
          <h2 className="ctw-text-3xl">Sign in to Coinbase</h2>
          <span className="ctw-pt-[8px] ctw-text-u-gray">Not your device? Use a private or incognito window to sign in. </span>
        </div>
        <div>
          {
            logState == MAIL_INPUT && (
              <div className="ctw-flex ctw-flex-col">
                <label className="ctw-color-white ctw-py-[4px]">Email</label>
                <input className="ctw-w-full ctw-h-[60px] ctw-px-[20px] ctw-outline-none ctw-rounded-[8px] ctw-border-[1px] ctw-border-solid ctw-border-gray-500 active:ctw-bg-gray-700 ctw-bg-u-black focus:ctw-border-[2px] focus:ctw-border-blue-600 focus:ctw-border-solid" placeholder="Your email address" type="email"/>
              </div>
            )
          }
          {
            logState == PASS_INPUT && (
              <>
                <div className="ctw-flex ctw-flex-col">
                  <button className="ctw-flex ctw-items-center ctw-w-full ctw-h-[60px] ctw-px-[20px] ctw-rounded-[8px] ctw-border-[1px] ctw-border-solid ctw-border-gray-500 active:ctw-bg-gray-700 ctw-bg-u-black ctw-text-left">
                    <div className="ctw-w-[24px] ctw-h-[24px] ctw-mr-[10px] ctw-border-2 ctw-rounded-full ctw-border-solid ctw-border-white">
                      <span className="fa-sharp fa-solid fa-user "></span>
                    </div>
                    Test Mail
                  </button>
                </div>
                <div className="ctw-flex ctw-flex-col">
                  <label className="ctw-color-white ctw-py-[4px]">Password</label>
                  <div className="ctw-flex ctw-w-full ctw-h-[60px] ctw-px-[10px] ctw-rounded-[8px] ctw-border-[1px] ctw-border-solid ctw-border-gray-500 active:ctw-bg-gray-700 ctw-bg-u-black focus:ctw-border-[2px] focus:ctw-border-blue-600 focus:ctw-border-solid">
                    <input className="ctw-outline-none ctw-w-full ctw-bg-transparent" type="email"/>
                    <span className="fa-sharp fa-solid fa-eye-slash ctw-leading-[60px] ctw-text-gray-700">a</span>
                  </div>
                  <p className="ctw-text-blue-700 ctw-my-[16px]">Forgot password?</p>
                </div>
              </>
            )
          }
          
          <div className="ctw-flex ctw-flex-col ctw-h-[56px] ctw-pt-[16px] active:ctw-border-[2px] active:ctw-border-solid active:ctw-border-transparent">
            <button className="ctw-w-full ctw-h-full  ctw-text-black ctw-font-semibold ctw-bg-blue-600 ctw-rounded-full hover:ctw-bg-blue-400" 
              onClick={(e) => { e.preventDefault(); setLogState(PASS_INPUT);}}
            >Continue</button>
          </div>
          {
            logState == MAIL_INPUT && (
              <>
                <div className="ctw-flex ctw-flex-col ctw-pt-[16px] ctw-justify-between ctw-items-center ctw-px-[20px]">
                  <span className="ctw-w-full ctw-h-[1px] ctw-bg-gray-700"></span>
                  <span className="ctw-mt-[-15px] ctw-bg-u-black ctw-w-[50px] ctw-text-center">OR</span>
                </div>
                <div className="ctw-flex ctw-flex-col ctw-px-[20px] ctw-mt-[16px]">
                  <div className="ctw-rounded-full ctw-color-[#e8eaed] ctw-bg-[#202124] ctw-flex ctw-transition ctw-duration-500 hover:ctw-bg-gray-700">
                    <div className="ctw-flex-none ctw-w-[36px] ctw-h-[36px] ctw-p-[6px] ctw-bg-white ctw-rounded-full">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                    </div>
                    <div className="ctw-grow ctw-text-center ctw-leading-[36px] ctw-text-[14px]">
                      Sign in with Google
                    </div>
                  </div>
                  <div className="ctw-px-[20px] ctw-mt-[10px] ctw-text-center">
                    <p className="ctw-text-white">Don&apos;t have an account? <span className="ctw-text-blue-700">Sign Up</span></p>
                    <p className="ctw-text-blue-700">Sign in to a business account</p>
                    <p className="ctw-text-blue-700">Privacy policy</p>
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>
    </main>
  );
}
