import React, {useEffect, useState} from 'react'

type Props = {}

const JourneySection = (props: Props) => {
    const [position, setposition] = useState(0);
    const checkPosition = () =>{
        setposition(Math.round(window.scrollY))
    }
    useEffect(() => {
      window.addEventListener('scroll', checkPosition);
      
      return () => {
          window.removeEventListener('scroll', checkPosition);
    }
    })
  return (
    <>
      <section className='journey-section-1' >
        <div className="fifth-cut">
          <img src="images/top-cut.png" alt="" />
        </div>
        <section className="journey-section-1-text">
          <h3>The Journey</h3>
          <h1>THIS JOURNEY BEGINS WITH A DEPATURE <br />FROM THE EVERYDAY</h1>
          <p>Less than an hour from Miami, reaching the island is a breeze via private aircraft alonside a handful of fellow</p>
          <p>travelers. The flight is short, but you never know who you might meet on the way...</p>

          <button className='journey-btn'>Get Tickets</button>
        </section>
        <div className="sixth-cut">
          <img src="images/top-cut.png" alt="" />
        </div>
        <div className="model">
          <img src="images/glasses-bikini1.png" alt="" />
        </div>
      </section>
      <section className='journey-section-2'>
        <video src='videos/map.mp4' muted loop autoPlay>
        </video>
      </section>
    </>
  )
}

export default JourneySection;