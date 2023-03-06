import React from 'react'
import FooterComp from './footerComp'
type Props = {}

const ExperienceComp = (props: Props) => {
    const faqLink = '/experience/faq'
    const contactLink = '/experience/contact'
  return (
    <>
        <main className='experience-page'>
            <header>
                <div className="header">
                    <h1>The E<span>xperience</span></h1>
                </div>
                <p className="sub-header">Your weekend experience at Flame Festival is more than music, for the adventurous, join our half-day Exuma excursions. For those who'd like to amplify their exprience, enjoy a cabana at the Flame Beach Club or a VIP table overlooking the main stage. Itinerary additions (purchased in addition to your ticket) will be availabel for purchase in the weeks leading up to the festival.</p>
            </header>
            <section className='body-content'>
                <div className="media">
                    <img src="/images/girls.jpg" alt="" className="girls" />
                    <img src="/images/copter.jpg" alt="" className="copter" />
                </div>
                <div className="text">
                    <h3>KICKOFF BBQ</h3>
                    <p>Each Thursday evening at Flame Festival you can joun our FlameStarters for a beachside kick-off BBQ. Enjoy a stunnig sunset, a Bahamian meny and champagne toast to celebrate the weekend to come.</p>

                    <h3>CABANA @ FLAME BEACH CLUB</h3>
                    <p>Lock down a cabana for a full or half-day and watch the waves go by, while enjoying drinks oceanside at the Flame Beach Club.</p>
                    
                    <h3>VIP MAIN STAGE TABLES</h3>
                    <p>Watch Flame Festival main stage performances in style with VIP table. You'll be in very good company.</p>

                    <h3>YACHT BRUNCH PARTY</h3>
                    <p>Borad a ctamaran for a late morning cruise of the Exumas. Enjoy a champagne bruch and awesome views.</p>
                    
                    <h3>EXPLORE THE EXUMAS BY PRIVATE AIRCRAFT</h3>
                    <p>Start your  day just after breakfast with a scenic flight to Staniel Cay. After landing, take aquick boat ride to Thunderball Cave for some snorkeling and cave diving in the spirit of James Bond. Then, drop by Pig Beach for an opportinity to swim with the pigs. Afer a quick lunch at Staniel Cay Yacht Club, we'll fly over to Dean's Blue Hole, and then make our way back just in time to catch the music.</p>

                    <h3>Check back soon on how to add these experience (purchased at an additional cost) to your Flame Festival itinerary.</h3>
                </div>
            </section>
            <footer>
                    <FooterComp 
                    firstLink={contactLink}
                    secondLink={faqLink}
                    />
            </footer>
            
        </main>
    
    </>
  )
}

export default ExperienceComp