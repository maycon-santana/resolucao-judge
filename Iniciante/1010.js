var input = require("fs").readFileSync("stdin", "utf-8");

var linhas = input.split("\n");

var [idItem1, qtdItem1, valorUnitarioItem1] = linhas.shift().split(" ");
var [idItem2, qtdItem2, valorUnitarioItem2] = linhas.shift().split(" ");

var valorTotalItem1 = qtdItem1 * valorUnitarioItem1;
var valorTotalItem2 = qtdItem2 * valorUnitarioItem2;

var valorTotal = valorTotalItem1 + valorTotalItem2;

console.log("VALOR A PAGAR: R$ " + valorTotal.toFixed(2));