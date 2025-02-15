//1-1. min/max

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let b = input[1].split(' ').map(Number);

// let maxN = Math.max(...b);
// let minN = Math.min(...b);

// console.log(`${minN} ${maxN}`);

//1-2. min/max

// let fs = require('fs');

// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let arr = input[1].split(' ').map(Number);

// let minValue = 1000001;
// let maxValue = -1000001;

// for (let i = 0; i < n; i++) {
//   if (minValue > arr[i]) minValue = arr[i];
//   if (maxValue < arr[i]) maxValue = arr[i];
// }

// console.log(`${minValue} ${maxValue}`);

//1-3. min/max

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let array = input[1].split(' ').map(Number);

// let minValue = array.reduce((a, b) => Math.min(a, b));
// let maxValue = array.reduce((a, b) => Math.max(a, b));

// console.log(`${minValue} ${maxValue}`);

//2-1. max

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let maxValue = 0;
// let count = 0;

// for (let i = 0; i < 9; i++) {
//   if (maxValue < Number(input[i])) {
//     maxValue = Number(input[i]);
//     count = i + 1;
//   }
// }

// console.log(maxValue + '\n' + count);

//2-2. max

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let value = input.map(Number);
// let maxValue = value.reduce((a, b) => Math.max(a, b));

// console.log(maxValue + '\n' + (value.indexOf(maxValue) + 1));

//3. modulus

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let value = input.map(Number);
// let mySet = new Set();

// for (let i = 0; i < 10; i++) {
//   mySet.add(value[i] % 42);
// }

// console.log(mySet.size);

//4. 평균은 넘겠지
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let T = Number(input[0]);

// for (let t = 1; t <= T; t++) {
//   let data = input[t].split(' ').map(Number);
//   let students = data[0];
//   let totalScore = 0;

//   for (let i = 1; i <= students; i++) {
//     totalScore += data[i];
//   }

//   let average = totalScore / students;
//   let cnt = 0;

//   for (let i = 1; i <= students; i++) {
//     if (average < data[i]) {
//       cnt += 1;
//     }
//   }
//   console.log(`${((cnt / students) * 100).toFixed(3)}%`);
// }

//5. 평균

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let scores = input[1].split(' ').map(Number);
// let maxScore = scores.reduce((a, b) => Math.max(a, b));

// let updated = [];

// for (i = 0; i < n; i++) {
//   updated.push((scores[i] / maxScore) * 100);
// }

// console.log(updated.reduce((a, b) => a + b) / n);
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

let scores = input[1].split(' ').map(Number);
let maxScore = scores.reduce((a, b) => Math.max(a, b));

let newTotal = 0;

for (i = 0; i < n; i++) {
  newTotal += (scores[i] / maxScore) * 100;
}

console.log(newTotal / n);
