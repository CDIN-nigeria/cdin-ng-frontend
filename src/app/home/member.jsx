import React, { useRef } from 'react';
import { global } from 'styled-jsx/css';

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

    const marqueeRef = useRef(null);

    const scroll = (scrollOffset) => {
        if (marqueeRef.current) {
            marqueeRef.current.scrollLeft += scrollOffset;
        }
    };

   return (
        <div>
            <div className="marquee" ref={marqueeRef} style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                {partnershipPlatforms.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Partnership Platform ${index}`}
                        className="inline-block w-36 h-36 rounded-full m-4"
                    />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button onClick={() => scroll(-100)} className="m-2 p-2 bg-gray-300">Left</button>
                <button onClick={() => scroll(100)} className="m-2 p-2 bg-gray-300">Right</button>
            </div>
            
        </div>
    );
};

export default Member;
