import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

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

      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color='gray' pill>
          <FaMoon />
        </Button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='purpleToBlue'>
            SignIn
          </Button>
        </Link>
      </div>

      <Navbar.Collapse>
        <Link to='/' className='block py-2 px-4 text-sm font-medium text-gray-700 dark:text-gray-400'>
          Home
        </Link>
        <Link to='/about' className='block py-2 px-4 text-sm font-medium text-gray-700 dark:text-gray-400'>
          About
        </Link>
        <Link to='/projects' className='block py-2 px-4 text-sm font-medium text-gray-700 dark:text-gray-400'>
          Projects
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
