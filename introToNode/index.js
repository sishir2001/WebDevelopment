const SuperHeroes = require('superheroes');
const SuperVillains = require("supervillains");

// ! JavaScript Object .
let obk = {
    "superhero":SuperHeroes.random(),
    "supervillain":SuperVillains.random(),

};

console.log(obk.superhero);
console.log(obk.supervillain);

