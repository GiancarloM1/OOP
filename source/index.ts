import { Cachoro } from "./cachoro";
import { Gato } from "./gato";
import { Jacare } from "./jacare";
import { Zoo } from "./zoo";
import { Jaula } from "./jaula";
import { Mamifero } from "./mamifero";


let cachoro = new Cachoro();
cachoro.setNome("Maggie");

let cachoro1 = new Cachoro();
cachoro1.setNome("Giancarlo");

let gato = new Gato();
gato.setNome("MIMI");

let jacare = new Jacare();
jacare.setNome("PUTA");
let mamifero = new Mamifero();
let jaula = new Jaula();
jaula.setQuantidade(2);
jaula.setTipo(mamifero);

let zoologico = new Zoo();
zoologico.addJaula(jaula);
console.log('jaula ADd');
zoologico.addAnimal(gato);
zoologico.addJaula(cachoro);
zoologico.listaAnimais(jaula);
