import Image from "next/image";

const Profile = () => {
  return (
    <>
      <section>
        <div>
          <div className='flex w-[312px] justify-between items-center border m-[31px] px-6 py-3 rounded-[7px] border-solid border-[#28374B] h-10'>
            <h3 className='text-sm text-[#28374b]'>Account Settings</h3>
            <Image
              src='/setting-2.svg'
              alt='Arrow right'
              width={14}
              height={14}
            />
          </div>
          <div className='flex w-[312px] justify-between items-center border m-[31px] px-6 py-3 rounded-[7px] border-solid border-[#28374B] h-10'>
            <h3 className='text-sm text-[#28374b]'>Security Settings</h3>
            <Image
              src='/key.svg'
              alt='Picture of the author'
              width={14}
              height={14}
            />
          </div>
          <div className='flex w-[312px] justify-between items-center border m-[31px] px-6 py-3 rounded-[7px] border-solid border-[#28374B] h-10'>
            <h3 className='text-sm text-[#28374b]'>Customization Settings</h3>
            <Image src='/edit.svg' alt='Arrow right' width={14} height={14} />
          </div>
          <div className='flex w-[312px] justify-between items-center border m-[31px] px-6 py-3 rounded-[7px] border-solid border-[#28374B] h-10'>
            <h3 className='text-sm text-[#28374b]'>Help and Support Center</h3>
            <Image
              src='/message-question.svg'
              alt='Arrow right'
              width={14}
              height={14}
            />
          </div>
          <div className='flex w-[312px] justify-between items-center border m-[31px] px-6 py-3 rounded-[7px] border-solid border-[#F82828] text-[#F82828] h-10'>
            <h3 className='text-[#F82828]'>Deactivate Account</h3>
            <Image
              src='/lock-slash.svg'
              alt='Arrow right'
              width={14}
              height={14}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
