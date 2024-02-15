var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");

var X = valores.shift();
var Y = valores.shift();

var totalConsumo = X / Y;

console.log(totalConsumo.toFixed(3) + " km/l");