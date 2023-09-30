import React, { useState } from "react"; 
import Link from "next/link";

const Navbar = (props) => { 

    return (
        <nav class="bg-opacity-80n flex justify-between bg-gray-200 text-gray-800 w-full z-50 sticky top-0 left-0">
            <div class="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
                <a class="text-2xl font-semibold text-gray-800 font-mono" href="#">
                Open code Era
                </a>
                <ul class="hidden md:flex justify-around px-2 mx-auto text-lg font-heading space-x-16">
                <li><Link class="hover:text-blue-800 hover:underline" href="#">Home</Link></li>
                <li><Link class="hover:text-blue-800 hover:underline" href="#contributors">Contributors</Link></li>
                <li><Link class="hover:text-blue-800 hover:underline" href="#">About us</Link></li>
                </ul>
                <Link href={'https://github.com/OpenCodeEra/first-contribution'} className="flex items-center space-x-5">
                {/* <a class="hover:text-gray-200" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </a> */}
                {/* <a class="flex items-center hover:text-gray-200" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span class="flex absolute -mt-5 ml-4">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                        </span>
                    </span>
                </a> */}
                    <button type="button" class="text-white bg-gray-500 border-1 border-dashed border-white hover:bg-blue-600 font-medium rounded-lg text-sm px-3 py-1.5 transition duration-300 ease-in-out mr-2">Contribute now</button>                
                </Link>
            </div>
        </nav>
    )

}

export default Navbar