"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Identification() {
  const router = useRouter();

  return (
    <>
      <section className='mx-[41px] my-[30px]'>
        <div>
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
        </div>
      </section>
    </>
  );
}
