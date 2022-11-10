"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoPi = void 0;
// @filename: index.ts
const constants_1 = require("../data/constants");
exports.twoPi = constants_1.valueOfPi * 2;
class Hero {
    name;
    constructor(name) {
        this.name = name;
    }
    age;
    powers;
}
function displayHeroInfo(anonym) {
    const heroInfo = {
        name: anonym.name,
        age: anonym.age,
        powers: anonym.powers
    };
    console.log(heroInfo);
}
const superToto = new Hero("SuperToto");
superToto.age = 25;
superToto.powers = ['telekinesis', 'laser'];
displayHeroInfo(superToto);
console.log(exports.twoPi);
