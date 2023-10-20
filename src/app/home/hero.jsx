
import React, { useState } from 'react';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';


const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    
    
    <div className=' min-h-screen'>
    <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="/" className="text-gray-500 font-normal">Become a member</a>
                        </div>
                        <div className={`hidden sm:block sm:ml-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
                            <div className="flex space-x-4 ml-[800px]">
                                <a href="/" className="text-green-500 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
                                <div className='border-2'></div>
                                <a href="/about" className="text-green-500 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:hidden">
                        <button onClick={toggleMenu} className="text-gray-500 hover:text-black focus:outline-none focus:text-black">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>

    
    
        <div className="relative h-[80vh] flex flex-col opacity-75 bg-cover bg-center" style={{backgroundImage: 'url(/images/slideimage4.jpeg)'}}>
          
          <div className="flex items-center justify-center relative h-full">
            <div className="text-white text-center z-10">
            <div className="px-6 py-16 md:py-36">
    <p className="text-white text-2xl md:text-4xl text-start">
        Having recorded good success on its Nigeria Blockchain Alliance (NBA) Initiative since 2015, driving awareness, education, policy advocacy, industry dialogue, and collaboration among stakeholders, the CDIN has taken the effort to another level by rebranding the NBA as Blockchain Industry Association of Nigeria (BIAN) focused on Advancing Blockchain Technology in Nigeria and Africa.
    </p>
    <button className="mt-8 md:mt-12 bg-white hover:bg-green-500 text-green-500 font-semibold hover:text-white py-3 px-6 border border-green-500 hover:border-transparent rounded">
        Get Started
    </button>
</div>

                       
            </div>
          </div>
        </div>
      

    </div>
  );
}

export default Hero;
