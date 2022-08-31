interface Menu {
    id: number;
    text: string;
    url: string;
}

interface Menu_ extends Array<Menu>{}

export const items: Menu[] = [
    {   
        id: 1,
        text: "HOME", 
        url: './home'
    },

    {   
        id: 2, 
        text: "THE ISLAND", 
        url: './island'
    },

    {   
        id: 3, 
        text: "THE HUNT",
         url: './hunt'
    },

    {   
        id: 4,
         text: "THE PROGRAM", 
         url: './program'
    },

    {   
        id: 5, 
        text: "THE JOURNEY", 
        url: './journey'
    },

    {
        id: 6, 
        text: "THE PACKAGES",
         url: './packages'
    },

    {
        id: 7,
        text: "THE EXPERIENCE", 
        url:' ./experience'
    }
   
]

interface NavBall {

    id: number;
    text: string;
    url: string;
}
interface NavBalls extends Array<NavBall>{}

export const navButton:NavBall[] = [
        {  
        id: 1,
        text: "", 
        url: '#home'
        },

        {  
        id: 2,
        text: "", 
        url: '#island'
        },

        {  
        id: 3,
        text: "", 
        url: '#hunt'
        },

        {  
        id: 4,
        text: "", 
        url: '#program'
        },

        {  
        id: 5,
        text: "", 
        url: '#journey'
        },

        {  
        id: 6,
        text: "", 
        url: '#packages'
        },

        {  
        id: 7,
        text: "", 
        url: '#experience'
        }
]
