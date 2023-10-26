import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

const UserPage = () => {
  return (
    <>
      <Navbar />
      <main className="h-fit w-full flex justify-center items-center">
        <div className="h-full flex flex-col">
          <Image
            src={"/img/question-mark-profile.jpg"}
            width={500}
            height={500}
            alt="profile pic"
            className="mr-2 mt-10 w-[169px] h-[169px] self-center cursor-pointer rounded-full"
            referrerPolicy="no-referrer"
          />
          <Link
            href={"/admin"}
            className="flex bg-lime-500 hover:bg-lime-400 text-white text-middle font-bold m-auto mt-10 p-1 max-h-[50px] border-solid border-b-4 border-lime-700 hover:border-lime-500 rounded overflow-hidden"
          >
            Shop Profile
          </Link>
        </div>
      </main>
      <div className="bg-slate-400 ">
        <h1 className="mx-10 mt-10 text-center font-bold">
          Personal Information
        </h1>
        <div className="mx-10">
          <h2>Name: </h2>
          <span> ชัชชาติ ชอบทำงาน</span>
          <h2>User Id: </h2>
          <span> 123 123 123</span>
          <h2>Remaining Bulbs: </h2>
          <span> 10,000</span>
        </div>
      </div>

      <aside className="flex flex-col mt-16 xl:mt-14 2xl:mt-10 w-[30vw] xl:w-[25vw] p-4">
        <div className="flex flex-wrap mt-3 2xl:mt-7">
          <b className="text-base xl:text-lg">First Name: </b>
          <span className="text-base xl:text-xl h-[32px] xl:h-[48px] inline-block rounded-full ml-auto px-1 xl:px-3 py-0.5 xl:py-2  xl:text-md font-semibold text-slate-900 mb-1">
            {"unknown first name"}
          </span>
        </div>
        <div className="flex flex-wrap mt-3 2xl:mt-7">
          <b className="text-base xl:text-lg">Last Name: </b>
          <span className="text-base xl:text-xl h-[32px] xl:h-[48px] inline-block rounded-full ml-auto px-1 xl:px-3 py-0.5 xl:py-2 xl:text-md font-semibold text-slate-900 mb-1">
            {"unknown last name"}
          </span>
        </div>

        <div className="flex flex-wrap mt-3 2xl:mt-7">
          <b className="text-base xl:text-lg">💸Price: </b>
          <span className="h-[32px] xl:h-[48px] inline-block bg-lime-100 rounded-full ml-auto px-1 xl:px-3 py-0.5 xl:py-2 text-base xl:text-md font-semibold text-slate-900 mb-1">
            {"unknown Price"}
          </span>
        </div>
        <div className="flex flex-wrap mt-3 2xl:mt-7">
          <div className=" my-auto relative w-[25px] xl:w-[35px] h-[25px] xl:h-[35px]">
            <Image src={"/icon/icon8/facebook.svg"} alt="facebook icon" fill />
          </div>
          <b className="text-base xl:text-lg my-auto">Facebook: </b>
          <span className="text-white font-semibold h-[32px] xl:h-[48px] inline-block bg-purple-500 hover:bg-purple-300 rounded-full ml-auto px-1 xl:px-3 py-0.5 xl:py-2 text-base xl:text-md mb-1">
            {"unknown Facebook account"}
          </span>
        </div>
        <div className="flex flex-wrap mt-3 2xl:mt-7">
          <div className=" my-auto relative w-[25px] xl:w-[35px] h-[25px] xl:h-[35px]">
            <Image src={"/icon/icon8/line.svg"} alt="line icon" fill />
          </div>
          <b className=" text-base xl:text-lg my-auto">Line: </b>
          <span className="text-white font-semibold h-[32px] xl:h-[48px] inline-block bg-green-400 hover:bg-green-200 rounded-full ml-auto px-1 xl:px-3 py-0.5 xl:py-2 text-base xl:text-md mb-1">
            {"unknown Line Id"}
          </span>
        </div>
        <div className="flex flex-wrap mt-3 2xl:mt-7">
          <b className="text-base xl:text-lg ">☎Phone: </b>
          <span className="h-[32px] xl:h-[48px] inline-block bg-gray-200 rounded-full ml-auto px-1 xl:px-3 py-0.5 xl:py-2 text-base xl:text-md font-semibold text-slate-900 mb-1">
            {"000-000-0000"}
          </span>
        </div>
      </aside>
    </>
  );
};

export default UserPage;
