import React from 'react'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { GrMail } from 'react-icons/gr'
import Popup from '../universal/popup'
import Chatbox from '../universal/chatbox'
import { useState } from 'react'
// import { BiChat } from 'react-icons/bi'

type Props = {

}

const Footer = (props: Props) => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
      <IconContext.Provider  value={{  style: {marginRight:  '2rem'}, className: 'social'}}>
        <div className='footer-box'>
            
            <div className="logo">
                <img className='flare' src="images/flame.png" alt="" />
                <img className='zigi' src="images/zigzag.png" alt="" />

                <h3>FLAME</h3>
            </div>
            <div className="subscribe">
                <p onClick={ () => setButtonPopup(true)}>Subscribe to newsletter</p>
                <div>
                    <FaFacebookF />
                    <FaTwitter />
                    <RiInstagramFill />
                    <GrMail />
                </div>
                
            </div>
           
        </div>
        {/* <div className='chat sticky1'>
            <BiChat color='rgb(255, 255, 255, 0.9)' size='1.5rem' className='chat-bubble' onClick={ () => setChatPopup(true)}/>
        </div> */}
        <Popup trigger={buttonPopup} setTrigger = {setButtonPopup} />
        <Chatbox />
            
            
        
            
        
    </IconContext.Provider>
  )
}

export default Footer