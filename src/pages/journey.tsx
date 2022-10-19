import React from 'react'
import JourneyComp from '../components/journeyComp';
import Hamburger from '../components/Hamburger';

interface journeyProps {
  
}

const Journey = ({}: journeyProps) => {
  return(
    <>
        <Hamburger />
        <JourneyComp />
    </>
  ) 


    
}

export default Journey
