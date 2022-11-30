import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const ReportedItems = () => {
    const { user, loading } = useContext(AuthContext);
    useTitle('Reported Items')

    const { data: reportedItems, isLoading, refetch } = useQuery({
        queryKey: ['reportedItems'],
        queryFn: async () => {
            const res = await fetch('https://sharewear-server.vercel.app/products/reported');
            const data = await res.json();
            return data;
        }
    })

    if (isLoading || loading) {
        return <Loading></Loading>
    }

    const handleDeleteItem = (_id, productName) => {
        fetch(`https://sharewear-server.vercel.app/product/${_id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${productName} deleted successfully`)
                }
            })
    }
    refetch();

    return (
        <div>
            <div className="m-4 my-10">
                <h1 className="text-3xl font-bold text-center my-4 pb-8 underline decoration-slate-200 underline-offset-4 font-mono text-[#fc4a44]">Reported Items:</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item Name</th>
                                <th>Image</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reportedItems?.map((product, i) => <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>{product.productName}</td>
                                    <td><div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={product.image} alt="" />
                                        </div>
                                    </div></td>
                                    <td><button onClick={() => handleDeleteItem(product._id, product.productName)} className='btn btn-xs btn-primary'>Delete Item</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    );
};

export default ReportedItems;