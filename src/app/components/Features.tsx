import Image from "next/image";
import Link from "next/link";

const Features = () => {
  return (
    <>
      <section>
        <div className='flex flex-col gap-1'>
          <div className='icons flex justify-around items-center'>
            <div className='feature-blue'>
              <Link href='/send'>
                <Image
                  src='/send-2a.svg'
                  alt='send Image'
                  width={16}
                  height={16}
                  priority
                />
              </Link>
            </div>
            <div className='feature-blue'>
              <Image
                src='/add-square.svg'
                alt='add image'
                width={16}
                height={16}
                priority
              />
            </div>
            <div className='feature-blue'>
              <Image
                src='/receipt-text-blue.svg'
                alt='receipt image'
                width={16}
                height={16}
                priority
              />
            </div>
          </div>
          <div className='flex justify-around items-center mb-4'>
            <h3 className='text-[#28374B] text-sm'>
              <Link href='/send' className='font-semibold'>
                Send
              </Link>
            </h3>
            <Link href='/topup'>
              <h3 className='text-[#28374B] text-sm font-semibold'>Top-Up</h3>
            </Link>
            <Link href='/bills'>
              <h3 className='text-[#28374B] text-sm font-semibold'>Bills</h3>
            </Link>
          </div>
          <div className='icons flex justify-around items-center'>
            <div className='feature-yellow'>
              <Image
                src='/chart-square.svg'
                alt='Home Image'
                width={16}
                height={16}
                priority
              />
            </div>
            <div className='feature-yellow'>
              <Image
                src='/sort.svg'
                alt='sort image'
                width={16}
                height={16}
                priority
              />
            </div>
            <div className='feature-yellow'>
              <Image
                src='/money-2.svg'
                alt='money image'
                width={16}
                height={16}
                priority
              />
            </div>
          </div>
          <div className='flex justify-around items-center ml-[10px]'>
            <Link href='/data'>
              <h3 className='text-[#28374B] text-sm font-semibold'>Data</h3>
            </Link>
            <Link href='/savings'>
              <h3 className='text-[#28374B] text-sm font-semibold'>Savings</h3>
            </Link>
            <Link href='/betting'>
              <h3 className='text-[#28374B] text-sm font-semibold'>Betting</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default Features;
