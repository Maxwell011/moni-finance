"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function HamburgerButton() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const handleCloseClick = () => {
    setIsSideNavOpen(false);
  };

  return (
    <div>
      <Image
        onClick={handleHamburgerClick}
        src='/menu.svg'
        alt='Picture of the author'
        width={24}
        height={24}
        priority
      />

      {isSideNavOpen && (
        <div className='side-nav fixed top-0 left-0 w-[336px] h-full bg-white transform transition-transform duration-300 ease-in-out translate-x-0 shadow-[0px_4px_15px_0px_rgba(0,0,0,0.15)]bg-white'>
          <div className='flex justify-around mt-5 '>
            <button
              className='w-6 h-6 rounded-full text-[#28374B] bg-white border-[#28374B] flex items-center justify-center border-2 border-solid'
              onClick={handleCloseClick}
            >
              X
            </button>
            <h2 className='text-[#28374B] text-base'>Hello Harp</h2>
            <Image
              src='/Ellipse 5.svg'
              alt='Picture of the author'
              width={40}
              height={40}
              priority
            />
          </div>
          <div className='mt-[-0.5rem] p-5 ml-5'>
            <ul className='side-nav-list'>
              <div className='flex flex-row mb-3'>
                <Image
                  src='/home.svg'
                  alt='Home Image'
                  width={24}
                  height={24}
                  priority
                />
                <Link href='/home'>
                  <li className='p-4 text-[#28374B]'>Home</li>
                </Link>
              </div>
              <div className='flex flex-row mb-3'>
                <Image
                  src='/send-2.svg'
                  alt='send image'
                  width={24}
                  height={24}
                  priority
                />
                <Link href='/send'>
                  <li className='p-4  text-[#28374B]'>Send</li>
                </Link>
              </div>
              <div className='flex flex-row mb-3'>
                <Image
                  src='/user.svg'
                  alt='user profile image'
                  width={24}
                  height={24}
                  priority
                />
                <Link href='/profile'>
                  <li className='p-4  text-[#28374B]'>Profile Settings</li>
                </Link>
              </div>
              <div className='flex flex-row mb-3'>
                <Image
                  src='/receipt-text.svg'
                  alt='receipt image'
                  width={24}
                  height={24}
                  priority
                />
                <Link href='/transaction'>
                  <li className='p-4 text-[#28374B]'>Transaction History</li>
                </Link>
              </div>
              <div className='flex flex-row mb-3'>
                <Image
                  src='/headphone.svg'
                  alt='receipt image'
                  width={24}
                  height={24}
                  priority
                />
                <Link href=''>
                  <li className='p-4 text-[#28374B]'>
                    Help and Support Center
                  </li>
                </Link>
              </div>
              <div className='flex flex-row mb-3'>
                <Image
                  src='/logout.svg'
                  alt='receipt image'
                  width={24}
                  height={24}
                  priority
                />
                <Link href=''>
                  <li className='p-4 text-[#F82828] text-sm '>Log Out</li>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default HamburgerButton;
