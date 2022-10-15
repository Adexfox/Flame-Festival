import React from 'react'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { GrMail } from 'react-icons/gr'

type Props = {

}

const Footer = (props: Props) => {
    return (
      <IconContext.Provider value={{ color: '#017294', style: {marginRight:  '2rem'}, className: 'social'}}>
        <div className='footer-box'>
            
            <div className="logo">
                <img src="images/logo.png" alt="" />
                <h3>FLAME</h3>
            </div>
            <div className="subscribe">
                <p>Subscribe to newsletter</p>
                <div>
                    <FaFacebookF />
                    <FaTwitter />
                    <RiInstagramFill />
                    <GrMail />
                </div>
                
            </div>
        </div>
    </IconContext.Provider>
  )
}

export default Footer