import React from "react";
import { Card } from 'flowbite-react';
import { FaGithub, FaLinkedin, FaWindows } from 'react-icons/fa';
import { Avatar, ChakraProvider } from '@chakra-ui/react';
import Image from "next/image";

function getBgColor() { 
  const letters = '0123456789ABCDEF'; 
  let color = '#'; 
  for (let i=0; i < 6; i++) 
    color += letters[Math.floor(Math.random() * 16)];

  console.log(color);

  return color;
}

  const Contributorcard = (props) => {

    return (
      <Card
      onClick={() => window.open(props.github, '_blank')}
      className="bg-white rounded-xl shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 transform hover:scale-105 transition-transform duration-300 ease-in-out w-28 md:w-40 lg:w-48 text-center"
      >
        <div className="flex flex-wrap flex-row items-center justify-center py-2 md:py-8 px-auto">
          <div className="flex justify-center items-center w-36 md:w-full items-center">
            <ChakraProvider className="p-0">
              <Avatar
                size="xl"
                name={props.name}
                src={`https://api.dicebear.com/7.x/notionists/svg?seed=${props.name}`}
              />
            </ChakraProvider>
          </div>
          <div className="my-3 md:mt-6 flex flex-col justify-center items-center">
            <h5 className="text-base md:text-lg lg:text-xl font-medium text-gray-900 dark:text-black">
              {props.name}
            </h5>
            <span className="hidden md:flex text-sm md:text-base text-gray-500 dark:text-gray-600">
              {props.skill}
            </span>
            <div className="hidden md:flex mt-2 flex space-x-3">
              <a
                className="inline-flex items-center p-2 text-center text-2xl md:text-3xl font-medium text-blue-500"
                href={props.linkedin}
              >
                <FaLinkedin />
              </a>
              <a
                className="inline-flex items-center p-2 text-center text-2xl md:text-3xl font-medium text-black"
                href={props.github}
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  export default Contributorcard; 