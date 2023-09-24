import React from "react";
import { Card } from 'flowbite-react';
import { FaGithub, FaLinkedin, FaWindows } from 'react-icons/fa';
import { Avatar, ChakraProvider } from '@chakra-ui/react';
import Image from "next/image";

  const Contributorcard = (props) => {

    return (
      <Card onClick={() => window.open(props.github, '_blank')} className="bg-white rounded-xl shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="flex flex-col items-center p-8">
          {/* <No Display Name
            alt="Bonnie image"
            className="mb-3 rounded-full shadow-lg"
            height="96"
            src="/images/people/profile-picture-3.jpg"
            width="96"
          /> */}
          <div className="md:mb-3 xl:mb-0 h-full w-full px-4 py-2">
            <ChakraProvider>
              <Avatar size="xl" name={props.name} src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${props.name}&backgroundColor=2E6BD0`}/>
            </ChakraProvider>
            {/* <Image
              className="rounded-full"
              width={500}
              height={500}
              src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${props.name}&backgroundColor=b6e3f4`}
              alt="avatar"
            /> */}
          </div>
          <h5 className="mt-4 text-xl font-medium text-gray-900 dark:text-black">
            {props.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-600">
            {props.skill}
          </span>
          <div className="mt-2 flex space-x-3 lg:mt-2">
            <a
              className="inline-flex items-center p-2 text-center text-2xl font-medium text-blue-500"
              href={props.linkedin}
            >
              <FaLinkedin />
            </a>
            <a
              className="inline-flex items-center p-2 text-center text-2xl font-medium text-black"
              href={props.github}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </Card>
    )
  }

  export default Contributorcard; 