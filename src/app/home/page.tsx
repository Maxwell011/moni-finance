import Balance from "../components/Balance";
import Features from "../components/Features";
import Transactions from "../components/Transactions";

const Home = () => {
  return (
    <>
      <section className='flex items-center justify-center'>
        <div>
          <Balance />
          <Features />
          <Transactions />
        </div>
      </section>
    </>
  );
};
export default Home;
