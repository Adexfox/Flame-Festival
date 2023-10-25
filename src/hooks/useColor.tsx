import { useState, useEffect } from 'react';
const useColor  = (scrollPosition) => {
  const [elementColor, setElementColor] = useState('white');
  // const [position, setPosition] = useState(scrollPosition);
  const[section,  setSection] = useState(scrollPosition)
  const listenScrollEvent = () => {
    if(((window.scrollY > 3740 ) && (window.scrollY < 4530)) || ((window.scrollY > 5025 ) && (window.scrollY < 5765)) || ((window.scrollY > 6399 ) && (window.scrollY < 7009)) || ((window.scrollY > 7486 ) && (window.scrollY < 8060)) || (window.scrollY < section) ){
      setElementColor('white')
      // if(( window.scrollY < window.innerHeight * 1.05 ) || (( window.scrollY > window.innerHeight * 4.3 ) && ( window.scrollY < window.innerHeight * 5.28)) || (( window.scrollY > window.innerHeight * 5.92 ) && ( window.scrollY < window.innerHeight * 6.83))  || (( window.scrollY > window.innerHeight * 7.68 ) && ( window.scrollY < window.innerHeight * 8.39)) )
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