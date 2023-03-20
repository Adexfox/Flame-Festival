import React from 'react'
import IslandReusable from './islandReusable'
import { islandContent, footerLink } from './islandText'
import FooterComp from './universal/footerComp'
import LogoComp from './universal/logoComp'
import { useState } from 'react'

type Props = {}

const IslandComp = (props: Props) => {
  const [link, setLink] = useState(footerLink)

  const additional = {
    padding: '0 7rem 0'
  }
  return (
    
    <>
      <main className="island-page">

        <header className="logo">
          <LogoComp />
        </header>
        <section className="island-content">
          <IslandReusable 
            contents={islandContent}
          />
        </section>
        
        <footer className='island-footer'>
          <FooterComp 
          firstLink={link.contact}
          secondLink={link.faq}
          style={additional}
          />
        </footer>
      </main>

    </>
  )
}

export default IslandComp