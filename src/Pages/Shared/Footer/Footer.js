import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer2.png';

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right'
            }}
            className="p-10">
            <div className='footer'>
                <div>
                    <p to="/" className="ml-0 pl-0 btn btn-ghost normal-case font-mon text-2xl text-gray-500 italic
                 mr-1">share<span className='ml-1 text-[#ee4871] font-bold not-italic font-sans'> Wear</span></p>
                    <p className='font-semibold'>©2022. All rights reserved.</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Branding</Link>
                    <Link to="/" className="link link-hover">Design</Link>
                    <Link to="/" className="link link-hover">Marketing</Link>
                    <Link to="/" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/" className="link link-hover">About us</Link>
                    <Link to="/" className="link link-hover">Contact</Link>
                    <Link to="/" className="link link-hover">Jobs</Link>
                    <Link to="/" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;