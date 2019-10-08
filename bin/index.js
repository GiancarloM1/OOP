"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cachoro_1 = require("./cachoro");
var gato_1 = require("./gato");
var jacare_1 = require("./jacare");
var zoo_1 = require("./zoo");
var jaula_1 = require("./jaula");
var mamifero_1 = require("./mamifero");
var ave_1 = require("./ave");
var tucano_1 = require("./tucano");
var lagartixa_1 = require("./lagartixa");
var zoologico = new zoo_1.Zoo();
/*------------------
--------------------*/
var jaulAve = new jaula_1.Jaula(2, ave_1.Ave);
var jaula = new jaula_1.Jaula(5, mamifero_1.Mamifero);
var jaulaJac = new jaula_1.Jaula(10, jacare_1.Jacare);
var JaulAve2 = new jaula_1.Jaula(10, ave_1.Ave);
/*------------------
--------------------*/
var cachoro = new cachoro_1.Cachoro();
cachoro.setNome("Maggie");
var cachoro1 = new cachoro_1.Cachoro();
cachoro1.setNome("Giancarlo");
var gato = new gato_1.Gato();
gato.setNome("MIMI");
var jacare = new jacare_1.Jacare();
jacare.setNome("PUTA");
var tucano = new tucano_1.Tucano();
tucano.setNome("Gian");
var tucano2 = new tucano_1.Tucano();
tucano2.setNome("Placio");
var tucano3 = new tucano_1.Tucano();
tucano3.setNome("Homo");
var lagartixa = new lagartixa_1.Lagartixa();
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
