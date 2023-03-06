import React, { useEffect } from 'react';
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';

type Props = {}

const FooterComp = (props) => {
  const { firstLink, secondLink } = props;
  return ( 
    <>
        <IconContext.Provider value={{  style: {marginRight:  '2rem'}, className: 'footer-social'}}>
            <main className='footer-component'>
                
                <div className='footer-social'>
                <FaFacebookF />
                <FaTwitter />
                <RiInstagramFill />
                <GrMail />
                </div>
                
                <div className='zigzag'>
                    <img src="/images/zigzag.png" alt="" />
                </div>

                <div className='nav-cta'>
                    <a href="/">Home</a>
                    <a href={ firstLink }>Contact</a>
                    <a href={ secondLink }>FAQ</a>
                </div>

            </main>
        
     </IconContext.Provider>
    </>
        
  )
}

export default FooterComp;