import React from 'react';

const Whatwedo = () => {
  return (
    <div className="flex flex-col m-5 md:flex-row md:border-2">
      <div className="md:ml-10 md:px-10 md:w-1/3">
      <div className='m-5 flex items-center border-x-2 px-2 text-gray-800'>
    <img className='w-8 h-8 mr-3' src="images/ham.png" alt="Ham" /> 
    <div>
        <p className="text-l text-gray-400 font-bold">Our</p>
        <p className="text-xl font-bold">Vision</p>
    </div>
</div>
<div className='m-5 flex items-center border-x-2 px-2 text-gray-800'>
    <img className='w-8 h-8 mr-3' src="images/wall.png" alt="Ham" /> 
    <div>
        <p className="text-l text-gray-400 font-bold">Goals &</p>
        <p className="text-xl font-bold">Objective</p>
    </div>
</div>
<div className='m-5 flex items-center border-x-2 px-2 text-gray-800'>
    <img className='w-8 h-8 mr-3' src="images/saw.png" alt="Ham" /> 
    <div>
        <p className="text-l text-gray-400 font-bold">Our</p>
        <p className="text-xl font-bold">Motivations</p>
    </div>
</div>
<div className='m-5 flex items-center border-x-2 px-2 text-gray-800'>
    <img className='w-8 h-8 mr-3' src="images/hel.png" alt="Ham" /> 
    <div>
        <p className="text-l text-gray-400 font-bold">Awareness &</p>
        <p className="text-xl font-bold">Event</p>
    </div>
</div>
      </div>

      <div className="md:w-1/3">
        <p className="md:border-b-2 md:pb-3 text-base md:text-xl font-bold">What we do</p>
        <div className="flex mt-3">
    <img className='w-8 h-8  mr-3' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l'>Building a Sustainable future for the Blockchain Industry in Africa</p>
</div>
<div className="flex mt-3">
    <img className='w-8 h-8  mr-3' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l '>Stimulating Transformation of the African DLT Market</p>
</div>
<div className="flex mt-3">
    <img className='w-8 h-8  mr-3' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l'>Driving Policy Advocacy and Industry Dialogue</p>
</div>
<div className="flex mt-3">
    <img className='w-8 h-8  mr-3' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l'> Facilitating stakeholders collaboration in the Nigeria DLT Ecosystem</p>
</div>
<div className="flex mt-3">
    <img className='w-8 h-8  mr-3' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l'> Creating value-chain and career opportunity in the Nigeria DLT ecosystem </p>
</div>
<div className="flex mt-3">
    <img className='w-8 h-8  mr-3' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l '>Promoting Growth through Crytographic Assurance</p>
</div>
<div className="flex mt-3">
    <img className='w-8 h-8  mr-3' src="images/arr.png" alt="Ham" />
    <p className='font-bold text-l '>Discouraging unlawful practices and supporting AML/CFT</p>
</div>

 
      </div>
      <div className="m-5 md:w-1/3">
        <img className="w-full md:w-auto mb-3" src="images/dev.jpg" alt="Ham" />
        <p>
          <p className="text-base md:text-l font-bold my-5">Campus Blockchain Development Programme (CBDP)</p>
          <p className="text-base text-gray-500 my-4">
            The CDIN recently launched a Campus Blockchain Development Programme (CBDP) through its Nigeria Blockchain Alliance initiative by conducting a campus blockchain hackathon. The programme was started in a pilot phase that involved only a few higher institutions in Nigeria. The schools that participated in the pilot include Ahmadu Bello University (ABU), Federal University of Technology Akure (FUTA), University of Nigeria (UNN), Covenant University, and Kwara State University.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Whatwedo;
