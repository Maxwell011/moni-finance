import Footer from "../components/Footer";
import Transactions from "../components/Transactions";

const Send = () => {
  return (
    <>
      <section>
        <div>
          <div>
            <h2>Bank Transfer</h2>
            <p>Transfer to other banks</p>
          </div>
          <div>
            <h2>Credit/Debit Card</h2>
            <p>Transfer using your credit/debit cards</p>
          </div>
          <div>
            <h2>Digital Wallets</h2>
            <p>Paypal,Venmo, Cash App etc.</p>
          </div>
          <div>
            <h2>Cryptocurrency</h2>
            <p>Make transfer and manage your cryptocurrency</p>
          </div>
          <div>
            <h2>Payment Gateway</h2>
            <p>Transfer using Stripe, square etc.</p>
          </div>
          <div>
            <h2>others</h2>
            <p>Explore more payment options</p>
          </div>
        </div>
        <Transactions />
        <Footer />
      </section>
    </>
  );
};
export default Send;
