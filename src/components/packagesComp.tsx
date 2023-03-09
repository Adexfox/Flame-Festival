import React from 'react'
import LogoComp from './logoComp'
import PackageCta from './singlePackageCta'
import SecondFooter from './secondFooter'
import { SinglePackageComponent } from './singlePackageComp'
import { artistsBullets, villaBullets, nestBullets, denBullets } from './bullets'
type Props = {}

const PackagesComp = (props: Props) => {
          /*************
           * CTA PROPS *
           *************/
  const cta = {
    artists: {
      person: '$49,999',
      total: '$399,995',
    },
    villa: {
      person: '$4,395',
      total: '$49,999',
    },
    nest: {
      person: '$3,995',
      total: '$7,990',
    },
    den: {
      person: '$3,195',
      total: '$12,780',
    },
  }
          /****************
           * FOOTER PROPS *
           ****************/
  const linkTypes = {
    firstName: 'Island',
    secondName: 'FAQ',
    firstLink: '/packages/journey',
    secondLink: '/packages/island',
    thirdLink: '/packages/faq',
    fourthLink: '/packages/experience',
  }
  return (
    <>
      <main>
        <header>
          <LogoComp />
        </header>
        <section className='single-package'>
          <h1 className='header'>
            <span className='one'>A</span>r<span className='two'>t</span>is
            <span className='three'>t</span>s <span className='four'>P</span>
            alace
          </h1>
          <div className='body-text'>
            <div className='body'>
              <SinglePackageComponent list={artistsBullets} />
              <PackageCta
                person={cta.artists.person}
                total={cta.artists.total}
              />
            </div>
          </div>
        </section>
        <section className='single-package villa'>
          <h1 className='header'><span>The</span> <span>V</span>illa</h1>
          <div className='body-text'>
            <div className='body'>
              <SinglePackageComponent list={villaBullets} />
              <PackageCta
                person={cta.villa.person}
                total={cta.villa.total}
              />
            </div>
          </div>
        </section>
        <section className='nest-den'>
          <div className='single-package nest'>
             <h1 className='header'><span>The</span> <span>N</span>est</h1>
             <div className='body-text'>
                <div className='body'>
                  <SinglePackageComponent list={nestBullets} />
                  <PackageCta
                    person={cta.nest.person}
                    total={cta.nest.total}
                  />
                </div>
             </div>
          </div>
          <div className='den'>
            <div className='single-package den'>
             <h1 className='header'><span>The</span> <span>D</span>en</h1>
             <div className='body-text'>
                <div className='body'>
                  <SinglePackageComponent list={denBullets} />
                  <PackageCta
                    person={cta.den.person}
                    total={cta.den.total}
                  />
                </div>
             </div>
          </div>
          </div>
        </section>
        <section className='retreat-duo'>
          <div className='retreat'></div>
          <div className='duo'></div>
        </section>
        <section className='request'>
          <div className='borderline'></div>
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
    </>
  )
}

export default PackagesComp
// import React from 'react'
// import LogoComp from './logoComp'
// import SecondFooter from './secondFooter'
// type Props = {}
//
// const PackagesComp = (props: Props) => {
//   const linkTypes = {
//     firstName: 'Island',
//     secondName: 'FAQ',
//     firstLink: '/packages/journey',
//     secondLink: '/packages/island',
//     thirdLink: '/packages/faq',
//     fourthLink: '/packages/experience'
//   }
//   return (
//     <>
//         <main>
//             <header>
//                 <LogoComp />
//             </header>
//             <section className="artiste">
//               <h1 className="header"><span className='one'>A</span>r<span className="two">t</span>is<span className="three">t</span>s <span className="four">P</span>alace</h1>
//               <div className="body-text">
//                 <div className="body">
//
//                   <div className="bullet">
//                     <div className="intro">
//                       <p>Only 2 Available! Stay with our talent on their VIP island (houses will be in the vicinity of talent).</p>
//                     </div>
//                       <ul>
//                         <li>Round-Trip Flights Between Miami & Flame Cay</li>
//                         <li>4 Beds</li>
//                         <li>8 Artist's Pass Tickets (Highest VIP Tier)</li>
//                         <li>Accomodation Sleeps 8</li>
//                         <li>Living Room</li>
//                         <li>En-suite Bathroom</li>
//                         <li>Exclusive VIP Experiences</li>
//                         <li>Private tender for use throughout the experience</li>
//                         <li>Expedited flights and check-in</li>
//                         <li>Access to FlameStarters artist area. Be with 1,000+ of Flame's top artists, actors, actresses, models, comedians and influencers. Inaccessible to VIP and general public</li>
//                         <li>Artist Food and Hospitality with open bar</li>
//                         <li>Backstage access and viewing area of all performances (be with the artists backstage</li>
//                         <li>Artist and Talent-only parties and events</li>
//                         <li>Dinner with 1 performer during the festival</li>
//                       </ul>
//                   </div>
//
//                   <div className="cta">
//                     <h3>Payment Options</h3>
//                     <p><span>Per Person:</span>  $49,999 <span> | </span><span>  Total:</span> $399,995</p>
//                     <p>Prices will increase soon.</p>
//                     <button>PURCHASE WEEKEND ONE</button>
//                     <button>PURCHASE WEEKEND TWO</button>
//                   </div>
//                 </div>
//               </div>
//             </section>
//             <section className="villa">
//
//             </section>
//             <section className="nest-den">
//               <div className="nest">
//
//               </div>
//               <div className="den">
//
//               </div>
//             </section>
//             <section className="retreat-duo">
//               <div className="retreat">
//
//               </div>
//               <div className="duo">
//
//               </div>
//             </section>
//             <section className="request">
//                 <div className="borderline">
//
//                 </div>
//             </section>
//             <footer>
//               <SecondFooter
//                 firstName={linkTypes.firstName}
//                 firstLink={linkTypes.firstLink}
//                 secondName={linkTypes.secondName}
//                 secondLink={linkTypes.secondLink}
//                 thirdLink={linkTypes.thirdLink}
//                 fourthLink={linkTypes.fourthLink}
//               />
//             </footer>
//         </main>
//     </>
//   )
// }
//
// export default PackagesComp
