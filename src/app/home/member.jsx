import React, { useRef } from 'react';
import { global } from 'styled-jsx/css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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
        <div className='w-full overflow-clip'>
            <div className="marquee px-8 flex" ref={marqueeRef} >
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
            <FiChevronLeft className="text-[4em] text-black" onClick={() => scroll(-100)} />
            
                <FiChevronRight className="text-[4em] text-black" onClick={() => scroll(100)} />
            </div>
            
        </div>
    );
};

export default Member;
