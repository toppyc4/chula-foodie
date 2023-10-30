import Image from "next/image";
import Link from "next/link";
import Navbar2 from "../components/Navbar2";

const UserPage = () => {
  return (
    <>
      <Navbar2 />
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

      <div className="flex flex-col mt-10 mx-10 w-[80vw] p-4 bg-slate-400">
        <h1 className="mx-auto text-center font-bold">Personal Information</h1>
        <div className="flex flex-wrap mt-3 2xl:mt-7">
          <b className="text-base xl:text-lg">First Name: </b>
          <span className="text-base xl:text-xl h-[32px] xl:h-[48px] inline-block rounded-full ml-auto px-1 xl:px-3 py-0.5 xl:py-2  xl:text-md font-semibold text-slate-900 mb-1">
            {"unknown first name"}
          </span>
        </div>
        <div className="flex flex-wrap mt-3 2xl:mt-7">
          <b className="text-base xl:text-lg">User ID: </b>
          <span className="text-base xl:text-xl h-[32px] xl:h-[48px] inline-block rounded-full ml-auto px-1 xl:px-3 py-0.5 xl:py-2 xl:text-md font-semibold text-slate-900 mb-1">
            000-000-0000
          </span>
        </div>
        <div className="flex flex-wrap mt-3 2xl:mt-7">
          <b className="text-base xl:text-lg">Remaining Bulbs: </b>
          <span className="text-base xl:text-xl h-[32px] xl:h-[48px] inline-block rounded-full ml-auto px-1 xl:px-3 py-0.5 xl:py-2 xl:text-md font-semibold text-slate-900 mb-1">
            10,000 Bulbs
          </span>
        </div>
      </div>
    </>
  );
};

export default UserPage;
