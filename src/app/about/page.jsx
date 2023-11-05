"use client"
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footercomp from '../components/footer';
import Vision from './components/vision';
import Mission from './components/mission';
import { useState } from 'react';
import Objectives from './components/objectives';

const AboutUs = () => {
    const [currentComponent, setCurrentComponent] = useState(0);

  const handleNextComponent = () => {
    if (currentComponent < 2) {
      setCurrentComponent(currentComponent + 1);
    }
  };

  const handlePrevComponent = () => {
    if (currentComponent > 0) {
      setCurrentComponent(currentComponent - 1);
    }
  };
  return (
    <div className="w-full mx-auto">
        <Navbar />
      <h1 className="text-3xl font-bold px-4">ABOUT US</h1>
      <div className="w-fit items-center px-8 gap-16 flex sm:flex-row flex-col justify-between mt-16">
<div className="w-full flex flex-col gap-11">

      <p className="flex flex-col">
        <span className="font-bold mb-2">
            PROMOTING DIGITAL ECONOMY THROUGH CRYPTOGRAPHIC ASSURANCE.
            </span>
        CDIN is an NGO and a platform
        for bringing together stakeholders in Nigeria to work on a common interest of addressing gaps
        in cryptography related developments including crypto-currencies and crypto-ransomwares. Lack of
        Awareness and Stakeholders collaboration are the two major gaps we have identified for now.
        Identified stakeholders includes institutions in the following sectors: Education, Defense, Economy
        and Technology. Our Strategic Themes are: Platforms, R&D and Collaboration. Our platform initiatives
        includes Weekly Meetups, Monthly Podcasts, and Annual Conference.
      </p>


      <button className="bg-green-400 rounded-lg hover:text-white hover:bg-black px-4 py-1 m-auto flex ">Join us</button>
</div>
   
<div className="w-full">

        <Image
          src="/images/slideimage3.jpeg"
          alt="About Us Image"
          width={800}
          height={600}
          className='bg-cover self-stretch'
        />
      </div>
</div>

<div className="w-full px-8 mt-16">

      <h2 className="text-2xl font-bold mb-4">Why it Matters</h2>
      <p className="mb-8">
        CDIN members have access to practical knowledge and insights from leaders in the field, best practices,
        research, and tools you can use every day in this rapidly changing industry. We provide information,
        resources, and education programs to help you keep current on the latest news, laws, and issues affecting
        community associations, condominiums, and cooperatives, and the homeowners who call them home. As a member,
        you&apos;ll also get a membership to your local chapter and gain a network of industry colleagues—over 40,000
        of them in 64 chapters worldwide.
      </p>
</div>
<div className="flex sm:flex-row flex-col gap-8 m-auto px-8 ">


          <div className="w-full">
            <Vision />
           
              <div className="w-full">
                <Mission />
              </div>
          
          </div>
        {/* )} */}


        {/* {currentComponent === 2 || 1 && ( */}
          <div className="w-full">
            <Objectives />
          </div>
        {/* // )} */}
</div>
    

{/* <div className="flex justify-center mt-4">
        <button className="bg-green-400 rounded-lg hover:text-white hover:bg-black px-4 py-1" onClick={handlePrevComponent}>
          Previous
        </button>
        <button className="bg-green-400 rounded-lg hover:text-white hover:bg-black px-4 py-1 ml-4" onClick={handleNextComponent}>
          Next
        </button>
      </div> */}

      <Footercomp />
    </div>
  
  );
};

export default AboutUs;
