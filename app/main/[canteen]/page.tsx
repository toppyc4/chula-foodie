"use client";
import Image from "next/image";
import FoodReccomend from "../../components/FoodReccomend";
import Navbar2 from "../../components/Navbar2";
import Footer from "../../components/Footer";

import {
  query,
  collection,
  where,
  getDocs,
  limit,
  orderBy,
  getFirestore,
} from "firebase/firestore";
import {
  getPostsWithCanteen,
  postToJSON,
  firestore,
} from "../../../lib/firebaseConfig";

export default async function HomeProvincePage({ params }: { params: any }) {
  let posts = null;
  const canteen = params.canteen;
  console.log(`Canteen: ${canteen}`);

  const canteenDocs = await getPostsWithCanteen(canteen);

  console.log(`canteenDocs.docs: ${canteenDocs.docs}`);
  //   canteenDocs.forEach((m) => {
  //     console.log(`m.data: ${JSON.stringify(m.data())}`);
  //   });

  //   const postQuery = query(
  //     collection(getFirestore(), canteenDocs.ref.path, "posts"),
  //     where("published", "==", true),
  //     orderBy("createdAt", "desc"),
  //     limit(30)
  //   );

  posts = canteenDocs.docs.map(postToJSON);
  console.log(`posts ${posts}`);

  return (
    <div className="h-full grid grid-rows-10">
      <div className="h-[13vh]">
        <Navbar2 />
      </div>
      <main className="h-[74vh] mx-10 row-span-8 col-span-full">
        <FoodReccomend posts={posts} canteen={canteen} />
      </main>
      <div className="h-[13vh]">
        <Footer />
      </div>
    </div>
  );
}
