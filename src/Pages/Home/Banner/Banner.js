import React from 'react';
import person from '../../../assets/images/banner-women.jpg';
import dresses from '../../../assets/images/banner-dresses.avif';
import dreamBg from '../../../assets/images/bg-wave.jpg';


const Banner = () => {
    return (
        <div>
            <div className="hero bg-gradient-to-r from-[#fed5db] to-[#fcb2bc] pb-4">
                <div className="hero-content flex-col lg:flex-row-reverse lg:pr-4">
                    <div className='relative w-full'>
                        <img src={dresses} alt="" className="w-4/5 h-full border-8 border-gray-200 rounded-lg drop-shadow-2xl" />
                        <img src={person} alt="" className="absolute right-5 top-1/3 w-2/5  rounded-lg shadow-2xl" />

                    </div>
                    <div className='mt-8 lg:ml-1'>
                        <h1 className="text-5xl font-bold ">Want budget dresses?</h1>
                        <h1 className="text-4xl font-semibold text-gray-500 my-4">Clothes to give away?</h1>
                        <p className="text-xl text-gray-500 mb-8 font-sans pl-4 border-l-4">Over 1 million people around the country are giving and getting cheap/free dresses in their local communities. Just explore and order from our verified seller and buyers.</p>
                        <button className="btn btn-primary bg-[#fd6288] border-0">Explore Dresses</button>
                    </div>
                </div>
            </div >

        </div>
    );
};

export default Banner;