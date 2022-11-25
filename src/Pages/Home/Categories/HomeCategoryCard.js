import React from 'react';
import { Link } from 'react-router-dom';

const HomeCategoryCard = ({ category }) => {
    const { _id, name, image, categoryId } = category;
    let categoryCardBg = ['#E6C7D6', '#EEE4DA', '#E6C7D6'];
    let index = parseInt(categoryId)

    return (
        <div>
            <div className="card shadow-xl card-text place-content-center rounded-none" style={{
                backgroundColor: `${categoryCardBg[index - 1]}`,
            }}
            >
                <figure><img src={image} className='h-60 w-56' alt="service" /></figure>
                <div className="card-body bg-white font-mono text-2xl text-center">
                    <h2 className="card-title font-semibold">{name}</h2>
                </div>
            </div>
        </div >
    );
};

export default HomeCategoryCard;