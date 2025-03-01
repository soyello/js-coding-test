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

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let testCase = Number(input[0]);
// let line = 1;

// for (let tc = 0; tc < testCase; tc++) {
//   let n = Number(input[line]);
//   let arr = [];
//   for (let i = line + 1; i <= line + n; i++) {
//     let data = input[i].split(' ').map(Number);
//     arr.push(data);
//   }

//   arr.sort((a, b) => a[0] - b[0]);
//   let minValue = 100001;
//   let count = 0;
//   for (let [x, y] of arr) {
//     if (y < minValue) {
//       minValue = y;
//       count += 1;
//     }
//   }
//   console.log(count);
//   line += n + 1;
// }

//8-1.주유소

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let N = Number(input[0]);
// let length = input[1].split(' ').map(Number);
// let cost = input[2].split(' ').map(Number);

// let total = BigInt(cost[0] * length[0]);
// let minCost = cost[0];

// for (let i = 1; i < N - 1; i++) {
//   if (cost[i] < minCost) {
//     total += BigInt(cost[i]) * BigInt(length[i]);
//     minCost = cost[i];
//   } else {
//     total += BigInt(minCost) * BigInt(length[i]);
//   }
// }
// console.log(String(total));

//8-2. 주유소

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let dist = input[1].split(' ').map(Number);
// let cost = input[2].split(' ').map(Number);

// let total = BigInt(0);
// let minCost = cost[0];
// for (let i = 0; i < n; i++) {
//   cost[i] = Math.min(cost[i], minCost);
//   minCost = cost[i];
// }

// for (let i = 0; i < n - 1; i++) {
//   total += BigInt(cost[i]) * BigInt(dist[i]);
// }

// console.log(String(total));

//9. 회의실 배정

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let arr = [];

// for (let i = 1; i <= n; i++) {
//   arr.push(input[i].split(' ').map(Number));
// }

// arr.sort(function (a, b) {
//   if (a[1] !== b[1]) {
//     return a[1] - b[1];
//   } else {
//     return a[0] - b[0];
//   }
// });

// let count = 1;
// let cur = 0;
// for (let i = 1; i < n; i++) {
//   if (arr[cur][1] <= arr[i][0]) {
//     count += 1;
//     cur = i;
//   }
// }

// console.log(count);

//10. 풍선 맞추기

// const rl = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   let data = input[1].split(' ').map(Number);
//   let arrow = new Array(1000001).fill(0);
//   let count = 0;
//   for (let x of data) {
//     if (arrow[x] > 0) {
//       arrow[x] -= 1;
//       arrow[x - 1] += 1;
//     } else {
//       arrow[x - 1] += 1;
//       count += 1;
//     }
//   }
//   console.log(count);
//   process.exit();
// });

//11.피보나치 수열

// const rl = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   let pibo = [];
//   pibo.push(0);
//   pibo.push(1);
//   while (pibo[pibo.length - 1] < 1e9) {
//     pibo.push(pibo[pibo.length - 1] + pibo[pibo.length - 2]);
//   }

//   let testCase = Number(input[0]);
//   for (let tc = 1; tc <= testCase; tc++) {
//     let n = Number(input[tc]);
//     let result = [];

//     let i = pibo.length - 1;
//     while (n > 0) {
//       if (n >= pibo[i]) {
//         n -= pibo[i];
//         result.push(pibo[i]);
//       }
//       i--;
//     }

//     let answer = '';
//     for (let i = result.length - 1; i >= 0; i--) {
//       answer += result[i] + ' ';
//     }
//     console.log(answer);
//   }
// });

// 12.박 터뜨리기

// const rl = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   let [N, K] = input[0].split(' ').map(Number);
//   let sum = 0;
//   for (let i = 1; i <= K; i++) {
//     sum += i;
//   }

//   if(N<sum){
//     console.log(-1);
//   }else{
//     N-=sum;
//     if(N%K==0){
//       console.log(K-1);
//     }else{
//       console.log(K);
//     }
//   }
// });

//13. 회문

// const rl = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   function palindrome(x) {
//     return x === x.split('').reverse().join('');
//   }

//   let testCases = Number(input[0]);

//   for (let tc = 1; tc <= testCases; tc++) {
//     let data = input[tc];
//     let n = data.length;
//     let ground = false;
//     if (palindrome(data)) {
//       console.log(0);
//     } else {
//       for (let i = 0; i < Math.floor(data.length / 2); i++) {
//         if (data[i] !== data[n - i - 1]) {
//           if (palindrome(data.slice(0, i) + data.slice(i + 1, n))) {
//             ground = true;
//           }
//           if (palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n))) {
//             ground = true;
//           }
//           break;
//         }
//       }
//       if (ground) {
//         console.log(1);
//       } else {
//         console.log(2);
//       }
//     }
//   }
// });

//14. 박스 채우기

// const rl = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let input = [];
// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   function nearestSquare(x) {
//     let i = 1;
//     while (2 ** i <= x) {
//       i += 1;
//     }
//     return i - 1;
//   }

//   let [length, width, height] = input[0].split(' ').map(Number);
//   let cubes = new Array(20).fill(0);
//   let n = Number(input[1]);
//   for (let i = 2; i <= n + 1; i++) {
//     let [a, b] = input[i].split(' ').map(Number);
//     cubes[a] = b;
//   }

//   let size = 19;
//   size = nearestSquare(length);
//   size = Math.min(nearestSquare(width), size);
//   size = Math.min(nearestSquare(height), size);

//   let res = 0;
//   let used = 0;

//   for (let i = size; i >= 0; i--) {
//     used *= 8;
//     let cur = 2 ** i;
//     let required = Math.floor(length / cur) * Math.floor(width / cur) * Math.floor(height / cur) - used;

//     let usage = Math.min(required, cubes[i]);
//     res += usage;
//     used += usage;
//   }
//   if (used === length * width * height) {
//     console.log(res);
//   } else {
//     console.log(-1);
//   }
// });

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function nearestSquare(x) {
  let i = 0;
  while (2 ** i <= x) {
    i++;
  }
  return i - 1;
}

let [length, width, height] = input[0].split(' ').map(Number);
let n = Number(input[1]);
let cubes = new Array(20).fill(0);

for (let i = 2; i < n + 2; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  cubes[a] = b;
}

let size = nearestSquare(length);
size = Math.min(nearestSquare(width), size);
size = Math.min(nearestSquare(height), size);

let res = 0;
let used = 0;
for (let i = size; i >= 0; i--) {
  used *= 8;
  let cur = 2 ** i;
  let required = Math.floor(length / cur) * Math.floor(width / cur) * Math.floor(height / cur) - used;
  let usage = Math.min(required, cubes[i]);

  res += usage;
  used += usage;
}

if (used === length * width * height) {
  console.log(res);
} else {
  console.log(-1);
}
