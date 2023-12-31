"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Address() {
  const router = useRouter();
  return (
    <>
      <section className='mx-[41px] my-[30px]'>
        <div
          className='cursor-pointer'
          onClick={() => router.push("/setup/personal")}
        >
          <Image
            src='/arrow-left.svg'
            alt='Arrow left'
            width={24}
            height={24}
            className='mb-6'
          />
        </div>
        <div>
          <p className='text-sm text-[#5e6978] mb-2'>Step 2 of 4</p>
          <h1 className='text-2xl text-[#28374B] mb-2'>Address Information</h1>
          <p className='text-sm text-[#939BA5] mb-[23px] lg:text-[18px]'>
            Please fill in your current residential address. We will use this to
            verify and ensure the safety of your account
          </p>
          <div className='flex flex-col gap-1'>
            <label className='text-[#28374B] sm:text-xl lg:text-2xl not-italic font-normal leading-[normal]'>
              Residential Address
            </label>
            <input
              type='text'
              placeholder='Enter Your Address'
              className='w-full sm:w-36 h-10 sm:h-[41px] input-style flex items-center border rounded-[7px] border-solid border-[#28374B] mb-[20px] lg:w-[30%]'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-[#28374B] lg:text-xl  sm:text-sm not-italic font-normal leading-[normal]'>
              City
            </label>
            <input
              type='text'
              name='city'
              placeholder='Enter your current city'
              className='w-full sm:w-36 h-10 sm:h-[41px] input-style flex items-center border rounded-[7px] border-solid border-[#28374B] mb-[20px] lg:w-[30%]'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-[#28374B] sm:text-xl lg:tex-2xl not-italic font-normal leading-[normal]'>
              State
            </label>
            <input
              type='text'
              name='state'
              placeholder='Enter your state'
              className='w-full sm:w-36 h-10 sm:h-[41px] input-style flex items-center border rounded-[7px] border-solid border-[#28374B] mb-[20px] lg:w-[30%]'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-[#28374B] sm:text-xl lg:tex-2xl not-italic font-normal leading-[normal]'>
              Country
            </label>
            <input
              type='text'
              name='country'
              placeholder='Enter Country'
              className='w-full sm:w-36 h-10 sm:h-[41px] input-style flex items-center border rounded-[7px] border-solid border-[#28374B] mb-[40px] lg:w-[30%]'
            />
          </div>

          <button className='flex w-[294px] justify-center items-center gap-4 text-white text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] bg-[#0476D9] lg:w-[30%]'>
            <Link href='/setup/identification' legacyBehavior>
              Next
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
