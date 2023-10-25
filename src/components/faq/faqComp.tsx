import React from 'react'
import LogoComp from '../universal/logoComp';
import SecondFooter from '../universal/secondFooter';

type Props = {}

const FaqComp = () => {
  const logoProps = {
    color: '#000',
    top: '6vh',
    filter:'grayscale(1) invert(1)'
  }
  const linkTypes = {
    firstName: 'Packages',
    secondName: 'Island',
    firstLink: '/faq/journey',
    secondLink: '/faq/packages',
    thirdLink: '/faq/island',
    fourthLink: '/faq/experience'
  }
  return (
    <main className='faq-page'>
        <header >
                <LogoComp filter={logoProps.filter} color={logoProps.color} top={logoProps.top}/>
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

            <h3>Do i need to have housing or is it possibe to secure my own lodging?</h3>
            <p>You must purchase housing (tents / villas ) unless you plan on chartering a yatch  (dockage <br /> fees + day pass apply). If you are chartering a yacht, there is a day pass available by special <br /> request only. We can also help you to arranage a yacht charter.</p>

            <h3>How will I pay for things on the island?</h3>
            <p>Flame Festival is a casheless festival. However, we suggest coming to the island with some <br /> cash on hand as there are no ATMs. That being said, every vendor will accept credit cards.</p>
            <section className="bg-animation sticky-faq">

            </section>

        </section>
        
        <footer>
            <SecondFooter 
              firstName={linkTypes.firstName}
              firstLink={linkTypes.firstLink}
              secondName={linkTypes.secondName}
              secondLink={linkTypes.secondLink}  
              thirdLink={linkTypes.thirdLink}
              fourthLink={linkTypes.fourthLink}

            />
        </footer>
    </main>
  )
}

export default FaqComp