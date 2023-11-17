"use client";
import { useState } from "react";
import Image from "next/image";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleClick = () => {
    document.getElementById("profileImageInput").click();
  };

  return (
    <>
      <section className='bg-[#035EAE] w-full h-[246px] lg:w-full'>
        <div className='w-full h-[189px] rounded-[500px_500px_0px_0px] bg-white absolute top-[58px]'>
          <div className='flex items-center justify-center mt-12'>
            <div className='first'>
              <svg
                className='absolute'
                xmlns='http://www.w3.org/2000/svg'
                width='120'
                height='120'
                viewBox='0 0 120 120'
                fill='none'
              >
                <circle
                  cx='60'
                  cy='60'
                  r='59.5'
                  stroke='#035EAE'
                  strokeLinejoin='round'
                />
              </svg>
              <div
                className='second w-[100px] h-[100px] flex justify-center items-center m-[10px] rounded-[50px] bg-[#035EAE] 
                drop-shadow-2xl cursor-pointer'
                onClick={handleClick}
              >
                {previewImage ? (
                  <Image
                    src={previewImage}
                    alt='Profile Preview'
                    width={100}
                    height={100}
                    className='w-[100px] h-[100px] flex justify-center items-center m-[10px] rounded-[50px] bg-[#035EAE] drop-shadow-2xl'
                  />
                ) : (
                  <div className='flex justify-center items-center'>
                    <Image
                      src='/camera.svg'
                      width={24}
                      height={24}
                      alt='Picture of the user'
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <input
        id='profileImageInput'
        type='file'
        className='hidden'
        onChange={handleImageChange}
      />
    </>
  );
};

export default Profile;
