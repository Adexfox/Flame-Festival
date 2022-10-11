import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
type Props = {}

const Island = (props: Props) => {

  useEffect(() => {
      AOS.init({duration: 3000});
    }, [])

  return (
    <>
      <section className='island-section'>
          <section className='island-section-text'>

            <h3 data-aos='fade-up'>The Island </h3>
            <h1 data-aos='fade-up'>A SECRET HIDEWAY IN THE MIAMI</h1>
            <p data-aos='fade-up'>It was home to Blackbeard and a playground for Pablo Escobar.</p>
            <p data-aos='fade-up'>But for us, the island is an escape from the expected.</p>
            <p data-aos='fade-up'>Just an hour from Exumas yet a world away from the familiar, the rugged landscape and pristine beaches of Flame</p>
            <p data-aos='fade-up'>Cay are an invitation to let loose and unplug with the likeminded.</p>

            <div className="island-image">

              <img  src="images/animated-island.png" alt="" />

              <div className="island-image-plane">

                <img  src="images/home-plane.png" alt="" />

              </div>

            </div>

            <div className="flower-5">

                <img src="images/flower-5.png" alt="" />

            </div>

            <button className='island-btn' data-aos='fade-up'>Get Tickets</button>


          </section>




        </section>
      </>
  )
}

export default Island
