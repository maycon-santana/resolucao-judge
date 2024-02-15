var input = require("fs").readFileSync("stdin", "utf-8");

var linhas = input.split("\n");

var PI = 3.14159;

var area = [A, B, C] = linhas.shift().split(" ");
var triangulo = A * C / 2;
var circulo = PI * Math.pow(C, 2);
var trapezio = (parseFloat(A) + parseFloat(B)) * C / 2;
var quadrado = Math.pow(B, 2);
var retangulo = A * B;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));