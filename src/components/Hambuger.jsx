import React from 'react';
// import { Menu } from '../interfaces/menuItemsInterface';
import { items } from './menuItems';
const menu = document.querySelector('.menua');
const hambuger = document.querySelector('.menua-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menua-nav');
const navBtn = document.querySelector('.navButtonItem');


let showMenu = false;

menu.addEventListener('click', toggleMenu);

function toggleMenu () {
  
  if (!showMenu) {
    hambuger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navBtn.classList.remove('open');

    showMenu = true;
  }
  else {
    hambuger.classList.remove('open');
     nav.classList.remove('open');
    menuNav.classList.remove('open');
    navBtn.classList.add('open');
    showMenu = false;
  }
}

const Hambuger = () => {
  return (
    <>
      <div className="menua">
        <span className="menua-burger"></span>
      </div>
      <nav className='nav'>
        <ul className='menua-nav'>
            {items.map( (props) => {
              const {id, text, url} = props;
              return(
                <li className='menua-nav__item'>
                    <a href={url} key={id} className='menua-nav__link'>
                      {text}
                    </a>
               </li>
                  )
                })}
        </ul>

      </nav>
    </>
  )
}

export default Hambuger;
