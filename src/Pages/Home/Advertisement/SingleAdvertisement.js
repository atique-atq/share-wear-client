import React from 'react';

const SingleAdvertisement = ({ singleAdvertisement, valueForBgSelection }) => {
    const { productName, image, originalPrice, resalePrice, status, setShowHeader } = singleAdvertisement;
    console.log('checking value', parseInt(valueForBgSelection) % 2 === 0);
    let bgColor = parseInt(valueForBgSelection) % 2 === 0 ? '#E6C7D6' : '#EBC69B';

    return (
        <div>
            {
                <div style={{
                    backgroundColor: bgColor,
                }}>
                    <div className="card shadow-xl card-text place-content-center rounded-none w-full" >
                        <figure><img src={image} className='h-60 w-56' alt="service" /></figure>
                        <div className="card-body hover:bg-[#FFF3E8] hover:cursor-pointer font-mono text-2xl text-center">
                            <h2 className="card-title font-semibold">{productName}</h2>
                            <div className='flex md:flex-row flex-col justify-between text-sm'>
                                <p className='text-blue-700 border rounded-full bg-white font-semibold text-sm'>Resell Price: {resalePrice}</p>
                                <p className='border rounded-full ml-2 text-sm'>Original Price: {originalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default SingleAdvertisement;