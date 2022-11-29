import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { format } from 'date-fns';
import { TiTick } from "react-icons/ti";

const CategoryProduct = ({ product, setProductForModal }) => {
    const { categoryName, productName, location, resalePrice, originalPrice, yearsOfUse, condition, description, postingTime, sellerName, image, verification, status } = product;
    const images = [image]
    const postingDate = format(Date.parse(postingTime), 'Pp');

    return (
        <div>
            {
                status !== "sold" && <div className="card card-side w-full bg-base-100 shadow-xl">
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
                        {
                            condition && <small>Condition: {condition}</small>
                        }
                        {
                            description && <small>Description: {description}</small>
                        }
                        <small>Year of Use: {yearsOfUse}</small>
                        <small className='italic border-solid border-b-2 pb-2'>Posting Time: {postingDate}</small>
                        <div className='flex justify-around items-center mt-2 text-xl'>
                            <small className='font-bold'>Seller: {sellerName}</small>
                            <div>
                                {
                                    verification === 'verified' && <p className='text-blue-500 text-3xl' title='Verified Seller'> <TiTick></TiTick></p>
                                }
                            </div>
                        </div>
                        <br />
                        <div className="card-actions justify-end">
                            <label
                                onClick={() => setProductForModal(product)}
                                className="btn btn-primary"
                                htmlFor="booking-modal"
                            >Book Now</label>
                        </div>
                        <br />
                    </div>
                </div>
            }

        </div >
    );
};

export default CategoryProduct;