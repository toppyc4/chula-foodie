import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='w-screen h-[8vh] bg-red-800 px-[4vw] flex justify-btween items-center drops-shadow-lg'>
          <Link href='/'>
            Back
          </Link>
        </nav>
    )
}
