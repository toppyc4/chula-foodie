import Link from "next/link";
import Image from "next/image";

const FoodItem = (): JSX.Element => {
  return (
    <div
      className="max-w-sm max-h-[60vh] my-[0.5rem] bg-neutral-100 overflow-hidden shadow-lg"
      id={`1`}
      onClick={() => {
        console.log("food item click");
      }}
    >
      <div className="relative w-full min-h-[15vh] bg-white">
        <Link href={`/`}>
          <Image
            className=" object-contain"
            src={"/img/question-mark-profile.jpg"}
            fill
            alt={`foodIMG`}
          />
        </Link>
      </div>
      <h1 className="font-bold text-center">Food name</h1>
    </div>
  );
};

export default FoodItem;
