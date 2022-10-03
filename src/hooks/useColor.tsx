import { useState, useEffect } from 'react';

const useColor  = (scrollPosition) => {
  const [elementColor, setElementColor] = useState('white');
  const [position, setPosition] = useState(scrollPosition);
const listenScrollEvent = () => {
    window.scrollY > position
      ? setElementColor('#017294')
      : setElementColor('white')
  }
useEffect(() => {
  if(elementColor) {
    window.addEventListener("scroll", listenScrollEvent)
  console.log("color");
  
  }
  return () => {
    if(elementColor) {
      window.removeEventListener("scroll", listenScrollEvent)
      console.log('remove color');
      
    }
    }
  })
  
  return {elementColor, position}
};

export default useColor;