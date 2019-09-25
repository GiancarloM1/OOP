import { Mamifero } from "./mamifero";

export class Cachoro extends Mamifero{

    constructor(){
        super();
    }

    fazerBarulho() : void{
        console.log('Miau rawr');        
    }
}