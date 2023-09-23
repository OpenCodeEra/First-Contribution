import React from 'react'

export const Footer = (props) => {
  return (
        <footer class="bg-white rounded-lg shadow dark:bg-gray-900">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="#" class="flex items-center mb-4 sm:mb-0">
                        
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GDSC GEU</span>
                    </a>
                    <ul class="flex flex-wrap items-center gap-6 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" class="hover:underline">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Join us</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">GDSC GEU</a>. All Rights Reserved.</span>
            </div>
        </footer>
  )
}

export default Footer;