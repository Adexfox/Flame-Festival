import React from 'react';
import { navButton } from './menuItems'




interface func {
    (value:number): void
};

const btns = document.querySelectorAll('.navButtonItem');

const sliderNav:func = (manual) =>  {
    btns.forEach((btn) => {
        btn.classList.remove('active')
    })
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
       sliderNav(i) 
    })
});


const Navigation = () => {
    return (
                        
        <div className='navButton sticky'>
            
                {navButton.map( (props) => {
                    const {id, text, url} = props;
                    return(
                                <a href={url} key={id} >
                                        <div className='navButtonItem'>
                                            {/* <label htmlFor="">{ text }</label> */}
                                            {text}
                                            {/* <input type="radio" /> */}
                                        </div>
                                    
                                </a>
                    );
                    
                }) }
            
        </div>
    );
};

export default Navigation;