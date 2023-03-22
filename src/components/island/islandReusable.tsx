import React from 'react'
import { IconContext } from 'react-icons/lib/esm/iconContext'
import { GiCommercialAirplane } from 'react-icons/gi';
import { GiBodyBalance } from 'react-icons/gi';
import { ImTicket } from 'react-icons/im';
type Props = {}
function IslandReusable({contents}) {
        return(
            <div>
            { contents.map((structure) => {
                return <IslandStructure key={contents.id} {...structure}></IslandStructure>
            })}
            </div>
        )
    
}
const IslandStructure = ({ id, header, img, intro, one, details, two }) => {
  return (
      <>
      <IconContext.Provider value={{  style: {marginRight:  '0.75rem'}, className: 'island-icon'}}>
        <div className='island-reusable'>
            <div className='ink-img'>
                <img src={img} alt="" />
            </div>
            <div className='text-content'>
                <h1>{header}</h1>
                <p>{intro}</p>
                <ul>
                    {/* GiBed */}
                    <li><GiCommercialAirplane /> Roud-trip flights between Miami & Flalme Cay</li>
                    <li><ImTicket /> {one}</li>
                    <li><GiBodyBalance size={30}className='island-icon bed'/>{two}</li>
                </ul>
                <h4>Includes</h4>
                <p>{details}</p>
                <a href="email:conciere@flameapp.com">Special Request? Email us</a>
            </div>
        </div>
        </IconContext.Provider>

    </>
  )
}

export default IslandReusable
// import { useState } from 'react';
// import { islandContent } from './islandText'
// const [contents, setContents] = useState(islandContent);