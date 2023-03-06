import React from 'react'
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { GrMail } from 'react-icons/gr';

type Props = {}

const FaqComp = (props: Props) => {
  return (
    <IconContext.Provider value={{  className: 'socials'}} >
    <main className='faq-page'>
        <header className='logo-container'>
                <a href="/">
                    <img className='flames' src="/images/flame.png" alt="" />
                    <img className='zag' src="/images/zigzag.png" alt="" />
                    <p>FLAME</p>
                </a>
        </header>
        <section className='questions'>
            <h1 className='header'>G<span>eneral</span></h1>

            <h3>What is Flame Festival?</h3>
            <p>Flame Festival is a  two weekend long festival taking place on a remote island in the Exumas <br /> on Fury Cay, just about an hour flight away from Miami, with an all star cast of performers, <br /> models, influencers, and thought leaders attending.</p>

            <h3>What are the dates of Flame Festival?</h3>
            <p>
                Week 1: April 28, 2024 to April 30, 2024 <br />
                Week 2: May 5, 2024 to May 7, 2024
            </p>

            <h3>What is the weather like in Fury Cay?</h3>
            <p>Gorgeous, it's really one of the best time of year to be in Bahamas!</p>

            <h3>Is the event rain or shine?</h3>
            <p>Yes</p>

            <h3>How many people will be one the island, is there a limit?</h3>
            <p>Thousand of like-minded festival-goers will be on the island, however, due to security we <br /> cannot release exact numbers.</p>

            <h3>Do i need to have housing or is it possibe to secure mu own lodging?</h3>
            <p>You must purchase housing (tents / villas ) unless you plan on chartering a yatch  (dockage <br /> fees + day pass apply). If you are chartering a yacht, there is a day pass available by special <br /> request only. We can also help you to arranage a yacht charter.</p>

            <h3>How will I pay for things on the island?</h3>
            <p>Flame Festival is a casheless festival. However, we suggest coming to the island with some <br /> cash on hand as there are no ATMs. That being said, every vendor will accept credit cards.</p>

        </section>
        
        <section className="footer-segment"></section>
        <footer>
            <div className="faq-footer">
                <div className="faq-navigation">
                         <div className="nav-2">
                            <a href="/">Home</a>
                            <a href="/faq/journey">Journey</a>
                            <a href="/faq/packages">Packages</a>
                        </div>
                        <div className="nav-1">
                            <a href="/">Tickets</a>
                            <a href="/faq">Upgrades</a>
                            <a href="faq">Travel Info</a>
                        </div>
                       
                </div>
                
                <div className="faq-social">
                    <FaFacebookF />
                    <FaTwitter />
                    <RiInstagramFill />
                    <GrMail />
                </div>
                <div className="customer-service">
                    <h3>Customer Service: 
                        <a href="tel: 401-753-FLAME (3973)"> 401-753-FLAME (3973)</a>
                        
                    </h3>
                    <p>The images and renderings of the site are<br /> conceptual - the actual site layout may vary.<br /> We will continually be updating our site with <br /> up-to-date imagery.</p>
                </div>
            </div>
        </footer>
    </main>
    </IconContext.Provider>
  )
}

export default FaqComp