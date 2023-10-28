import Navbar2 from "../components/Navbar2";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";

const AdminPostPage = () => {
  const posts = [1, 2, 3, 4, 5];
  return (
    <div>
      <Navbar2 />
      <div className="max-h-[80vh]">
        <div className="relative w-full h-[30vh] bg-fixed overflow-hidden flex">
          <Image
            fill
            className="h-[40vh] object-center object-cover pointer-events-none"
            sizes="(max-width: 430px) 100vw"
            src={"/img/question-mark-profile.jpg"}
            alt="shop-bg"
            quality={100}
          />
        </div>
        <div className="relative z-10">
          <Image
            src={"/img/question-mark-profile.jpg"}
            width={50}
            height={50}
            alt="profile pic"
            className="w-[100px] h-[100px] translate-y-[-50px] mx-auto self-center cursor-pointer rounded-full"
            referrerPolicy="no-referrer"
          />
          <h1 className="text-2xl font-bold mt-3 text-center">shop name</h1>
          <h2 className="text-l mt-3 text-center">ย่าน: shop location</h2>
        </div>

        <div className="my-8">
          <div className="flex items-center mb-4 px-6 pt-3 pb-2 ">
            <h1 className="text-2xl font-bold my-4 mx-2 underline">Menu</h1>
            <div className=" cursor-pointer">
              <Link
                href={`/admin/`}
                className="mr-2 ml-auto bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-1 px-2 border-solid border-b-4 border-emerald-700 hover:border-lime-500 rounded cursor-pointer"
              >
                Add Menu
              </Link>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-2">
            {posts ? posts.map((post, i) => <PostItem key={i} />) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPostPage;

function PostItem(): JSX.Element {
  return (
    <div className="max-w-sx rounded overflow-hidden shadow-lg">
      <Image
        src={"/img/question-mark-profile.jpg"}
        width={50}
        height={50}
        alt="profile pic"
        className="w-[100px] h-[100px] mx-auto self-center cursor-pointer rounded-full"
        referrerPolicy="no-referrer"
      />
      <div className="flex flex-col">
        <div className="px-6 py-4">
          <header className="flex flex-wrap">
            <p className="font-bold text-xl max-h-20 overflow-auto mb-2">
              Post title
            </p>
          </header>
          <div className="flex">
            <span className="inline-block bg-lime-50 rounded-full ml-auto px-3 py-1 text-md text-slate-900  mb-2">
              <b className="text-md font-semiblod">Price:</b> post.price
            </span>
          </div>
          <ReactMarkdown className="my-2 p-2 max-h-36 overflow-auto border-2 border-black bg-teal-50 text-slate-900 text-base rounded-md">
            post content
          </ReactMarkdown>

          <div className="flex content-center items-center justify-center">
            <div className="bg-lime-500 hover:bg-lime-400 text-white font-bold py-1 px-2 border-solid border-b-4 border-lime-700 hover:border-lime-500 rounded cursor-pointer">
              <Link href={`/`} className="flex items-center">
                @ post.username
              </Link>
            </div>
          </div>
        </div>
        <footer className="mt-auto mb-4 px-6 pt-3 pb-2 flex">
          {/* {admin && ()}, ${post.slug} */}
          <div className=" cursor-pointer">
            <Link
              href={`/admin/`}
              className="mr-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-1 px-2 border-solid border-b-4 border-emerald-700 hover:border-lime-500 rounded cursor-pointer"
            >
              Edit Post
            </Link>
          </div>

          {/* <div className="text-blue-600 underline ml-auto cursor-pointer">
            <Link href={`/${post.username}/${post.slug}`}>View detail</Link>
          </div> */}
        </footer>
      </div>
    </div>
  );
}
