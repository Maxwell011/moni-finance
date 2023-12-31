import LaunchScreen from "./components/LaunchScreen";
import Loader from "./loading";

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <LaunchScreen />
      <Loader />
    </div>
  );
}
