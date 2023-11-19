import Image from "next/image";

const Balance = () => {
  return (
    <>
      <section className='w-[312px] h-[136px] rounded-[15px] bg-gradient-to-r from-blue-900 to-blue-400 ml-[37px] mr-[25px] mt-[27px] mb-6'>
        <div className='p-10'>
          <div className='text-white text-xs'>Available Balance</div>
          <div className='text-white text-[32px] flex gap-[30px]'>
            ₦250,000
            <Image
              src='/eye.svg'
              width={14}
              height={14}
              alt='password visibility'
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Balance;
