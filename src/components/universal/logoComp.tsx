import React from 'react'

type Props = {}

const LogoComp = ({color, top, filter}) => {
  return (
    <>
        <div className='logo-container'>
                <a href="/">
                    <img className='flames' src="/images/flame.png" alt="" style={{marginTop: top, filter: filter}}/>
                    <img className='zag' src="/images/zigzag.png" alt="" style={{filter: filter}}/>
                    <p style={{ color: color}}>FLAME</p>
                </a>
        </div>
    </>
  )
}

export default LogoComp;