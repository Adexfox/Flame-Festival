import React from 'react';
// import { images } from '../data/data';
import HomeSection from '../home/homeSection';
import HuntSection from '../home/huntSection';
import IslandSection from '../home/islandSection';
import ProgramSection from '../home/programSection';
import JourneySection from '../home/journeySection';
import PackageSection from '../home/packageSection';
import ExperienceSection from '../home/experienceSection';
import Footer from '../home/footer';

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
                    <PackageSection />
                </section>

                {/* EXPERIENCE */}

                <section className='experience' id='experience'>
                    <ExperienceSection />
                </section>
                <section className="footer">
                    <Footer />
                </section>
                
            {/* </main> */}
        </>
    );
};

export default FullPageScroll;