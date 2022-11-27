import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    // make category object for getting category id from db
    // this will be needed for inserting product
    const categoryObject = {}

    const getCategoryObject = () => {
        categories?.forEach(category => {
            categoryObject[category.name] = category._id;
        })
    }

    getCategoryObject();
    console.log('category object is', categoryObject);

    const handleAddProduct = data => {

    }
    return (
        <div>
            <div className='w-96 p-7'>
                <h2 className="text-2xl text-[#FF652E]  font-bold">Add A Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)} className="border shadow-lg py-2 px-6 mt-3">
                    <div>
                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-2">
                            <div className='flex input-bordered rounded-none'>
                                <label className="label"> <span className="label-text ">Product Name:</span></label>

                                <input type="text" {...register("name", {
                                    required: "Product Name is Required"
                                })}
                                    className="input input-bordered w-full max-w-xs rounded-none" />
                            </div>
                            {errors.name && <p className='text-red-500 text-xs'>{errors.name.message}</p>}
                        </div>

                        <div className='flex justify-center items-center border p-2 border-indigo-400 mb-2'>
                            <div className="form-control w-full max-w-xs mr-4">
                                <label className="label"> <span className="label-text ">Resell Price</span></label>

                                <input type="text" {...register("resalePrice", {
                                    required: "Resell Price Required"
                                })} className="input input-bordered w-full max-w-xs rounded-none" />
                                {errors.resalePrice && <p className='text-red-600 text-xs'>{errors.resalePrice.message}</p>}
                            </div>

                            <div className="form-control w-full max-w-xs ml-4">
                                <label className="label"> <span className="label-text ">Original Price</span></label>

                                <input type="text" {...register("originalPrice", {
                                    required: "Original Buying Price is Required"
                                })} className="input input-bordered w-full max-w-xs rounded-none" />
                                {errors.originalPrice && <p className='text-red-600 text-xs'>{errors.originalPrice.message}</p>}
                            </div>
                        </div>

                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-2">
                            <div className='flex justify-center items-center  max-w-xs'>
                                <label className="label"> <span className="label-text "> Condition Type:</span></label>
                                <select
                                    {...register('condition', {
                                        required: "Condition Type is Required"
                                    })}
                                    className="input input-bordered w-full max-w-xs rounded-none" defaultValue={'fair'}>
                                    <option>excellent</option>
                                    <option>good</option>
                                    <option>fair</option>
                                </select>
                            </div>
                            {errors.condition && <p className='text-red-600 text-xs'>{errors.condition.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-2">
                            <div className='flex justify-center items-center  max-w-xs'>
                                <label className="label"> <span className="label-text">Upload Photo:</span></label>
                                <input type="file" {...register("image", {
                                    required: "Photo is Required"
                                })} className="input input-bordered w-full max-w-xs p-1 rounded-none" />
                                {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                            </div>
                        </div>

                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-2">
                            <div className='flex input-bordered rounded-none'>
                                <label className="label"> <span className="label-text ">Location:</span></label>

                                <input type="text" {...register("location", {
                                    required: "Enter your location place"
                                })}
                                    className="input input-bordered w-full max-w-xs rounded-none" />
                            </div>
                            {errors.location && <p className='text-red-500 text-xs'>{errors.location.message}</p>}
                        </div>
                    </div>

                    <div>
                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-2">
                            <div className='flex input-bordered rounded-none'>
                                <label className="label"> <span className="label-text ">Mobile Number:</span></label>

                                <input type="text" {...register("mobileNumber", {
                                    required: "Mobile Number is Required"
                                })}
                                    className="input input-bordered w-full max-w-xs rounded-none" />
                            </div>
                            {errors.mobileNumber && <p className='text-red-500 text-xs'>{errors.mobileNumber.message}</p>}
                        </div>
                        <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
                    </div>

                </form>
            </div >
        </div >
    );
};

export default AddProduct;