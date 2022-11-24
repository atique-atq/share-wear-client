import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login1.jpg';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    useTitle('Login')
    const { login, googleSignIn, loading } = useContext(AuthContext);
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

            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
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
                    loading &&
                    <div role="status">
                        <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                        </svg>
                        <span>Loading...</span>
                    </div>
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
                                <input className="btn bg-[#fd6288] border-none hover:bg-orange-700 text-lg" type="submit" value="Log in" />
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