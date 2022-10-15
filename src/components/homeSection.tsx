import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {}

const HomeSection = (props: Props) => {
  useEffect(() => {
      AOS.init({duration: 3000});
    }, [])
  return (
    <>
      <section className='home-section'>
        <section className='video-background'>
              <div className='video-foreground'>
                
                {/* <iframe src="https://www.youtube.com/embed/XKORnCuhQQ0?vq=hd720&controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=XKORnCuhQQ0" title="Bgvideo" frameBorder="0" allow="autoplay" allowFullScreen></iframe> */}
              </div>
        </section>

        <section className='bg-text'>
          {/* <img className='video-background' src='images/footer-2.jpg' alt="" /> */}
          <img src='images/flame.png' alt='flame' className='bg-text-flame'/><br />
          <img src='images/zigzag.png' alt='zigzag' className='bg-text-zigzag'/>
          <div className="bg"> </div>
          <div className='bg-text-action'>
            <h1>FLAME</h1>
            <h4>APRIL 28-30 | MAY 5-7</h4>
            <p>2017</p>
            <p>MIAMI</p>
            <div className='action'>
              <button className='btn' >Play Video</button><br />
              <a href="#island" >
                <div className='direction'>
                  <img src='images/arrow.png' alt='arrow' className='arrow'/>
                </div>
              </a>
             
            </div>

          </div>
        </section>

        <section className='bg-cut'>
          <div className="first-cut">
            <img src="images/top-cut.png" alt="" />
          </div>
          <section className='home-text'>
            <p data-aos='fade-up'>Once home to Blackbeard and Pablo Escobar...</p>
            <p data-aos='fade-up'>Fyre Cay awaits you.</p>   
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