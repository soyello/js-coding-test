//1.N과 M

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [n, m] = input[0].split(' ').map(Number);

// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr.push(i);
// }

// let visited = new Array(8).fill(false);
// let selected = [];

// let answer = '';
// function dfs(arr, depth) {
//   if (depth == m) {
//     let result = [];
//     for (let i of selected) {
//       result.push(arr[i]);
//     }
//     for (let x of result) {
//       answer += x + ' ';
//     }
//     answer += '\n';
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (visited[i]) {
//       continue;
//     }
//     visited[i] = true;
//     selected.push(i);
//     dfs(arr, depth + 1);
//     visited[i] = false;
//     selected.pop();
//   }
// }
// dfs(arr, 0);
// console.log(answer);

//2. 모든 순열

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);

// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr.push(i);
// }

// let visited = new Array(8).fill(false);
// let selected = [];

// let answer = '';

// function dfs(arr, depth) {
//   if (depth == n) {
//     let result = [];
//     for (let i of selected) {
//       result.push(arr[i]);
//     }
//     for (let x of result) {
//       answer += x + ' ';
//     }
//     answer += '\n';
//     return;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (visited[i]) {
//       continue;
//     }
//     visited[i] = true;
//     selected.push(i);
//     dfs(arr, depth + 1);
//     visited[i] = false;
//     selected.pop();
//   }
// }
// dfs(arr, 0);
// console.log(answer);

//3. 0만들기

// function dfs(result, depth) {
//   if (depth == n - 1) {
//     let str = '';
//     for (let i = 0; i < n - 1; i++) {
//       str += arr[i] + result[i];
//     }
//     str += arr[n - 1] + '';
//     let cur = eval(str.split(' ').join(''));
//     if (cur === 0) {
//       console.log(str);
//     }
//     return;
//   }
//   for (let x of [' ', '+', '-']) {
//     result.push(x);
//     dfs(result, depth + 1);
//     result.pop();
//   }
// }

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let testCase = Number(input[0]);
// let n = 0;
// let arr = [];

// for (let tc = 1; tc <= testCase; tc++) {
//   n = Number(input[tc]);
//   arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   dfs([], 0);
//   console.log();
// }

//4. N과 M(2)

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [n, m] = input[0].split(' ').map(Number);

// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr.push(i);
// }

// let selected = [];

// let answer = '';
// function dfs(arr, depth, start) {
//   if (depth == m) {
//     let result = [];
//     for (let i of selected) {
//       result.push(arr[i]);
//     }
//     for (let x of result) {
//       answer += x + ' ';
//     }
//     answer += '\n';
//     return;
//   }
//   for (let i = start; i < n; i++) {
//     selected.push(i);
//     dfs(arr, depth + 1, i + 1);
//     selected.pop();
//   }
// }
// dfs(arr, 0, 0);
// console.log(answer);

//5. N과 M(3)

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [n, m] = input[0].split(' ').map(Number);

// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr.push(i);
// }
// let selected = [];
// let answer = '';

// function dfs(arr, depth) {
//   if (depth == m) {
//     let result = [];
//     for (let i of selected) {
//       result.push(arr[i]);
//     }
//     for (let x of result) {
//       answer += x + ' ';
//     }
//     answer += '\n';
//     return;
//   }
//   for (let i = 0; i < n; i++) {
//     selected.push(i);
//     dfs(arr, depth + 1);
//     selected.pop();
//   }
// }
// dfs(arr, 0);
// console.log(answer);

//6. N과 M(4)
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [n, m] = input[0].split(' ').map(Number);

// let arr = [];
// for (let i = 1; i <= n; i++) {
//   arr.push(i);
// }

// let selected = [];

// let answer = '';
// function dfs(arr, depth, start) {
//   if (depth == m) {
//     let result = [];
//     for (let i of selected) {
//       result.push(arr[i]);
//     }
//     for (let x of result) {
//       answer += x + ' ';
//     }
//     answer += '\n';
//     return;
//   }
//   for (let i = start; i < n; i++) {
//     selected.push(i);
//     dfs(arr, depth + 1, i);
//     selected.pop();
//   }
// }
// dfs(arr, 0, 0);
// console.log(answer);

//7. 외판원 순회 2

// function dfs(depth) {
//   if (depth == n - 1) {
//     let totalCost = 0;
//     let cur = 1;
//     for (let i = 0; i < n - 1; i++) {
//       let nextNode = result[i];
//       let cost = graph[cur][nextNode];
//       if (cost == 0) return;
//       totalCost += cost;
//       cur = nextNode;
//     }
//     let cost = graph[cur][1];
//     if (cost == 0) return;
//     totalCost += cost;
//     minValue = Math.min(minValue, totalCost);
//     return;
//   }
//   for (let i = 2; i <= n; i++) {
//     if (visited[i]) continue;
//     visited[i] = true;
//     result.push(i);
//     dfs(depth + 1);
//     visited[i] = false;
//     result.pop();
//   }
// }
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let visited = new Array(n + 1).fill(false);
// let result = [];
// let graph = [];
// let minValue = 1e9;

// for (let i = 0; i <= n; i++) {
//   graph.push([0]);
// }
// for (let i = 1; i <= n; i++) {
//   let line = input[i].split(' ').map(Number);
//   for (let j = 0; j < n; j++) {
//     graph[i].push(line[j]);
//   }
// }

// dfs(0);
// console.log(minValue);

//8. 도영이가 만든 맛있는 음식

// function dfs(depth, start) {
//   if (depth >= 1) {
//     let totalX = 1;
//     let totalY = 0;
//     for (let i of result) {
//       let [x, y] = arr[i];
//       totalX *= x;
//       totalY += y;
//     }
//     answer = Math.min(answer, Math.abs(totalX - totalY));
//   }
//   for (let i = start; i < n; i++) {
//     result.push(i);
//     dfs(depth + 1, i + 1);
//     result.pop();
//   }
// }

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let arr = [];
// for (let i = 1; i <= n; i++) {
//   let [x, y] = input[i].split(' ').map(Number);
//   arr.push([x, y]);
// }

// let answer = 1e9;
// let result = [];
// dfs(0, 0);
// console.log(answer);

//9. 로또
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// function dfs(arr, depth, start) {
//   if (depth == 6) {
//     let result = [];
//     for (let i of selected) {
//       result.push(arr[i]);
//     }
//     for (let x of result) {
//       answer += x + ' ';
//     }
//     answer += '\n';
//     return;
//   }
//   for (let i = start; i < arr.length; i++) {
//     selected.push(i);
//     dfs(arr, depth + 1, i + 1);
//     selected.pop();
//   }
// }

// for (let i = 0; i < input.length; i++) {
//   let data = input[i].split(' ').map(Number);
//   if (data[0] == 0) {
//     break;
//   } else {
//     selected = [];
//     arr = data.slice(1);
//     answer = '';
//     dfs(arr, 0, 0);
//     console.log(answer);
//   }
// }

//10. N-Queen

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let queens = [];

// function possible(x, y) {
//   for (let [a, b] of queens) {
//     if (a == x || b == y) return false;
//     if (Math.abs(a - x) == Math.abs(b - y)) return false;
//   }
//   return true;
// }

// let cnt = 0;
// function dfs(row) {
//   if (row == n) cnt += 1;
//   for (let i = 0; i < n; i++) {
//     if (!possible(row, i)) continue;
//     queens.push([row, i]);
//     dfs(row + 1);
//     queens.pop();
//   }
// }
// dfs(0);
// console.log(cnt);

//11. 알파벳

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [r, c] = input[0].split(' ').map(Number);
// let arr = [];
// for (let i = 1; i <= r; i++) {
//   arr.push(input[i]);
// }

// let maxDepth = 0;
// let visited = new Set();

// let dx = [-1, 1, 0, 0];
// let dy = [0, 0, -1, 1];

// function dfs(depth, x, y) {
//   maxDepth = Math.max(maxDepth, depth);

//   for (let i = 0; i < 4; i++) {
//     let nx = x + dx[i];
//     let ny = y + dy[i];

//     if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
//     if (visited.has(arr[nx][ny])) continue;
//     visited.add(arr[nx][ny]);
//     dfs(depth + 1, nx, ny);
//     visited.delete(arr[nx][ny]);
//   }
// }

// visited.add(arr[0][0]);
// dfs(1, 0, 0);
// console.log(maxDepth);

//12. 부등호

// function dfs(depth) {
//   if (depth == k + 1) {
//     let check = true;
//     for (let i = 0; i < k; i++) {
//       if (arr[i] == '<') {
//         if (result[i] > result[i + 1]) check = false;
//       } else if (arr[i] == '>') {
//         if (result[i] < result[i + 1]) check = false;
//       }
//     }
//     if (check) {
//       current = '';
//       for (let x of result) current += x + '';
//       if (first == '') first = current;
//     }
//     return;
//   }
//   for (let i = 0; i < 10; i++) {
//     if (visited[i]) continue;
//     visited[i] = true;
//     result.push(i);
//     dfs(depth + 1);
//     visited[i] = false;
//     result.pop();
//   }
// }
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let k = Number(input[0]);
// let arr = input[1].split(' ');
// let visited = new Array(10).fill(false);
// let result = [];
// let current = '';
// let first = '';

// dfs(0);
// console.log(current + '\n' + first);
