import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section>
        <div className=''>
          <div className='images'>
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
        </div>
      </section>
    </>
  );
};
export default Footer;
