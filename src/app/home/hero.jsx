import React from 'react';



const Hero = () => {
  return (
    <div className=' min-h-screen'>
      
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
