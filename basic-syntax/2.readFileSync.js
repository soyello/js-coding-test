// 1. 덧셈

// let fs = require('fs');

// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let line = input[0].split(' ');

// const a = parseInt(line[0]);
// const b = parseInt(line[1]);

// console.log(a + b);

// 2. 곱셈

// let fs = require('fs');

// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let line = input[0].split(' ');

// const a = parseInt(line[0]);
// const b = parseInt(line[1]);

// console.log(a * b);

//3. 사칙연산

let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let line = input[0].split(' ');

const a = parseInt(line[0]);
const b = parseInt(line[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
