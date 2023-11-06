"use client";

import { useRouter } from "next/navigation";

const LaunchScreen = () => {
  const router = useRouter();
  return (
    <section>
      {/* Top content */}
      <div className='first'>
        <div className='second'></div>
      </div>
      <div className=''>
        <svg
          className='w-16 h-16 flex-shrink-0'
          xmlns='http://www.w3.org/2000/svg'
          width='60'
          height='59'
          viewBox='0 0 60 59'
          fill='none'
        >
          <g clipPath='url(#clip0_28_55)'>
            <mask
              id='mask0_28_55'
              mask-type='luminance'
              maskUnits='userSpaceOnUse'
              x='-14'
              y='-14'
              width='88'
              height='87'
            >
              <path
                d='M60 17.2441V41.7559C60 51.2796 52.2796 59 42.7559 59C37.701 59 33.1541 56.825 30 53.3598C26.8459 56.825 22.299 59 17.2441 59C7.72044 59 0 51.2796 0 41.7559V17.2441C0 7.72044 7.72044 0 17.2441 0C22.299 0 26.8459 2.17501 30 5.64023C33.1541 2.17501 37.701 0 42.7559 0C52.2796 0 60 7.72044 60 17.2441Z'
                fill='white'
              />
            </mask>
            <g mask='url(#mask0_28_55)'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M30 5.64022C33.1541 2.17501 37.701 0 42.7559 0C52.2796 0 60 7.72044 60 17.2441V41.7559C60 51.2796 52.2796 59 42.7559 59C37.701 59 33.1541 56.825 30 53.3598C26.8459 56.825 22.299 59 17.2441 59C7.72044 59 0 51.2796 0 41.7559V17.2441C0 7.72044 7.72044 0 17.2441 0C22.299 0 26.8459 2.17501 30 5.64022Z'
                stroke='white'
                strokeWidth='27.4016'
              />
            </g>
          </g>
          <defs>
            <clipPath id='clip0_28_55'>
              <rect width='60' height='59' fill='white' />
            </clipPath>
          </defs>
        </svg>

        <h2 className='text-gray-900 text-[32px] not-italic font-semibold leading-[normal]'>
          Welcome
        </h2>
      </div>

      {/* Buttons */}
      <div className='flex gap-4 flex-col'>
        <button
          className='text-[#0476D9] text-base not-italic font-normal leading-[normal] border border-[color:var(--primary-100,#0476D9)] flex w-[278px] justify-center items-center gap-4 p-3 rounded-[10px] border-solid '
          onClick={() => router.push("/login")}
        >
          Login
        </button>
        <button className='flex w-[278px] justify-center items-center gap-4 text-white text-base not-italic font-normal leading-[normal] p-3 rounded-[10px] bg-[#0476D9]'>
          Sign up
        </button>
      </div>
    </section>
  );
};
export default LaunchScreen;
