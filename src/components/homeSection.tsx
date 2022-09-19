import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <section className='home-section'>
        <section className='video-background'>
              <div className='video-foreground'>
                {/* <iframe src="https://www.youtube.com/embed/XKORnCuhQQ0?vq=hd720&controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=XKORnCuhQQ0" title="Bgvideo" frameBorder="0" allow="autoplay" allowFullScreen></iframe> */}
              </div>
            </section>
            <section/> 

            <section className='bg-text'>
              <img src='images/flame.png' alt='flame' className='bg-text-flame'/><br />
              <img src='images/zigzag.png' alt='zigzag' className='bg-text-zigzag'/>
              <div className='bg-text-action'>
                <h1>FLAME</h1>
                <h4>APRIL 28-30 | MAY 5-7</h4>
                <p>2017</p>
                <p>MIAMI</p>
                <div className='action'>
                  <button className='btn'>Play Video</button><br />
                  <a href="#island" >
                    <div className='direction'>
                      <img src='images/arrow.png' alt='arrow' className='arrow'/>
                    </div>
                  </a>

                </div>

              </div>
            </section>

            <section className='home-text'>
              <p>Once home to Blackbeard and Pablo Escobar...</p>
              <p>Fyre Cay awaits you.</p>   
              <p className='home-text-2'>From an immersive treasure hunt, to the greatest</p>
              <p> minds in music, art and cuisine.</p>
              <p> Join us.</p>  
              {/* <hr className='home-text-rule'/> */}
            </section>
      </section>
      



    </>
  )
}

export default Home