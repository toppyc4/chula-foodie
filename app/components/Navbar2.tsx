import Link from "next/link";
import Image from "next/image";

export default function Navbar2() {
  return (
    <nav className="w-screen h-[8vh] bg-red-800 px-[4vw] flex justify-btween items-center drops-shadow-lg sticky top-0 z-20">
      <Link href="/main">
        <h1 className="text-2xl font-bold text-white justify-self-start cursor-pointer ">
          Chula Foodie
        </h1>
      </Link>

      <div className="mx-3 ml-auto">10,000</div>
      <Image
        src={"/icon/bulb.svg"}
        width={30}
        height={30}
        alt="bulbs"
        className="w-[30px] h-[30px] self-center cursor-pointer rounded-full invert"
        referrerPolicy="no-referrer"
      />
    </nav>
  );
}
