import React from 'react';
import Hamburger from '../components/Hamburger';

type Props = {}

const JourneyComp = (props: Props) => {
 return(
    <>
        <Hamburger />
        <section>
          <div className='journey-plane'>
              <img src="images/Journey_Plane.png" alt="" />
          </div>
          <div className='journey-body'>

          </div>
          <div className="journey-map">
            <img src="images/map.jpg" alt="" />
          </div>
        </section>
        <footer>
          <div className='social'>
            
          </div>
          <div className='zigzag'>
            <img src="images/zigzag.png" alt="" />
          </div>
          <div className='nav-cta'>
              <a href="">Contact |</a>
              <a href=""> FAQ</a>
              
          </div>
        </footer>
    </>
  ) 

}

export default JourneyComp;