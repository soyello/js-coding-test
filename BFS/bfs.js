// class Queue {
//   constructor() {
//     this.items = {};
//     this.headIndex = 0;
//     this.tailIndex = 0;
//   }
//   enqueue(item) {
//     this.items[this.tailIndex] = item;
//     this.tailIndex++;
//   }
//   dequeue() {
//     const item = this.items[this.headIndex];
//     delete this.items[this.headIndex];
//     this.headIndex++;
//     return item;
//   }
//   peek() {
//     return this.items[this.headIndex];
//   }
//   getLength() {
//     return this.tailIndex - this.headIndex;
//   }
// }

//1. 숨바꼭질

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [n, k] = input[0].split(' ').map(Number);
// const MAX = 100001;
// let visited = new Array(MAX).fill(0);

// function bfs() {
//   queue = new Queue();
//   queue.enqueue(n);
//   while (queue.getLength() != 0) {
//     let cur = queue.dequeue();
//     if (cur == k) {
//       return visited[cur];
//     }
//     for (let i of [cur + 1, cur - 1, cur * 2]) {
//       if (i < 0 || i >= MAX) continue;
//       if (visited[i] == 0) {
//         visited[i] = visited[cur] + 1;
//         queue.enqueue(i);
//       }
//     }
//   }
// }
// console.log(bfs());

//2. 나이트의 이동

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let testCases = Number(input[0]);

// let dx = [-2, -1, 1, 2, 2, 1, -1, -2];
// let dy = [1, 2, 2, 1, -1, -2, -2, -1];

// let line = 1;
// while (testCases--) {
//   let l = Number(input[line]);
//   let [x, y] = input[line + 1].split(' ').map(Number);
//   let [targetX, targetY] = input[line + 2].split(' ').map(Number);

//   let visited = [];
//   for (let i = 0; i < l; i++) {
//     visited.push(new Array(l).fill(0));
//   }
//   visited[x][y] = 1;
//   queue = new Queue();
//   queue.enqueue([x, y]);
//   while (queue.getLength() != 0) {
//     let cur = queue.dequeue();
//     let a = cur[0];
//     let b = cur[1];
//     for (let i = 0; i < 8; i++) {
//       let nx = a + dx[i];
//       let ny = b + dy[i];
//       if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;
//       if (visited[nx][ny] == 0) {
//         visited[nx][ny] = visited[a][b] + 1;
//         queue.enqueue([nx, ny]);
//       }
//     }
//   }
//   line += 3;
//   console.log(visited[targetX][targetY] - 1);
// }

//3. 이분 그래프
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let testCase = Number(input[0]);
// let line = 1;
// while (testCase--) {
//   let [v, e] = input[line].split(' ').map(Number);
//   let graph = [];
//   for (let i = 1; i <= v; i++) graph[i] = [];
//   for (let j = 1; j <= e; j++) {
//     let [u, v] = input[line + j].split(' ').map(Number);
//     graph[u].push([v]);
//     graph[v].push([u]);
//   }
//   let visited = new Array(v + 1).fill(-1);
//   for (let i = 1; i <= v; i++) {
//     if (visited[i] == -1) bfs(i, graph, visited);
//   }
//   line += e + 1;
//   if (isbiP(graph, visited)) console.log('YES');
//   else console.log('NO');
// }

// function bfs(x, graph, visited) {
//   queue = new Queue();
//   queue.enqueue(x);
//   visited[x] = 0;
//   while (queue.getLength() != 0) {
//     let a = queue.dequeue();
//     for (let b of graph[a]) {
//       if (visited[b] == -1) {
//         visited[b] = (visited[a] + 1) % 2;
//         queue.enqueue(b);
//       }
//     }
//   }
// }
// function isbiP(graph, visited) {
//   for (let i = 1; i < visited.length; i++) {
//     for (let j of graph[i]) {
//       if (visited[i] == visited[j]) return false;
//     }
//   }
//   return true;
// }

//4.4연산
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [s, t] = input[0].split(' ').map(Number);
// let visited = new Set([s]);
// let found = false;

// if (s == t) {
//   console.log(0);
//   process.exit();
// }

// queue = new Queue();
// queue.enqueue([s, '']);
// while (queue.getLength() != 0) {
//   let [value, opers] = queue.dequeue();
//   if (value > 1e9) continue;
//   if (value == t) {
//     console.log(opers);
//     found = true;
//     break;
//   }

//   for (let oper of ['*', '+', '-', '/']) {
//     let nextValue = value;
//     if (oper == '*') nextValue *= value;
//     if (oper == '+') nextValue += value;
//     if (oper == '-') nextValue -= value;
//     if (oper == '/' && value != 0) nextValue = 1;

//     if (!visited.has(nextValue)) {
//       queue.enqueue([nextValue, opers + oper]);
//       visited.add(nextValue);
//     }
//   }
// }
// if (!found) console.log(-1);

//5. 경쟁적 전염

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [n, k] = input[0].split(' ').map(Number);
// let graph = [];
// let data = [];
// for (let i = 0; i < n; i++) {
//   graph.push(input[i + 1].split(' ').map(Number));
//   for (let j = 0; j < n; j++) {
//     if (graph[i][j] != 0) {
//       data.push([graph[i][j], 0, i, j]);
//     }
//   }
// }
// data.sort((a, b) => a[0] - b[0]);
// queue = new Queue();
// for (let i of data) {
//   queue.enqueue(i);
// }
// let [targetS, targetX, targetY] = input[n + 1].split(' ').map(Number);

// let dx = [-1, 1, 0, 0];
// let dy = [0, 0, -1, 1];

// while (queue.getLength() != 0) {
//   let [virus, s, x, y] = queue.dequeue();
//   if (s == targetS) break;
//   for (let i = 0; i < 4; i++) {
//     let nx = x + dx[i];
//     let ny = y + dy[i];
//     if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
//       if (graph[nx][ny] == 0) {
//         graph[nx][ny] = virus;
//         queue.enqueue([virus, s + 1, nx, ny]);
//       }
//     }
//   }
// }

// console.log(graph[targetX - 1][targetY - 1]);

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
  enque(item) {
    this.items[this.tail] = item;
    this.tail++;
  }
  deque() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.items[this.head];
  }
  getLength() {
    return this.tail - this.head;
  }
}

//6. 특정 거리의 도시 찾기

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [n, m, k, x] = input[0].split(' ').map(Number);
// let graph = [];
// for (let i = 1; i <= n; i++) {
//   graph[i] = [];
// }
// for (let i = 1; i <= m; i++) {
//   let [a, b] = input[i].split(' ').map(Number);
//   graph[a].push(b);
// }

// let distance = new Array(n + 1).fill(-1);
// distance[x] = 0;

// queue = new Queue();
// queue.enque(x);

// while (queue.getLength() != 0) {
//   let now = queue.deque();
//   for (let i of graph[now]) {
//     if (distance[i] == -1) {
//       distance[i] = distance[now] + 1;
//       queue.enque(i);
//     }
//   }
// }

// let check = false;
// for (let i = 1; i <= n; i++) {
//   if (distance[i] == k) {
//     console.log(i);
//     check = true;
//   }
// }

// if (!check) console.log(-1);

//7. 환승

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [n, k, m] = input[0].split(' ').map(Number);
// let graph = [];
// for (let i = 1; i <= n + m; i++) {
//   graph[i] = [];
// }
// for (let i = 1; i <= m; i++) {
//   let arr = input[i].split(' ').map(Number);
//   for (let x of arr) {
//     graph[x].push(n + i);
//     graph[n + i].push(x);
//   }
// }

// let visited = new Set([1]);
// queue = new Queue();
// queue.enque([1, 1]);
// let found = false;
// while (queue.getLength() != 0) {
//   let [now, dist] = queue.deque();
//   if (now == n) {
//     console.log(Math.floor(dist / 2) + 1);
//     found = true;
//     break;
//   }

//   for (let x of graph[now]) {
//     if (!visited.has(x)) {
//       visited.add(x);
//       queue.enque([x, dist + 1]);
//     }
//   }
// }

// if (!found) console.log(-1);

//8. 결혼식

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let m = Number(input[1]);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph[i] = [];
}
for (let i = 2; i <= m + 1; i++) {
  let [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let visited = new Array(n + 1).fill(-1);
queue = new Queue();
queue.enque(1);
let count = 1;
while (queue.getLength() != 0) {
  let now = queue.deque();
  for (let x of graph[now]) {
    if (visited[x] == -1) {
      visited[x] = 1;
      count += 
      queue.enque(x);
    }
  }
}
