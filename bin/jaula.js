"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jaula = /** @class */ (function () {
    function Jaula(quantidade, tipo) {
        this.animais = [];
        this.quantidade = quantidade;
        this.tipo = tipo;
        this.animais = [];
    }
    Jaula.prototype.getListaAnimais = function () {
        return this.animais;
    };
    Jaula.prototype.addAnimalToJaula = function (animal) {
        if (animal == null || animal == undefined) {
            return false;
        }
        if (animal instanceof this.tipo && this.quantidade > this.getLength()) {
            console.log(animal.getNome() + " adicionado");
            this.animais.push(animal);
            return false;
        }
        else {
            return true;
        }
    };
    Jaula.prototype.getLength = function () {
        return this.animais.length;
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
