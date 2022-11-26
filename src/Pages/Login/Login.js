import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login1.jpg';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    useTitle('Login')
    const { signIn, googleSignIn, loading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log('logged in', user);

                // const currentUser = {
                //     email: user.email
                // }

                // // get jwt token
                // fetch('https://doctor-service-server-atique-atq.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         // local storage is the easiest but not the best place to store jwt token
                //         localStorage.setItem('doc-token', data.token);
                //         navigate(from, { replace: true });
                //         toast.success('Login Successful', {
                //             position: "top-right"
                //         });
                //     });
                saveUser(user.displayName, user.email);

            })
            .catch(error => {
                console.error(error);
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email, role: 'buyer' };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('0000', data.acknowledged)
                // setCreatedUserEmail(email);
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;

                // const currentUser = {
                //     email: user.email
                // }

                // get jwt token
                // fetch('https://doctor-service-server-atique-atq.vercel.app/jwt', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                //     .then(res => res.json())
                //     .then(data => {
                //         console.log(data);
                //         localStorage.setItem('doc-token', data.token);
                //         navigate(from, { replace: true });
                //         toast.success('Login Successful', {
                //             position: "top-right"
                //         });
                //     });              
                console.log('logged in', user);
            })
            .catch(er => {
                console.log('error:', er);
                toast.error('wrong credential');
                form.reset();
            })

    }

    return (
        <div className='my-8'>
            <>
                {
                    loading && <Loading></Loading>
                }
            </>
            <div className="hero w-full my-5  rounded-lg">
                <div className="hero-content flex-col lg:flex-row items-center justify-center justify-items-center">
                    <div className="text-center lg:text-left pl-10 sm:ml-8">
                        <img className='w-5/6 rounded-lg shadow-2xl m-0' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-6">
                        <h3 className="text-4xl text-center font-bold py-0 my-0">Login</h3>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                {/* <input className="btn bg-[#fd6288] border-none hover:bg-orange-700 text-lg" type="submit" value="Log in" /> */}
                                <input className="btn btn-info border-none hover:bg-success text-lg" type="submit" value="Log in" />
                            </div>
                        </form>
                        <p className='text-center mb-4'>Don't Have an Account? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>

                        <div className="divider my-0">OR</div>
                        <button className="btn btn-outline btn-success border-0 rounded-none w-full my-0 py-0" onClick={handleGoogleSignIn}>
                            <span className='px-3 text-orange-600'> <FaGoogle></FaGoogle></span>
                            <span className='text-black'> Login with Google</span></button>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Login;