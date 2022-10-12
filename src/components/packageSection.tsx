import React from 'react'

type Props = {}

const PackageSection = (props: Props) => {
  return (
    <>
        <section className="package-section-1">
            <div className='seventh-cut'>
                <img src="images/top-cut.png" alt="" />
            </div>
            <div className='flower-1'>
                <img src="images/flower-1.png" alt="" />
            </div>
            <div className='flower-7'>
                <img src="images/flower-7.png" alt="" />
            </div>
            <div className="package-section-1-text">
                <h3>The <span><span>P</span>ackages</span></h3>
                <h1>JOIN US</h1>
                <p>Your Flame ticket encompasses all flights, culinary delights and accomodations.</p>
                <p>General Admission is your key to the expirience, but VIP unlocks another level of possibilities. </p>
                <p> From backstage partires to custom expriences. VIP offers uncompromising access to the best of the best</p>
                <button className="package-btn">Get Tickets</button>
            </div>
            <div className='eighth-cut'>
                <img src="images/top-cut.png" alt="" />
            </div>
        </section>
        <section className="package-section-2">

        </section>
    </>
  ) 
}

export default PackageSection