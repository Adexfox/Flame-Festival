import React from 'react';
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';

type Props = {}

const SecondFooter = (props) => {
    const { firstName, secondName, firstLink, secondLink, thirdLink, fourthLink } = props;
  return (
    <>
        <IconContext.Provider value={{  className: 'socials'}} >
        <main>
            <div className="border-segment"></div>

            <div className="comp-footer">
                <div className="comp-navigation">
                         <div className="nav-2">
                            <a href="/">Home</a>
                            <a href={firstLink}>Journey</a>
                            <a href={secondLink}>{firstName}</a>
                        </div>
                        <div className="nav-1">
                            <a href={thirdLink}>{secondName}</a>
                            <a href="/">Tickets</a>
                            <a href={fourthLink}>Experience</a>
                        </div>
                       
                </div>
                
                <div className="comp-social">
                    <FaFacebookF />
                    <FaTwitter />
                    <RiInstagramFill />
                    <GrMail />
                </div>
                <div className="customer-service">
                    <h3>Customer Service: 
                        <a href="tel: 401-753-FLAME (3973)"> 401-753-FLAME (3973)</a>
                        
                    </h3>
                    <p>The images and renderings of the site are<br /> conceptual - the actual site layout may vary.<br /> We will continually be updating our site with <br /> up-to-date imagery.</p>
                </div>
            </div>
        </main>
        </IconContext.Provider>
    
    </>
  )
}

export default SecondFooter;