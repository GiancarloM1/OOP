"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jaula_1 = require("./jaula");
var animal_1 = require("./animal");
var Zoo = /** @class */ (function () {
    function Zoo() {
        this.animals = [];
        this.jaulas = [];
        this.jaulas = [];
    }
    Zoo.prototype.addAnimal = function (animal) {
        if (animal instanceof animal_1.Animal) {
            for (var index = 0; index < this.jaulas.length; index++) {
                var element = this.jaulas[index];
                if (element.addAnimalToJaula(animal)) {
                    continue;
                }
                else {
                    console.log("Animal ADICIONADO COM SUCESSO!!");
                    break;
                }
            }
        }
    };
    Zoo.prototype.addJaula = function (jaula) {
        if (jaula instanceof jaula_1.Jaula) {
            if (jaula.getQuantidade() > 0 && jaula.getTipo() != '') {
                this.jaulas.push(jaula);
                console.log('jaula added' + jaula.getTipo() + ' WTF' + jaula.getQuantidade());
            }
            else {
                return console.error('Quantidade ou Tipo incorretos');
            }
        }
    };
    Zoo.prototype.listaAnimais = function (jaula) {
        if (jaula instanceof jaula_1.Jaula) {
            console.log('-----------------------');
            console.log(jaula.getTipo());
            jaula.getListaAnimais().forEach(function (element) {
                console.log(element.getNome());
            });
        }
    };
    return Zoo;
}());
exports.Zoo = Zoo;
