var input = require("fs").readFileSync("stdin", "utf-8");

var linhas = input.split("\n");

var valor = [a, b, c] = linhas.shift().split(" ").map(value => parseInt(value));

var maiorAB = (a + b + Math.abs(a - b)) / 2;
var maiorABC = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(maiorABC + " eh o maior");