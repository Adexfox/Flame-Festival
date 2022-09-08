import React from 'react';
// import { Menu } from '../interfaces/menuItemsInterface';
import { items } from './menuItems';
// const menu = document.querySelector('.menu');
// const hambuger = document.querySelector('.menu-burger');
// const nav = document.querySelector('.nav');
// const menuNav = document.querySelector('.menu-nav');
// const navItems = document.querySelectorAll('.menu-nav__item');
// 
// 
// let showMenu = false;
// 
// menu.addEventListener('click', toggleMenu);
// 
// function toggleMenu () {
//   
//   if (!showMenu) {
//     hambuger.classList.add('open');
//     nav.classList.add('open');
//     menuNav.classList.add('open');
//     navItems.forEach(item => item.classList.add('open'));
// 
//     showMenu = true;
//   }
//   else {
//     hambuger.classList.remove('open');
//      nav.classList.remove('open');
//     menuNav.classList.remove('open');
//     navItems.forEach(item => item.classList.remove('open'));
//     
//     showMenu = false;
//   }
// }
const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.menu-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
  nav.classList.toggle('open');
  // menuNav.classList.toggle('open'); 
})
document.querySelectorAll('.menu-nav__item').forEach(n => 
  n.addEventListener('click', () => {
    hamburger.classList.remove('open');
    menu.classList.remove('open');
    nav.classList.remove('open');
    // menuNav.classList.remove('open');
  }))


const Hambuger = () => {
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
                    <a href={url} key={id} className='menu-nav__link'>
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
