// "use client";
// import Link from "next/link";
// import MoneyIcon from "../svg/MoneyIcon";

// const LaunchScreen = () => {
//   return (
//     <section>
//       {/* Top content */}
//       <div className=' first'>
//         <div className='second'>
//           {/* <MoneyIcon /> */}
//         </div>
//       </div>
//       {/* w-[470.001px] h-[492.959px] rotate-[-30.108deg] absolute top-[-220px] rounded-[492.959px] -left-11 bg-[#0476d9] */}

//       {/* Buttons */}
//       <div className='flex gap-4 flex-col mr-[-21px] ml-[100px] mt-[350px] mb-0'>
//         <button className='text-[#0476D9] text-base font-normal leading-[normal] border flex w-[278px] justify-center items-center gap-4 p-3 rounded-[10px] border-solid'>
//           <Link href='/login' legacyBehavior>
//             Login
//           </Link>{" "}
//         </button>
//         <button className='flex w-[278px] justify-center items-center gap-4 text-white text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] bg-[#0476D9]'>
//           <Link href='/signup' legacyBehavior>
//             Sign up
//           </Link>
//         </button>
//       </div>
//     </section>
//   );
// };
// export default LaunchScreen;

import Link from "next/link";

const LaunchScreen = () => {
  return (
    <>
      <div>LaunchScreen</div>
      <button className='text-[#0476D9] text-base font-normal leading-[normal] border border-solid border-[#0476D9] flex w-[278px] justify-center items-center gap-4 p-3 rounded-[10px]'>
        <Link href='/login' legacyBehavior>
          <a>Login</a>
        </Link>
      </button>
      <div>
        <button className='flex w-[278px] justify-center items-center gap-4 text-white text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] bg-[#0476D9]'>
          <Link href='/signup' legacyBehavior>
            <a>Sign up</a>
          </Link>
        </button>
      </div>
    </>
  );
};

export default LaunchScreen;
