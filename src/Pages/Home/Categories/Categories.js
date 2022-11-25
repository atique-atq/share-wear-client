import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import HomeCategoryCard from './HomeCategoryCard';

const Categories = () => {
    const categoryCardBg = ['#F0FFFF', '#FFF1E1', '#FFD6DE'];

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
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Categories</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    categories?.map((category, index) => <HomeCategoryCard
                        key={category._id}
                        bgColorCode={categoryCardBg[index]}
                        category={category}
                    ></HomeCategoryCard>)
                }
            </div>
        </section>
    );
};

export default Categories;