var input = require("fs").readFileSync("stdin", "utf-8");

var valores = input.split("\n");

var A = parseFloat(valores.shift());
var B = parseFloat(valores.shift());
var C = parseFloat(valores.shift());

var MEDIA = (2 * A + 3 * B + 5 * C) / 10;

console.log("MEDIA = " + MEDIA.toFixed(1));