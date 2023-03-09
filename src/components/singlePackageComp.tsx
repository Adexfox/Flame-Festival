import React from 'react'

type Props = {}
export function SinglePackageComponent ({ list }) {
  return(  
    <div>
      {list.map(( bullet ) => {
        return <ComponentList  key={bullet.id} {...bullet}></ComponentList>;
      })}

    </div>
  )
}

const ComponentList = ({ text, intro, upgradeHeader, upgrade }) => {

  return (
    <>
        <div className="body-text">
                <div className="body">

                  <div className="bullet">
                    <div className="intro">
                      <p>{ intro }</p>
                    </div>
                      <ul>
                        <li>{ text }</li>
                      </ul>
                  <div className="upgrade">
                    <h3>{ upgradeHeader }</h3>
                    <p>{ upgrade }</p>
                  </div>
                  </div>

                </div>
              </div>
                      
    </>
  )
}

export default ComponentList;