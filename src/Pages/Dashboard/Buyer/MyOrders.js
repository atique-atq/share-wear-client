import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    useTitle('My Orders');
    const { user, loading } = useContext(AuthContext);

    const url = `https://sharewear-server.vercel.app/bookings?email=${user?.email}`
    const { data: myorders, isLoading, refetch } = useQuery({
        queryKey: ['myorders'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    if (loading || isLoading) {
        return <Loading></Loading>
    }

    refetch();

    return (
        <div>
            <div className="m-4">
                <h1 className="text-2xl font-bold text-center my-4 pb-8 underline decoration-slate-200 underline-offset-4 font-mono text-[#F6740A]">My product list:</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Order Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th></th>
                                <th></th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                myorders?.map((order, i) => <tr key={order._id}>
                                    <th>{i + 1}</th>
                                    <td>{order.productName}</td>
                                    <td>{order.resalePrice}</td>
                                    <td><div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={order.image} alt="" />
                                        </div>
                                    </div></td>
                                    <td>
                                        {
                                            order.paid ?
                                                <button
                                                    className='btn btn-primary btn-sm'
                                                    disabled >Paid</button>
                                                :
                                                <Link
                                                    to={`/dashboard/payment/${order._id}`}><button
                                                        className='btn btn-primary btn-sm'
                                                    >Pay</button>
                                                </Link>
                                        }
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        </div>
    );
};

export default MyOrders;