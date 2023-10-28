"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  auth,
  googleAuthProvider,
  facebookAuthProvider,
} from "../../lib/firebseConfig";
import { signInWithPopup } from "firebase/auth";

import toast from "react-hot-toast";

export default function Login() {
  return (
    <div className=" absolute w-full h-full bg-red-400">
      <div className="flex flex-row w-[80vw] h-[80vh] mx-auto my-[10vh] py-10 bg-slate-50 items-center content-center">
        <div className="flex flex-col mx-auto items-center">
          <h1 className="text-4xl font-bold text-center">Chula-foodie</h1>
          <SignInButton />
        </div>
      </div>
    </div>
  );
}

const SignInButton = () => {
  const router = useRouter();

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider)
      .then(() => {
        router.push("/login/register");
        toast.success("Successfully Sign In! (w/ Google acc)");
      })
      .catch((err) => {
        alert(`signInWithGoogle Error: ${err.message}`);
      });
  };

  return (
    <button
      className="m-4 bg-white text-black p-2 xl:p-4 py-1 xl:py-2 border-2 border-neutral-950 flex items-center text-center content-center font-bold rounded-lg cursor-pointer "
      onClick={signInWithGoogle}
    >
      <Image
        src={"/icon/icon8/google.svg"}
        className="w-[30px] mr-[10px]"
        alt="google sign-in icon"
        width={30}
        height={30}
      />
      Sign in with Google
    </button>
  );
};
