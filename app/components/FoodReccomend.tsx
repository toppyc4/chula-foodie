'use client';
import FoodItem from "./Fooditem";

export default function FoodReccomend () {

  const food: any = [1, 2, 3]

  return (
    <div>
      <div className='flex pt-10 px-4 pb-2'>
          <div className='mr-auto'>
            <h1 className='text-bottom'> กินไรดี </h1>
          </div>
          <div className='ml-auto'>
            <select 
            // onChange={(e) => e.preventDefault()}
            className='block appearance-none w-24 lg:w-36 xl:w-52 2xl:w-64 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight cursor-pointer focus:outline-none focus:shadow-outline'
            defaultValue={"none"}
            >
              <option value='nonw'>ย่าน</option>
              <option value='iCanteen'>iCanteen(วิศวะ)</option>
              <option value='อักษร'>อักษร</option>
            </select>
        </div>
        </div>
        {/* <div className='grid grid-flow-row grid-cols-2 bg-pink-300 '>
          <div><FoodItem/></div>
          <div>02</div>
          <div>03</div>
          <div>04</div>
          <div>05</div>
          <div>06</div>
        </div> */}
        <div className='grid-list-items bg-pink-200'>
        {food?.map((i: any) => (
          <div className='m-2'>
            <FoodItem key={i}/>
          </div>
        ))}
      </div>
    </div>
    
  )
}