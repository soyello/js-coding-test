//1. 동전 0

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [N, price] = input[0].split(' ').map(Number);

// let count = 0;
// let coins = input
//   .slice(1, N + 1)
//   .map(Number)
//   .reverse();

// for (let coin of coins) {
//   if (coin <= price) {
//     count += Math.floor(price / coin);
//     price %= coin;
//   }
// }
// console.log(count);

//2. ATM
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let time = input[1].split(' ').map(Number);

// time.sort((a, b) => a - b);

// let middle = 0;
// let total = 0;

// for (let i = 0; i < n; i++) {
//   middle += time[i];
//   total += middle;
// }

// console.log(total);

//3. 사라진 괄호

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let groups = input[0].split('-');
let answer = 0;

for (let i = 0; i < groups.lengt; i++) {
  let cur = groups[i]
    .split('+')
    .map(Number)
    .reduce((a, b) => a + b);
  if (i == 0) {
    answer += cur;
  } else {
    answer -= cur;
  }
}
