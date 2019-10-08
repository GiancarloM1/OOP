import { Cachoro } from "./cachoro";
import { Gato } from "./gato";
import { Jacare } from "./jacare";
import { Zoo } from "./zoo";
import { Jaula } from "./jaula";
import { Mamifero } from "./mamifero";
import { Ave } from "./ave";
import { Tucano } from "./tucano";
import { Lagartixa } from "./lagartixa";

let zoologico = new Zoo();
/*------------------
--------------------*/

let jaulAve = new Jaula(2,Ave);
let jaula = new Jaula(5,Mamifero);
let jaulaJac = new Jaula(10, Jacare);
let JaulAve2 = new Jaula(10, Ave);
/*------------------
--------------------*/


let cachoro = new Cachoro();
cachoro.setNome("Maggie");

let cachoro1 = new Cachoro();
cachoro1.setNome("Giancarlo");


let gato = new Gato();
gato.setNome("MIMI");

let jacare = new Jacare();
jacare.setNome("PUTA");

let tucano = new Tucano();
tucano.setNome("Gian");

let tucano2 = new Tucano();
tucano2.setNome("Placio");

let tucano3 = new Tucano();
tucano3.setNome("Homo");

let lagartixa = new Lagartixa();
lagartixa.setNome("Gabi");
/*------------------
--------------------*/

zoologico.addJaula(jaula);
zoologico.addJaula(jaulAve);
zoologico.addJaula(jaulaJac);
zoologico.addJaula(JaulAve2);
/*------------------
--------------------*/

zoologico.addAnimal(gato);
zoologico.addAnimal(tucano);
zoologico.addAnimal(tucano2);
zoologico.addAnimal(tucano3);
zoologico.addAnimal(cachoro);
zoologico.addAnimal(jacare);
zoologico.addAnimal(lagartixa);

/*------------------
--------------------*/

zoologico.listaAnimais(jaula);
zoologico.listaAnimais(jaulAve);
zoologico.listaAnimais(jaulaJac);
zoologico.listaAnimais(JaulAve2);

