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

