"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal() {
        this.nome = '';
    }
    Animal.prototype.getNome = function () {
        return this.nome;
    };
    Animal.prototype.setNome = function (nome) {
        if (nome != '') {
            this.nome = nome;
        }
    };
    return Animal;
}());
exports.Animal = Animal;
