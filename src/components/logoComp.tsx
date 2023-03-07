import React from 'react'

type Props = {}

const LogoComp = (props: Props) => {
  return (
    <>
        <div className='logo-container'>
                <a href="/">
                    <img className='flames' src="/images/flame.png" alt="" />
                    <img className='zag' src="/images/zigzag.png" alt="" />
                    <p>FLAME</p>
                </a>
        </div>
    </>
  )
}

export default LogoComp;