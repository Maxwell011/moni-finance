import Footer from "../components/Footer";
import Transactions from "../components/Transactions";
import HamburgerButton from "../svg/Hamburger";

const Send = () => {
  return (
    <>
      <section>
        <div className='flex items-center gap-20 m-8'>
          <HamburgerButton />
          <h1 className='text-[#28374b] text-base'>Account Settings</h1>
        </div>{" "}
        <div>
          <div className='flex gap-5 items-center justify-center mb-5'>
            <div className='w-[146px] h-20 rounded-[7px] flex flex-col items-center justify-center gap-1 bg-[#E4F3FF] shadow-[1px_4px_15px_0px_rgba(3,94,174,0.10)]'>
              <h2 className='text-sm text-[#035EAE]'>Bank Transfer</h2>
              <p className='text-[#28374b] text-[10px]'>
                Transfer to other banks
              </p>
            </div>
            <div className='bg-[#fff6db] w-[146px] h-20 rounded-[7px] flex flex-col items-center justify-center gap-1 shadow-[1px_4px_15px_0px_rgba(241,143,1,0.10)]'>
              <h2 className='text-sm text-[#FFC000]'>Credit/Debit Card</h2>
              <p className='text-[#28374b] text-[10px] text-center'>
                Transfer using your credit/debit cards
              </p>
            </div>
          </div>
          <div className='flex gap-5 items-center justify-center mb-5'>
            <div className='bg-[#F3EAFF] w-[146px] h-20 rounded-[7px] flex flex-col items-center justify-center gap-1 shadow-[1px_4px_10px_0px_rgba(115,23,236,0.10)]'>
              <h2 className='text-sm text-[#7317EC]'>Digital Wallets</h2>
              <p className='text-[#28374b] text-[10px] text-center'>
                Paypal,Venmo, Cash App etc.
              </p>
            </div>
            <div className='bg-[#DCFFE5] w-[146px] h-20 rounded-[7px] flex flex-col items-center justify-center gap-1 shadow-[1px_4px_15px_0px_rgba(3,166,60,0.10)]'>
              <h2 className='text-sm text-[#00A138]'>Cryptocurrency</h2>
              <p className='text-[#28374b] text-[10px] text-center'>
                Make transfer and manage your cryptocurrency
              </p>
            </div>
          </div>
          <div className='flex gap-5 items-center justify-center mb-5'>
            <div className='bg-[#FFDBFE] w-[146px] h-20 rounded-[7px] flex flex-col items-center justify-center gap-1 shadow-[1px_4px_15px_0px_rgba(255,60,247,0.10)]'>
              <h2 className='text-sm text-[#FF3CF7] text-center'>
                Payment Gateway
              </h2>
              <p className='text-[#28374b] text-[10px] text-center'>
                Transfer using Stripe, <br /> square etc.
              </p>
            </div>
            <div className='bg-[#F1F1F1] w-[146px] h-20 rounded-[7px] flex flex-col items-center justify-center gap-1 shadow-[1px_4px_15px_0px_rgba(0,0,0,0.10)]'>
              <h2 className='text-[#414c56] text-sm'>others</h2>
              <p className='text-[#28374b] text-[10px] text-center'>
                Explore more <br /> payment options
              </p>
            </div>
          </div>
        </div>
        <Transactions />
        <Footer />
      </section>
    </>
  );
};
export default Send;
