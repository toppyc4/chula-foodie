import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='w-screen h-[8vh] bg-red-800 px-[4vw] flex justify-btween items-center drops-shadow-lg'>
          <Link href='/'>
            Button
          </Link>
    
          <>
            <div className='ml-auto flex content-center'>
                <Link
                  href={`/`}
                  className='flex bg-lime-500 hover:bg-lime-400 text-white font-bold my-auto mr-3 p-1 max-h-[50px] border-solid border-b-4 border-lime-700 hover:border-lime-500 rounded overflow-hidden'
                >
                <Image
                  src={"/img/question-mark-profile.jpg"}
                  width={50}
                  height={50}
                  alt='profile pic'
                  className='mr-2 w-[56px] h-[56px] self-center cursor-pointer rounded-full'
                  referrerPolicy='no-referrer'
                />
                <p className='my-auto text-md self-center'>
                {"unknown"}
                </p>
                </Link>
              <div className=''>
                10,000
              </div>
            </div>
          </>
        </nav>
    )
}
