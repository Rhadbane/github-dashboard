import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { TextInput } from 'flowbite-react';
import {AiOutlineSearch} from 'react-icons/ai';
export default function Header() {
  return (
    <Navbar className='border-b-2'>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 rounded-lg text-white">GitHub</span>
        Dashboard
      </Link>
      
      <form className='flex items-center'>
        <TextInput 
          type='text'
          placeholder='Search...'
          className='hidden lg:inline'
        />
        <AiOutlineSearch className='ml-2 text-lg text-gray-500' />
      </form>
    </Navbar>
  )
}
