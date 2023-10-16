import React from 'react';

const Strategy = () => {
    return (
        <div className="flex ">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                                <div className="px-6 py-4">
                    <p>our</p>
                    <div className="font-bold text-xl mb-2">Strategy</div>
                    <p className="text-gray-700 text-base">
                    Having recorded good success on its Nigeria Blockchain Alliance (NBA) Initiative since 2015, driving awareness, education, policy advocacy, industry dialogue and collaboration among stakeholders, the CDIN has taken the effort to another level by rebranding the NBA as Blockchain Industry Association of Nigeria (BIAN) focused on Advancing Blockchain Technology in Nigeria and Africa.
                    </p>
                    <button className="mt-20 bg-white hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">Register
                    </button>

                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <div className='hover:border-4 justify-center items-center flex'>
                <img
                    className="w-36 h-36 m-5 rounded-full"
                    src="images/platform.jpg"
                    alt="Card"
                />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Platform</div>
                    <p className="text-gray-700 text-base">
                    A single platform will enable stakeholders in Nigeria to provide joint services to the public eliminating possible waste from silo projects. It will serve as a framework for easy identification of viable projects and avoid wasteful investment.
                    </p>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <div className='hover:border-4 justify-center items-center flex'>
                <img
                    className="w-36 h-36 m-5 rounded-full"
                    src="images/colab.png"
                    alt="Card"
                />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Collaboration</div>
                    <p className="text-gray-700 text-base">
                        Public and the private sectors in Nigeria are interdependent relying on one another for effective service delivery. Blockchain Industry Association of Nigeria (BIAN) will help bring together relevant stakeholders to collaborate on blockchain projects.
                    </p>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <div className='hover:border-4 justify-center items-center flex'>
                <img
                    className="w-36 h-36 m-5 rounded-full"
                    src="images/rd.jpg"
                    alt="Card"
                />
                </div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Research And Development</div>
                    <p className="text-gray-700 text-base">
                    By promoting research and development on Blockchain/DLT, talented Nigerian youths will be given the opportunity to build use cases that address practical problems in the public and private sector, thereby converting their skills and knowledge into sustainable national development.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Strategy;
