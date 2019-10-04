"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jaula_1 = require("./jaula");
var animal_1 = require("./animal");
var Zoo = /** @class */ (function () {
    function Zoo() {
        this.jaulas = [];
        this.animal = '';
        this.jaulas = [];
    }
    Zoo.prototype.addAnimal = function (animal) {
        if (animal instanceof animal_1.Animal) {
            this.jaulas.forEach(function (element) {
                if (animal instanceof element.getTipo && element.getQuantidade < element.getLength) {
                    element.addAnimalToJaula(animal);
                }
            });
        }
    };
    Zoo.prototype.addJaula = function (jaula) {
        if (jaula instanceof jaula_1.Jaula) {
            if (jaula.getQuantidade() > 0 && jaula.getTipo() != '') {
                this.jaulas.push(jaula);
                console.log('jaula added' + jaula.getTipo());
            }
            else {
                return console.error('Quantidade ou Tipo incorretos');
            }
        }
    };
    Zoo.prototype.listaAnimais = function (jaula) {
        if (jaula instanceof jaula_1.Jaula) {
            jaula.getListaAnimais().forEach(function (element) {
                console.log(element.getNome());
            });
        }
    };
    return Zoo;
}());
exports.Zoo = Zoo;
