import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            category: '',
            condition: ''
        }
    });

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
    // console.log('category object is', categoryObject);

    const handleAddProduct = data => {
        console.log(data);

    }
    return (
        <div>
            <div className='w-10/12 p-7'>
                <h2 className="text-2xl text-[#FF652E] md:text-center text-left font-bold">Add a Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)} className="border shadow-lg py-2 px-6 mt-3 flex flex-col md:flex-row">
                    <div>
                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex input-bordered rounded-none'>
                                <label className="label"> <span className="label-text ">Product Name:</span></label>

                                <input type="text" {...register("name", {
                                    required: "Product Name is Required"
                                })}
                                    className="input input-bordered w-full max-w-xs rounded-none bg-white" />
                            </div>
                            {errors.name && <p className='text-red-500 text-xs'>{errors.name.message}</p>}
                        </div>

                        <div className='flex justify-center w-full max-w-xs items-center border p-2 border-indigo-400 mb-3'>
                            <div className="form-control w-11/12 max-w-xs mr-4 mt-1">
                                <label className="label"> <span className="label-text ">Resell Price</span></label>

                                <input type="text" {...register("resalePrice", {
                                    required: "Resell Price Required"
                                })} className="input input-bordered w-full max-w-xs rounded-none bg-white" />
                                {errors.resalePrice && <p className='text-red-600 text-xs'>{errors.resalePrice.message}</p>}
                            </div>

                            <div className="form-control w-11/12 max-w-xs ml-4">
                                <label className="label"> <span className="label-text ">Original Price</span></label>

                                <input type="text" {...register("originalPrice", {
                                    required: "Original Buying Price is Required"
                                })} className="input input-bordered w-full max-w-xs rounded-none bg-white" />
                                {errors.originalPrice && <p className='text-red-600 text-xs'>{errors.originalPrice.message}</p>}
                            </div>
                        </div>

                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex justify-center items-center  max-w-xs'>
                                <label className="label"> <span className="label-text "> Condition Type:</span></label>
                                <select
                                    {...register('condition', {
                                        required: "Condition Type is Required"
                                    })}
                                    className="input input-bordered w-full max-w-xs rounded-none bg-white text-sm" >
                                    <option disabled value=""> Select Condition </option>
                                    <option>excellent</option>
                                    <option>good</option>
                                    <option>fair</option>
                                </select>
                            </div>
                            {errors.condition && <p className='text-red-600 text-xs'>{errors.condition.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex justify-center items-center  max-w-xs'>
                                <label className="label"> <span className="label-text">Upload Photo:</span></label>
                                <input type="file" {...register("image", {
                                    required: "Photo is Required"
                                })} className="input input-bordered w-full max-w-xs p-1 rounded-none bg-white" />
                                {errors.image && <p className='text-red-500 text-xs'>{errors.image.message}</p>}
                            </div>
                        </div>

                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex input-bordered rounded-none'>
                                <label className="label"> <span className="label-text ">Location:</span></label>

                                <input type="text" {...register("location", {
                                    required: "Enter your location place"
                                })}
                                    className="input input-bordered w-full max-w-xs rounded-none bg-white" />
                            </div>
                            {errors.location && <p className='text-red-500 text-xs'>{errors.location.message}</p>}
                        </div>
                    </div>

                    <div className='ml-0 md:ml-12'>
                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex input-bordered rounded-none'>
                                <label className="label"> <span className="label-text ">Mobile Number:</span></label>

                                <input type="text" {...register("mobileNumber", {
                                    required: "Mobile Number is Required"
                                })}
                                    className="input input-bordered w-full max-w-xs rounded-none bg-white" />
                            </div>
                            {errors.mobileNumber && <p className='text-red-500 text-xs'>{errors.mobileNumber.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex justify-center items-center  max-w-xs'>
                                <label className="label"> <span className="label-text">Product Category:</span></label>
                                <select
                                    {...register('category', {
                                        required: "Category is Required"
                                    })}

                                    className="input input-bordered w-full max-w-xs rounded-none text-sm bg-white">
                                    <option disabled value="">
                                        select category
                                    </option>
                                    {

                                        Object.keys(categoryObject)?.map((category, index) => <option
                                            key={index}
                                            value={category}>
                                            {category}</option>)
                                    }
                                </select>
                            </div>
                            {errors.category && <p className='text-red-500 text-xs'>{errors.category.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex input-bordered rounded-none'>
                                <label className="label"> <span className="label-text ">Description:</span></label>

                                <input type="text" {...register("description", {
                                    required: false
                                })}
                                    className="input input-bordered w-full max-w-xs rounded-none bg-white" />
                            </div>
                        </div>

                        <div className="form-control w-full max-w-xs border p-2 border-indigo-400 mb-3">
                            <div className='flex input-bordered rounded-none'>
                                <label className="label"> <span className="label-text ">Using Duration:</span></label>

                                <input type="text" {...register("yearsOfUse", {
                                    required: "Using duration is Required"
                                })}
                                    className="input input-bordered w-full max-w-xs rounded-none bg-white" />
                            </div>
                            {errors.yearsOfUse && <p className='text-red-500 text-xs'>{errors.yearsOfUse.message}</p>}
                        </div>

                        <input className='btn btn-info md:w-80 w-64 rounded-none mt-1' value="Add Product" type="submit" />
                    </div>

                </form>
            </div >
        </div >
    );
};

export default AddProduct;