let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0]);
let b = input[1];

let x = parseInt(b[0]);
let y = parseInt(b[1]);
let z = parseInt(b[2]);

console.log(a * z);
console.log(a * y);
console.log(a * x);
console.log(a * parseInt(b));
