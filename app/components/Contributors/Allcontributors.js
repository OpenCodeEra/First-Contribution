'use client';

import React, { useEffect, useState } from 'react'
import Contributorcard from './Contributorcard'
import data from '../../../data/contributors';

const Allcontributors = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    setContributors(data); 
  }, []);


  return (
    <div className='flex flex-col border-dashed border-gray-900 shadow-xl rounded-2xl bg-gray-900 m-12 mx-40 items-center justify-center gap-16 px-20 py-6'>
      <h1 className="font-bold font-sans text-white text-3xl">Recent Contributors</h1>
      <div className='flex flex-wrap gap-4 mx-16'>
      {/* {contributors.map( (contributor) => (
        <Contributorcard key={contributor.id} contributor={contributor}/>     
      ))} */}
      <Contributorcard />
    </div>
    </div>
  )
}

export default Allcontributors