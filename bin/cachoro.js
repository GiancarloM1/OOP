"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mamifero_1 = require("./mamifero");
var Cachoro = /** @class */ (function (_super) {
    __extends(Cachoro, _super);
    function Cachoro() {
        return _super.call(this) || this;
    }
    Cachoro.prototype.fazerBarulho = function () {
        console.log('Miau rawr');
    };
    return Cachoro;
}(mamifero_1.Mamifero));
exports.Cachoro = Cachoro;
