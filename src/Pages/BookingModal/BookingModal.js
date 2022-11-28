import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ productForModal, setProductForModal }) => {
    const { _id, productName, resalePrice, image } = productForModal;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const productId = _id;
        const phone = form.phone.value;
        const location = form.location.value;
        const userEmail = user?.email;

        const booking = {
            userEmail,
            productId,
            productName,
            resalePrice,
            image,
            phone,
            location,
            bookingTime: new Date()
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setProductForModal(null);
                    toast.success(`${productName} is booked!`);
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-1 mt-2'>
                        <input type="text" disabled value={user?.displayName} className="input w-full input-bordered rounded-none" />

                        <input type="email" disabled value={user?.email} className="input w-full input-bordered rounded-none" />

                        <div className='flex'>
                            <label className="label w-24 bg-base-200"> <span className="label-text text-sm font-semibold">Product:</span></label>
                            <input type="text bg-base-200" disabled value={productName} className="input w-full input-bordered rounded-none font-semibold" />
                        </div>

                        <div className='flex'>
                            <label className="label w-24 bg-base-200"> <span className="label-text text-sm font-semibold">Price:</span></label>
                            <input type="text" disabled value={resalePrice} className="input w-full input-bordered rounded-none font-semibold" />
                        </div>

                        <input name="phone" type="text" placeholder="Give Phone Number" className="input w-full input-bordered rounded-none" />

                        <input name="location" type="text" placeholder="Enter Meeting Location" className="input w-full input-bordered rounded-none" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;