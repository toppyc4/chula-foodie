import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-screen h-[8vh] bg-red-800 px-[4vw] flex justify-btween items-center drops-shadow-lg sticky top-0 z-20">
      <Link href="/main">
        <h1 className="text-2xl font-bold text-white justify-self-start cursor-pointer ">
          {" "}
          Chula Foodie{" "}
        </h1>
      </Link>

      <div className="ml-auto flex content-center">
        <Link href={"/user"}>
          <div className=" bg-lime-500 hover:bg-lime-400 text-white font-bold my-auto p-1 border-solid border-b-4 border-lime-700 hover:border-lime-500 rounded overflow-hidden">
            <Image
              src={"/img/question-mark-profile.jpg"}
              width={50}
              height={50}
              alt="profile pic"
              className="w-[56px] h-[56px] self-center cursor-pointer rounded-full"
              referrerPolicy="no-referrer"
            />
          </div>
        </Link>
      </div>
      <div className="mx-3">10,000 Bulbs</div>
    </nav>
  );
}
