"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
var Jaula = /** @class */ (function () {
    function Jaula() {
        this.animais = [];
        this.quantidade = '';
        this.tipo = '';
        this.animais = [];
    }
    Jaula.prototype.setQuantidade = function (quantidade) {
        if (quantidade > 0) {
            this.quantidade = quantidade;
        }
        else {
            return console.error('Quantidade invalida.');
        }
    };
    Jaula.prototype.setTipo = function (tipo) {
        if (tipo = typeof animal_1.Animal) {
            this.tipo = tipo;
        }
        else {
            return console.error('Tipo invalido.');
        }
    };
    Jaula.prototype.getListaAnimais = function () {
        return this.animais;
    };
    Jaula.prototype.addAnimalToJaula = function (animal) {
        if (animal instanceof this.tipo) {
            this.animais.push(animal);
        }
    };
    Jaula.prototype.getLength = function () {
        return this.animais.length + 1;
    };
    Jaula.prototype.getQuantidade = function () {
        return this.quantidade;
    };
    Jaula.prototype.getTipo = function () {
        return this.tipo;
    };
    return Jaula;
}());
exports.Jaula = Jaula;
