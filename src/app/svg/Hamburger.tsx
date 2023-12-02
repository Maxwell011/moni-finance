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
        src='/menu.svg'
        alt='Picture of the author'
        width={24}
        height={24}
        priority
      />
      {
        <button
          className='flex items-center justify-center w-14 h-14 p-0 rounded-full bg-transparent border-0 transition duration-200 ease-in-out cursor-pointer hover:bg-gray-800 focus:outline-none focus-visible:bg-gray-800'
          onClick={handleHamburgerClick}
        >
          <svg
            className='w-3/4'
            aria-hidden='true'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
          >
            <rect
              width='18'
              height='1.5'
              className='bg-red-500'
              rx='0.75'
              x='3'
              y='6.25'
            />
            <rect
              width='18'
              height='1.5'
              className='bg-red-500'
              rx='0.75'
              x='3'
              y='11.25'
            />
            <rect
              width='18'
              height='1.5'
              className='bg-red-500'
              rx='0.75'
              x='3'
              y='24.25'
            />
          </svg>
        </button>
      }

      {isSideNavOpen && (
        <div className='side-nav fixed top-0 left-0 w-[355px] h-full bg-gray-200 transform transition-transform duration-300 ease-in-out translate-x-0'>
          <button
            className='absolute top-4 right-4 w-6 h-6 rounded-full bg-gray-500 text-white flex items-center justify-center'
            onClick={handleCloseClick}
          >
            X
          </button>
          <div>
            <ul className='side-nav-list'>
              <div className='flex flex-row'>
                <Image
                  src='/home.svg'
                  alt='Home Image'
                  width={24}
                  height={24}
                  priority
                />
                <Link href='/home'>
                  <li className='p-4'>Home</li>
                </Link>
              </div>
              <div className='flex flex-row'>
                <Image
                  src='/send-2.svg'
                  alt='send image'
                  width={24}
                  height={24}
                  priority
                />
                <Link href='/send'>
                  <li className='p-4'>Send</li>
                </Link>
              </div>
              <div className='flex flex-row'>
                <Image
                  src='/user.svg'
                  alt='user profile image'
                  width={24}
                  height={24}
                  priority
                />
                <Link href='/profile'>
                  <li className='p-4'>Profile Settings</li>
                </Link>
              </div>
              <div className='flex flex-row'>
                <Image
                  src='/receipt-text.svg'
                  alt='receipt image'
                  width={24}
                  height={24}
                  priority
                />
                <Link href='/transaction'>
                  <li className='p-4'>Transaction History</li>
                </Link>
              </div>
              <div className='flex flex-row'>
                <Image
                  src='/headphone.svg'
                  alt='receipt image'
                  width={24}
                  height={24}
                  priority
                />
                <Link href=''>
                  <li className='p-4'>Help and Support Center</li>
                </Link>
              </div>
              <div className='flex flex-row'>
                <Image
                  src='/logout.svg'
                  alt='receipt image'
                  width={24}
                  height={24}
                  priority
                />
                <Link href=''>
                  <li className='p-4'>Log Out</li>
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
