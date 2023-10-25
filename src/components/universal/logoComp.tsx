import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const LogoComp = ({color, top, filter}) => {
  return (
    <>
          
          <div className='logo-container'>
                  <Link to="/">
                      <img className='flames' src="/images/flame.png" alt="" style={{marginTop: top, filter: filter}}/>
                      <img className='zag' src="/images/zigzag.png" alt="" style={{filter: filter}}/>
                      <p style={{ color: color}}>FLAME</p>
                  </Link>
          </div>
       
    </>
  )
}

export default LogoComp;