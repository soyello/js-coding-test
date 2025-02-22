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

//3-1. 사라진 괄호

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let groups = input[0].split('-');
// let answer = 0;

// for (let i = 0; i < groups.lengt; i++) {
//   let cur = groups[i]
//     .split('+')
//     .map(Number)
//     .reduce((a, b) => a + b);
//   if (i == 0) {
//     answer += cur;
//   } else {
//     answer -= cur;
//   }
// }

//3-2. 사라진 괄호
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('-');

// let numbers = input[0]
//   .split('+')
//   .map(Number)
//   .reduce((acc, cur) => acc + cur);
// for (let i = 1; i < input.length; i++) {
//   let part = input[i]
//     .split('+')
//     .map(Number)
//     .reduce((acc, cur) => acc + cur);
//   numbers -= part;
// }

// console.log(numbers);

//4.설탕배달

//5. A->B

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [start, end] = input[0].split(' ').map(Number);

// let flag = false;
// let count = 1;

// while (start <= end) {
//   if (start == end) {
//     flag = true;
//     break;
//   }
//   if (end % 2 == 0) {
//     end = Math.floor(end / 2);
//   } else if (end % 10 == 1) {
//     end = Math.floor(end / 10);
//   } else {
//     break;
//   }
//   count++;
// }

// console.log(flag ? count : -1);

//6. 수들의 합

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let s = Number(input[0]);
// let sum = 0;
// let current = 0;

// while (sum <= s) {
//   current += 1;
//   sum += current;
// }

// console.log(current - 1);

//7. 신입 사원

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCase = Number(input[0]);
let line = 1;

for (let tc = 0; tc < testCase; tc++) {
  let n = Number(input[line]);
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(' ').map(Number);
    arr.push(data);
  }
  arr.sort((a, b) => a[0] - b[0]);
  let count = 0;
  let minValue = 100001;
  for (let [x, y] of arr) {
    if (y < minValue) {
      count += 1;
      minValue = y;
    }
  }
  console.log(count);
  line += n + 1;
}
