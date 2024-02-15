var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");

var nomeVendedor = valores.shift();
var salarioFixo  = parseFloat(valores.shift());
var totaVendas = parseFloat(valores.shift());

var total = totaVendas * 0.15 + salarioFixo;

console.log("TOTAL = R$ " + total.toFixed(2));