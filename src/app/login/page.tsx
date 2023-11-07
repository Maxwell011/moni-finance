const Login = () => {
  return (
    <>
      <div className=''>
        <h2 className='text-[#28374B] text-[32px] not-italic font-semibold leading-[normal] mb-10'>
          Log in
        </h2>

        <label className='text-[#28374B] text-xl not-italic font-normal leading-[normal]'>
          Email
        </label>
        <input
          type='text'
          placeholder='Enter Your Email'
          className='w-full sm:w-36 h-10 sm:h-[41px] input-style mb-4'
        />
        <label className='sm:text-[#28374B] text-xl not-italic font-normal leading-[normal]'>
          Password
        </label>
        <input
          type='password'
          placeholder='Enter Your Password'
          className='w-full sm:w-36 h-10 sm:h-[41px] input-style'
        />

        <h3 className='text-xl text-[#0476D9] font-normal leading-[normal] mt-4 mb-8'>
          Forget Password?
        </h3>

        <button className='inactive-btn flex justify-center items-center gap-4 text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] sm:w-36 w-full'>
          Login in
        </button>
      </div>
    </>
  );
};
export default Login;
