import React, { useState } from 'react'
// import { Menu } from '../interfaces/menuItemsInterface'
// import { items } from './menuItems';

const menu = document.querySelector('.menu');
const hambuger = document.querySelector('.menu-burger');




const ToggleMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  if (!showMenu) {
    hambuger.classList.add('open');
    setShowMenu( true);
  } else {
    hambuger.classList.remove('open');
    setShowMenu(false);
  }
}
menu.addEventListener('click', ToggleMenu);

const Hambuger = () => {
  return (
    <>
      <div className="menu">
        <span className="menu-burger"></span>
      </div>
    </>
  )
}

export default Hambuger;
