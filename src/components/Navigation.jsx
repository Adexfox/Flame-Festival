import React from 'react';
import { navButton } from './menuItems';


// interface func {
//     (value:any): void
// };
// 

            /******************
             * Query Selector *
             ******************/

const sections = document.querySelectorAll('section');
const navBtns = document.querySelectorAll('.navButtonItem');

            /*******************
             * Helper function *
             *******************/

const activeSectionHandler = (currentSectionId) => {

            navBtns.forEach(btn => {
                // console.log(btn.dataset.section);
                
                if(btn.dataset.section === currentSectionId) {
                    btn.classList.add('active');
                    return;
                }
                btn.classList.remove('active')
            })

    
}

            /*************************
             * Intersection Observer *
             *************************/

const sectionWatcherCallback =  (section, sectionWatcher) => {
    section.forEach(section => {
        if(!section.isIntersecting){return};    
            activeSectionHandler(section.target.id);
        
        
    })
    
}
const sectionWatcherOptions =  {
    threshold: .6
}
const sectionWatcher = new IntersectionObserver(sectionWatcherCallback, sectionWatcherOptions)


sections.forEach(section => {
    sectionWatcher.observe(section);
})

const Navigation = () => {
    return (

            /****************************************************
             * ITERATING THROUGH NAVIGATION  BUTTON ITEMS ARRAY *
             ****************************************************/
            
        <div className='navButton sticky'>
      
                {navButton.map( (props) => {
                    const {id, text, url, name} = props;
                    return(
                                <a href={url} key={id} data-section = {name} >
                                        <div className='navButtonItem' data-section = {name} >
                                            {text}
                                        </div>
                                    
                                </a>
                    );
                    
                }) }         
        </div>
    );
};

export default Navigation;