import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { _id, productId, resalePrice, productName, location, phone, userEmail } = booking;

    console.log(stripePromise);
    return (
        <div className='m-20'>
            <h3 className="text-xl pb-2 text-center">Payment for <small className='text-2xl font-semibold'>{productName}</small></h3>
            <p className="text-xl text-center">Please pay <strong>{resalePrice} tk <small className='font-normal text-base'></small></strong> for your product </p>
            {/* border-solid border-2 */}
            <div className='w-7/12 my-12 mx-auto  text-center p-5 shadow-xl'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;