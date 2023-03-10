            /****************************
             * HAMBURGER MENU INTERFACE *
             ****************************/

export interface Menu {
    id: number;
    text: string;
    url: string;
    name?: string;
    // toggleMenu?: (name: string) => void;
}

export interface Menu_ extends Array<Menu>{}

export interface Bullets {
    id: number;
    text: string; 
    intro: string;
}

export interface Bullets_ extends Array<Bullets>{}