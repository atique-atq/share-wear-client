import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Testimonial from '../Testimonial/Testimonial';
import Advertisement from '../Advertisement/Advertisement'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertisement ></Advertisement>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;