import React from 'react';
import { Link } from 'react-router-dom';

const HomeCategoryCard = ({ category, bgColorCode }) => {
    let bgColor = `bg-[${bgColorCode}]`;
    console.log('---', bgColor)
    const { _id, name, image } = category;
    return (
        <div>
            <div className={`card ${bgColor} shadow-xl card-text place-content-center`}>
                <figure><img src={image} className='h-56 w-56' alt="service" /></figure>
                <div className="card-body py-4">
                    <h2 className="card-title text-[#39bff8] font-semibold">{name}</h2>
                </div>
            </div>
        </div >
    );
};

export default HomeCategoryCard;