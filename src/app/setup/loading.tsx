import Image from "next/image";
import { Suspense } from "react";

export default function Loader() {
  return (
    <section>
      <Suspense
        fallback={
          <p className='bg-black text-6xl text-red-700'>
            loading...
          </p>
        }
      >
        <div className='absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4'>
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
