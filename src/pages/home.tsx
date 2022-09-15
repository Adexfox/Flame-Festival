import React from 'react';
        
        /************************
         * HOME PAGE SETUP *
         ************************/
import FullPageScroll from '../components/FullPageScroll';
import Hamburger from '../components/Hamburger';
import Navigation from '../components/Navigation';

const  Home = () => {
    return (
        <>
                    <FullPageScroll />  
                    <Navigation />
                    <Hamburger />  
        </>
    );
};

export default Home;