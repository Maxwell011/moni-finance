import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section>
        <div className=''>
          <div className='icons flex justify-around'>
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
          <div className='flex justify-around'>
            <h3>Home</h3>
            <h3>send</h3>
            <h3>Profile</h3>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;