import React from 'react';
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';
import { Link } from 'react-router-dom';

type Props = {}

const FooterComp = (props) => {
  const { firstLink, secondLink, style } = props;
  return ( 
    <>
        <IconContext.Provider value={{ className: 'footer-social-button'}}>
            <main className='footer-component' style={style}>
                
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
                    <Link to="/">Home</Link>
                    <Link to={ firstLink }>Contact</Link>
                    <Link to={ secondLink }>FAQ</Link>
                </div>

            </main>
        
     </IconContext.Provider>
    </>
        
  )
}

export default FooterComp;