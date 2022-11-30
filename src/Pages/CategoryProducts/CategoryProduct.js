import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { format } from 'date-fns';
import { TiTick } from "react-icons/ti";
import toast from 'react-hot-toast';

const CategoryProduct = ({ product, setProductForModal, isBuyer, refetch }) => {
    const { _id, categoryName, productName, location, resalePrice, originalPrice, yearsOfUse, condition, description, postingTime, sellerName, image, verification, status, reported } = product;
    const images = [image]
    const postingDate = format(Date.parse(postingTime), 'Pp');

    const handleReportItem = (_id, productName) => {
        fetch(`http://localhost:5000/report/${_id}`, {
            method: 'PUT',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`${productName} reported`);
                    refetch();
                }
            })
    }

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
                        {
                            !isBuyer && <div className="card-actions justify-end mt-2">
                                <label
                                    onClick={() => setProductForModal(product)}
                                    className="btn btn-primary"
                                    htmlFor="booking-modal"
                                >Book Now</label>
                            </div>
                        }
                        <br />
                        {
                            isBuyer && <div className='flex justify-between items-center mt-2'>
                                {
                                    reported ?
                                        <small className='btn btn-sm bg-white outline-none' disabled>Reported</small>
                                        :
                                        <button onClick={() => handleReportItem(_id, productName)} className="card-actions justify-end rounded-none border-0 italic text-gray-600 underline text-sm btn btn-outline">
                                            <small>Report item</small>
                                        </button>
                                }

                                <div className="card-actions">
                                    <label
                                        onClick={() => setProductForModal(_id)}
                                        className="btn btn-primary"
                                        htmlFor="booking-modal"
                                    >Book Now</label>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }

        </div >
    );
};

export default CategoryProduct;