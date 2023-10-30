"use client";

import FoodItem from "./FoodItem";

export default function FoodReccomend({ posts }: { posts: any }) {
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

  return (
    <div>
      <div className="flex pt-10 px-4 pb-2">
        <div className="mr-auto my-auto">
          <h1 className="text-xl font-bold"> กินไรดี </h1>
        </div>
        <div className="ml-auto">
          <select
            // onChange={(e) => e.preventDefault()}
            className="block appearance-none w-24 lg:w-36 xl:w-52 2xl:w-64 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight cursor-pointer focus:outline-none focus:shadow-outline"
            defaultValue={"none"}
          >
            <option value="nonw">ย่าน</option>
            <option value="iCanteen">iCanteen(วิศวะ)</option>
            <option value="อักษร">อักษร</option>
          </select>
        </div>
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
