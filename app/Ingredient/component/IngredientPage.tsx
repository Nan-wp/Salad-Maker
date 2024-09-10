import Image from 'next/image'
import React from 'react'

export default function IngrediantPage() {
  
  return (
  <>
      <div className="col-span-9 bg-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="font-bold text-3xl">
            Let's Create...your own salad!!!
          </div>
          <form className="w-[330px] flex items-center bg-gray-100 p-2 rounded-lg">
            <button
              type="submit"
              className="p-2 bg-gray-100 text-white rounded-l-md hover:bg-gray-300"
            >
              <Image
                width={20}
                height={20}
                src="/svg/search.svg"
                alt="Search"
              />
            </button>
            <input
              type="text"
              placeholder="Search ingredients to make a salad..."
              className="w-full text-sm bg-gray-100 pl-2"
            />
          </form>
        </div>
         <div className="mb-6">
          <Image
            width={1495}
            height={240}
            src="/image/textbar.png"
            alt="Text bar"
          />
        </div>
      </div>

  </>
  )
}
