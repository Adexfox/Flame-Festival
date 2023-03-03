import React, {  useState } from 'react';
import { items } from './menuItems';
import { Link } from 'react-router-dom';
import useColor from '../hooks/useColor';
          


  const Hamburger = () => {

  const {elementColor} = useColor(857);
  // const {section} = useColor(2663);
  
  // console.log('Wale');

  const [showMenu, setShowMenu] = useState<Boolean>(false);
  
  const toggleMenu = () => {
    
    !showMenu ? setShowMenu(true) : setShowMenu(false)
    
    }
 
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  }  
  const handleMouseLeave = () => {
    setIsHover(false);
  }  

  const ticketStyle= {
    color: isHover ? 'white' : elementColor,
    fontWeight: '600', 
    border: `2px solid ${elementColor}`
    
  }

  return (
    <>
      <div className={`menu ${showMenu ? "open" : ""}`} onClick={toggleMenu}>
        <div className={`menu-burger ${showMenu ? "open" : ""}`} style={{color: elementColor}}>
          <p className='menu-text' style={{color: elementColor, fontWeight: '600'}} >Menu</p>
          <div className='ticket'>
              <button className='ticket-btn' style={ticketStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Get Tickets</button>
          </div>
           
        </div>
        
        
      </div>
      <nav className={`nav ${showMenu ? "open" : ""}`}>
        <ul className={`menu-nav ${showMenu ? "open" : ""}`}>
            {items.map( (props) => {
              const {id, text, url} = props;
              return(
                  <li className={`menu-nav__item ${showMenu ? "open" : ""}`} key={id}>
                        {/* <a href={url} className='menu-nav__link'>{text}</a> */}
                        <Link to={url} className='menu-nav__link'>{text} </Link>
                
                  </li>
                  )
              })}

        </ul>
      </nav>
    </>
  )
}

export default Hamburger;
