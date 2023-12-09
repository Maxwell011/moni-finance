"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Identification() {
  const router = useRouter();

  return (
    <>
      <section className='mx-[41px] my-[30px]'>
        <div
          className='cursor-pointer'
          onClick={() => router.push("/setup/address")}
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
          <p className='text-sm text-[#5e6978] mb-2'>Step 3 of 4</p>
          <h1 className='text-2xl text-[#28374B] mb-2'>
            Identification Information
          </h1>
          <p className='text-sm text-[#939BA5] mb-[23px]'>
            Please upload the following documents to verify your profile
          </p>
          <Image
            src='/Group 4.svg'
            alt='Document image'
            width={212.22}
            height={175.383}
            className='mb-7 ml-[50px]'
          />
          <div className=''>
            <div className='flex w-[312px] justify-between items-center border rounded-[7px] border-solid border-[#28374B] h-10 cursor-pointer mb-6 p-4 lg:w-[25%]'>
              <h3 className='text-sm text-[#28374b]'>Your Valid Id</h3>
              <Image
                src='/stickynote.svg'
                alt='Settings Icon'
                width={14}
                height={14}
                className=''
              />
            </div>
            <div className='flex w-[312px] justify-between items-center border rounded-[7px] border-solid border-[#28374B] h-10 cursor-pointer mb-11 p-4 lg:w-[25%]'>
              <h3 className='text-sm text-[#28374b]'>Your Utility Bill</h3>
              <Image
                src='/folder-cross.svg'
                alt='Settings Icon'
                width={14}
                height={14}
                className=''
              />
            </div>
          </div>
          <button className='flex w-[312px] justify-center items-center gap-4 text-white text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] bg-[#0476D9] lg:w-[25%]'>
            <Link href='/setup/verify' legacyBehavior>
              Next
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
