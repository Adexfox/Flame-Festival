import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


type Props = {}

const PackageSection = (props: Props) => {
    useEffect(() => {
      AOS.init({duration: 3000});
    //   console.log('initiate');
    }
    
    )
  return (
    <>
        <section className="package-section-1">
            <div className='seventh-cut'>
                <img src="images/top-cut.png" alt="" />
            </div>
            <div className='flower-1'>
                <img src="images/flower-1.png" alt="" data-aos='slide-up' data-aos-delay="50"/>
            </div>
            <div className='flower-7'>
                <img src="images/flower-7.png" alt="" data-aos='slide-down' data-aos-delay="50"/>
            </div>
            <div className="package-section-1-text">
                <h3 data-aos='slide-down' data-aos-delay="50">The <span><span>P</span>ackages</span></h3>
                <h1 data-aos='slide-down' data-aos-delay="50">JOIN US</h1>
                <p data-aos='slide-down' data-aos-delay="50">Your Flame ticket encompasses all flights, culinary delights and accomodations.</p>
                <p data-aos='slide-down' data-aos-delay="50">General Admission is your key to the expirience, but VIP unlocks another level of possibilities. </p>
                <p data-aos='slide-down' data-aos-delay="50"> From backstage partires to custom expriences. VIP offers uncompromising access to the best of the best</p>
                <button className="package-btn" data-aos='slide-down' data-aos-delay="50">Get Tickets</button>
            </div>
            <div className='eighth-cut'>
                <img src="images/top-cut.png" alt="" />
            </div>
        </section>
        <section className="package-section-2">

        </section>
    </>
  ) 
}

export default PackageSection;