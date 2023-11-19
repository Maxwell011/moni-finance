import Link from "next/link";

const Transactions = () => {
  return (
    <>
      <section className=''>
        <div className=''>
          <div className='flex justify-between mx-[35px] my-[26px]'>
            <div className=''>Transactions</div>
            <div className=''>
              <Link href='/transactions'>View all</Link>
            </div>
          </div>
          <div className='flex flex-col gap-[55px]'>
            <div className='flex gap-[5px] mx-[27px] -my-3'>
              <div className='w-[35px] h-[35px] rounded-2xl bg-orange-600 flex items-center justify-center'>
                <p>D</p>
              </div>
              <div className='flex gap-28 items-center'>
                <p className='text-sm text-[#28374b]'>Dave Martins</p>
                <p className='text-[#03a63c] text-sm'>+N8,400.00</p>
              </div>
            </div>
            <div className='flex gap-[5px] mx-[27px] -my-3'>
              <div className='w-[35px] h-[35px] rounded-2xl bg-orange-600 flex items-center justify-center'>
                <p>S</p>
              </div>
              <div className='flex gap-28 items-center'>
                <p className='text-sm text-[#28374b]'>Curtis Daniel</p>
                <p className='text-[#f82828] text-sm'>+N8,400.00</p>
              </div>
            </div>
            <div className='flex gap-[5px] mx-[27px] -my-3'>
              <div className='w-[35px] h-[35px] rounded-2xl bg-orange-600 flex items-center justify-center'>
                <p>C</p>
              </div>
              <div className='flex gap-28 items-center'>
                <p className='text-sm text-[#28374b]'>Curtis Daniel</p>
                <p className='text-[#03a63c] text-sm'>+N8,400.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Transactions;