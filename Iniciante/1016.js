var input = require("fs").readFileSync("stdin", "utf-8");

var valor = input.split("\n");

var y = parseInt(valor.shift());

var distancia = 2 * y;

console.log(distancia + " minutos");