"use client"
import { useState } from 'react';
import Image from 'next/image';

const Balance = () => {
  const [showBalance, setShowBalance] = useState(true);

  const handleEyeClick = () => {
    setShowBalance((prevState) => !prevState);
  };

  const getMaskedBalance = () => {
    const balance = '₦250,000';
    return showBalance ? balance : '*'.repeat(balance.length);
  };

  return (
    <>
      <section className='w-[312px] h-[136px] rounded-[15px] bg-gradient-to-r from-blue-900 to-blue-400 ml-[37px] mr-[25px] mt-[-15px] mb-6'>
        <div className='p-10 mt-[13px]'>
          <div className='text-white text-xs'>Available Balance</div>
          <div className='text-white text-[32px] flex gap-[30px]'>
            <span>{getMaskedBalance()}</span>
            <Image
              src='/eye.svg'
              width={14}
              height={14}
              alt='password visibility'
              onClick={handleEyeClick}
              className='cursor-pointer'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Balance;