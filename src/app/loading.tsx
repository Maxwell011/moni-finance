import Image from "next/image";
import { Suspense } from "react";

export default function Loader() {
  return (
    <section>
      <Suspense
        fallback={
          <p className='bg-slate-700 text-6xl text-red-700'>
            <Image
              src='/Colorful-Logo 1 (1).svg'
              alt='Document image'
              width={96}
              height={83}
              className=''
            />
            Loading the launch screen...
          </p>
        }
      ></Suspense>
    </section>
  );
}
