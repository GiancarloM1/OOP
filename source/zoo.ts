import { Jaula } from "./jaula";
import { Animal } from "./animal";

export class Zoo {
    private jaulas: Array<Jaula> = [];

    constructor() {
        this.jaulas = [];
    }
    public addAnimal(animal?:any){
        if(animal instanceof Animal){
            for (let index = 0; index < this.jaulas.length; index++) {
                const element = this.jaulas[index];
                if(element.addAnimalToJaula(animal)){
                    continue;
                }else{
                    console.log("Animal ADICIONADO COM SUCESSO!!");
                    break;
                }
            }
        }
    }
    
    public addJaula(jaula?:any) {
        if(jaula instanceof Jaula){
            if(jaula.getQuantidade()>0 && jaula.getTipo()!= ''){
                this.jaulas.push(jaula);
                console.log('jaula added'+jaula.getTipo() +' WTF'+jaula.getQuantidade());
            }else{
                return console.log('Quantidade ou Tipo incorretos');
                
            }
        }
    }


    public listaAnimais(jaula:any) {
        if(jaula instanceof Jaula){
            
            console.log('-----------------------');
            console.log(jaula.getTipo());
            jaula.getListaAnimais().forEach(element => {
                console.log(element.getNome())     ;           
            });
        
        }
        
    }

}