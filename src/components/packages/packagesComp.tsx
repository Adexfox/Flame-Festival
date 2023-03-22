import React from 'react'
import LogoComp from '../universal/logoComp'
import PackageCta from './singlePackageCta'
import SecondFooter from '../universal/secondFooter'
import { SinglePackageComponent } from './singlePackageComp'
import { artistsBullets, villaBullets, nestBullets, denBullets, retreatBullets, duoBullets } from './bullets'
type Props = {}

const PackagesComp = () => {
  const logoProps = {
    color: '#000',
    top: '6vh',
    filter:'grayscale(1) invert(1)'
  }
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
    retreat: {
      person: '$3,495',
      total: '$6,350',
    },
    duo: {
      person: '$3,495',
      total: '$8,990',
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
          <LogoComp filter={logoProps.filter} color={logoProps.color} top={logoProps.top}/>
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
          <div className='single-package retreat'>
            <h1 className='header'><span>The</span> <span>R</span>etreat</h1>
             <div className='body-text'>
                <div className='body'>
                  <SinglePackageComponent list={retreatBullets} />
                  <PackageCta
                    person={cta.retreat.person}
                    total={cta.retreat.total}
                  />
                </div>
             </div>
          </div>
          <div className='single-package duo'>
            <h1 className='header'><span>The</span> <span>D</span>uo</h1>
             <div className='body-text'>
                <div className='body'>
                  <SinglePackageComponent list={duoBullets} />
                  <PackageCta
                    person={cta.duo.person}
                    total={cta.duo.total}
                  />
                </div>
             </div>
          </div>
        </section>
        <section className='request'>
          <h1>Special Requests</h1>
          <p>We're here to enhance your festival experience. Let us know what we can do for you, or if you have specific or special requests at <a href='email:conciere@flameapp.com' >conciere@flameapp.com.</a> We'll do everything we can to serve you.</p>
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
