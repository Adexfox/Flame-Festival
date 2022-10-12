import React, { useState, useEffect} from 'react'

type Props = {}

function UsePosition({}: Props) {
    const [position, setposition] = useState(0);
    const checkPosition = () =>{
        setposition(Math.round(window.scrollY))
    }
    useEffect(() => {
      window.addEventListener('scroll', checkPosition);
      
      return () => {
          window.removeEventListener('scroll', checkPosition);
    }
    }, [position])
    
  return (
    <h1>{position}</h1>
  )
}

export default UsePosition