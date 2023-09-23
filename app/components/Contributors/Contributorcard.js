'use client';

import { Card } from 'flowbite-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contributorcard = ({ contributor }) => {
  return (
    <Card>
      <div className="flex flex-col items-center p-10">
        {/* <No Display Name
          alt="Bonnie image"
          className="mb-3 rounded-full shadow-lg"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
        /> */}
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {/* {contributor.name} */}
          Adarsh Rawat
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {/* {contributor.skill} */}
          Cloud
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            className="inline-flex items-center p-2 text-center text-xl font-medium text-blue-500"
            // href={contributor.linkedin_id}
          >
            <FaLinkedin />
          </a>
          <a
            className="inline-flex items-center p-2 text-center text-xl font-medium text-white"
            // href={contributor.github_id}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </Card>
  )
}

export default Contributorcard; 