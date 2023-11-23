const page = () => {
  return (
    <>
      <section>
        <div>
          <h1 className='text-2xl text-[#28374b]'>
            You are almost ready to start transacting
          </h1>
          <p className='text-sm'>
            To start transacting, you will need to complete your account setup.
            You can choose to skip this process and go straight to your
            dashboard but you will not be able to transact until you complete
            the process.
          </p>

          <div>
            <button className='flex w-[278px] justify-center items-center gap-4 text-white text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] bg-[#0476D9]'>
              Set up Account
            </button>
            <button className='text-[#0476D9] text-base font-normal leading-[normal] border border-solid border-[#0476D9] flex w-[278px] justify-center items-center gap-4 p-3 rounded-[10px]'>
              Skip for now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
