import React from 'react';
import chair from '../../../assets/images/banner-women.jpg';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold text-[#902741]">Want budget dresses?</h1>
                    <h1 className="text-4xl font-semibold text-[#c33b5d] mt-4">Clothes to give away?</h1>
                    <p className="py-6 text-xl text-gray-500 mb-8 font-sans">Over 1 million people around the country are giving and getting cheap/free dresses in their local communities. Just explore and order from our verified seller and buyers.</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;