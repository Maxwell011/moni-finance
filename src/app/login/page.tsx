// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   email: Yup.string().email().required("Email is required"),
//   password: Yup.string()
//     .required("Password is required")
//     .min(4, "Password is too short - should be 4 chars min"),
// });

// const initialValues = {
//   email: "",
//   password: "",
// };

// const Login = () => {
//   return (
//     <>
//       <h1>Sign in to continue</h1>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={(values: any) => {
//           console.log(values);
//         }}
//       >
//         <Form>
//           <div className='form-row'>
//             <label htmlFor='email'>Email</label>
//             <Field type='email' name='email' id='email' className='input' />
//             <ErrorMessage name='email' component='span' className='error' />
//           </div>

//           <div className='form-row'>
//             <label htmlFor='password'>Password</label>
//             <Field
//               type='password'
//               name='password'
//               id='password'
//               className='input'
//             />
//             <ErrorMessage name='password' component='span' className='error' />
//           </div>

//           <button
//             type='submit'
//             className='inactive-btn flex justify-center items-center gap-4 text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] sm:w-36 w-full'
//           >
//             Login in
//           </button>
//         </Form>
//       </Formik>
//     </>
//   );
// };

// export default Login;
