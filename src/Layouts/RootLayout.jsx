import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default RootLayout;