import Image from "next/image";

const Features = () => {
  return (
    <>
      <section>
        <div className='flex flex-col gap-1'>
          <div className='icons flex justify-around items-center'>
            <div className='bg-[#E4F3FF] w-11 h-11 rounded-[30px] flex items-center justify-center'>
              <Image
                src='/send-2a.svg'
                alt='Home Image'
                width={16}
                height={16}
                priority
              />
            </div>
            <div className='bg-[#E4F3FF] w-11 h-11 rounded-[30px] flex items-center justify-center'>
              <Image
                src='/add-square.svg'
                alt='send image'
                width={16}
                height={16}
                priority
              />
            </div>
            <div className='feature-blue'>
              <Image
                src='/receipt-text.svg'
                alt='user profile image'
                width={16}
                height={16}
                priority
              />
            </div>
          </div>
          <div className='flex justify-around items-center'>
            <h3 className='text-[#0476D9] text-sm'>send</h3>
            <h3 className='text-[#28374B] text-sm'>Top-Up</h3>
            <h3 className='text-[#28374B] text-sm'>Bills</h3>
          </div>
          <div className='icons flex justify-around items-center'>
            <Image
              src='/chart-square.svg'
              alt='Home Image'
              width={16}
              height={16}
              priority
            />
            <Image
              src='/sort.svg'
              alt='send image'
              width={16}
              height={16}
              priority
            />
            <Image
              src='/money-2.svg'
              alt='user profile image'
              width={16}
              height={16}
              priority
            />
          </div>
          <div className='flex justify-around items-center'>
            <h3 className='text-[#0476D9] text-sm'>Data</h3>
            <h3 className='text-[#28374B] text-sm'>Airtime</h3>
            <h3 className='text-[#28374B] text-sm'>Betting</h3>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features;
