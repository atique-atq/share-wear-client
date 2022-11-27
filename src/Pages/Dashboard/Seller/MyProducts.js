import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

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

    return (
        <div>
            <h1>This is my product</h1>
            <p>Total Data is: {myProducts?.length}</p>
        </div>
    );
};

export default MyProducts;