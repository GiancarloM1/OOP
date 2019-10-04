import { Animal } from "./animal";

export class Jaula{
    private quantidade : any;
    private tipo : any;
    private animais: Array<Animal> = [];

    constructor (){
        this.quantidade = '';
        this.tipo = '';
        this.animais = [];
    }

    public setQuantidade(quantidade?:any){
        if(quantidade > 0){
            this.quantidade = quantidade;
        }else{
            return console.error('Quantidade invalida.');
            
        }
        
    }

    public setTipo(tipo?:any){
        if(tipo = typeof Animal){
            this.tipo = tipo;
        }else{
            return console.error('Tipo invalido.');
            
        }
    }

    
    public getListaAnimais() : Array<Animal> {
        return this.animais;
    }
    
    public addAnimalToJaula(animal?:any) {
        if(animal instanceof this.tipo){
            this.animais.push(animal);
        }
    }
    
    public getLength() : number {
        return this.animais.length +1;
    }


    
    public getQuantidade() : any {
        return this.quantidade;
    }

    
    public getTipo() : any {
        return this.tipo;
    }
    
    

}