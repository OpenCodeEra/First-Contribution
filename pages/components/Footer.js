import React from 'react'

export const Footer = (props) => {
  return (
        <footer class="opacity-90 relative bg-gray-200 rounded-t-lg shadow">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-6">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="#" class="flex items-center mb-4 sm:mb-0">
                        
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">Open Code Era</span>
                    </a>
                    <ul class="flex flex-wrap items-center gap-6 mb-6 text-lg text-gray-800 sm:mb-0">
                        <li>
                            <a href="#" class="hover:underline hover:text-blue-800">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline hover:text-blue-800">Contact</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline hover:text-blue-800">Join us</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
                <span class="block text-sm sm:text-center text-gray-800">© 2023 <a href="#" class="hover:underline text-semibold hover:text-blue-700">GDSC GEU</a>. All Rights Reserved.</span>
            </div>
        </footer>
  )
}

export default Footer;