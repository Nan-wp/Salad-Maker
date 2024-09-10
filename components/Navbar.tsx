import Image from 'next/image'
import React from 'react'
import CustomButton from "./CustomButton";

export default function Navbar() {
  return (
    <div>
      <nav className='flex justify-between '>
        <div className='flex items-center p-2 gap-1'> 
          <Image src="./svg/topping.svg" width={30} height={30} alt='salad'/>
          <p className='text-gray-800 font-bold text-2xl'>Saladmaker</p>
        </div>
         <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='hover:bg-[#F8B602]  rounded-full bg-white min-w-[130px]'
      />
      </nav>
    </div>
  )
}

