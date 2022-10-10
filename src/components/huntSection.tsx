import React from 'react'

type Props = {}

const Hunt = (props: Props) => {
  return (
    <>
        <section className='hunt-section'>
          <div className='second-cut'>

              <img src="images/top-cut.png" alt="cut"/>
            </div>
          <section className='hunt-section-text'>

            <h3>The Hunt</h3>
            <h1>THE TRESURE HUNT OF EXCEPTIONAL <br /> PROPORTIONS</h1>
            <p>Hidden in unexpected spaces and secluded places, a string of clues leads hunters to incredible rewards.</p>
            <p>Rare luxuries.Over <span className='pencil'>
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