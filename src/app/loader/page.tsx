'use client'
import Image from "next/image";
import OtpInput from 'react-otp-input';
import '@/css/first/main.css';
import { useEffect, useState } from "react";
export default function Home() {
  const [otp, setOtp] = useState('');
  return (
    <main className="ctw-flex ctw-flex-col ctw-items-center ctw-justify-between ctw-pt-[80px]">
      <div className="ctw-w-[448px] ctw-border-solid ctw-border-[1px]  ctw-rounded-[18px] ctw-border-[rgba(138,145,158,0.2)] ctw-p-[40px] ctw-pb-[24px] ctw-pb-[24px]">
        <div className="ctw-pb-[56px] ctw-w-[126px] ctw-h-[78.52px]">
          <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="Coinbase logo" viewBox="0 0 688 123" className="cds-iconStyles-iogjozt" width="100%">
            <title>Coinbase logo</title>
            <path d="M138.857 34.3392C113.863 34.3392 94.3343 53.3277 94.3343 78.7477C94.3343 104.168 113.37 122.994 138.857 122.994C164.343 122.994 183.71 103.843 183.71 78.5852C183.71 53.4902 164.674 34.3392 138.857 34.3392ZM139.025 104.674C124.792 104.674 114.363 93.611 114.363 78.754C114.363 63.7282 124.624 52.6714 138.857 52.6714C153.258 52.6714 163.681 63.897 163.681 78.754C163.681 93.611 153.258 104.674 139.025 104.674ZM189.168 53.659H201.584V121.35H221.443V35.9893H189.168V53.659ZM44.3536 52.6652C54.7832 52.6652 63.0581 59.103 66.1995 68.6785H87.2209C83.4113 48.2087 66.5305 34.3392 44.5223 34.3392C19.5288 34.3392 0 53.3277 0 78.754C0 104.18 19.0355 123 44.5223 123C66.0371 123 83.249 109.131 87.0586 88.492H66.1995C63.2205 98.0675 54.9456 104.674 44.516 104.674C30.1145 104.674 20.0222 93.611 20.0222 78.754C20.0285 63.7282 29.9584 52.6652 44.3536 52.6652ZM566.518 70.4973L551.954 68.3535C545.003 67.3659 540.038 65.0533 540.038 59.603C540.038 53.659 546.495 50.6901 555.264 50.6901C564.863 50.6901 570.989 54.8153 572.313 61.5844H591.511C589.357 44.4148 576.117 34.3455 555.763 34.3455C534.742 34.3455 520.84 45.0773 520.84 60.2656C520.84 74.7913 529.946 83.2167 548.313 85.8544L562.877 87.9982C569.996 88.9858 573.968 91.7984 573.968 97.0799C573.968 103.849 567.017 106.655 557.418 106.655C545.665 106.655 539.045 101.868 538.052 94.6048H518.523C520.347 111.281 533.418 123 557.25 123C578.933 123 593.328 113.093 593.328 96.0861C593.328 80.8979 582.905 72.9725 566.518 70.4973ZM211.514 0.825042C204.232 0.825042 198.767 6.10656 198.767 13.3694C198.767 20.6323 204.225 25.9138 211.514 25.9138C218.796 25.9138 224.26 20.6323 224.26 13.3694C224.26 6.10656 218.796 0.825042 211.514 0.825042ZM502.966 65.2158C502.966 46.7274 491.712 34.3455 467.88 34.3455C445.373 34.3455 432.795 45.7398 430.309 63.2407H450.007C451 56.4716 456.296 50.8588 467.549 50.8588C477.648 50.8588 482.613 55.3153 482.613 60.7656C482.613 67.866 473.507 69.6785 462.253 70.8349C447.028 72.4849 428.161 77.7664 428.161 97.58C428.161 112.937 439.583 122.837 457.788 122.837C472.021 122.837 480.958 116.893 485.43 107.48C486.092 115.9 492.38 121.35 501.155 121.35H512.74V103.687H502.972V65.2158H502.966ZM483.437 86.6794C483.437 98.0737 473.507 106.493 461.423 106.493C453.972 106.493 447.683 103.355 447.683 96.7549C447.683 88.3357 457.782 86.0231 467.05 85.0356C475.987 84.2105 480.952 82.2292 483.437 78.429V86.6794ZM378.012 34.3392C366.92 34.3392 357.652 38.9645 351.032 46.7211V0H331.172V121.35H350.701V110.124C357.321 118.212 366.758 123 378.012 123C401.843 123 419.886 104.18 419.886 78.754C419.886 53.3277 401.512 34.3392 378.012 34.3392ZM375.033 104.674C360.8 104.674 350.37 93.611 350.37 78.754C350.37 63.897 360.962 52.6714 375.195 52.6714C389.596 52.6714 399.689 63.7345 399.689 78.754C399.689 93.611 389.265 104.674 375.033 104.674ZM283.671 34.3392C270.762 34.3392 262.319 39.6208 257.354 47.0524V35.9893H237.656V121.344H257.516V74.9538C257.516 61.9094 265.791 52.6652 278.038 52.6652C289.46 52.6652 296.574 60.7531 296.574 72.4787V121.35H316.434V70.9974C316.44 49.5275 305.354 34.3392 283.671 34.3392ZM688 75.9476C688 51.5151 670.126 34.3455 646.126 34.3455C620.639 34.3455 601.934 53.4965 601.934 78.754C601.934 105.337 621.963 123 646.457 123C667.147 123 683.366 110.781 687.5 93.4485H666.81C663.831 101.043 656.549 105.337 646.781 105.337C634.035 105.337 624.436 97.4112 622.288 83.5417H687.994V75.9476H688ZM623.449 69.341C626.597 57.4529 635.534 51.6776 645.795 51.6776C657.049 51.6776 665.655 58.1155 667.641 69.341H623.449Z" fill="#FFFFFF"></path>
          </svg>
        </div>
        <div className="ctw-mt-[32px] ctw-mb-[80px] ctw-flex ctw-text-center ctw-items-center ctw-flex-col ctw-justify-center">
          <div className="ctw-m-auto ctw-h-[150px] ctw-flex ctw-items-center">
            <svg aria-hidden="true" className="ctw-stroke-4 ctw-w-[38px] ctw-text-gray-200 ctw-h-[38px] ctw-animate-spin-fast  ctw-fill-blue-600" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
              <path stroke-width="12" className="ctw-text-[#141519] ctw-stroke-[6px]" d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path stroke-width="2" d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
