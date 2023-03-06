import React from 'react';
import Hamburger from '../menu/Hamburger';

type Props = {
  term?: string;
}

const ProgramPage = (props: Props) => {
  // const compStyle= {
  //   color: 'black',
  //   border: '2px solid black'
  //   
  // }

  return (
    <>
        <main className='program-page'>
          {/* <Hamburger /> */}
          <header className='ham stick'>
                  <Hamburger />
          </header>
          <section className='details'>
            
             
              <h1>The Details</h1>

              <p>Flame Festival is a cultural moment created from a blend of music, art, and food. Experience a journey in the Miami from April 28 - 30 and May 5 - <br />7, 2023.</p>
              <p>You will be flown rondtrip on a custom, VIP configured Boeing 737 aircraft between Bahamas international Airport and Miami international Airport on <br />Great Miami. Guests will be staying in modern, eco-friendly, geodesic domes. Additional housing and events are available for purchase across <br />nearby island and private cays.</p>
              <p>The main festival living and stage area is a Rokers Point on Great Miami, with main day parties taking part on the private and secluded Coco Plum <br />Beach</p>
              <p>Unplug from the everyday and ignite your flame in the Miami.</p>
              <p>For more information on the festival, please visit our <a href="/program/faq">FAQ</a> or call <a href="tel:603-673-FLAME(4372)">603-673-FLAME(4372)</a> </p>
          </section>
          
        </main>
        
    </>
  )
}

export default ProgramPage;