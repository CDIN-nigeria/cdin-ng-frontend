'use client'
import React, { useState } from 'react';

const customerReviews = [
    { title: 'Great Service', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Excellent Product', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Highly Recommended', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
];

const CustomerReviewsCarousel = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const nextReview = () => {
        setCurrentReview(currentReview === customerReviews.length - 1 ? 0 : currentReview + 1);
    };

    const prevReview = () => {
        setCurrentReview(currentReview === 0 ? customerReviews.length - 1 : currentReview - 1);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>{customerReviews[currentReview].title}</h2>
            <p>{customerReviews[currentReview].content}</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <button onClick={prevReview}>&#60;</button>
                <button onClick={nextReview}>&#62;</button>
            </div>
        </div>
    );
};

const Index = () => {
    return (
        <div>
            <h1>Welcome to My Landing Page</h1>
            <CustomerReviewsCarousel />
        </div>
    );
};

export default Index;
