import React from 'react';
// import { Carousel } from '@mui/material';
import { FiChevronLeft, FiChevronRight, FiMapPin } from 'react-icons/fi'; // Import the location icon

const Member = () => {
    const partnershipPlatforms = [
        "images/africa.jpg",
        "images/charity.jpg",
        "images/dam.jpg",
        "images/dog.jpg",
        "images/fintech.jpg",
        "images/inter.jpg",
        "images/kay.jpg",
        "images/luno.jpg",
        "images/sab.jpg",
    ];

    return (
        <div className="relative overflow-hidden">
            {/* <Carousel animation="slide" autoPlay={5000} navButtonsAlwaysVisible>
                {partnershipPlatforms.map((image, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img
                            src={image}
                            alt={`Partnership Platform ${index}`}
                            className="rounded-full m-4"
                            width="150"
                            height="150"
                        />
                        <FiMapPin className="text-primary text-2xl" /> 
                    </div>
                ))}
            </Carousel> */}
        </div>
    );
};

export default Member;
