export class Animal {
    private nome : string;

    constructor(){
        this.nome = '';
    } 
    public getNome() : string {
        return this.nome; 
    }
    
    public setNome(nome : string) {
        if(nome != ''){ 
            this.nome = nome;
        }
    }
    
    
}