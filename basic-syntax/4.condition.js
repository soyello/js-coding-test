//1. 시험점수

// let fs = require('fs');

// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let score = parseInt(input[0]);

// if (score >= 90 && score <= 100) {
//   console.log('A');
// } else if (score >= 80 && score < 90) {
//   console.log('B');
// } else if (score >= 70 && score < 80) {
//   console.log('C');
// } else if (score >= 60 && score < 70) {
//   console.log('D');
// } else {
//   console.log('F');
// }

//2. 알람시계

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const time = input[0].split(' ');
// const hour = parseInt(time[0]);
// const minute = parseInt(time[1]);

// if (minute >= 45) {
//   console.log(hour + ' ' + (minute - 45));
// } else {
//   newHour = hour === 0 ? 23 : hour - 1;
//   console.log(newHour + ' ' + (minute + 15));
// }

//3. 오븐시계

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [a, b] = input[0].split(' ').map(Number);
// let c = Number(input[1]);

// let totalMinutes = a * 60 + b + c;
// totalMinutes %= 1440;
// let newHour = parseInt(totalMinutes / 60);
// let newMinute = totalMinutes % 60;

// console.log(newHour + ' ' + newMinute);

//4. 주사위 세개

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let [a, b, c] = input[0].split(' ').map(Number);

if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b) {
  console.log(1000 + 100 * a);
} else if (b === c) {
  console.log(1000 + 100 * b);
} else if (a === c) {
  console.log(1000 + 100 * a);
} else {
  let y = Math.max(a, b, c);
  console.log(100 * y);
}
