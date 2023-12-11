import HamburgerButton from "../svg/Hamburger";

const Transaction = () => {
  return (
    <div>
      <div className='flex items-center gap-20 m-8'>
        <HamburgerButton />
        <h1 className='text-[#28374b] text-[20px]'>All Transactions</h1>
      </div>
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
            <p className='text-sm text-[#f82828]'>Sporty Bet</p>
            <p className='text-[#f82828] text-sm'>+N8,400.00</p>
          </div>
        </div>
        <div className='flex gap-[5px] mx-[27px] -my-3'>
          <div className='w-[35px] h-[35px] rounded-2xl bg-[#EEEEEE4D] flex items-center justify-center'>
            <p className='text-black'>C</p>
          </div>
          <div className='flex gap-28 items-center'>
            <p className='text-sm text-[#28374b]'>Scott Daniel</p>
            <p className='text-[#03a63c] text-sm'>+N9,400.00</p>
          </div>
        </div>
        <div className='flex gap-[5px] mx-[27px] -my-3'>
          <div className='w-[35px] h-[35px] rounded-2xl bg-[#EEEEEE4D] flex items-center justify-center'>
            <p className='text-black'>C</p>
          </div>
          <div className='flex gap-28 items-center'>
            <p className='text-sm text-[#28374b]'>Chris Daniel</p>
            <p className='text-[#03a63c] text-sm'>+N9,400.00</p>
          </div>
        </div>
        <div className='flex gap-[5px] mx-[27px] -my-3'>
          <div className='w-[35px] h-[35px] rounded-2xl bg-[#EEEEEE4D] flex items-center justify-center'>
            <p className='text-black'>C</p>
          </div>
          <div className='flex gap-28 items-center'>
            <p className='text-sm text-[#28374b]'>Clems Miley</p>
            <p className='text-[#03a63c] text-sm'>+N9,400.00</p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default Transaction;
