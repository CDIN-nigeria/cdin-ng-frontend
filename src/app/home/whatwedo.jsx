import React from 'react'

const Whatwedo = () => {
  return (
    <div className='flex m-10 border-2'>
      <div className='ml-10 px-10'>
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
      <div className='m-5 '>
      <p>
      <img className='w-8 h-8 mr-3' src="images/arr.png" alt="Ham" />
      <span>Building a Sustainable future for Blockchain Industry in Africa</span>
      </p>
      </div>
      <div className='m-5 '>
      <img className='mr-3' src="images/dev.jpg" alt="Ham" />
      <p>
        <p className='text-l font-bold my-5'>Campus Blockchain Development Programme (CBDP)</p>
      </p>
      </div>
    </div>
  )
}

export default Whatwedo