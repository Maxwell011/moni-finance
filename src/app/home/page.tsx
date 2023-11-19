import Balance from "../components/Balance";
import Features from "../components/Features";

const Home = () => {
  return (
    <>
      <section className='flex items-center justify-center'>
        <div>
          <Balance />
          <Features />
        </div>
      </section>
    </>
  );
};
export default Home;
