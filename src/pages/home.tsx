import React from 'react';
import Hambuger from '../components/Hambuger';
import FullPageScroll from '../components/FullPageScroll';

const  Home = () => {
    return (
        <>
            <main>
                <section className='home'>
                    <FullPageScroll />  
                    <div>
                        <Hambuger/>
                    </div>
                </section>
            </main>
            
        </>
    );
};

export default Home;