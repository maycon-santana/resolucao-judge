var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");

var tempoGasto = parseInt(valores.shift());
var velocidadeMedia = parseInt(valores.shift());

var totalGasto = tempoGasto * velocidadeMedia / 12;

console.log(totalGasto.toFixed(3));