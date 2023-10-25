import React, { useState, useEffect } from 'react';
import VideoComp from './video';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {}

const HomeSection = (props: Props) => {
  const [videoPopup, setVideoPopup] = useState(false)

  useEffect(() => {
      AOS.init({duration: 3000});
    }, [])
   
  return (
    <>
      <section className='home-section'>
        
        <section className='bg-text'>
          {/* <img className='video-background' src='images/footer-2.jpg' alt="" /> */}
          <img src='images/flame.png' alt='flame' className='bg-text-flame'/><br />
          <img src='images/zigzag.png' alt='zigzag' className='bg-text-zigzag'/>
          <div className="bg"> </div>
          <div className='bg-text-action'>
            <h1>FLAME</h1>
            <h4>APRIL 28-30 | MAY 5-7</h4>
            <p>2024</p>
            <p>MIAMI</p>
            <div className='action'>
              <button className='btn' onClick={ () => setVideoPopup(true)}>Play Video</button><br />
              <a href="#arrow" >
                <div className='direction'>
                  <img src='images/arrow.png' alt='arrow' className='arrow' id='arrow'/>
                </div>
              </a>
             
            </div>

          </div>
          <VideoComp trigger = {videoPopup} setTrigger = {setVideoPopup} />
        </section>

        <section className='bg-cut'>
          <div className="first-cut">
            <img src="images/top-cut.png" alt="" />
          </div>
          <section className='home-text'>
            <p data-aos='fade-up'>Once home to Blackbeard and Pablo Escobar...</p>
            <p data-aos='fade-up'>Flame Cay awaits you.</p>   
            <p className='home-text-2' data-aos='fade-up'>From an immersive treasure hunt, to the greatest</p>
            <p data-aos='fade-up'> minds in music, art and cuisine.</p>
            <p data-aos='fade-up'> Join us.</p>  
            {/* <hr className='home-text-rule'/> */}
          </section>
        </section>
      </section>
      

    </>
  )
}

export default HomeSection;