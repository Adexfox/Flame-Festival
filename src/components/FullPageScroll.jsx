import React from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation }  from "@ap.cx/react-fullpage"
const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const FullPageScroll = () => {
    return (


        <Fullpage>

            <FullpageNavigation />
            
            <FullPageSections>
                
                <FullpageSection style = {SectionStyle}>
                    <h1>Scene 1</h1>
                </FullpageSection>

                <FullpageSection style = {SectionStyle}>
                    <h1>Scene 2</h1>
                </FullpageSection>

                <FullpageSection style = {SectionStyle}>
                    <h1>Scene 3</h1>
                </FullpageSection>

                <FullpageSection style = {SectionStyle}>
                    <h1>Scene 4</h1>
                </FullpageSection>

                <FullpageSection style = {SectionStyle}>
                    <h1>Scene 5</h1>
                </FullpageSection>SectionStyle
                
            </FullPageSections>
            
        </Fullpage>
    );
};

export default FullPageScroll;