import { useState, useEffect } from 'react';

const useColor  = (scrollPosition) => {
  const [elementColor, setElementColor] = useState('white');
  // const [position, setPosition] = useState(scrollPosition);
  const[section,  setSection] = useState(scrollPosition)
  const listenScrollEvent = () => {
    if((window.scrollY > 3750) || (window.scrollY < section) ){
      setElementColor('white')
    }
    else{
      setElementColor('#017294')
    }
    // window.scrollY > 3750
    //   ? setElementColor('white')
    //   : setElementColor('#017294')
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