const Signup = () => {
  return (
    <>
      <div className='flex flex-col justify-center gap-1 mx-[41px] my-0 lg:absolute lg:-translate-x-2/4 lg:-translate-y-2/4 lg:left-2/4 lg:top-2/4'>
        <h2 className='text-[#28374B] text-[32px] not-italic font-semibold leading-[normal] mb-10 lg:text-[30px]'>
          Sign Up
        </h2>
        <label className='text-[#28374B] text-xl not-italic font-normal leading-[normal]'>
          Email
        </label>
        <input
          type='text'
          placeholder='Enter Your Email'
          className='w-full sm:w-36 h-10 sm:h-[41px] input-style mb-4 lg:w-[130%]'
        />
        <label className='sm:text-[#28374B] text-xl not-italic font-normal leading-[normal]'>
          Password
        </label>
        <input
          type='password'
          placeholder='Enter Your Password'
          className='w-full sm:w-36 h-10 sm:h-[41px] input-style lg:w-[130%]'
        />
        <h3 className='text-[#939BA5] text-xs not-italic font-normal leading-[normal] w-[300px] mt-1 lg:text-[17px]'>
          Password must be a minimum of eight characters contain at least one
          uppercase letter, one lowercase letter and one number
        </h3>
        <button className='inactive-btn flex justify-center items-center gap-4 text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] sm:w-36 w-full mt-12 lg:w-[130%]'>
          Sign Up
        </button>
      </div>
    </>
  );
};
export default Signup;
