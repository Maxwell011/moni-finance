import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";

const Login = () => {
  return (
    <>
      <div className='mx-[41px] my-0'>
        <h2 className='text-[#28374B] text-[32px] not-italic font-semibold leading-[normal] mb-10'>
          Log in
        </h2>
        <div className='flex flex-col gap-1'>
          <label className='text-[#28374B] text-xl not-italic font-normal leading-[normal]'>
            Email
          </label>
          <input
            type='text'
            placeholder='Enter Your Email'
            className='w-full sm:w-36 h-10 sm:h-[41px] input-style mb-4'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='sm:text-[#28374B] text-xl not-italic font-normal leading-[normal]'>
            Password
          </label>
          <input
            type='password'
            placeholder='Enter Your Password'
            className='w-full sm:w-36 h-10 sm:h-[41px] input-style'
          />
        </div>

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
