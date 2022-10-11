import React from 'react';
// import { images } from '../data/data';
import Home from './homeSection';
import Hunt from './huntSection';
import Island from './islandSection';
import Program from './programSection';

            /*****************
             * PAGE SECTIONS *
             *****************/

const FullPageScroll = () => {
    return (
        <>
            {/* <main id='home'> */}
            
                {/* HOME */}

                <section className='home' id='home'>
                    {/* <img src={images[8].url} alt="" /> */}
                        <Home />
                </section>

                {/* ISLAND */}

                <section className='island' id='island'>
                    <Island />
                </section>

                {/* HUNT */}

                <section className='hunt' id='hunt'>
                    <Hunt />
                </section>

                {/* THE PROGRAM */}

                <section className='program' id='program'>
                    <Program />
                </section>

                {/* JOURNEY */}

                <section className='journey' id='journey'>
                    <h1>Journey</h1>
                </section>

                {/* PACKAGE */}

                <section className='packages' id='packages'>
                    <h1>Package</h1>
                </section>

                {/* EXPERIENCE */}

                <section className='experience' id='experience'>
                    <h1>Experience</h1>
                </section>
            {/* </main> */}
        </>
    );
};

export default FullPageScroll;