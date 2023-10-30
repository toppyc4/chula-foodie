import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* <footer className="container flex flex-col h-[15vh] bg-slate-700">
        <div className="grid grid-cols-3 gap-4 m-auto content-around items-center align-middle">
          <Link href={"/"}>
            <div className="flex bg-lime-500 hover:bg-lime-400 text-white font-bold my-auto mr-3 p-1 border-solid border-b-4 border-lime-700 hover:border-lime-500 rounded overflow-hidden items-center text-center content-center">
              <p className="my-auto mx-auto text-2xl">Home</p>
            </div>
          </Link>
          <Link href={"/history"}>
            <div className="flex bg-lime-500 hover:bg-lime-400 text-white font-bold my-auto p-1 border-solid border-b-4 border-lime-700 hover:border-lime-500 rounded overflow-hidden items-center text-center content-center">
              <p className="my-auto mx-auto text-2xl">History</p>
            </div>
          </Link>

          <Link
            href={`/user`}
            className="flex bg-lime-500 hover:bg-lime-400 text-white font-bold mx-auto p-1 border-solid border-b-4 border-lime-700 hover:border-lime-500 rounded overflow-hidden align-center"
          >
            <Image
              src={"/img/question-mark-profile.jpg"}
              width={50}
              height={50}
              alt="profile pic"
              className="w-[54px] h-[54px] self-center cursor-pointer rounded-full"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>
      </footer> */}
      <footer className="h-[13vh] flex items-center justify-around px-4 border-t-2 bg-gray-100 border-gray-300 sticky bottom-0">
        <Link href={"/main"} className="p-2 rounded-md">
          <Image
            src={"/icon/home.svg"}
            width={50}
            height={50}
            alt="profile pic"
            className="cursor-pointer rounded-full"
            referrerPolicy="no-referrer"
          />
        </Link>
        <Link href={"/history"} className="p-2 rounded-md">
          <Image
            src={"/icon/clock.svg"}
            width={50}
            height={50}
            alt="profile pic"
            className="cursor-pointer rounded-full"
            referrerPolicy="no-referrer"
          />
        </Link>

        <Link href={`/user`} className="p-2 rounded-md">
          <Image
            src={"/img/question-mark-profile.jpg"}
            width={50}
            height={50}
            alt="profile pic"
            className="cursor-pointer rounded-full"
            referrerPolicy="no-referrer"
          />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
