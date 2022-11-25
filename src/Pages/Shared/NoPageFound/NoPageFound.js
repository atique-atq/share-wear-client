import React from 'react';
import useTitle from '../../../hooks/useTitle';
import './NoPageFound.css'

const NoPageFound = () => {
    useTitle('404');
    return (
        <div className='nopage-container'>
            <h1 className='text-white font-bold pb-20 mx-24 text-3xl'>No Page Found</h1>
        </div>
    );
};

export default NoPageFound;