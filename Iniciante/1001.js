var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");

var A = parseInt(valores.shift());
var B = parseInt(valores.shift());

X = A + B

console.log("X = " + X);

