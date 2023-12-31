import HamburgerButton from "../svg/Hamburger";
import Image from "next/image";

const Nav = () => {
  return (
    <>
      <section>
        <div className='flex items-center justify-between mx-6 mt-[7px] mb-2.5 ml-10'>
          <HamburgerButton />
          <h2 className='text-[#28374B] text-base font-semibold'>Hello John</h2>
          <Image
            className='shadow-[1px_5px_10px_0px_rgba(56,107,152,0.15)] rounded-[40px]'
            src='/Ellipse 5.svg'
            // src='/pexels-amusan-john-7745573.jpg'
            alt='Picture of the author'
            width={40}
            height={40}
            priority
          />
        </div>
      </section>
    </>
  );
};
export default Nav;
