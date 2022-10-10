import { Menu } from '../interfaces/menuItemsInterface';

            /***********************
             * HAMBUGER MENU ITEMS *
             ***********************/       
export const items: Menu[] = [
    {   
        id: 1,
        text: 'HOME', 
        url: '/'
       
    },

    {   
        id: 2, 
        text: 'THE ISLAND', 
        url: '/island'
       
    },

    {   
        id: 3, 
        text: 'THE HUNT',
         url: '/hunt'
         
    },

    {   
        id: 4,
         text: 'THE PROGRAM', 
         url: '/program'
         
    },

    {   
        id: 5, 
        text: 'THE JOURNEY', 
        url: '/journey'
      
    },

    {
        id: 6, 
        text: 'THE PACKAGES',
         url: '/packages'
         
    },

    {
        id: 7,
        text: 'THE EXPERIENCE', 
        url:'/experience'
        
    },

    {
        id: 8,
        text: 'FAQ', 
        url:'/faq'
        
    }
   
]

            /***************************
             * NAVIGATION BUTTON ITEMS *
             ***************************/

export const navButton: Menu[] = [
        {  
        id: 1,
        text: '', 
        url: '#home',
        name: 'home'
        },

        {  
        id: 2,
        text: '', 
        url: '#island',
         name: 'island'
        },
        
        {  
        id: 3,
        text: '', 
        url: '#hunt',
        name: 'hunt'
        },

        {  
        id: 4,
        text: '', 
        url: '#program',
        name: 'program'
        },


        {  
        id: 5,
        text: '', 
        url: '#journey',
        name: 'journey'
        },

        {  
        id: 6,
        text: '', 
        url: '#packages',
        name: 'packages'
        },

        {  
        id: 7,
        text: '', 
        url: '#experience',
        name: 'experience'
        }
]
