//1. 덧셈

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on('line', (line) => {
//   let [a, b] = line.split(' ').map(Number);
//   console.log(a + b);
//   rl.close;
// });

//2. 곱셈

// const readline = required('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on('line', (line) => {
//   let [a, b] = line.split(' ').map(Number);

//   console.log(a * b);
//   rl.close();
// });

//3. 사칙연산

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  let [a, b] = line.split(' ').map(Number);
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(parseInt(a / b));
  console.log(a % b);

  rl.close();
});
