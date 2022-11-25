import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import HomeCategoryCard from './HomeCategoryCard';

const Categories = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/categories`);
            const data = await res.json();
            return data
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='mt-28'>
            <p className='font-mono text-4xl text-center font-bold'>Product Categories</p>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 my-8'>
                {
                    categories?.map((category) => <HomeCategoryCard
                        key={category._id}
                        category={category}
                    ></HomeCategoryCard>)
                }
            </div>
        </section>
    );
};

export default Categories;