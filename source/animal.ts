export class Animal {
    private tamanho : string;
    private peso : number;

    constructor (){
        this.tamanho = '';
        this.peso = 0;
    }
    public setTamanho(tamanho : string){
        this.tamanho = tamanho;
    }

    public getTamanho() : string {
        return this.tamanho;
    }

    public setPeso(peso : number){
        if (peso > 0){
            this.peso = peso;
        }
    }

    public getPeso() : number{
        return this.peso;
    }
}