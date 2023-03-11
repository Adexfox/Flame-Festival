import React from 'react'

type Props = {}

const PackageCta = ({ person, total}) => {
  return (
        <div className="cta">
                    <h3>Payment Options</h3>
                    <p><span>Per Person:</span>  { person } <span> | </span><span>  Total:</span> { total }</p>
                    <p>Prices will increase soon.</p>
                    <button className='btn-1'></button>
                    <button className='btn-2'></button>
        </div>

  )
}

export default PackageCta