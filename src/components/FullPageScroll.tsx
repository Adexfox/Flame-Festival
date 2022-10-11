import React from 'react';
// import { images } from '../data/data';
import HomeSection from './homeSection';
import HuntSection from './huntSection';
import IslandSection from './islandSection';
import ProgramSection from './programSection';
import JourneySection from './journeySection';

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
                        <HomeSection />
                </section>

                {/* ISLAND */}

                <section className='island' id='island'>
                    <IslandSection />
                </section>

                {/* HUNT */}

                <section className='hunt' id='hunt'>
                    <HuntSection />
                </section>

                {/* THE PROGRAM */}

                <section className='program' id='program'>
                    <ProgramSection />
                </section>
                {/* JOURNEY */}

                <section className='journey' id='journey'>
                    <JourneySection />
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