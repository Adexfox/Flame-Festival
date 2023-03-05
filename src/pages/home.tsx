import React from 'react';

/************************
 * HOME PAGE SETUP *
 ************************/
import FullPageScroll from '../components/home/FullPageScroll';
import Hamburger from '../components/menu/Hamburger';
import Navigation from '../components/home/Navigation';

const  Home = () => {
    return (
        <>
                    <Navigation />
                    <Hamburger />  
                    <FullPageScroll /> 
        </>
    );
};

export default Home;