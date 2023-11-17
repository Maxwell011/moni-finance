import Image from "next/image";

const Profile = () => {
  return (
    <>
      <section className='bg-[#035EAE] w-full h-[246px] lg:w-full'>
        <div className='w-full h-[189px] rounded-[500px_500px_0px_0px] bg-white absolute top-[58px]'>
          {/* Profile image section*/}
          <div className='flex items-center justify-center mt-12'>
            <div className='first'>
              <svg
                className='absolute'
                xmlns='http://www.w3.org/2000/svg'
                width='120'
                height='120'
                viewBox='0 0 120 120'
                fill='none'
              >
                <circle
                  cx='60'
                  cy='60'
                  r='59.5'
                  stroke='#035EAE'
                  stroke-linejoin='round'
                />
              </svg>
              <div
                className='second w-[100px] h-[100px] flex justify-center items-center m-[10px] rounded-[50px] bg-[#035EAE] 
                drop-shadow-[1px 5px 10px rgba(56, 107, 152, 0.15)] fill-[#035EAE]'
              >
                <Image
                  className='text-white'
                  src='/camera.svg'
                  width={24}
                  height={24}
                  alt='Picture of the user'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
