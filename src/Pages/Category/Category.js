import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProduct from '../CategoryProducts/CategoryProduct';

const Category = () => {
    let products = useLoaderData();
    let titleName = 'All Products'
    if (products) {
        titleName = products[0].categoryName
    }

    return (
        <div className='mb-24'>
            <h3 className='font-bold text-3xl text-center my-12 mt-16
             font-sans underline decoration-slate-200 underline-offset-4 font-mono'>Explore {titleName}</h3>
            <div className='grid gap-10 grid-cols-1 align-middle content-center place-content-center justify-items-center'>
                {
                    products?.map(product => <CategoryProduct
                        key={product._id}
                        product={product}
                    ></CategoryProduct>)
                }
            </div>
        </div>
    );
};

export default Category;