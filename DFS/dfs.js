//1. 바이러스

// let rl = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// rl.on('line', function (line) {
//   input.push(line);
// }).on('close', function () {
//   let n = Number(input[0]);
//   let m = Number(input[1]);
//   let graph = [];

//   for (let i = 1; i <= n; i++) {
//     graph[i] = [];
//   }
//   for (let j = 2; j <= m + 1; j++) {
//     let [x, y] = input[j].split(' ').map(Number);
//     graph[x].push(y);
//     graph[y].push(x);
//   }

//   let cnt = 0;
//   let visited = new Array(n + 1).fill(false);
//   function dfs(a) {
//     visited[a] = true;
//     cnt += 1;
//     for (let x of graph[a]) {
//       if (!visited[x]) {
//         dfs(x);
//       }
//     }
//   }
//   dfs(1);
//   console.log(cnt - 1);
// });

//2. 유기농 배추

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let testCase = Number(input[0]);
// let line = 1;
// for (let i = 1; i <= testCase; i++) {
//   let [m, n, k] = input[line].split(' ').map(Number);
//   let graph = [];
//   for (let i = 0; i < n; i++) {
//     graph[i] = new Array(m);
//   }
//   for (let i = 1; i <= k; i++) {
//     let [b, a] = input[line + i].split(' ').map(Number);
//     graph[a][b] = 1;
//   }
//   let answer = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (dfs(graph, n, m, i, j)) {
//         answer += 1;
//       }
//     }
//   }
//   line += k + 1;
//   console.log(answer);
// }

// function dfs(graph, n, m, x, y) {
//   if (x <= -1 || x >= n || y <= -1 || y >= m) {
//     return false;
//   }
//   if (graph[x][y] == 1) {
//     graph[x][y] = -1;
//     dfs(graph, n, m, x - 1, y);
//     dfs(graph, n, m, x + 1, y);
//     dfs(graph, n, m, x, y - 1);
//     dfs(graph, n, m, x, y + 1);
//     return true;
//   }
//   return false;
// }

//3. 노드 사이의 거리

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [n, m] = input[0].split(' ').map(Number);
// let graph = [];
// for (let i = 1; i <= n; i++) {
//   graph[i] = [];
// }
// for (let i = 1; i < n; i++) {
//   let [x, y, cost] = input[i].split(' ').map(Number);
//   graph[x].push([y, cost]);
//   graph[y].push([x, cost]);
// }

// function dfs(x, dist) {
//   if (visited[x]) {
//     return;
//   }
//   visited[x] = true;
//   distance[x] = dist;
//   for (let [y, cost] of graph[x]) {
//     dfs(y, dist + cost);
//   }
// }

// for (let i = n; i < n + m; i++) {
//   let [a, b] = input[i].split(' ').map(Number);
//   visited = new Array(n + 1).fill(false);
//   distance = new Array(n + 1).fill(-1);

//   dfs(a, 0);
//   console.log(distance[b]);
// }

//4. 트리

// function isCycle(x, prev) {
//   visited[x] = true;
//   for (let y of graph[x]) {
//     if (!visited[y]) {
//       if (isCycle(y, x)) {
//         return true;
//       }
//     } else if (y !== prev) {
//       return true;
//     }
//   }
//   return false;
// }

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let line = 0;
// let testCase = 1;

// while (true) {
//   let [n, m] = input[line].split(' ').map(Number);
//   if (n == 0 && m == 0) {
//     break;
//   }
//   graph = [];
//   for (let i = 1; i <= n; i++) {
//     graph[i] = [];
//   }
//   for (let i = line + 1; i <= line + m; i++) {
//     let [a, b] = input[i].split(' ').map(Number);
//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   visited = new Array(n + 1).fill(false);
//   let cnt = 0;
//   for (let i = 1; i <= n; i++) {
//     if (!visited[i]) {
//       if (!isCycle(i, 0)) cnt += 1;
//     }
//   }

//   if (cnt == 0) {
//     console.log(`Case ${testCase}: No trees.`);
//   } else if (cnt == 1) {
//     console.log(`Case ${testCase}: There is one tree.`);
//   } else {
//     console.log(`Case ${testCase}: A forest of ${cnt} trees.`);
//   }

//   testCase += 1;
//   line += m + 1;
// }

//5. 치킨 배달
// function dfs(depth, start) {
//   if (depth == m) {
//     let result = [];
//     for (let i of selected) {
//       result.push(chicken[i]);
//     }
//     let sum = 0;
//     for (let [hx, hy] of house) {
//       let temp = 1e9;
//       for (let [cx, cy] of result) {
//         temp = Math.min(temp, Math.abs(hx - cx) + Math.abs(hy - cy));
//       }
//       sum += temp;
//     }
//     answer = Math.min(answer, sum);
//   }
//   for (let i = start; i < chicken.length; i++) {
//     selected.push(i);
//     dfs(depth + 1, i + 1);
//     selected.pop();
//   }
// }
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [n, m] = input[0].split(' ').map(Number);
// let chicken = [];
// let house = [];

// for (let i = 1; i <= n; i++) {
//   let line = input[i].split(' ').map(Number);
//   for (let j = 0; j < n; j++) {
//     if (line[j] == 1) house.push([i, j]);
//     if (line[j] == 2) chicken.push([i, j]);
//   }
// }

// let selected = [];
// let answer = 1e9;
// dfs(0, 0);
// console.log(answer);

//6. 단지번호 붙이기
// function dfs(x, y) {
//   if (x <= -1 || x >= n || y <= -1 || y >= n) {
//     return 0;
//   }
//   if (graph[x][y] >= 1) {
//     graph[x][y] = -1;
//     let result = 1;
//     result += dfs(x - 1, y);
//     result += dfs(x + 1, y);
//     result += dfs(x, y + 1);
//     result += dfs(x, y - 1);
//     return result;
//   }
//   return 0;
// }

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);

// let graph = [];
// for (let i = 1; i <= n; i++) {
//   graph.push(input[i].split('').map(Number));
// }

// let answer = [];
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     let current = dfs(i, j);
//     if (current > 0) {
//       answer.push(current);
//     }
//   }
// }

// answer.sort((a, b) => a - b);

// console.log(answer.length + '\n' + answer.join('\n'));

//7. 팀프로젝트

// function dfs(x, graph, visited, finished, result) {
//   visited[x] = true;
//   let y = graph[x];
//   if (!visited[y]) {
//     dfs(y, graph, visited, finished, result);
//   } else if (!finished[y]) {
//     while (y !== x) {
//       result.push(y);
//       y = graph[y];
//     }
//     result.push(x);
//   }
//   finished[x] = true;
// }
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let testCase = Number(input[0]);
// let line = 1;
// while (testCase--) {
//   let n = Number(input[line]);
//   let graph = [0, ...input[line + 1].split(' ').map(Number)];

//   let visited = new Array(n + 1).fill(false);
//   let finished = new Array(n + 1).fill(false);

//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     if (!visited[i]) dfs(i, graph, visited, finished, result);
//   }
//   line += 2;
//   console.log(n - result.length);
// }

//8. 숫자 고르기
// function dfs(x, graph, visited, finished, result) {
//   visited[x] = true;
//   let y = graph[x];
//   if (!visited[y]) {
//     dfs(y, graph, visited, finished, result);
//   } else if (!finished[y]) {
//     while (y !== x) {
//       result.push(y);
//       y = graph[y];
//     }
//     result.push(x);
//   }
//   finished[x] = true;
// }

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);

// let graph = [0];
// for (let i = 1; i <= n; i++) {
//   graph.push(Number(input[i]));
// }

// let visited = new Array(n + 1).fill(false);
// let finished = new Array(n + 1).fill(false);
// let result = [];

// for (let i = 1; i <= n; i++) {
//   if (!visited[i]) dfs(i, graph, visited, finished, result);
// }

// result.sort((a, b) => a - b);
// console.log(result.length + '\n' + result.join('\n'));

//9. 적록색약

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let graph = [];
// for (let i = 1; i <= n; i++) {
//   graph.push(input[i].split(''));
// }

// let visited = [];
// for (let i = 0; i < n; i++) {
//   visited.push(new Array(n).fill(false));
// }

// let dx = [-1, 1, 0, 0];
// let dy = [0, 0, -1, 1];

// function dfs(x, y) {
//   if (!visited[x][y]) {
//     visited[x][y] = true;
//     for (let i = 0; i < 4; i++) {
//       let nx = x + dx[i];
//       let ny = y + dy[i];
//       if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
//       if (graph[x][y] == graph[nx][ny]) dfs(nx, ny);
//     }
//     return true;
//   }
//   return false;
// }
// let result1 = 0;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (dfs(i, j)) result1 += 1;
//   }
// }

// let result2 = 0;
// visited = [];
// for (let i = 0; i < n; i++) {
//   visited.push(new Array(n).fill(false));
// }

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (graph[i][j] == 'G') graph[i][j] = 'R';
//   }
// }

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (dfs(i, j)) result2 += 1;
//   }
// }

// console.log(result1 + ' ' + result2);

//10. 연구소

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [n, m] = input[0].split(' ').map(Number);

// let data = [];
// let temp = [];

// for (let i = 1; i <= n; i++) {
//   data.push(input[i].split(' ').map(Number));
//   temp.push(new Array(m).fill(0));
// }

// let dx = [-1, 1, 0, 0];
// let dy = [0, 0, -1, 1];

// function virus(x, y) {
//   for (let i = 0; i < 4; i++) {
//     let nx = x + dx[i];
//     let ny = y + dy[i];
//     if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
//     if (temp[nx][ny] == 0) {
//       temp[nx][ny] = 2;
//       virus(nx, ny);
//     }
//   }
// }

// function getScore() {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (temp[i][j] == 0) count += 1;
//     }
//   }
//   return count;
// }

// let result = 0;
// function dfs(count) {
//   if (count == 3) {
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < m; j++) {
//         temp[i][j] = data[i][j];
//       }
//     }
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < m; j++) {
//         if (temp[i][j] == 2) virus(i, j);
//       }
//     }
//     result = Math.max(result, getScore());
//     return;
//   }
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (data[i][j] == 0) {
//         data[i][j] = 1;
//         dfs(count + 1);
//         data[i][j] = 0;
//       }
//     }
//   }
// }

// dfs(0);
// console.log(result);

//11. 차이를 최대로

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let arr = input[1].split(' ').map(Number);

// let visited = new Array(n + 1).fill(false);
// let selected = [];
// let maxValue = -1e9;
// function dfs(depth) {
//   if (depth == n) {
//     let result = [];
//     let current = 0;
//     for (let i of selected) {
//       result.push(arr[i]);
//     }
//     for (let i = 0; i < n - 1; i++) {
//       current += Math.abs(result[i] - result[i + 1]);
//     }
//     maxValue = Math.max(maxValue, current);
//     return;
//   }
//   for (let i = 0; i < n; i++) {
//     if (visited[i]) continue;
//     visited[i] = true;
//     selected.push(i);
//     dfs(depth + 1);
//     visited[i] = false;
//     selected.pop();
//   }
// }

// dfs(0);
// console.log(maxValue);

//12. 연산자 끼워넣기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);
let [add, sub, mul, div] = input[2].split(' ').map(Number);

let minValue = 1e9;
let maxValue = -1e9;
function dfs(index, value) {
  if (index == n) {
    minValue = Math.min(value, minValue);
    maxValue = Math.max(value, maxValue);
    return;
  }
  if (add > 0) {
    add--;
    dfs(index + 1, value + arr[index]);
    add++;
  }
  if (sub > 0) {
    sub--;
    dfs(index + 1, value - arr[index]);
    sub++;
  }
  if (mul > 0) {
    mul--;
    dfs(index + 1, value * arr[index]);
    mul++;
  }
  if (div > 0) {
    div--;
    dfs(index + 1, ~~(value / arr[index]));
    div++;
  }
}
dfs(1, arr[0]);
console.log(maxValue + '\n' + minValue);
