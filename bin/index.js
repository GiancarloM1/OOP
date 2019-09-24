"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cachoro_1 = require("./cachoro");
var cachoro = new cachoro_1.Cachoro();
var listaCachoro = [];
cachoro.setNome("Maggie");
listaCachoro.push(cachoro);
cachoro = new cachoro_1.Cachoro();
cachoro.setNome("Thor");
listaCachoro.push(cachoro);
cachoro = new cachoro_1.Cachoro();
cachoro.setNome("Rex");
listaCachoro.push(cachoro);
listaCachoro.forEach(function (element) {
    console.log(element.getNome());
});
