import React from 'react';
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';

type Props = {}

const JourneyComp = (props: Props) => {
 return(
     <IconContext.Provider value={{ color: '#000', style: {marginRight:  '2rem'}, className: 'social'}}>
        <main className='journey-page'>
          <div className='header'>
            <h1>Getting Here</h1>
          </div>
          <div className='journey-plane'>
              <img src="images/Journey_Plane.png" alt="" />
          </div>
          <div className='journey-body'>
            <p>
              All pages include complimentary flights to and from the Miami. Flights will depart to the Miami from Bahamas on Thursday and Friday, and return to Miami from the <br />Bahamas on Sunday and Monday. You may choose any combination of flights. For example you could leave for the Bahamas Friday morning and return to Miami on Monday <br />morning, or leave Friday evening and return Sunday evening. We will do our best to accommodate your preferences. Flight departure times will be schedule on first <br />come first served basis after you have completed your preference form. Your traveler preference form will be sent to you within a few days after you purchase <br />your ticket. If You have already purchased a ticket package, please make sure everyone in your travel party fills out a traveler profile form. This will expedite your flight <br />assignment. For more information on travel, please visit our FAQ. <br /><br />
              <span className='hashtag'>#FyreFestival</span>
            </p>
          </div>
          <div className="journey-map">
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