import Image from "next/image";
import HamburgerButton from "../svg/Hamburger";
import Link from "next/link";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <>
      <section>
        <div className='flex items-center gap-20 m-8'>
          <HamburgerButton />
          <h1 className='text-[#28374b] text-base'>Account Settings</h1>
        </div>
        <div>
          <div className='flex w-[312px] justify-between items-center border m-[31px] px-6 py-3 rounded-[7px] border-solid border-[#28374B] h-10 cursor-pointer'>
            <Link href='/profile/profilesetting'>
              <h3 className='text-sm text-[#28374b]'>Profile Settings</h3>
            </Link>
            <Image
              src='/setting-2.svg'
              alt='Settings Icon'
              width={14}
              height={14}
              className='hover:animate-spin'
            />
          </div>
          <div className='flex w-[312px] justify-between items-center border m-[31px] px-6 py-3 rounded-[7px] border-solid border-[#28374B] h-10 cursor-pointer'>
            <h3 className='text-sm text-[#28374b]'>Security Settings</h3>
            <Image
              src='/key.svg'
              alt='key image'
              width={14}
              height={14}
              className='hover:animate-bounce'
            />
          </div>
          <div className='flex w-[312px] justify-between items-center border m-[31px] px-6 py-3 rounded-[7px] border-solid border-[#28374B] h-10'>
            <h3 className='text-sm text-[#28374b]'>Customization Settings</h3>
            <Image src='/edit.svg' alt='Edit image' width={14} height={14} />
          </div>
          <div className='flex w-[312px] justify-between items-center border m-[31px] px-6 py-3 rounded-[7px] border-solid border-[#28374B] h-10 cursor-pointer'>
            <h3 className='text-sm text-[#28374b]'>Help and Support Center</h3>
            <Image
              src='/message-question.svg'
              alt='message question'
              width={14}
              height={14}
              className='hover:animate-ping'
            />
          </div>
          <div className='flex w-[312px] justify-between items-center border m-[31px] px-6 py-3 rounded-[7px] border-solid border-[#F82828] text-[#F82828] h-10'>
            <h3 className='text-[#F82828]'>Deactivate Account</h3>
            <Image
              src='/lock-slash.svg'
              alt='lock icon'
              width={14}
              height={14}
            />
          </div>
        </div>
        <Footer/>
      </section>
    </>
  );
};
export default Profile;
