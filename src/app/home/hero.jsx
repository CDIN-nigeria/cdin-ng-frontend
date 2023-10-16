import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// Initialize Swiper plugins
SwiperCore.use([Navigation, Pagination, Autoplay]);

const Hero = () => {
  return (
    
    
    <div className=' min-h-screen'>
      <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <a href="/" className="text-gray-500 font-normal">Become a mamber</a>
                            
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="/" className="text-green-500 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                
                                <a href="/about" className="text-green-500 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                               
                                <a href="/contact" className="text-green-500 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    
    
        <div className="relative h-[80vh] flex flex-col opacity-75 bg-cover bg-center" style={{backgroundImage: 'url(/images/slideimage4.jpeg)'}}>
          
          <div className="flex items-center justify-center relative h-full">
            <div className="text-white text-center z-10">
              <h1 className="text-4xl font-bold mb-4">Welcome to CDIN</h1>
           
            </div>
          </div>
        </div>
      

    </div>
  );
}

export default Hero;
