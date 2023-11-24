import Image from "next/image";
import Link from "next/link";

export default function PersonalInformation() {
  return (
    <>
      <section className='m-[41px]'>
        <Image
          src='/arrow-left.svg'
          alt='Arrow left'
          width={24}
          height={24}
          className='mb-6'
        />
        <div>
          <p className='text-sm text-[#5e6978] mb-4'>Step 1 of 4</p>
          <h1 className='text-2xl text-[#28374B]mb-2'>Personal Information</h1>
          <p className='text-sm text-[#939BA5] mb-[30px]'>
            Welcome to the KYC process. We want to ensure the safety and
            security of all our users
          </p>
          <label className='text-[#28374B] sm:text-xl lg:text-2xl not-italic font-normal leading-[normal]'>
            Full Name
          </label>
          <input
            type='text'
            placeholder='Enter Your Full Name'
            className='w-full sm:w-36 h-10 sm:h-[41px] input-style flex items-center border rounded-[7px] border-solid border-[#28374B] mb-[25px]'
          />
          <label className='text-[#28374B] lg:text-xl  sm:text-sm not-italic font-normal leading-[normal]'>
            Date of Birth
          </label>
          <input
            type='date'
            name='birth'
            placeholder='Enter your date of birth'
            className='w-full sm:w-36 h-10 sm:h-[41px] input-style flex items-center border rounded-[7px] border-solid border-[#28374B] mb-[25px]'
          />
          <label className='text-[#28374B] sm:text-xl lg:tex-2xl not-italic font-normal leading-[normal]'>
            Phone Number
          </label>
          <input
            type='text'
            placeholder='Enter your phone number'
            className='w-full sm:w-36 h-10 sm:h-[41px] input-style flex items-center border rounded-[7px] border-solid border-[#28374B] mb-[40px]'
          />
          <button className='flex w-[294px] justify-center items-center gap-4 text-white text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] bg-[#0476D9]'>
            <Link href='/setup/address' legacyBehavior>
              Next
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
