//1. 재귀함수

// function binarySearch(arr, target, start, end) {
//   if (start > end) {
//     return -1;
//   }
//   let mid = parseInt((start + end) / 2);
//   if (arr[mid] == target) {
//     return mid;
//   } else if (arr[mid] > target) {
//     return binarySearch(arr, target, start, mid - 1);
//   } else {
//     return binarySearch(arr, target, mid + 1, end);
//   }
// }

// let n = 10;
// let target = 7;
// arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 10];

// let result = binarySearch(arr, target, 0, n - 1);
// if (result == -1) {
//   console.log('원소가 존재하지 않습니다.');
// } else {
//   console.log(`${result + 1}번째 원소입니다.`);
// }

//2. 반복문

// function binarySearch(arr, target, start, end) {
//   while (start <= end) {
//     let mid = parseInt((start + end) / 2);
//     if (arr[mid] == target) {
//       return mid;
//     } else if (arr[mid] > target) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//     return -1;
//   }
//   let n = 10;
//   let target = 7;
//   arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

//   let result = binarySearch(arr, target, 0, n - 1);
//   if (result == -1) {
//     console.log('원소가 존재하지 않습니다.');
//   } else {
//     console.log(`${result + 1}번째 원소입니다.`);
//   }
// }

//3.정렬된 배열에서 특정 원소의 개수 구하기
// function lowerBound(arr, target, start, end) {
//   while (start < end) {
//     let mid = parseInt((start + end) / 2);
//     if (arr[mid] >= target) {
//       end = mid;
//     } else {
//       start = mid + 1;
//     }
//     return end;
//   }
// }

// function upperBound(arr, target, start, end) {
//   while (start < end) {
//     let mid = parseInt((start + end) / 2);
//     if (arr[mid] > target) {
//       end = mid;
//     } else {
//       start = mid + 1;
//     }
//     return end;
//   }
// }

// function countByRange(arr, leftValue, rightValue) {
//   let rightIndex = upperBound(arr, rightValue, 0, arr.length);
//   let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
//   return rightIndex - leftIndex;
// }

// let arr = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9];
// console.log(countByRange(arr, 4, 4)); //값이 4인 데이터 출력
// console.log(countByRange(arr, -1, 3)); //[-1,3] 범위에 있는 데이터 개수 출력

//4.파라메트릭 서치 이해하기

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let arr = input[1].split(' ').map(Number);
// let m = Number(input[2]);

// let start = 1;
// let end = arr.reduce((a, b) => Math.max(a, b));

// let result = 0;
// while (start <= end) {
//   let mid = parseInt((start + end) / 2);
//   let total = 0;
//   for (let x of arr) {
//     total += Math.min(mid, x);
//   }
//   if (total <= m) {
//     result = mid;
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }
// console.log(result);

//5. 나무 자르기

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [N, M] = input[0].split(' ').map(Number);
// let arr = input[1].split(' ').map(Number);

// let start = 0;
// let end = arr.reduce((a, b) => Math.max(a, b));

// let answer = 0;
// while (start <= end) {
//   let mid = parseInt((start + end) / 2);
//   let total = 0;
//   for (let x of arr) {
//     if (x > mid) {
//       total += x - mid;
//     }
//   }
//   if (total >= M) {
//     answer = mid;
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }
// console.log(answer);

// 6. 랜선 자르기

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [K, N] = input[0].split(' ').map(Number);
// let arr = input.slice(1, K + 1).map(Number);

// let start = 1;
// let end = arr.reduce((a, b) => Math.max(a, b));

// let answer = 0;
// while (start <= end) {
//   let mid = parseInt((start + end) / 2);
//   let total = 0;
//   for (let x of arr) {
//     total += Math.floor(x / mid);
//   }
//   if (total >= N) {
//     answer = mid;
//     start = mid + 1;
//   } else {
//     end = mid - 1;
//   }
// }

// console.log(answer);

//7. 숫자 카드

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// function lowerBound(arr, target, start, end) {
//   while (start < end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] >= target) {
//       end = mid;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return end;
// }

// function upperBound(arr, target, start, end) {
//   while (start < end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] > target) {
//       end = mid;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return end;
// }

// function countByRange(arr, leftValue, rightValue) {
//   let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
//   let rightIndex = upperBound(arr, rightValue, 0, arr.length);
//   return rightIndex - leftIndex;
// }

// let N = Number(input[0]);
// let M = Number(input[2]);

// let cards = input[1].split(' ').map(Number);
// let numbers = input[3].split(' ').map(Number);

// cards.sort((a, b) => a - b);

// let answer = '';
// for (let x of numbers) {
//   let count = countByRange(cards, x, x);
//   answer += count + ' ';
// }

// console.log(answer);

//8. 병사 배치하기

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// function lowerBound(arr, target, start, end) {
//   while (start < end) {
//     let mid = Math.floor((start + end) / 2);
//     if (arr[mid] >= target) {
//       end = mid;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return end;
// }

// let N = Number(input[0]);
// let arr = input[1].split(' ').map(Number);

// arr.reverse();

// let d = [0];
// for (let x of arr) {
//   if (d[d.length - 1] < x) {
//     d.push(x);
//   } else {
//     let index = lowerBound(d,x,0,d.length);
//     d[index] = x;
//   }
// }

// console.log(N-(d.length-1))

//9.K번째 수

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let N = Number(input[0]);
// let k = Number(input[1]);

// let start = 1;
// let end = 10 ** 10;

// let result = 0;
// while (start <= end) {
//   let mid = Math.floor((start + end) / 2);
//   let total = 0;
//   for (let i = 1; i <= N; i++) {
//     total += Math.min(parseInt(mid / i), N);
//   }
//   if (total >= k) {
//     end = mid - 1;
//     result = mid;
//   } else {
//     start = mid + 1;
//   }
// }

// console.log(result);
