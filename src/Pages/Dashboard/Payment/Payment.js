import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    // const navigation = useNavigation();
    const { _id, productId, resalePrice, productName, location, phone, userEmail } = booking;
    // if(navigation.state === "loading"){
    //     return <Loading></Loading>
    // }

    console.log(stripePromise);
    return (
        <div className='m-20'>
            <h3 className="text-xl pb-2 text-center">Payment for <small className='text-2xl font-semibold'>{productName}</small></h3>
            <p className="text-xl text-center">Please pay <strong>{resalePrice} tk <small className='font-normal text-base'>(${resalePrice / 100})</small></strong> for your product </p>
            <div className='w-96 my-12 mx-auto border-solid border-2 text-center p-2'>
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