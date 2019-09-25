import { Mamifero } from "./mamifero";

export class Baleia extends Mamifero{

    constructor(){
        super();
    }

    fazerBarulho() : void{
        console.log('Bloop - Bloop');        
    }
}