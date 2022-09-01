import React from 'react';
import { navButton } from './menuItems'

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
        if(btn=== currentSectionId) {
            btn.classList.add('active');
            return;
        }
        btn.classList.remove('active')
    })
    
}
/*************************
 * Intersection Observer *
 *************************/
const selectionWatcherCallback =  (section, sectioWatcher) => {
    section.forEach(section => {
        if(!section.isIntersecting){return};
        activeSectionHandler(section.target.name);
        
        
    })
    
}
const selectionWatcherOptions =  {
    threshold: .6
}
const selectionWatcher = new IntersectionObserver (selectionWatcherCallback, selectionWatcherOptions)


sections.forEach(section => {
    selectionWatcher.observe(section);
})


const Navigation = () => {
    return (
                        
        <div className='navButton sticky'>
            
                {navButton.map( (props) => {
                    const {id, text, url, name} = props;
                    return(
                                <a href={url} key={id} data-section = {name}>
                                        <div className='navButtonItem'>
                                           
                                            {text}
                                           
                                        </div>
                                    
                                </a>
                    );
                    
                }) }
            
        </div>
    );
};

export default Navigation;