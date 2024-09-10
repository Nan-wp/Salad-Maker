import Image from 'next/image'
import React from 'react'
import CustomButton from "./CustomButton";
import Link from 'next/link';

export default function LandingPage() {
  return (
    <>
    <div className='flex pl-2 pt-10'>
       <div className='pt-10 pl-4 flex flex-col justify-center absolute inset-y-1 z-10 text-center'>
         <p className='font-extrabold text-[#9ACD32] text-[55px]'>Healthy Food For Everyone</p>
          <p className='font-extrabold text-center text-green-700 text-[20px]'>So many ways to cook salads, vegan and vegetarian dishes with our Salad Maker</p>
           <Link href={'/Ingredient'}>
           <CustomButton
           title='Create your own!'
           btnType='button'
           containerStyles='hover:bg-[#F8B602] shadow-xl rounded-full bg-yellow-100 min-w-[130px] mt-4  p-4 font-bold' 
           />
           </Link>
       </div>
      <div className='flex justify-end absolute inset-x-0'>
       <Image width={800} height={400} src="/image/holding-blow.png" alt='salad'/>
      </div>
      
    </div>
    </>
  )
}
