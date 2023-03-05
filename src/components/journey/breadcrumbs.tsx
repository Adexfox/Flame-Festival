import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
    const location = useLocation()
    
    let currentLink:any = ''

    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map(crumb => {
        currentLink += `/${crumb}`
        
        return(

            <div className='crumb' key={crumb}>
                <Link to={currentLink}>{crumb}</Link>
            </div>

        )
    })

  return (
    <div className="breadcrumbs">
        {crumbs}
    </div>
  )
}

export default Breadcrumbs
// const Breadcrumbs = () => {
//     const location = useLocation()
//     console.log(location);
//     
//     
//     let currentLink:any = ''
// 
//     const crumbs = location.pathname.split('/').filter(crumb => crumb !== '')
//     const mapCrumbs = crumbs.map((crumb, i) => {
//         currentLink += `/${crumb}`
//         const pathArray = crumbs.slice(0, i+1)
//         const path = pathArray.join('/')
//         console.log(path);
//         
//         
//         return(
// 
//             <div className='crumb' key={crumb}>
//                 <Link to={`/${path}`}>{crumb}</Link>
//             </div>
// 
//         )
//     })
// 
//   return (
//     <div className="breadcrumbs">
//          <div className='crumb' >
//                 <Link to={`/`}>Home</Link>
//         </div>
//         {mapCrumbs}
//     </div>
//   )
// }