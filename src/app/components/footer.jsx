import React from 'react';
import { AiOutlineHome, AiOutlineThunderbolt, AiOutlineSearch } from 'react-icons/ai';
import { FiMail, FiPhone, FiGlobe } from 'react-icons/fi';
import Image from 'next/image';

const Footercomp = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-row gap-4 justify-between w-full">
          <div className='flex m-auto flex-col w-full gap-8'>
            <Image src='/icons/logo.jpeg' alt='img' width={120} className='w-full h-[14em]' height={10}  />
          
            <div className="flex items-center">
              <AiOutlineHome className="mr-2 text-green-600 text-[2em]" /> No 29 Mambilla Street, off Aso Drive, Three Arm Zone Maitama, Abuja. Nigeria
            </div>
            <div className="flex items-center mt-2">
              <FiPhone className="mr-2 text-green-400 text-[2em]" /> +234 813 055 9170
            </div>
            <div className="flex items-center mt-2">
              <FiMail className="mr-2 text-green-400 text-[2em]" /> info@cdin.org.ng
            </div>
            <div className="flex items-center mt-2">
              <FiGlobe className="mr-2 text-green-400 text-[2em]" /> www.cdin.org.ng
            </div>
          </div>
          <div className='w-full flex px-8 gap-4 flex-col'>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="list-none  ">
              <li className="flex items-center mb-2"><a href="#">Home</a></li>
              <li className="flex items-center mb-2"><a href="#">Platforms</a></li>
              <li className="flex items-center mb-2"><a href="#">R&D</a></li>
              <li className="flex items-center mb-2"><a href="#">Collaboration</a></li>
              <li className="flex items-center mb-2"><a href="#">Membership</a></li>
              <li className="flex items-center mb-2"><a href="#">News</a></li>
            </ul>
          </div>
          <div className='w-full flex px-8 gap-4 flex-col'>
            <h2 className="text-xl font-bold mb-4">Membership Category</h2>
            <ul className="list-none p-0">
              <li className="mb-2">Silver</li>
              <li className="mb-2">Gold</li>
              <li className="mb-2">Platinum</li>
            </ul>
          </div>
        </div>
     
        <div className="mt-4 m-auto w-fit">
          <p>COPYRIGHT CRYPTOGRAPHIC DEVELOPMENT INITIATIVE IN NIGERIA @2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footercomp;