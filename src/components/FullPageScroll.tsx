import React from 'react';
import Navigation from './Navigation'

const FullPageScroll = () => {
    return (
    <main id='home'>
        <Navigation />
        <section className='home'>
            <h1>Home</h1>
        </section>
        <section className='island' id='island'>
            <h1>Island</h1>
        </section>
        <section className='program' id='program'>
            <h1>Program</h1>
        </section>
        <section className='hunt' id='hunt'>
            <h1>Hunt</h1>
        </section>
        <section className='journey' id='journey'>
            <h1>Journey</h1>
        </section>
        <section className='packages' id='packages'>
            <h1>Package</h1>
        </section>
        <section className='experience' id='experience'>
            <h1>Experience</h1>
        </section>
    </main>
    );
};

export default FullPageScroll;