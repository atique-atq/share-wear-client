import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import notFoundImage from '../../../assets/images/404.webp'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Navbar></Navbar>
            < div className='bg-white mx-12 mt-12 flex justify-center items-center' >
                <div>
                    <p className='text-red-600 text-center text-3xl font-mono font-bold'>Page Not Found  <small className='italic text-sm text-gray-500'>{error.statusText || error.message}</small></p>
                    <img className='w-5/12 mx-auto' src={notFoundImage} alt="" />
                    <h4 className="text-2xl text-center mb-8"> Please <button className='btn btn-warning' onClick={handleLogOut}>Sign out</button> and login again</h4>
                </div>
            </div >
            <Footer></Footer>
        </div>

    );
};

export default DisplayError;