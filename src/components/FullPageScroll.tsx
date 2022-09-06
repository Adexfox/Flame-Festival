import React from 'react';
import Navigation from './Navigation';


/*****************
 * PAGE SECTIONS *
 *****************/

const FullPageScroll = () => {
    return (
        <>
            <main id='home'>

                    

                    <Navigation />
                    
                
                {/* HOME */}

                <section className='home' id='home'>
                    <h1>Home</h1>
                </section>

                {/* ISLAND */}

                <section className='island' id='island'>
                    <h1>Island</h1>
                </section>

                {/* PROGRAM */}

                <section className='program' id='program'>
                    <h1>Program</h1>
                </section>

                {/* THE HUNT */}

                <section className='hunt' id='hunt'>
                    <h1>Hunt</h1>
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
            </main>
        </>
    );
};

export default FullPageScroll;