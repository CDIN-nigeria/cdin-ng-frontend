import React from 'react';
import Image from 'next/image';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'; // Import icons from react-icons


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-green-700 py-2 px-4">
      <div className="text-white text-2xl font-bold rounded-full w-fit h-fit bg-red-400 overflow-clip">
        <Image src='/icons/logo.jpeg' alt='logo' width={60} height={60} />
      </div>
      <ul className="hidden md:flex list-none space-x-4">
        <li>
          <a href="#" className="text-white">
          Home</a>
          </li>
        <li>
          <a href="#" className="text-white">
          About</a>
          </li>
        <li>
          <a href="#" className="text-white">
          Services</a>
          </li>
        <li>
          <a href="#" className="text-white">
          Contact</a>
          </li>
      </ul>
      <div className="flex space-x-4">
        <FaSearch className="text-white" />
        <FaUser className="text-white" />
        
      </div>
    </nav>
  );
}

export default Navbar;
