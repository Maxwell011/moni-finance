"use client";
import Link from "next/link";
import MoneyIcon from "../svg/MoneyIcon";

const LaunchScreen = () => {
  return (
    <section>
      {/* Top content */}
      <div className='w-[470.001px] h-[492.959px] rotate-[-30.108deg] absolute top-[-220px] rounded-[492.959px] -left-11 bg-[#0476d9] first'>
        <div className='second'></div>
      </div>

      <MoneyIcon />

      {/* Buttons */}
      <div className='flex gap-4 flex-col'>
        <button className='text-[#0476D9] text-base not-italic font-normal leading-[normal] border border-[color:var(--primary-100,#0476D9)] flex w-[278px] justify-center items-center gap-4 p-3 rounded-[10px] border-solid '>
          <Link href='/login' legacyBehavior>
            Login
          </Link>{" "}
        </button>
        <button className='flex w-[278px] justify-center items-center gap-4 text-white text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] bg-[#0476D9]'>
          <Link href='/signup' legacyBehavior>
            Sign up
          </Link>
        </button>
      </div>
    </section>
  );
};
export default LaunchScreen;
