import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight, FiMapPin } from 'react-icons/fi';

const Member = () => {
    const sliderRef = useRef(null);

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 5,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        nextArrow: <FiChevronRight className="text-[4em] text-black" />,
        prevArrow: <FiChevronLeft className="text-[4em] text-black" />,
    };

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    }

    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <div className="relative overflow-hidden flex flex-col gap-8">
            <p className="font-bold text-[2em] px-8">PARTNERS</p>
            <Slider {...settings} ref={sliderRef} className='overflow-clip flex items-center justify-between align-middle gap-8'>
                {partnershipPlatforms.map((image, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <img
                            src={image}
                            alt={`Partnership Platform ${index}`}
                            className="sm:ml-20 w-1/2"
                            // width="150"
                            // height="150"
                        />
                    </div>
                ))}
            </Slider>
            <FiChevronLeft onClick={handlePrevClick} className="text-[4em] text-black cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2" />
            <FiChevronRight onClick={handleNextClick} className="text-[4em] text-black cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2" />
        </div>
    );
};

export default Member;
