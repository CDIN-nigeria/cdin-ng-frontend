import React from 'react';

const Whatwedo = () => {
  return (
    <div className="flex-col">

    <div className="flex flex-col justify-between  md:flex-row mb-4 w-fit mx-auto">
      <div className=" w-full flex flex-col gap-4 sm:p-8">
      <div className=' flex items-center p-4 w-full cursor-pointer hover:bg-green-500 gap-4 '>
    <img className='w-8 h-8' src="images/ham.png" alt="Ham" /> 
    <div>
        <a href='/about' className="text-l font-bold">Our Vision</a>
        
    </div>
</div>
<div className='flex items-center w-full flex-nowrap cursor-pointer hover:bg-green-500 gap-4 p-4 '>
    <img className='w-8 h-8' src="images/wall.png" alt="Ham" /> 
    <div>
        
    <a href='/about' className="text-lg font-bold">Goals & Objective</a>
    </div>
</div>
<div className='flex items-center w-full flex-nowrap cursor-pointer hover:bg-green-500 gap-4 p-4 '>
    <img className='w-8 h-8 ' src="images/saw.png" alt="Ham" /> 
    <div>
        
    <a href='/about' className="text-xl font-bold">Our Motivations</a>
    </div>
</div>
{/* <div className='flex items-center w-full flex-nowrap cursor-pointer hover:bg-green-500 gap-4 p-4 '>
    <img className='w-8 h-8' src="images/hel.png" alt="Ham" /> 
    <div>
        <p className="text-xl flex-nowrap font-bold">Awareness & Event</p>
    </div>
</div> */}
      </div>

      <div className="w-full flex flex-col gap-4 px-4">
        <p className="font-bold text-center text-[1.5em]">What we do</p>
        <div className="flex gap-4 ">
    <img className='w-8 h-8 ' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l'>Building a Sustainable future for the Blockchain Industry in Africa</p>
</div>
<div className="flex gap-4 ">
    <img className='w-8 h-8 ' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l '>Stimulating Transformation of the African DLT Market</p>
</div>
<div className="flex gap-4 ">
    <img className='w-8 h-8 ' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l'>Driving Policy Advocacy and Industry Dialogue</p>
</div>
<div className="flex gap-4 ">
    <img className='w-8 h-8 ' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l'> Facilitating stakeholders collaboration in the Nigeria DLT Ecosystem</p>
</div>
<div className="flex gap-4 ">
    <img className='w-8 h-8 ' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l'> Creating value-chain and career opportunity in the Nigeria DLT ecosystem </p>
</div>
<div className="flex gap-4 ">
    <img className='w-8 h-8 ' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l '>Promoting Growth through Crytographic Assurance</p>
</div>
<div className="flex gap-4 ">
    <img className='w-8 h-8 ' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l '>Discouraging unlawful practices and supporting AML/CFT</p>
</div>

 
      </div>
    </div>


      <div className="w-fit flex flex-col px-4 sm:mt-[5em]">
        <img className="w-fit sm:w-[40em] mb-3 h-auto" src="images/dev.jpg" alt="Ham" />
        <p>
          <p className="text-base md:text-l font-bold py-5">Campus Blockchain Development Programme (CBDP)</p>
          <p className="text-base text-gray-500 py-8">
            The CDIN recently launched a Campus Blockchain Development Programme (CBDP) through its Nigeria Blockchain Alliance initiative by conducting a campus blockchain hackathon. The programme was started in a pilot phase that involved only a few higher institutions in Nigeria. The schools that participated in the pilot include Ahmadu Bello University (ABU), Federal University of Technology Akure (FUTA), University of Nigeria (UNN), Covenant University, and Kwara State University.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Whatwedo;
