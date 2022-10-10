import React from 'react';

type Props = {}

const Island = (props: Props) => {
  return (
    <>
      <section className='island-section'>
          <section className='island-section-text'>

            <h3>The Island</h3>
            <h1>A SECRET HIDEWAY IN THE MIAMI</h1>
            <p>It was home to Blackbeard and a playground for Pablo Escobar.</p>
            <p>But for us, the island is an escape from the expected.</p>
            <p>Just an hour from Exumas yet a world away from the familiar, the rugged landscape and pristine beaches of Flame</p>
            <p>Cay are an invitation to let loose and unplug with the likeminded.</p>

            <div className="island-image">

              <img  src="images/animated-island.png" alt="" />

              <div className="island-image-plane">

                <img  src="images/home-plane.png" alt="" />

              </div>

            </div>

            <div className="flower-5">

                <img src="images/flower-5.png" alt="" />

            </div>

            <button className='island-btn'>Get Tickets</button>

            {/* <section className='island-cut'>

              <img className='island-cut-img' src="images/top-cut.png" alt="" />

            </section> */}


          </section>




        </section>
      </>
  )
}

export default Island
