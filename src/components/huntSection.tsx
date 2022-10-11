import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
type Props = {}

const Hunt = (props: Props) => {

    useEffect(() => {
      AOS.init({duration: 3000});
    }, [])

  return (
    <>
        <section className='hunt-section'>
          <div className='second-cut'>

              <img src="images/top-cut.png" alt="cut"/>
          </div>
          <section className='hunt-section-text'>

            <h3 data-aos='fade-up'>The Hunt</h3>
            <h1 data-aos='fade-up'>THE TRESURE HUNT OF EXCEPTIONAL <br /> PROPORTIONS</h1>
            <p data-aos='fade-up'>Hidden in unexpected spaces and secluded places, a string of clues leads hunters to incredible rewards.</p>
            <p data-aos='fade-up'>Rare luxuries.Over <span className='pencil'>
              $1 million in treasure.
              <img src="images/pencil.png" alt="" />
              </span> And perhaps an island of <br /> one's very own await the curious and the brave
            </p>
            
          </section>
        </section>
    </>
  )
}

export default Hunt