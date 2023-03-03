import React from 'react';

            /****************
             * REACT ROUTER *
             ****************/
import { Route, Routes } from 'react-router-dom';

            /*********
             * PAGES *
             *********/
import Home from './home';
import Island from './island';
import Hunt from './hunt';
import Program from './program';
import Journey from './journey';
import Packages from './packages';
import Experience from './experience';
import Faq from './faq';
import Error from './error';
import Contact from './contact';
import Breadcrumbs from '../components/breadcrumbs';


            /**********************
             * REACT ROUTER SETUP *
             **********************/
const ReactRouterSetup = () => {
  
    return(
            <>
                <Routes>

                    <Route path='/' element={<Home />}/>
                    <Route path='/island' element={<Island />} />
                    <Route path='/hunt' element={<Hunt />} />
                    <Route path='/program' element={<Program />} />
                    <Route path='/program/faq' element={<Faq />} />
                    <Route path='/journey' element={<Journey />} />
                    <Route path='/packages' element={<Packages />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/faq' element={<Faq />} />
                    <Route path='/journey/faq' element={<Faq />} />
                    <Route path='/journey/contact' element={<Contact />} />
                    <Route path='*' element={<Error />} />
                    

                </Routes>
                <Breadcrumbs /> 
            </>
    )

}




export default ReactRouterSetup;