import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-[15vh] p-4 bg-slate-700 content-around">
      <div className="grid container grid-cols-3 mx-auto content-around items-center text-cente">
        <div className="flex m-auto content-center items-center">
          <Link href={"/"} className="p-4 bg-yellow-300">
            Home
          </Link>
        </div>
        <div className="flex m-auto content-center items-center">
          <Link href={"/Ate"} className="p-4 bg-yellow-300">
            Ate
          </Link>
        </div>
        <div className="flex m-auto content-center items-center">
          <Link href={"/user"} className="p-4 bg-yellow-300">
            User
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
