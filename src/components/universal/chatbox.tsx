import React, { useEffect } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
type Props = {}

const Chatbox = (props) => {
    /*****************************************
     * * NAVIGATING PAGES WITH CHATBOT OPTIONS *
     *****************************************/
    const GoToFaq = () => {
        useEffect (() => {
            window.open('/faq', "_blank");
        }, [])
        return <p>Time to teleport to the Faq page⛷😂</p>
        
    }
    const GoToTickets = () => {
        useEffect (() => {
            window.open('/packages', "_blank");
        }, [])
        return <p>Time to teleport to the Packages page⛷😂</p>
        
    }
    const GoToJourney = () => {
        useEffect (() => {
            window.open('/journey', "_blank");
        }, [])
        return <p>Time to teleport to the Journey page⛷😂</p>
        
    }
    const GoToIsland = () => {
        useEffect (() => {
            window.open('/island', "_blank");
        }, [])
        return <p>Time to teleport to the Island page⛷😂</p>
        
    }
    const GoToProgram = () => {
        useEffect (() => {
            window.open('/program', "_blank");
        }, [])
        return <p>Time to teleport to the Program page⛷😂</p>
        
    }
    const GoToExperience = () => {
        useEffect (() => {
            window.open('/experience', "_blank");
        }, [])
        return <p>Time to teleport to the Experience page⛷😂</p>
        
    }
    const GoToContact = () => {
        useEffect (() => {
            window.open('/contact', "_blank");
        }, [])
        return <p>Enjoy your date with support!😉</p>
        
    }
    // const handleClear = () => {
    //     this.setState({
    //         chatbotKey: ('faq')
    //     });
    // }
            /****************
            * * MAIN STYLING *
            ****************/
    const theme = {
    background: '#f5f8fb',
    fontFamily: 'helvetica',
    headerBgColor: '#017294',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#017294',
    botFontColor: '#fff',
    userBubbleColor: '#5f5050',
    userFontColor: '#ffffff',
    
    };
                /********
                 * * FLOW *
                 ********/
    const steps = [
        {
            id: '1', 
            message: "Hello, Welcome to Flame website! Do you need some help?",
            trigger: 'Ask name',
            // delay: 3000

        },
        {
            id: 'Ask name',
            options: [
                {value: 'Yes', label: 'Yes', trigger: 'Yes'}
            ],
            // delay: 3000

        },
        {
            id: 'Yes',
            message: 'Great!',
            trigger: 'name'

        },
        {
            id: 'name',
            message: 'Please enter your name',
            trigger: 'waiting1'
        },
       
        {
            id: 'waiting1',
            user: true,
            trigger: 'Name'
        },
        {
            id: 'Name',
            message: 'Hi {previousValue}, Flame Festival is a two weekend long festival taking place on a remote island in the Exumas',
            trigger: 'pre-issues'
        },
        {
            id: 'pre-issues',
            message: "You can find more details on different sections of this site.",
            trigger: 'issues'
        },
        {
            id: 'issues',
            message: "Would you like to take a tour?",
            trigger: 'permission'
        },
        {
            id: 'permission',
            options: [
                {value: 'Yes', label: 'Yes', trigger: 'Yes-response'},
                {value: 'No', label: 'No', trigger: 'No-response'}
            ],
        },
        {
            id: 'Yes-response',
            message: 'What screen would you like to see?',
            trigger: 'screen'
        },
         {
            id: 'No-response',
            message: "Wanna get in touch with Support?",
            trigger: 'pre-support'
        },
        {
            id: 'no-tour',
            message: "Wanna get in touch with support?",
            trigger: 'pre-support'
        },
        {
            id: 'pre-support',
            options: [
                {value: 'Yes', label: 'Yes', trigger: 'yes-response'},
                {value: 'No', label: 'No', trigger: 'no-response'}
            ],
        },
        {
            id: 'yes-response',
            message: 'Click the button below to logde your complaint',
            trigger: 'support'
        },
        {
            id: 'support',
            options: [
                {value: 'Contact', label: 'Contact', trigger: 'Contact'}
                
            ],
        },
        {
            id: 'Contact',
            component: <GoToContact />,
            asMessage: true,
            end: true
        },
        {
            id: 'no-response',
            message: "Sorry I couldn't help",
            end: true
        },
        {
            id: 'screen',
            options: [
                {value: 'Get Tickets', label: 'Get Tickets', trigger: 'Get Tickets'},
                {value: 'Experience', label: 'Experience', trigger: 'Experience'}, 
                {value: 'Journey', label: 'Journey', trigger: 'Journey'},
                {value: 'Program', label: 'Program', trigger: 'Program'},
                {value: 'Faq', label: 'Faq', trigger: 'Faq'},            
                {value: 'Island', label: 'Island', trigger: 'Island'},
                {value: 'None', label: 'None', trigger: 'no-tour'},            
            ],
        },
        {
            id: 'Faq',
            component: <GoToFaq />,
            asMessage: true,
            trigger: 'another-tour'
        },
        {
            id: 'another-tour',
            message: 'Do you want to go for another trip?',
            trigger: 'Another trip'
        },
        {
            id: 'Another trip',
            options: [
                {value: 'Get Tickets', label: 'Get Tickets', trigger: 'Get Tickets'},
                {value: 'Experience', label: 'Experience', trigger: 'Experience'}, 
                {value: 'Journey', label: 'Journey', trigger: 'Journey'},
                {value: 'Program', label: 'Program', trigger: 'Program'},
                {value: 'Faq', label: 'Faq', trigger: 'Faq'},
                {value: 'Island', label: 'Island', trigger: 'Island'},
                {value: 'No', label: 'No', trigger: 'no-tour'},
                
            ],
        },
        // {
        //     id: 'Faq',
        //     message: 'Thanks for informing us about your React issue, I will forward it to the team and let you know when the issue is resolved',
        //     end: true
        // },
        {
            id: 'Get Tickets',
            component: <GoToTickets />,
            asMessage: true,
            trigger: 'another-tour'
        },
        {
            id: 'Journey',
            component: <GoToJourney />,
            asMessage: true,
            trigger: 'another-tour'
        },
        {
            id: 'Island',
            component: <GoToIsland />,
            asMessage: true,
            trigger: 'another-tour'
        },
        {
            id: 'Program',
            component: <GoToProgram />,
            asMessage: true,
            trigger: 'another-tour'
        },
        {
            id: 'Experience',
            component: <GoToExperience />,
            asMessage: true,
            trigger: 'another-tour'
        }
    ];
    const config = {
        floating: true,
        width: '300px',
        scrollbarWidth: 'none',
        
    }
  return <>
            <div className='chatbot-container'>
                <ThemeProvider theme={theme}>
                    <ChatBot 
                    headerTitle="Chat"
                    // speechSynthesis={{ enable: true, lang: 'en' }}
                    recognitionEnable={true}
                    // key={this.state.chatbotKey}
                    steps={steps} {...config}/>
                </ThemeProvider>
            </div>
  </>
}

export default Chatbox