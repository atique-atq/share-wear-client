import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import useSeller from '../../../hooks/useSeller';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
    const { user, loading } = useContext(AuthContext);
    const [verfiedClick, setVerfiedClick] = useState(false);
    const [isSeller, isSellerLoading] = useSeller(user?.email, verfiedClick);
    useTitle('All Sellers')

    const { data: allSellers, isLoading, refetch } = useQuery({
        queryKey: ['allSellers'],
        queryFn: async () => {
            const res = await fetch('https://sharewear-server.vercel.app/users/sellers');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading || loading || isSellerLoading) {
        return <Loading></Loading>
    }

    const handleDeleteSeller = (_id, sellerName) => {
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
                    toast.success(`${sellerName} deleted successfully`);
                }
            })
    }

    const handleVerifySeller = (_id, sellerName, sellerEmail) => {
        fetch(`https://sharewear-server.vercel.app/seller/verify?id=${_id}&email=${sellerEmail}`, {
            method: 'PUT',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setVerfiedClick(true);
                    toast.success(`${sellerName} verified successfully!!`)
                    refetch();
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
                                <th>Seller Name</th>
                                <th>Seller Email</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allSellers?.map((seller, i) => <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td><button onClick={() => handleDeleteSeller(seller._id,)} className='btn btn-xs btn-primary'>Delete</button></td>

                                    <td><button onClick={() => handleVerifySeller(seller._id, seller.name, seller.email)} className='btn btn-xs btn-info' disabled={seller.verification === 'verified'} >Verify</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    );
};

export default AllSellers;