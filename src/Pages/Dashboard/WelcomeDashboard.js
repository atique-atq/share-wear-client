import React from 'react';

const WelcomeDashboard = () => {
    return (
        <div className='bg-primary m-20 md:p-32 p-20 text-center'>
            <h1 className='text-center text-2xl font-bold  mb-10'>Welcome to Dashboard</h1>
            <p>Please select options from side menubar</p>
            <small className='text-xs italic'>options are in upper right side icon for mobile devices</small>

        </div>
    );
};

export default WelcomeDashboard;