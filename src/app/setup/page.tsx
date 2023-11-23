const page = () => {
  return (
    <>
      <section>
        <div>
          <h1 className='text-2xl text-[#28374b]'>
            You are almost ready to start transacting
          </h1>
          <p className='text-sm'>
            To start transacting, you will need to complete your account setup.
            You can choose to skip this process and go straight to your
            dashboard but you will not be able to transact until you complete
            the process.
          </p>

          <div>
            <button className="">Set up Account</button>
            <button className="">Skip for now</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
