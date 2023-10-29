import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-screen h-[13vh] bg-red-800 px-[4vw] flex justify-btween items-center drops-shadow-lg sticky top-0">
      <Link href="/main">
        <h1 className="text-2xl font-bold text-white justify-self-start cursor-pointer ">
          {" "}
          Chula Foodie{" "}
        </h1>
      </Link>

      <>
        <div className="ml-auto flex content-center">
          <div className="">10,000</div>
        </div>
      </>
    </nav>
  );
}
