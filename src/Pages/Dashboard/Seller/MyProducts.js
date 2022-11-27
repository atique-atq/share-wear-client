import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
    const { data: myProducts, isLoading } = useQuery({
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

    const handleMakeAdmin = () => {

    }

    return (
        <div className="m-4">
            <h1 className="text-xl font-bold text-center m-3 font-mono">My product list:</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Picture</th>
                            <th>Category</th>
                            <th>Resell Price</th>
                            <th>Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProducts.map((product, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{product.productName}</td>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={product.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{product.category}</td>
                                <td>{product.resalePrice}</td>
                                <td>{product.status}</td>
                                <td><button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Delete</button></td>

                                <td>{product?.status === 'available' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-info'>Advertise</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;