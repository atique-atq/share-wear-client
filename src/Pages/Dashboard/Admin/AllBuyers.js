import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
    useTitle('All Buyers');
    const { user, loading } = useContext(AuthContext);
    const { data: allBuyers, isLoading, refetch } = useQuery({
        queryKey: ['allBuyers'],
        queryFn: async () => {
            const res = await fetch('https://sharewear-server.vercel.app/users/buyers');
            const data = await res.json();
            return data;
        }
    })

    if (loading || isLoading) {
        return <Loading></Loading>
    }

    const handleDeleteBuyer = (_id, buyerName) => {
        fetch(`https://sharewear-server.vercel.app/seller/${_id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${buyerName} deleted successfully`);
                }
            })
    }

    return (
        <div>
            <div className="m-4">
                <h1 className="text-2xl font-bold text-center my-4 pb-8 underline decoration-slate-200 underline-offset-4 font-mono text-[#F6740A]">My product list:</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Buyer Name</th>
                                <th>Buyer Email</th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBuyers?.map((buyer, i) => <tr key={buyer._id}>
                                    <th>{i + 1}</th>
                                    <td>{buyer.name}</td>
                                    <td>{buyer.email}</td>
                                    <td><button onClick={() => handleDeleteBuyer(buyer._id, buyer.name)} className='btn btn-xs btn-primary'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    );
};

export default AllBuyers;