import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/registerImage.jpg';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../Shared/Loading/Loading';

const SignUp = () => {
    useTitle('SignUp')
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmPassword.value;
        console.log('name: ', name);

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            toast.error('Password should be 6 characters or more.');
            return;
        }

        if (password !== confirm) {
            toast.error('Your Password did not match');
            setError('Your Password did not match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                navigate(from, { replace: true });
                toast.success('Registration Successful', {
                    position: "top-right"
                });
                form.reset();

            })
            .catch(e => {
                toast.error(e.message);
                setError(e.message);
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <>
                {
                    loading && <Loading></Loading>
                }
            </>
            <div className="hero w-full my-5 rounded-lg">
                <div className="hero-content flex-col lg:flex-row justify-center">
                    <div className="text-center lg:text-left">
                        <img className='w-full m-0  rounded-md' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
                        <h6 className="text-3xl text-center font-bold py-0 my-0 text-green-700">Register/ Sign UP</h6>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name='email' placeholder="your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name='photoUrl' placeholder="your photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name='confirmPassword' placeholder="Confirm password" className="input input-bordered" required />
                            </div>
                            <div className="form-control py-0 my-0">
                                <input className="btn btn-info hover:bg-success" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-red-500 font-bold text-center">
                            {error}
                        </p>
                        <p className='text-center mb-2 mt-0'>Already Have an Account? <Link className='text-green-500 font-bold' to="/login">Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;