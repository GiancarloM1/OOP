import { Animal } from "./animal";

export abstract class Mamifero extends Animal {

    constructor (){
        super();
    }
    
    public abstract fazerBarulho() : void;

}