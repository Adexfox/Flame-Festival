import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FooterComp from '../universal/footerComp';

type Props = {}

const JourneyComp = (props: Props) => {
   const faqLink = '/journey/faq'
    const contactLink = '/journey/contact'
    const additiionalStyle ={
      padding: '0 12% 0'
    }

  useEffect(() => {
      AOS.init({duration: 3000});
      AOS.init({
        disable: function() {
          let maxWidth = 992;
          return window.innerWidth < maxWidth;
        }
      });
    }, [])
 return(
        <main className='journey-page'>
          <div className='header'>
            <h1 data-aos='fade-in' data-aos-delay="50">G<span className='one'>e</span>ttin<span className='two'>g</span> H<span className='three'>ere</span></h1>
          </div>
          <div className='journey-plane'>
              <img src="/images/Journey_Plane.png" alt="Airplane" data-aos='slide-left' data-aos-delay="200"/>
          </div>
          <div className='journey-body'>
            <p>
              <span data-aos='fade-in' data-aos-delay="500">All pages include complimentary flights to and from the Miami. Flights will depart to the Miami from Bahamas on Thursday and Friday, and return to Miami from the Bahamas on Sunday and Monday. You may choose any combination of flights.</span><span  data-aos='fade-in' data-aos-delay="1500"> For example you could leave for the Bahamas Friday morning and return to Miami on Monday morning, or leave Friday evening and return Sunday evening. We will do our best to accommodate your preferences. </span><span data-aos='fade-in' data-aos-delay="2500">Flight departure times will be schedule on first come first served basis after you have completed your preference form. Your traveler preference form will be sent to you within a few days after you purchaseyour ticket.  </span><span data-aos='fade-in' data-aos-delay="2800">If You have already purchased a ticket package, please make sure everyone in your travel party fills out a traveler profile form. This will expedite your flight assignment. For more information on travel, please visit our FAQ.</span> <br /><br />
              <span className='hashtag' data-aos='fade-in' data-aos-delay="2900">#Flame🔥Festival</span>
            </p>
          </div>
          <div className="journey-map" data-aos='fade-in' data-aos-delay="3000">
            <img src="/images/map.jpg" alt="" />
          </div>
         
          <footer className='journey-footer'>
            <FooterComp 
            firstLink={contactLink}
            secondLink={faqLink}
            style={additiionalStyle}
            />
          </footer>
        </main>
        
  ) 

}

export default JourneyComp;