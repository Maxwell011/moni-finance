import Footer from "../components/Footer";
import Transactions from "../components/Transactions";

const Send = () => {
  return (
    <>
      <section>
        <div>
          <div className='w-[146px] h-20 rounded-[7px] flex flex-col items-center justify-center gap-1 bg-[#E4F3FF]'>
            <h2 className='text-sm text-[#035EAE]'>Bank Transfer</h2>
            <p className='text-[#28374b] text-[10px]'>
              Transfer to other banks
            </p>
          </div>
          <div className='bg-[#fff6db] w-[146px] h-20 rounded-[7px] flex flex-col items-center justify-center gap-1'>
            <h2 className='text-sm text-[#FFC000]'>Credit/Debit Card</h2>
            <p className='text-[#28374b] text-[10px] text-center'>
              Transfer using your credit/debit cards
            </p>
          </div>
          <div>
            <h2 className='text-sm text-[#7317EC]'>Digital Wallets</h2>
            <p className='text-[#28374b] text-[10px]'>
              Paypal,Venmo, Cash App etc.
            </p>
          </div>
          <div>
            <h2 className='text-sm text-[#00A138]'>Cryptocurrency</h2>
            <p className='text-[#28374b] text-[10px]'>
              Make transfer and manage your cryptocurrency
            </p>
          </div>
          <div>
            <h2 className='text-sm text-[#FF3CF7]'>Payment Gateway</h2>
            <p className='text-[#28374b] text-[10px]'>
              Transfer using Stripe, square etc.
            </p>
          </div>
          <div>
            <h2 className='text-[#414c56] text-sm'>others</h2>
            <p className='text-[#28374b] text-[10px]'>
              Explore more payment options
            </p>
          </div>
        </div>
        <Transactions />
        <Footer />
      </section>
    </>
  );
};
export default Send;
