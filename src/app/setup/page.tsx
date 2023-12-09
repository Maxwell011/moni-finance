import Link from "next/link";

export default function Setup() {
  return (
    <>
      <section>
        <div>
          <h1 className='text-2xl text-[#28374b] text-center mx-[60px] my-4 font-medium '>
            You are almost ready to start transacting
          </h1>
          <p className='text-sm text-[#939BA5] font-normal text-center mt-0 mb-[55px] mx-[17px] lg:text-[-20px]'>
            To start transacting, you will need to complete your account setup.
            You can choose to skip this process and go straight to your
            dashboard but you will not be able to transact until you complete
            the process.
          </p>

          <div className='flex flex-col items-center gap-8'>
            <button className='flex w-[278px] justify-center items-center gap-4 text-white text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] bg-[#0476D9]'>
              <Link href='/setup/personal' legacyBehavior>
                Set up Account
              </Link>
            </button>
            <button className='text-[#0476D9] text-base font-normal leading-[normal] border border-solid border-[#0476D9] flex w-[278px] justify-center items-center gap-4 p-3 rounded-[10px]'>
              <Link href='/home' legacyBehavior>
                Skip for now
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
