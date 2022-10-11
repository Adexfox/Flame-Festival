import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
 
type Props = {}

// const textPosition = document.querySelector('.program-2-text') as HTMLElement;
const Program = (props: Props) => {

    useEffect(() => {
      AOS.init({duration: 3000});
    }, [])
  
  return (  
    <>
        <section className="program-section">
            <div className="third-cut">
                <img src="images/top-cut.png" alt="" />
            </div>
            <section className="program-1" data-aos='fade-up'    data-aos-delay="50" >
                <h3>The <span><span>P</span>rogram</span></h3>
                <h2>ENGAGE THE SENSES</h2>
                <p>We've tapped the brightest mind in the music, cuisine, art and hospitality to mastermind experience designed to<br /> delight and seduce. From innovators and thinkers to multi-platinum artists, you will find yourself one-on-one<br /> with some of the greatest talent on the planet </p>
                <button className='program-btn'>Get Tickets</button>
            <div className="fourth-cut">
                  <img src="images/top-cut.png" alt="" />
            </div>
            </section>
            <section className="program-2">
                <p className='program-2-text'data-aos-delay='0' data-aos='slide-down' data-aos-anchor-placement="bottom-bottom" data-easing-function='linear'>"Set your life on fire. <br /> Seek those who fan your flames." <br /> <br /> ~Rumi</p>
            </section>
        </section>
    </>
  )
}

export default Program