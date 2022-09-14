import React, { useEffect, useState } from 'react';
import { items } from './menuItems';
import { Link } from 'react-router-dom';



            /******************
             * QUERY SELECTOR *
             ******************/

const menu = document.querySelector('.menu')as HTMLElement;
const hamburger = document.querySelector('.menu-burger')as HTMLElement;
const nav = document.querySelector('.nav')as HTMLElement;
const menuNav = document.querySelector('.menu-nav')as HTMLElement;
const navItems:NodeListOf<HTMLElement> = document.querySelectorAll('.menu-nav__item');



const Hamburger = () => {

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
  

  
  
  return (
    <>
      <div className="menu">
        <span className="menu-burger"></span>
      </div>
      <nav className='nav'>
        <ul className='menu-nav'>
            {items.map( (props) => {
              const {id, text, url} = props;
              return(

                <li className='menu-nav__item'>
                      {/* <a href={url} className='menu-nav__link'>{text}</a> */}
                      <Link to={url} className='menu-nav__link' key={id}>{text} </Link>
               
               </li>
               
                  )
                })}
        </ul>

      </nav>
    </>
  )
}

export default Hamburger;
