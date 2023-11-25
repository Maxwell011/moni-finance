"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import FaceVerification from "../../svg/FaceVerification";
import Link from "next/link";

export default function VerifyFace() {
  const router = useRouter();

  return (
    <>
      <section className='mx-[41px] my-[30px]'>
        <div
          className='cursor-pointer'
          onClick={() => router.push("/setup/identification")}
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
            Let verify your identity
          </p>
          <button className='flex w-[312px] justify-center items-center gap-4 text-white text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] bg-[#0476D9]'>
            <Link href='/' legacyBehavior>
              Get Started
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
