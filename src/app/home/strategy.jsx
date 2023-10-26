import React from 'react';

const Strategy = () => {
    return (
        <div className="flex flex-col px-4 md:items-center sm:gap-16">
            
                <div className="flex flex-col md:flex-row gap-4 ">
                     <div className="w-full  border-r-2">
                        <img className="w-full h-full  object-cover"
                        src="images/platform.jpg"
                        alt="Card"/>
        </div>
        <div className="w-full m-auto flex justify-start flex-col items-center align-middle">
            <h1 className="font-bold ">Platform</h1>
            <p className="text-gray-700 text-base flex">
            A single platform will enable stakeholders in Nigeria to provide joint services to the public eliminating posible waste from silo projects. It will serve as a framework for easy identification of viable projects and avoid wasteful investment.
            </p>
        </div>
    </div>




                <div className="flex flex-col md:flex-row-reverse gap-4">
                       <div className="w-full border-r-2">
                       <img className="w-full h-full  object-cover"
                        src="images/colab.png"
                        alt="Card"/>
        </div>
        <div className="w-full m-auto flex justify-start flex-col items-center align-middle">
        <h1 className="font-bold ">Collaboration</h1>
            <p className="text-gray-700 text-base">
            Public and the private sectors in Nigeria are interdependent relying on one another for effective service delivery. Blockchain Industry Association of Nigeria (BIAN) will help bring together relevant stakeholders to collaborate on blockchain projects.
            </p>
        </div>
    </div>


            
                <div className="flex flex-col md:flex-row gap-4 ">
                     <div className="w-full  border-r-2 ">
                     <img className="w-full h-full  object-cover"
                        src="images/rd.jpg"
                        alt="Card"/>
        </div>
        <div className="w-full m-auto flex justify-start flex-col items-center align-middle">
            <h1 className="font-bold">Research And Development</h1>
            <p className="text-gray-700 text-base">
                By promoting research and development on Blockchain/DLT, talented Nigerian youths will be given the opportunity to build use cases that address practical problems in the public and private sector, thereby converting their skills and knowledge into sustainable national development.
            </p>
        </div>
    </div>


<div className="w-fit flex flex-col items-center sm:w-1/2 justify-center text-center m-auto">
    <h1 className="font-bold text-[3em]">Our Story</h1>
    <p className="italic flex flex-wrap">
        CDIN is an NGO and a platform for bringing together stakeholders in Nigeria to work on a common interest of addressing gaps in cryptography related developments including crypto-currencies and crypto-ransomwares. Lack of Awareness and Stakeholders collaboration are the two major gaps we have identified for now. Identified stakeholders include institutions in the following sectors: Education, Defense, Economy, and Technology.
    </p>
</div>

        </div>
    );
};

export default Strategy;
