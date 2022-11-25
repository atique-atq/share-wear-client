import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";

const HomeCategoryCard = ({ category }) => {
    const { _id, name, image, categoryId } = category;
    let categoryCardBg = ['#bdd2b3', '#EEE4DA', '#E6C7D6'];
    let index = parseInt(categoryId)

    return (
        <div >
            <div className="card shadow-xl card-text place-content-center rounded-none w-full" style={{
                backgroundColor: `${categoryCardBg[index - 1]}`,
            }}
            >
                <figure><img src={image} className='h-60 w-56' alt="service" /></figure>
                <Link to={`category/${_id}`}>
                    <div className="card-body bg-white hover:bg-[#FFF3E8] hover:cursor-pointer font-mono text-2xl text-center">
                        <h2 className="card-title font-semibold">{name}</h2>
                        <p className='border-0 w-full text-right text-sm italic'>shop now <FaArrowAltCircleRight className='inline-block'></FaArrowAltCircleRight></p>
                    </div>
                </Link>

            </div>
        </div >
    );
};

export default HomeCategoryCard;