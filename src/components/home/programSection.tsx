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
            <section className="program-1">
                <h3 data-aos='fade-up' data-aos-delay="50">The <span><span>P</span>rogram</span></h3>
                <h2 data-aos='fade-up' data-aos-delay="50">ENGAGE THE SENSES</h2>
                <p data-aos='fade-up' data-aos-delay="50">We've tapped the brightest mind in the music, cuisine, art and hospitality to mastermind experience designed to<br /><span data-aos='fade-up' > delight and seduce. From innovators and thinkers to multi-platinum artists, you will find yourself one-on-one</span><br /><span data-aos='fade-up' > with some of the greatest talent on the planet</span> </p>
                <button className='program-btn' data-aos='fade-up'>Get Tickets</button>
                <div className="fourth-cut">
                      <img src="images/top-cut.png" alt="" />
                </div>
                <div className="flower-7">
                  <img src="images/flower-7.png" alt="" />
                </div> 
                <div className="flower-3" data-aos='fade-down' data-aos-delay="50">
                  <img src="images/flower-3.png" alt="" />
                </div> 
            </section>
            <section className="program-2">
              <div className='overlay'>
                <p className='program-2-text'data-aos-delay='200' data-aos='slide-down' data-aos-anchor-placement="bottom-bottom" data-easing-function='linear'>"Set your life on fire. <br /> Seek those who fan your flames." <br /> <br /> ~Rumi</p>
              </div>
            </section>
        </section>
    </>
  )
}

export default Program