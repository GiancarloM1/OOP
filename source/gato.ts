import { Mamifero } from "./mamifero";

export class Gato extends Mamifero {
    constructor(){
        super();
    }

    fazerBarulho() : void{
        console.log('Miau rawr');        
    }
}
