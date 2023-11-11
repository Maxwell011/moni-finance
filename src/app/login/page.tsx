import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        className='text-[#28374B] text-xl not-italic font-normal leading-[normal]'
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className='w-full sm:w-36 h-10 sm:h-[41px] input-style mb-4'
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

const Login = () => {
  return (
    <>
      <div className='mx-[41px] my-0'>
        <h2 className='text-[#28374B] text-[32px] not-italic font-semibold leading-[normal] mb-10'>
          Log in
        </h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address`")
              .required("Required"),
            password: Yup.string()
              .required("Password is required")
              .min(4, "Password is too short - should be 4 chars min"),
          })}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <div className='flex flex-col gap-1'>
              <MyTextInput
                label='Email'
                name='email'
                type='text'
                placeholder='Enter Your Email'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <MyTextInput
                label='Password'
                name='email'
                type='password'
                placeholder='Enter Your Password'
              />
            </div>
            <h3 className='text-xl text-[#0476D9] font-normal leading-[normal] mt-4 mb-8'>
              Forget Password?
            </h3>

            <button
              type='submit'
              className='inactive-btn flex justify-center items-center gap-4 text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] sm:w-36 w-full'
            >
              Login in
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};
export default Login;
