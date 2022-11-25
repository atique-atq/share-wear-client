import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { format } from 'date-fns';

const CategoryProduct = ({ product }) => {
    const { _id, categoryId, categoryName, productName, location, resalePrice, originalPrice, yearsOfUse, postingTime, sellerName, image } = product;
    const images = [image]
    const postingDate = format(Date.parse(postingTime), 'Pp');

    // const date = format(selectedDate, 'PP');
    return (
        <div>
            <div className="card card-side w-full bg-base-100 shadow-xl">
                <PhotoProvider>
                    <div className="foo">
                        {images.map((item, index) => (
                            <PhotoView key={index} src={item}>
                                <figure><img className='md:w-80 md:h-96 w-40 h-56' src={item} alt="doctor!" /></figure>
                            </PhotoView>
                        ))}
                    </div>
                </PhotoProvider>
                <div className="card-body h-full md:w-80 md:h-full w-56 h-full leading-none">
                    <h2 className="card-title font-semibold text-gray-700 md:text-xl text-sm">{productName}</h2>
                    <small className='font-semibold text-[#FF652E] '>Resell Price: {resalePrice}</small>
                    <small className='font-semibold '>Original Price: {originalPrice}</small>
                    <br />
                    <small>Location: {location}</small>
                    <small>Category: {categoryName}</small>
                    <small>Year of Use: {yearsOfUse}</small>
                    <small className='italic'>Posting Time: {postingDate}</small>
                    <small className='font-semibold border-solid border-t-2 mt-3 pt-1'>Seller: {sellerName}</small>
                    <br />
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                    <br />
                </div>
            </div>

        </div>
    );
};

export default CategoryProduct;