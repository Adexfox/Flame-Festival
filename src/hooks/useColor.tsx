import { useState, useEffect } from 'react';

const useColor  = (scrollPosition) => {
  const [elementColor, setElementColor] = useState('white');
  // const [position, setPosition] = useState(scrollPosition);
  const[section,  setSection] = useState(scrollPosition)
const listenScrollEvent = () => {
    window.scrollY > section - 20
      ? setElementColor('#017294')
      : setElementColor('white')
  }
useEffect(() => {
  if(elementColor) {
    window.addEventListener("scroll", listenScrollEvent)
  // console.log("color");
  
  }
  return () => {
    if(elementColor) {
      window.removeEventListener("scroll", listenScrollEvent)
      // console.log('remove color');
      
    }
    }
  })
  
  return {elementColor, section}
};

export default useColor;