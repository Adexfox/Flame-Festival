import React, {  useState } from 'react';
import { items } from './menuItems';
import { Link } from 'react-router-dom';
import useColor from '../../hooks/useColor';
import LogoComp from '../universal/logoComp';
import SocialComp from '../universal/socialComp';
import Popup from '../universal/popup'


  const Hamburger = () => {

  const {elementColor} = useColor(857);
  // const {section} = useColor(2663);
  
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
  const logoProps = {
    color: '#017294',
    top: '0',
    filter:'invert(80%) sepia(67%) saturate(3302%) hue-rotate(176deg) brightness(97%) contrast(101%)'
  }
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className={`menu ${showMenu ? "open" : ""}`} onClick={toggleMenu}>
        <div className={`menu-burger ${showMenu ? "open" : ""}`} style={{color: elementColor}}>
          <p className='menu-text' style={{color: elementColor, fontWeight: '600'}} >Menu</p>
           
        </div>
        
      </div>
      <div className='ticket'>
        <Link to="/packages">
          <button className='ticket-btn' style={ticketStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Get Tickets</button>
        </Link>
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
              <div className='menu-nav-media'>
                <div className='menu-nav-logo'>
                  <LogoComp filter={logoProps.filter} color={logoProps.color} top={logoProps.top}/>
                </div>

                <p onClick={ () => setButtonPopup(true)} className='menu-nav-newsletter'>Subscribe to newsletter</p>
                <SocialComp />  
              </div>
              
        </ul>
      </nav>
      <Popup trigger={buttonPopup} setTrigger = {setButtonPopup} />
    </>
  )
}

export default Hamburger;
