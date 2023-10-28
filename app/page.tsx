import Image from "next/image";
import FoodReccomend from "./components/FoodReccomend";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="h-full grid grid-rows-10">
      <div className="h-[13vh]">
        <Navbar />
      </div>
      <main className="h-[74vh] mx-10 row-span-8 col-span-full">
        <FoodReccomend />
      </main>
      <div className="h-[13vh]">
        <Footer />
      </div>
    </div>
  );
}
