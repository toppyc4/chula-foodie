"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  writeBatch,
  doc,
  serverTimestamp,
  updateDoc,
  getFirestore,
} from "firebase/firestore";

import ReactMarkdown from "react-markdown";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const PostForm = ({
  post,
  defaultValues,
  postRef,
}: {
  post: any;
  defaultValues: any;
  postRef: any;
}) => {
  const [preview, setPreview] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: defaultValues?.name,
      yarn: defaultValues?.yarn,
      content: defaultValues?.content,
      photoUrl: defaultValues?.photoUrl,
      price: defaultValues?.price,
      calories: defaultValues?.calories,
      published: defaultValues?.published,
    },
    mode: "onChange",
  });

  const [downloadURL, setDownloadURL] = useState(null);

  useEffect(() => {
    if (defaultValues.photoUrl !== null) {
      setDownloadURL(defaultValues.photoUrl);
    }
  }, []);

  const router = useRouter();
  const { isDirty } = formState;

  function deleteWarning() {
    toast((t) => (
      <div className="bg- w-[30vh] flex justify-center align-center content-center">
        <h1 className="font-bold text-lg my-auto">Are you sure?</h1>
        <button
          className="ml-auto p-1 text-md font-medium"
          onClick={deletePost}
        >
          Yes
        </button>
        <button
          className="m-3 p-1 text-md font-medium"
          onClick={() => toast.dismiss(t.id)}
        >
          No
        </button>
      </div>
    ));
  }

  const updatePost = async ({
    name,
    price,
    content,
    published,
  }: {
    name: String;
    price: Number;
    content: string;
    published: boolean;
  }) => {
    const batch = writeBatch(getFirestore());
    const _yarn = post?.address?.yarn;
    const _slug = post?.slug;

    // ref to post in provinces
    const yarnPostRef = doc(getFirestore(), "yarn", _yarn, "posts", _slug);

    batch.update(postRef, {
      price,
      photoUrl: downloadURL,
      content,
      published,
      updatedAt: serverTimestamp(),
    });

    batch.update(yarnPostRef, {
      price,
      photoUrl: downloadURL,
      content,
      published,
      updatedAt: serverTimestamp(),
    });

    await batch
      .commit()
      .then(() => {
        toast.success("Post updated successfully!");
      })
      .catch((err) => alert("Commit Batch Error:" + err));

    reset({ content, published });
    router.push(`/${post.username}`);
  };

  const deletePost = async () => {
    const batch = writeBatch(getFirestore());
    const _province = post?.address?.province;
    const _slug = post?.slug;

    // ref to post in provinces
    const provincePostRef = doc(
      getFirestore(),
      "provinces",
      _province,
      "posts",
      _slug
    );

    batch.delete(postRef);
    batch.delete(provincePostRef);

    await batch.commit().then(() => {
      alert("Successfully delete post!");
      toast.dismiss();
      router.push(`/${post.username}`);
    });
  };

  return (
    <form onSubmit={handleSubmit(updatePost)} className="w-full max-w-l">
      <div className="flex flex-col">
        <div className="flex flex-wrap -mx-3 mb-8">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
              Name Menu (ชื่ออาหาร)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="ข้าวผัด"
              {...register("name", {
                required: { value: true, message: "content is required" },
              })}
            />
            {errors.name && (
              <p className="font-bold text-red-600">{`${errors.name.message}`}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
              Price (ราคา)
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="100 bath"
              {...register("price", {
                required: { value: true, message: "content is required" },
              })}
            />
            {errors.price && (
              <p className="font-bold text-red-600">{`${errors.price.message}`}</p>
            )}
          </div>
        </div>

        {/* Content */}
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
            Content (เนื้อหา)
          </label>
          {preview && (
            <div className="p-[2rem] bg-white border-2 border-black rounded-md">
              <ReactMarkdown>{watch("content")}</ReactMarkdown>
            </div>
          )}
          <textarea
            {...register("content", {
              maxLength: { value: 20000, message: "content is too long" },
              minLength: { value: 10, message: "content is too short" },
              required: { value: true, message: "content is required" },
            })}
            className={
              preview
                ? "hidden"
                : "h-[15vh] w-full p-[0.5rem] border-2 border-black"
            }
          ></textarea>
          <div className="flex">
            <i>
              <a
                target="_blank"
                href="https://www.markdownguide.org/cheat-sheet/"
                className="text-blue-600 underline"
              >
                learn more
              </a>
              {" about how to use Markdown"}
            </i>
            <button
              type="button"
              onClick={() => setPreview(!preview)}
              className="min-w-40 max-w-44 ml-auto m-1 p-1 border-2 border-black rounded-lg hover:opacity-70"
            >
              {preview ? "Edit" : "Preview"}
            </button>
          </div>
          {errors.content && (
            <p className="font-bold text-red-600">{`${errors.content.message}`}</p>
          )}
        </div>

        <fieldset className="m-2 ml-auto">
          <input
            className="inline mr-1 cursor-pointer"
            type="checkbox"
            checked
            {...register("published")}
          />
          <label>Published</label>
        </fieldset>

        <div className="grid grid-cols-2 gap-2 mt-4 mb-8">
          <button
            type="button"
            className="font-semibold p-1 bg-red-700 border-b-4 border-black hover:bg-red-500  rounded-lg disabled:opacity-75"
            onClick={deleteWarning}
          >
            Delete Post
          </button>
          <button
            type="submit"
            className="font-semibold text-white p-1 bg-green-700 border-b-4 border-black hover:bg-green-500  rounded-lg disabled:opacity-75"
            disabled={!isDirty}
          >
            Save Change
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
