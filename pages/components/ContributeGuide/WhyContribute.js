import React from 'react'
import Image from 'next/image'

const WhyContribute = () => {
  return (
    <div className='opacity-90 flex flex-col md:flex-row border-gray-700 shadow-lg shadow-gray-300 rounded-2xl my-20 mx-10 md:mx-40 items-center justify-center'>
      <Image
          src='/opencodeera.png'
          height={200}
          width={580}
          className='rounded-t-2xl md:rounded-none md:rounded-l-2xl'
          alt='opencodeera-img'
      />
      <div className='flex order-2 flex-col p-4 md:p-6 lg:p-9 w-full bg-blue-500 rounded-b-2xl md:rounded-none md:rounded-r-2xl'>
        <h2 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2 md:mb-4 text-white">Why Contribute?</h2>
        <ul className="list-disc list-inside text-sm font-semibold md:text-lg text-gray-200 space-y-1">
          <li>Be part of a community of innovators.</li>
          <li>Gain invaluable experience.</li>
          <li>Expand your network.</li>
        </ul>
      </div>

    </div>
  )
}

export default WhyContribute