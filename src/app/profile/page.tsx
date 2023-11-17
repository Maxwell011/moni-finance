const Profile = () => {
  return (
    <>
      <section className='bg-[#035EAE] w-full h-[246px] lg:w-full'>
        <div className='w-full h-[189px] rounded-[500px_500px_0px_0px] bg-white absolute top-[58px]'>
          {/* Profile image */}
          <div className=''>
            <div className='first flex items-center justify-center mt-12'>
              <svg
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Profile;
