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
            className='mb-6'
          />
          
        </div>
      </section>
    </>
  );
}
