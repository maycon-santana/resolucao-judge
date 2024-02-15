var input = require("fs").readFileSync("stdin", "utf-8");

var linha = input.split("\n");

var p1 = [x1, y1] = linha.shift().split(" ");
var p2 = [x2, y2] = linha.shift().split(" ");

var distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distancia.toFixed(4));