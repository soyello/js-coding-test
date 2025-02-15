//1.숫자의합

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let numbers = input[1];

// let total = 0;

// for (i = 0; i < n; i++) {
//   total += Number(numbers[i]);
// }

// console.log(total);

//2. 문자열 반복

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let T = Number(input[0]);

// for (let i = 1; i <= T; i++) {
//   let [r, s] = input[i].split(' ');

//   let updatedString = '';
//   for (let j = 0; j < s.length; j++) {
//     updatedString += s[j].repeat(r);
//   }
//   console.log(updatedString);
// }

//3. 상수

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [a, b] = input[0].split(' ');
// let newA = a.split('').reverse().join('');
// let newB = b.split('').reverse().join('');

// let answer = Math.max(newA, newB);

// console.log(answer);

//4. 그룹단어 체커

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let count = 0;

// function check(data) {
//   let setData = new Set();
//   let prev = '';
//   for (let char of data) {
//     if (setData.has(char) && char !== prev) {
//       return false;
//     }
//     setData.add(char);
//     prev = char;
//   }
//   return true;
// }

// for (i = 1; i <= n; i++) {
//   if (check(input[i])) {
//     count += 1;
//   }
// }

// console.log(count);

//5. 단어의 개수
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let strings = input[0].trim().split(' ');

// if ((strings = '')) {
//   console.log(0);
// } else {
//   console.log(strings.length);
// }

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let strings = input[0].trim().split(' ').filter(Boolean);

console.log(strings.length);
