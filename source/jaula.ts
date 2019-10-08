import { Animal } from "./animal";

export class Jaula{
    private quantidade : any;
    private tipo : any;
    private animais: Array<Animal> = [];

    constructor (quantidade : number, tipo : any){
        this.quantidade = quantidade;
        this.tipo = tipo;
        this.animais = [];
    }

    public getListaAnimais() : Array<Animal> {
        return this.animais;
    }
    
    public addAnimalToJaula(animal : any) {
        if(animal == null || animal == undefined){
            return false;
        }

        if(animal instanceof this.tipo  && this.quantidade > this.getLength()){
            console.log(animal.getNome() +" adicionado")
            this.animais.push(animal)
            return false;
        }
        else{
            return true;
        }
    }
    
    public getLength() : number {
        return this.animais.length;
    }
    public getQuantidade() : any {
        return this.quantidade;
    }

    
    public getTipo() : any {
        return this.tipo;
    }
    
    

}