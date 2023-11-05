"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-green-700 py-2 px-4 relative w-full">
      <div className="text-white text-2xl font-bold rounded-full w-fit h-fit bg-red-400 overflow-clip">
        <Image src='/icons/logo.jpeg' alt='logo' width={60} height={60} />
      </div>
      <div className="md:hidden z-[100]">
        {isOpen ? (
          <FaTimes className={`text-2xl z-[80] ${isOpen? 'text-black': 'text-white'}`} onClick={toggleMenu} />
        ) : (
          <FaBars className="text-white text-2xl" onClick={toggleMenu} />
        )}
      </div>
      <ul className={`sm:flex-row sm:relative sm:text-white gap-4 sm:flex flex-col right-0 w-1/2 z-50 top-1/4 h-[70vh] sm:w-fit sm:h-fit  text-black sm:bg-inherit bg-white list-disc hidden sm:list-none px-4 py-8 sm:p-0 ${isOpen ? 'block' : ''}`}>
        <li>
          <a href="/" className="text-xl sm:text-[1em] hover:bg-green-500 p-2 sm:p-0">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="text-xl sm:text-[1em] hover:bg-green-500 p-2 sm:p-0">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-xl sm:text-[1em] hover:bg-green-500 p-2 sm:p-0">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-xl sm:text-[1em] hover:bg-green-500 p-2 sm:p-0">
            Contact
          </a>
        </li>
        <li>
          <a href="/blog" className="text-xl sm:text-[1em] hover:bg-green-500 p-2 sm:p-0">
            Blog
          </a>
        </li>
        <li>
          <a href="/auth/login" className="text-xl sm:text-[1em] hover:bg-green-500 p-2 sm:p-0">
            Login
          </a>
        </li>
      </ul>
      <div className="sm:flex space-x-4 hidden">
        <FaSearch className="text-white" />
        <FaUser className="text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
