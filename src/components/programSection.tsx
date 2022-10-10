import React, { useEffect } from 'react'
 
type Props = {}

const textPosition = document.querySelector('.program-2-text') as HTMLElement;
const Program = (props: Props) => {

  const positionValue = () => {
    const value =  window.scrollY;
    textPosition.style.top = value * 0.05 + 'px';
  } 
  useEffect(() => {
    if(textPosition){
      window.addEventListener('scroll', positionValue);
      console.log('value');
      
    }
    return () => {
     if(textPosition){
      window.removeEventListener('scroll', positionValue);
      console.log('remove');
      
    }
      
    }
  })
  
  return (  
    <>
        <section className="program-section">
            <div className="third-cut">
                <img src="images/top-cut.png" alt="" />
            </div>
            <section className="program-1">
                <h3>The <span><span>P</span>rogram</span></h3>
                <h2>ENGAGE THE SENSES</h2>
                <p>We've tapped the brightest mind in the music, cuisine, art and hospitality to mastermind experience designed to<br /> delight and seduce. From innovators and thinkers to multi-platinum artists, you will find yourself one-on-one<br /> with some of the greatest talent on the planet </p>
                <button className='program-btn'>Get Tickets</button>
            <div className="fourth-cut">
                  <img src="images/top-cut.png" alt="" />
            </div>
            </section>
            <section className="program-2">
                <p className='program-2-text'>"Set your life on fire. <br /> Seek those who fan your flames." <br /> <br /> ~Rumi</p>
            </section>
        </section>
    </>
  )
}

export default Program