import Navbar from "@/app/components/Navbar";
import PostForm from "@/app/components/PostForm";
import { getFirestore, doc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

import { auth, firestore } from "../../../lib/firebseConfig";

const PostManager = ({ params }: { params: { slug: string } }) => {
  const post: {
    name: String;
    price: Number;
    yarn: String;
    content: String;
    photoUrl: String;
    calories: String;
    published: Boolean;
  } = {
    name: "ข้าวผัด",
    price: 100,
    yarn: "iCanTeen",
    content: "ข้าวผัด",
    photoUrl: "photo-url",
    calories: "10 kg. cal",
    published: true,
  };

  console.log(`params slug: ${params.slug}`);

  const uid: any = auth?.currentUser?.uid;
  const postRef = doc(getFirestore(), "users", uid, "shop", params.slug);

  return (
    <div>
      <Navbar />
      <div className="max-w-[69vw] mx-auto mt-8">
        <Image
          src={"/img/question-mark-profile.jpg"}
          width={390}
          height={200}
          alt="food pic"
          className="w-[390px] h-[200px] mx-auto self-center cursor-pointer"
          referrerPolicy="no-referrer"
        />
        <div className="my-4 ml-auto cursor-pointer">
          <Link
            href={`/admin/`}
            className="mr-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-1 px-2 border-solid border-b-4 border-emerald-700 hover:border-lime-500 rounded cursor-pointer"
          >
            Edit Post
          </Link>
        </div>
        <PostForm post={post} defaultValues={post} postRef={postRef} />
      </div>
    </div>
  );
};

export default PostManager;
