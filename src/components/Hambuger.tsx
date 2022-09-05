import React, { useState } from 'react'
// import { Menu } from '../interfaces/menuItemsInterface'
// import { items } from './menuItems';

const menu = document.querySelector('.menu') as HTMLElement;
const buger = document.querySelector('.menu-burger') as HTMLElement;




const ToggleMenu: () => void = () => {

  const [showMenu, setShowMenu] = useState(false);
  if (!showMenu) {
    buger.classList.add('open');
    setShowMenu( true);
  }
  else {
    buger.classList.remove('open');
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
