import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section>
        <div className=''>
          <div className='icons flex justify-around items-center'>
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
