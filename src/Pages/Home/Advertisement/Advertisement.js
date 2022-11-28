import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import SingleAdvertisement from './SingleAdvertisement';

const Advertisement = () => {
    const { data: advertisements = [], isLoading, refetch } = useQuery({
        queryKey: ['advertisements'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertisement/products`);
            const data = await res.json();
            return data;           
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }
    refetch();

    return (
        <section className='mt-28'>
            {
                (advertisements?.length > 0) &&
                <div>
                    <p className='font-mono text-4xl text-center font-bold text-[#F6740A]'>Advertisements</p>
                    <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 my-8'>
                        {
                            advertisements?.map((singleAdvertisement, index) => <SingleAdvertisement
                                key={singleAdvertisement._id}
                                valueForBgSelection={index}
                                singleAdvertisement={singleAdvertisement}
                            ></SingleAdvertisement>)
                        }
                    </div>
                </div>
            }
        </section>
    );
};

export default Advertisement;