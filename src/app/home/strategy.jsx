import React from 'react';

const Strategy = () => {
    return (
        <div className="  md:flex-row md:justify-center md:items-center">
            <div className="w-full my-10">
                <div className="flex flex-col md:flex-row">
                     <div className="w-full md:w-1/2  border-r-2">
                        <img className="w-96 h-full ml-5 md:h-56 object-cover"
                        src="images/platform.jpg"
                        alt="Card"/>
        </div>
        <div className="w-full md:w-1/3 px-6 py-4">
            <div className="font-bold text-xl md:text-2xl mb-2">Platform</div>
            <p className="text-gray-700 text-base">
            A single platform will enable stakeholders in Nigeria to provide joint services to the public eliminating posible waste from silo projects. It will serve as a framework for easy identification of viable projects and avoid wasteful investment.
            </p>
        </div>
    </div>
</div>


<div className="w-full my-10">
                <div className="flex flex-col md:flex-row">
                       <div className="w-full md:w-1/2 border-r-2">
                        <img className="w-96 h-full ml-5 md:h-56 object-cover"
                        src="images/colab.png"
                        alt="Card"/>
        </div>
        <div className="w-full md:w-1/3 px-6 py-4">
            <div className="font-bold text-xl md:text-2xl mb-2">Collaboration</div>
            <p className="text-gray-700 text-base">
            Public and the private sectors in Nigeria are interdependent relying on one another for effective service delivery. Blockchain Industry Association of Nigeria (BIAN) will help bring together relevant stakeholders to collaborate on blockchain projects.
            </p>
        </div>
    </div>
</div>

            <div className="w-full  my-10">
                <div className="flex flex-col md:flex-row">
                     <div className="w-full  border-r-2 md:w-1/2">
                        <img className="w-96 h-full  ml-5  md:h-56 object-cover"
                        src="images/rd.jpg"
                        alt="Card"/>
        </div>
        <div className="w-full md:w-1/3 px-6 py-4">
            <div className="font-bold text-xl md:text-2xl mb-2">Research And Development</div>
            <p className="text-gray-700 text-base">
                By promoting research and development on Blockchain/DLT, talented Nigerian youths will be given the opportunity to build use cases that address practical problems in the public and private sector, thereby converting their skills and knowledge into sustainable national development.
            </p>
        </div>
    </div>
</div>

<div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl text-center font-extrabold text-gray-900 sm:text-4xl">Our Story</h1>
    <p className="mt-6 text-center text-xl text-gray-700">
        CDIN is an NGO and a platform for bringing together stakeholders in Nigeria to work on a common interest of addressing gaps in cryptography related developments including crypto-currencies and crypto-ransomwares. Lack of Awareness and Stakeholders collaboration are the two major gaps we have identified for now. Identified stakeholders include institutions in the following sectors: Education, Defense, Economy, and Technology.
    </p>
</div>

        </div>
    );
};

export default Strategy;
