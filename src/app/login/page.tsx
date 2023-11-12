import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min"),
});

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: any) => {
          console.log(values);
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div className='container'>
              <h1>Sign in to continue</h1>
              <Form>
                <div className='form-row'>
                  <label htmlFor='email'>Email</label>
                  <Field
                    type='email'
                    name='email'
                    id='email'
                    className={
                      errors.email && touched.email ? "input-error" : null
                    }
                  />
                  <ErrorMessage
                    name='email'
                    component='span'
                    className='error'
                  />
                </div>

                <section className='form-row'>
                  <label htmlFor='password'>Password</label>
                  <Field
                    type='password'
                    name='password'
                    id='password'
                    className={
                      errors.password && touched.password ? "input-error" : null
                    }
                  />
                  <ErrorMessage
                    name='password'
                    component='span'
                    className='error'
                  />
                </section>

                <button
                  type='submit'
                  className={!(dirty && isValid) ? "disabled-btn" : ""}
                  disabled={!(dirty && isValid)}
                >
                  Sign In
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
// import React from "react";

// const Login = () => {
//   return (
//     <>
//       <div className='mx-[41px] my-0'>
//         <h2 className='text-[#28374B] text-[32px] not-italic font-semibold leading-[normal] mb-10'>
//           Log in
//         </h2>
//         <div className='flex flex-col gap-1'>
//           <label className='text-[#28374B] text-xl not-italic font-normal leading-[normal]'>
//             Email
//           </label>
//           <input
//             type='text'
//             placeholder='Enter Your Email'
//             className='w-full sm:w-36 h-10 sm:h-[41px] input-style mb-4'
//           />
//         </div>
//         <div className='flex flex-col gap-1'>
//           <label className='sm:text-[#28374B] text-xl not-italic font-normal leading-[normal]'>
//             Password
//           </label>
//           <input
//             type='password'
//             placeholder='Enter Your Password'
//             className='w-full sm:w-36 h-10 sm:h-[41px] input-style'
//           />
//         </div>

//         <h3 className='text-xl text-[#0476D9] font-normal leading-[normal] mt-4 mb-8'>
//           Forget Password?
//         </h3>

//         <button className='inactive-btn flex justify-center items-center gap-4 text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] sm:w-36 w-full'>
//           Login in
//         </button>
//       </div>
//     </>
//   );
// };
// export default Login;
