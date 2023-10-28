import Image from "next/image";
import Link from "next/link";

const SemiFoodItem = () => {
  return (
    <div className="flex justify-around p-4 w-[85vw] mb-2 bg-pink-200 border-solid border-2 border-slate-950">
      <div className="flex flex-col items-center justify-around mr-auto">
        <h1 className="text-lg font-bold">Food name</h1>
        <p className="">Date: 00/00/00</p>
        <p className="">Price: 100</p>
        <div className="text-blue-600 underline ml-auto mr-4 cursor-pointer">
          <Link href={`/post.username/post.slug`} className="">
            View detail
          </Link>
        </div>
      </div>
      <Image
        src={"/img/question-mark-profile.jpg"}
        width={150}
        height={150}
        alt="profile pic"
        className="cursor-pointer ml-auto"
      />
    </div>
  );
};

export default SemiFoodItem;
