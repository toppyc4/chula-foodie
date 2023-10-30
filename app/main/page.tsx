"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import FoodReccomend from "../components/FoodReccomend";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  //   useEffect(() => {
  //     router.push("/main/iCanteen");
  //   }, []);
  router.push("/main/iCanteen");
  return (
    <div className="h-full grid grid-rows-10">
      <div className="h-[13vh]">
        <Navbar2 />
      </div>
      <main className="h-[74vh] mx-10 row-span-8 col-span-full">
        {/* <FoodReccomend posts={null} /> */}
      </main>
      <div className="h-[13vh]">
        <Footer />
      </div>
    </div>
  );
}
