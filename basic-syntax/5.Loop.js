//1. 더하기

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let summary = 0;

// for (let i = 1; i <= n; i++) {
//   summary += i;
// }
// console.log(summary);

//2. 구구단

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let inputNumber = Number(input[0]);

// for (let i = 1; i <= 9; i++) {
//   console.log(inputNumber + ' * ' + i + ' = ' + inputNumber * i);
// }

//3. 별찍기-1

// let fs = require('fs');

// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let starNumber = Number(input[0]);
// let result = [];

// for (let i = 1; i <= starNumber; i++) {
//   const spaces = ' '.repeat(starNumber - i);
//   const stars = '*'.repeat(i);
//   result.push(spaces + stars);
// }
// console.log(result.join('\n'));

// 4. 별찍기-2

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
// let starNumber = Number(input[0]);

// let result = [];

// for (let i = 1; i <= starNumber; i++) {
//   const spaces = ' '.repeat(starNumber - i);
//   const stars = '*'.repeat(i);
//   result.push(spaces + stars);
// }
// console.log(result.join('\n'));

// 5. 별찍기-3

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let starNumber = Number(input[0]);
// let result = [];

// for (let i = 1; i <= starNumber; i++) {
//   const star = '*'.repeat(starNumber - i + 1);
//   result.push(star);
// }

// console.log(result.join('\n'));

//6. 별찍기-4

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let starNumber = Number(input[0]);
// let result = [];

// for (let i = 1; i <= starNumber; i++) {
//   const spaces = ' '.repeat(i - 1);
//   const stars = '*'.repeat(starNumber - i + 1);
//   result.push(spaces + stars);
// }
// console.log(result.join('\n'));

//7. 빠른 A+B

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let T = Number(input[0]);
// let result = '';

// for (let i = 1; i <= T; i++) {
//   let [a, b] = input[i].split(' ').map(Number);
//   result += a + b + '\n';
// }
// console.log(result);

//별찍기 - 10

// let n = Number(input[0]);

// function drawStars(n) {
//   let result = Array.from({ length: n }, () => Array(n).fill(' '));

//   function fillPattern(size, x, y) {
//     if (size === 1) {
//       result[x][y] = '*';
//       return;
//     }
//     let nextSize = size / 3;

//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         if (i === 1 && j === 1) continue;
//         fillPattern(nextSize, x + i * nextSize, y + j * nextSize);
//       }
//     }
//   }

//   fillPattern(n, 0, 0);

//   return result.map((row) => row.join('')).join('\n');
// }

// console.log(drawStars(n));

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

function drawStars(n) {
  let result = Array.from({ length: n }, Array(n).fill(' '));

  function fillPattern(size, x, y) {
    if (size === 1) {
      ('');
    }
  }
}
