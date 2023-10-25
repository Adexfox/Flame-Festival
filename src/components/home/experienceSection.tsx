import React, { useEffect } from 'react';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
type Props = {}

const ExperienceSection = (props: Props) => {

    useEffect(() => {
      AOS.init({duration: 3000});
    }, [])
  return (
    <>  
        <IconContext.Provider value={{className: 'arrow-icons'}}>
            <section className="experience-section">
                <section className="experience-section-1">
                    <div className='cut-9'>
                        <img src="images/top-cut.png" alt="" />
                    </div>
                    <div className="text-1">
                        <h3>The Experience</h3>
                        <h1>LIKE ALL GREAT STORIES, THIS IS A VOYAGE</h1>
                        <p>This is is a world experiences and inspired curiosity that the sweet spot between imagination</p>
                        <p>and posibility. A place where the tropical sun shines all day, and our celebrations ignite the night. This is an</p>
                        <p>invitation to unplug, connect with something bigger, and hunt for something bigger.</p>
                        <p>Join us. It's Lit.</p>
                        <Link to="/packages">

                            <button className='btn-1'>Get Tickets</button>
                        </Link>
                        <div className="flower-1">
                            <img src="images/flower-1.png" alt="" data-aos='fade-down' data-aos-delay="50"/>
                        </div>
                        <div className="flower-2">
                            <img src="images/flower-2.png" alt="" data-aos='fade-down' data-aos-delay="50"/>
                        </div>
                    </div>
                    <div className='cut-10'>
                        <img src="images/top-cut.png" alt=""/>
                    </div>
                </section>
                <section className="experience-section-2">
                        <video src='videos/ski.mp4' muted loop autoPlay />
                </section>
                <section className="experience-section-3">
                    <div className="cut-11">
                        <img src="images/top-cut.png" alt="" />
                    </div>
                    <div className='animated-img'>
                        <img src="images/animated-island-2.png" alt="" />
                    </div>
                    <div className="text-2">
                        <h3>Refresh</h3>
                        <h1>DREAM. HEARTH. MIND. REST</h1>
                        <p><HiArrowLongLeft size={30} style= {{marginRight: '2rem'}}/> From intimate accommodations to private pavillons, rest under the stars with all of the familiar comforts of <HiArrowLongRight size={30} style= {{marginLeft: '2rem'}}/><br /> home&mdash;and then some.</p>
                        <Link to="/packages">
                            <button className="btn-2">Get Tickets</button>
                        </Link>
                    </div>
                </section>
                <section className="experience-section-4">
                    <div className="slide-animation">
                        
                    </div>
                    <div className='cut-12'>
                    <img src="images/top-cut.png" alt="" />
                </div>
                </section>
                
            </section>
        </IconContext.Provider>
    </>
  )
}

export default ExperienceSection