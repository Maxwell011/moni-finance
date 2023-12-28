"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function VerifyFace() {
  const router = useRouter();

  return (
    <>
      <section className="mx-[41px] my-[30px]">
        <div
          className="cursor-pointer"
          onClick={() => router.push("/setup/identification")}
        >
          <Image
            src="/arrow-left.svg"
            alt="Arrow left"
            width={24}
            height={24}
            className="mb-6"
          />
        </div>
        <div>
          <p className="text-sm text-[#5e6978] mb-2">Step 4 of 4</p>
          <h1 className="text-2xl text-[#28374B] mb-2">
            Identification Information
          </h1>
          <p className="text-sm text-[#939BA5] mb-[23px]">
            Let verify your identity
          </p>

          <div className="w-[312px] flex items-center justify-center mx-0 my-[30px] fill-[linear-gradient(0deg,rgba(127,247,247,0.20)_0%,#7FF7F7_100%)] opacity-20 pt-[15.18px] pb-[72.42px] px-[27.57px] rounded-[20px]">
            <div className="w-[222.855px] h-[278.403px] bg-[#06E9EE] flex items-center justify-center">
              <Image
                src="/Group.svg"
                alt="group logo"
                width={172.8}
                height={249.496}
                className="mb-6 text-[#06e9ee]"
              />
            </div>
          </div>

          <button className="flex w-[312px] justify-center items-center gap-4 text-white text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] bg-[#0476D9] lg:w-[30%]">
            <Link href="/" legacyBehavior>
              Get Started
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
