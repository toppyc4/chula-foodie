import Navbar from "../components/Navbar";
import SemiFoodItem from "../components/SemiFoodItem";

import Image from "next/image";

const KinRaiMa = () => {
  const foodHistory = [1, 2, 3, 4, 5];

  return (
    <>
      <Navbar />
      <div className="mt-[5vh] mx-[2vh]">
        <h1 className="text-3xl">History (กินไรมา)</h1>
        <div className="flex flex-col bg-pink-300 p-4 overflow-auto">
          {foodHistory.map((i) => (
            <SemiFoodItem />
          ))}
        </div>
      </div>
    </>
  );
};

export default KinRaiMa;
