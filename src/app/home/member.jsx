import React from 'react';
import { global } from 'styled-jsx/css';
const Member = () => {
    const partnershipPlatforms = [
        "images/africa.jpg",
        "images/charity.jpg",
        "images/colab.jpg",
        "images/dam.jpg",
        "images/dog.jpg",
        "images/fintech.jpg",
        "images/inter.jpg",
        "images/kay.jpg",
        "images/luno.jpg",
        "images/sab.jpg",
    ];

    return (
        <div>
            <div className="h-16 bg-gray-800 flex items-center justify-center">
                <h1 className="text-white text-2xl font-bold">Image Slider</h1>
            </div>
            <div className="flex items-center my-5 ml-16 w-full overflow-hidden">
                <div className="slider-container flex space-x-4" style={{ animation: 'marquee 30s linear infinite' }}>
                    {partnershipPlatforms.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`partnership-${index}`}
                            className="w-64 h-64 object-cover"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Member;
