const Transaction = () => {
  return (
    <div>
      <h1>Transaction</h1>
      <div className='flex flex-col gap-[40px]'>
        <div className='flex gap-[5px] mx-[27px] -my-3'>
          <div className='w-[35px] h-[35px] rounded-2xl bg-[#EEEEEE4D] flex items-center justify-center'>
            <p className='text-black'>D</p>
          </div>
          <div className='flex gap-28 items-center'>
            <p className='text-sm text-[#28374b]'>Dave Martins</p>
            <p className='text-[#03a63c] text-sm'>+N8,400.00</p>
          </div>
        </div>
        <div className='flex gap-[5px] mx-[27px] -my-3'>
          <div className='w-[35px] h-[35px] rounded-2xl bg-[#EEEEEE4D]  flex items-center justify-center'>
            <p className='text-black'>S</p>
          </div>
          <div className='flex gap-28 items-center'>
            <p className='text-sm text-[#28374b]'>Curtis Daniel</p>
            <p className='text-[#f82828] text-sm'>+N8,400.00</p>
          </div>
        </div>
        <div className='flex gap-[5px] mx-[27px] -my-3'>
          <div className='w-[35px] h-[35px] rounded-2xl bg-[#EEEEEE4D] flex items-center justify-center'>
            <p className='text-black'>C</p>
          </div>
          <div className='flex gap-28 items-center'>
            <p className='text-sm text-[#28374b]'>Curtis Daniel</p>
            <p className='text-[#03a63c] text-sm'>+N8,400.00</p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default Transaction;
