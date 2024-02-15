var input = require("fs").readFileSync("stdin", "utf-8");

var PI = 3.14159;

var raio = parseInt(input)

var volume = 4.0 / 3 * PI * Math.pow(raio, 3);

console.log("VOLUME = " + volume.toFixed(3));