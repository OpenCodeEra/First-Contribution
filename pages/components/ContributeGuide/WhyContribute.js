import React from 'react'
import Image from 'next/image'

const WhyContribute = () => {
  return (
    <div className='opacity-90 flex md:flex-row border-gray-700 shadow-lg shadow-gray-300 rounded-2xl my-20 mx-40 items-center justify-center'>
      <Image
          src='/opencodeera.png'
          height={200}
          width={580}
          className='rounded-l-2xl'
          alt='opencodeera-img'
      />
      <div className='flex order-2 flex-col p-11 py-9 w-full bg-blue-500 rounded-r-2xl'>
        <h2 className="text-2xl font-bold mb-4 text-white">Why to Contribute?</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 space-y-1.5">
          <li>Be part of a global community of innovators.</li>
          <li>Gain invaluable experience.</li>
          <li>Expand your network.</li>
        </ul>
      </div>
    </div>
  )
}

export default WhyContribute