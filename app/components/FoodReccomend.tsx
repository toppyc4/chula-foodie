"use client";
import { useRouter } from "next/navigation";
import FoodItem from "./FoodItem";
import { CanteenType } from "@/lib/types";

import { useState } from "react";

export default function FoodReccomend({
  posts,
  canteen,
}: // filters,
// setFilters,
{
  posts: any;
  canteen: string;
  // filters: string;
  // setFilters: (filters: string) => void;
}) {
  // console.log(`params: ${params}`);
  // console.log(`params slug: ${params.slug}`);
  // const province = params;
  // const provinceDocs = await getPostsWithProvince(province);
  // const postQuery = query(
  //   collection(getFirestore(), provinceDocs.ref.path, "posts"),
  //   where("published", "==", true),
  //   orderBy("createdAt", "desc"),
  //   limit(30)
  // );
  // const foodPosts = await getDocs();
  const router = useRouter();
  const [filters, setFilters] = useState(canteen);
  const dummyFunc = () => {
    console.log("search");
  };

  const search = () => {
    dummyFunc();
    // @ts-ignore
    router.push(`/main/${filters.canteen}/`);
  };

  return (
    <div>
      <div className="flex pt-10 px-4 pb-2">
        <div className="mr-auto my-auto">
          <h1 className="text-xl font-bold"> กินไรดี </h1>
        </div>
        <div className="ml-auto">
          <select
            onChange={(e) => {
              e.preventDefault();
              setFilters({
                //@ts-ignore
                canteen: e.target.value,
              });
            }}
            className="block appearance-none w-24 lg:w-36 xl:w-52 2xl:w-64 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight cursor-pointer focus:outline-none focus:shadow-outline"
            defaultValue={"none"}
          >
            <option value="none" disabled hidden>
              ย่าน
            </option>
            <option value="iCanteen">iCanteen(วิศวะ)</option>
            <option value="Art">อักษร</option>
            <option value="inner-Dom">โรงอาหารหอพักนิสิต</option>
          </select>
        </div>
        <button
          className="flex mx-auto my-[0.42rem] w-auto bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-2 px-4 border-solid border-b-4 border-emerald-700 hover:border-emerald-500 rounded"
          onClick={search}
        >
          Search
        </button>
      </div>
      <div className="grid-list-items bg-pink-200">
        {posts?.map((post: any, i: any) => (
          <div className="m-2">
            <FoodItem post={post} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
}
