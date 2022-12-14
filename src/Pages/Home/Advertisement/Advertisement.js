import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import SingleAdvertisement from './SingleAdvertisement';

const Advertisement = () => {
    // const [showHeader, setShowHeader] = useState(false);
    const { data: advertisements = [], isLoading, refetch } = useQuery({
        queryKey: ['advertisements'],
        queryFn: async () => {
            const res = await fetch(`https://sharewear-server.vercel.app/advertisement/products`);
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
                    {
                        <div>
                            <p className='font-mono text-4xl text-center font-bold text-[#F6740A]'>Advertisements</p>
                            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 my-8'>
                                {
                                    advertisements?.map((singleAdvertisement, index) => <SingleAdvertisement
                                        key={singleAdvertisement._id}
                                        valueForBgSelection={index}
                                        singleAdvertisement={singleAdvertisement}
                                    // setShowHeader={setShowHeader}
                                    ></SingleAdvertisement>)
                                }
                            </div>
                        </div>
                    }
                </div>
            }
        </section>
    );
};

export default Advertisement;