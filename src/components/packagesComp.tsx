import React from 'react'
import LogoComp from './logoComp'
import SecondFooter from './secondFooter'

type Props = {}

const PackagesComp = (props: Props) => {
  const linkTypes = {
    firstName: 'Island',
    secondName: 'FAQ',
    firstLink: '/packages/journey',
    secondLink: '/packages/island',
    thirdLink: '/packages/faq',
    fourthLink: '/packages/experience'
  }
  return (
    <>
        <main>
            <header>
                <LogoComp />
            </header>
            <section className="artiste">

            </section>
            <section className="villa">
              
            </section>
            <section className="nest-den">
              <div className="nest">

              </div>
              <div className="den">

              </div>
            </section>
            <section className="retreat-duo">
              <div className="retreat">

              </div>
              <div className="duo">

              </div>
            </section>
            <section className="request">
                <div className="borderline">

                </div>
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