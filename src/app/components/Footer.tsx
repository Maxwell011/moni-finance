import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className='w-full h-[80px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.15)] rounded-[40px_40px_0px_0px] mt-8'>
        <div className='flex flex-col gap-1'>
          <div className='icons flex justify-around items-center mt-[25px]'>
            <Image
              src='/home.svg'
              alt='Home Image'
              width={24}
              height={24}
              priority
            />
            <Image
              src='/send-2.svg'
              alt='send image'
              width={24}
              height={24}
              priority
            />
            <Image
              src='/user.svg'
              alt='user profile image'
              width={24}
              height={24}
              priority
            />
          </div>
          <div className='flex justify-around items-center'>
            <h3 className='text-[#0476D9] text-sm'>Home</h3>
            <h3 className='text-[#28374B] text-sm'>send</h3>
            <h3 className='text-[#28374B] text-sm'>Profile</h3>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
