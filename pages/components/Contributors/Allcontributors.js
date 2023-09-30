'use client';

import React, { useEffect, useState } from 'react'
import Contributorcard from './Contributorcard'
import contributors from '../../../data/contributors';

const Allcontributors = () => { 
  return (
    <div className='opacity-90 flex flex-col shadow-lg shadow-gray-300 rounded-2xl bg-gray-200 my-6 mx-10 md:mx-40 items-center justify-center gap-12 px-4 md:px-14 py-10'>
      <h1 className="font-bold font-sans text-black text-2xl md:text-3xl">Our Contributors</h1>
      <div className='flex flex-wrap my-4 justify-center gap-6 md:gap-12'>
      {contributors.map( (contributor) => (
        <Contributorcard 
          key={contributor.github} 
          name={contributor.name}
          skill={contributor.skill}
          linkedin={contributor.linkedin}
          github={contributor.github}
          gender={contributor.gender}
        />     
      ))}
    </div>
    </div>
  )
}

export default Allcontributors