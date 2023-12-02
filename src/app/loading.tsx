import { Suspense } from "react";
import LaunchScreen from "./components/LaunchScreen";

export default function Loader() {
  return (
    <section>
      <Suspense
        fallback={
          <p className='bg-slate-700 text-xl text-red-700'>
            Loading the launch screen...
          </p>
        }
      >
        <LaunchScreen />
      </Suspense>
    </section>
  );
}
