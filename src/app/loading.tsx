import Image from "next/image";
import { Suspense } from "react";

export default function Loader() {
  return (
    <section>
      <Suspense
        fallback={
          <p className='bg-black text-6xl text-red-700'>
            Loading the launch screen
          </p>
        }
      >
        <div className='flex items-center justify-center'>
          <Image
            src='/Colorful-Logo 1 (1).svg'
            alt='Document image'
            width={96}
            height={83}
            className=''
          />
        </div>
      </Suspense>
    </section>
  );
}
