import React, { useEffect, useState } from 'react';
import { items } from './menuItems';
import { Link } from 'react-router-dom';
import useColor from '../hooks/useColor';



            /******************
             * QUERY SELECTOR *
             ******************/

const menu = document.querySelector('.menu')as HTMLElement;
const hamburger = document.querySelector('.menu-burger')as HTMLElement;
const nav = document.querySelector('.nav')as HTMLElement;
const menuNav = document.querySelector('.menu-nav')as HTMLElement;
const navItems:NodeListOf<HTMLElement> = document.querySelectorAll('.menu-nav__item');
// const scrollPosition = 857;
const scrollSection = document.querySelector('.bg-text') as HTMLElement;


const Hamburger = () => {
  const {elementColor} = useColor(857);
  const {section} = useColor(scrollSection);

  const [showMenu, setShowMenu] = useState<Boolean>(false);


  const toggleMenu = () => {
    
    if(!showMenu) {
      hamburger.classList.add('open');
      nav.classList.add('open');
      menuNav.classList.add('open');
      navItems.forEach(item => item.classList.add('open'));
  
      setShowMenu(true);
    }
    else{
      hamburger.classList.remove('open');
      nav.classList.remove('open');
      menuNav.classList.remove('open');
      navItems.forEach(item => item.classList.remove('open'));
      
      setShowMenu(false);
    }
  }

  useEffect(() => {
    
    if(menu){
      
      menu.addEventListener('click', toggleMenu);
      // console.log('clicked');
    }

    /********************
       * CLEANUP FUNCTION *
       ********************/
    return () => {

      if(menu){
        menu.removeEventListener('click', toggleMenu);
        // console.log('cleanUp');
      }
    };
    
  })
  
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
      <div className="menu">
        <div className="menu-burger">
          <p className='menu-text' style={{color: elementColor, fontWeight: '600'}} >Menu</p>
          <div className='ticket'>
              <button className='ticket-btn' style={ticketStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Get Tickets</button>
          </div>
        </div>
        
        
      </div>
      <nav className='nav'>
        <ul className='menu-nav'>
            {items.map( (props) => {
              const {id, text, url} = props;
              return(

                <li className='menu-nav__item' key={id}>
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
