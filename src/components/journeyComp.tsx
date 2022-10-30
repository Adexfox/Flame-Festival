import React, { useEffect } from 'react';
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {}

const JourneyComp = (props: Props) => {

  useEffect(() => {
      AOS.init({duration: 3000});
    }, [])
 return(
     <IconContext.Provider value={{  style: {marginRight:  '2rem'}, className: 'social'}}>
        <main className='journey-page'>
          <div className='header'>
            <h1 data-aos='fade-in' data-aos-delay="50">G<span className='one'>e</span>ttin<span className='two'>g</span> H<span className='three'>ere</span></h1>
          </div>
          <div className='journey-plane'>
              <img src="images/Journey_Plane.png" alt="Airplane" data-aos='slide-left' data-aos-delay="200"/>
          </div>
          <div className='journey-body'>
            <p>
              <span data-aos='fade-in' data-aos-delay="500">All pages include complimentary flights to and from the Miami. Flights will depart to the Miami from Bahamas on Thursday and Friday, and return to Miami from the <br />Bahamas on Sunday and Monday. You may choose any combination of flights. For example you could leave for the Bahamas Friday morning and return to Miami on Monday <br /></span><span  data-aos='fade-in' data-aos-delay="1500">morning, or leave Friday evening and return Sunday evening. We will do our best to accommodate your preferences. Flight departure times will be schedule on first <br />come first served basis after you have completed your preference form. Your traveler preference form will be sent to you within a few days after you purchase <br /></span><span data-aos='fade-in' data-aos-delay="2500">your ticket. If You have already purchased a ticket package, please make sure everyone in your travel party fills out a traveler profile form. This will expedite your flight <br />assignment. For more information on travel, please visit our FAQ.</span> <br /><br />
              <span className='hashtag' data-aos='fade-in' data-aos-delay="2800">#FyreFestival</span>
            </p>
          </div>
          <div className="journey-map" data-aos='fade-in' data-aos-delay="3000">
            <img src="images/map.jpg" alt="" />
          </div>
         
          <footer>
            <div className='journey-social'>
              <FaFacebookF />
              <FaTwitter />
              <RiInstagramFill />
              <GrMail />
            </div>
            <div className='zigzag'>
              <img src="images/zigzag.png" alt="" />
            </div>
            <div className='nav-cta'>
                <a href="/">Home</a>
                <a href="/contact">Contact</a>
                <a href="/faq">FAQ</a>
                
            </div>
          </footer>
        </main>
        
     </IconContext.Provider>
  ) 

}

export default JourneyComp;