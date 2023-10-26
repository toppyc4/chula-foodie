import Image from 'next/image'
import FoodReccomend from './components/FoodReccomend'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default function Home() {
  return (
    <>
      <Navbar/>
      <main className='h-[70vh] mx-10'>
        <FoodReccomend/>
      </main>
      <Footer />
    </>
  )
}
