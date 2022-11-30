import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
    const { data: myProducts, isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading || loading) {
        return <Loading></Loading>
    }

    const handleDeleteProduct = (_id) => {
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`deleted successfully`)
                }
            })
    }

    const handleAdvertise = (_id) => {
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('advertisement successful.')
                    refetch();
                }
            })
    }

    return (
        <div className="m-4">
            <h1 className="text-2xl font-bold text-center my-4 pb-8 underline decoration-slate-200 underline-offset-4 font-mono text-[#F6740A]">My product list:</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Picture</th>
                            <th>Resell Price</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.productName}</td>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={product.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{product.resalePrice}</td>
                                <td className='text-xl font-bold'>{product.status}</td>
                                <td><button onClick={() => handleDeleteProduct(product._id)} className='btn btn-xs btn-primary'>Delete</button></td>

                                <td>{product?.status === 'available' && <button onClick={() => handleAdvertise(product._id)} className='btn btn-xs btn-info' disabled={product.advertisement === 'yes'} >Advertise</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyProducts;