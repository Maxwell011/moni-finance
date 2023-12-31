const ProfileInput = () => {
  return (
    <>
      <section className='flex flex-col justify-center gap-1 mx-[41px] my-14'>
        <form>
          <div className='flex flex-col items-start gap-1'>
            <label htmlFor='' className='label'>
              Username
            </label>
            <input
              type='text'
              placeholder='Enter your username'
              className='border-bottom flex items-center gap-2 self-stretch px-0 py-3 mb-6 focus:outline-none focus:ring-0 focus:border-b-[#035EAE]'
            />
            <label htmlFor='' className='label'>
              First Name
            </label>
            <input
              type='text'
              placeholder='Enter your first name'
              className='border-bottom flex items-center gap-2 self-stretch px-0 py-3 mb-6 focus:outline-none focus:ring-0 focus:border-b-[#035EAE]'
            />
            <label htmlFor='' className='label'>
              Last Name
            </label>
            <input
              type='text'
              placeholder='Enter your last name'
              className='border-bottom flex items-center gap-2 self-stretch px-0 py-3 mb-6
              border-transparent focus:border-gray-400 border-b focus:outline-none focus:ring-0 focus:border-b-[#035EAE]'
            />
          </div>
        </form>
        <button className='inactive-btn flex justify-center items-center gap-4 text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] sm:w-36 w-full mt-12'>
          Complete
        </button>
      </section>
    </>
  );
};
export default ProfileInput;
