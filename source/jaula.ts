import { Animal } from "./animal";

export class Jaula{
    private quantidade : any;
    private tipo : any;

    constructor (animal?:Animal, quantidade?:any){
        this.quantidade = quantidade;
        this.tipo = typeof animal;
    }

}