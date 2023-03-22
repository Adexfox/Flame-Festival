import React from 'react'
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';

type Props = {}

const SocialComp = (props: Props) => {
  return (
    <>
        <IconContext.Provider value={{className:'general-social', style: {marginRight: '1rem', color: '#017294', marginLeft: '2rem'}}}>
            <div>
                <FaFacebookF />
                <FaTwitter />
                <RiInstagramFill />
                <GrMail />
              </div>
        </IconContext.Provider>
    </>
  )
}

export default SocialComp