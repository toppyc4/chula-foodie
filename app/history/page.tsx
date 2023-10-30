import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import SemiFoodItem from "../components/SemiFoodItem";

import Image from "next/image";

const KinRaiMa = () => {
  const foodHistory = [1, 2, 3, 4, 5];

  return (
    <>
      <Navbar2 />
      <div className="mt-[5vh] mx-[2vh]">
        <h1 className="text-3xl">History (กินไรมา)</h1>
        <div className="flex flex-col p-4 overflow-auto">
          {foodHistory.map((i) => (
            <SemiFoodItem />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default KinRaiMa;
