
import React, { useState } from 'react';


const Hero = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

  return (
    
    
    <div className=' min-h-screen font-mono'>    
        <div className="relative h-[80vh] flex flex-col opacity-75 bg-cover bg-center" style={{backgroundImage: 'url(/images/slideimage4.jpeg)'}}>
          
          <div className="flex items-center justify-center relative h-full">
            <div className="text-white text-center z-10">
            <div className="px-6 py-16 md:py-36">
    <p className="text-white text-start">
        Having recorded good success on its Nigeria Blockchain Alliance (NBA) Initiative since 2015, driving awareness, education, policy advocacy, industry dialogue, and collaboration among stakeholders, the CDIN has taken the effort to another level by rebranding the NBA as Blockchain Industry Association of Nigeria (BIAN) focused on Advancing Blockchain Technology in Nigeria and Africa.
    </p>
    <button href="/auth/signup" className="mt-8 md:mt-12 bg-white hover:bg-green-500 text-green-500 font-semibold hover:text-white py-3 px-6 border border-green-500 hover:border-transparent rounded">
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
