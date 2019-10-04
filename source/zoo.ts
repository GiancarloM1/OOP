import { Jaula } from "./jaula";
import { Animal } from "./animal";
import { Jacare } from "./jacare";

export class Zoo {
    private animal : any;
    private jaulas: Array<Jaula> = [];

    constructor() {
        this.animal = '';
        this.jaulas = [];
    }
    public addAnimal(animal?:any){
        if(animal instanceof Animal){
            this.jaulas.forEach(element => {
                if(animal instanceof element.getTipo  && element.getQuantidade < element.getLength){
                    element.addAnimalToJaula(animal);
                }
            });
        }
    }
    
    public addJaula(jaula?:any) {
        if(jaula instanceof Jaula){
            if(jaula.getQuantidade()>0 && jaula.getTipo()!= ''){
                this.jaulas.push(jaula);
                console.log('jaula added'+jaula.getTipo())
            }else{
                return console.error('Quantidade ou Tipo incorretos');
                
            }
        }
    }


    public listaAnimais(jaula:any) {
        if(jaula instanceof Jaula){
            jaula.getListaAnimais().forEach(element => {
                console.log(element.getNome());
            });
        }
        
    }

}