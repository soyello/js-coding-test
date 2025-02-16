//1-1. 세수 정렬 - sort

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let arr = input[0].split(' ').map(Number);
// arr.sort(function (a, b) {
//   return a - b;
// });

// let answer = '';
// for (let i = 0; i < arr.length; i++) {
//   answer += arr[i] + '';
// }
// console.log(answer);

//1-2. 세수 정렬 - 선택 정렬

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
// }

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let arr = input[0].split(' ').map(Number);
// selectionSort(arr);

// let answer = '';
// for (let i = 0; i < arr.length; i++) {
//   answer += arr[i] + ' ';
// }

// console.log(answere);

//2-1. 수 정렬
// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let numberArr = [];
// for (let i = 1; i <= n; i++) {
//   numberArr.push(Number(input[i]));
// }

// numberArr.sort(function (a, b) {
//   return a - b;
// });

// for (let i = 0; i < numberArr.length; i++) {
//   console.log(numberArr[i]);
// }

//2-2. 수 정렬
// function selectionSorting(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
// }

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let numbersArr = [];
// for (let i = 1; i <= n; i++) {
//   numbersArr.push(Number(input[i]));
// }

// selectionSorting(numbersArr);

// for (let i = 0; i < numbersArr.length; i++) {
//   console.log(numbersArr[i]);
// }

//3-1. 수 정렬하기 2

// function merge(arr, left, mid, right) {
//   let i = left;
//   let j = mid + 1;
//   let k = left;
//   while (i <= mid && j <= right) {
//     if (arr[i] < arr[j]) {
//       sorted[k++] = arr[i++];
//     } else {
//       sorted[k++] = arr[j++];
//     }
//   }
//   if (mid < i) {
//     for (; j <= right; j++) {
//       sorted[k++] = arr[j];
//     }
//   } else {
//     for (; i <= mid; i++) {
//       sorted[k++] = arr[i];
//     }
//   }
//   for (let a = left; a <= right; a++) {
//     arr[a] = sorted[a];
//   }
// }

// function mergeSort(arr, left, right) {
//   if (left < right) {
//     let mid = parseInt((left + right) / 2);
//     mergeSort(arr, left, mid);
//     mergeSort(arr, mid + 1, right);
//     merge(arr, left, mid, right);
//   }
// }

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let array = [];

// for (let i = 1; i <= n; i++) {
//   array.push(Number(input[i]));
// }

// let sorted = Array.from({ length: array.length }, () => 0);
// mergeSort(array, 0, array.length - 1);

// let answer = '';
// for (let j = 0; j < array.length; j++) {
//   answer += array[j] + '\n';
// }

// console.log(answer);

//4-1. K번째 수

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let condition = input[0].split(' ').map(Number);

// let n = condition[0];
// let count = condition[1];
// let array = [];
// let numbers = input[1].split(' ').map(Number);

// for (let i = 0; i < n; i++) {
//   array.push(numbers[i]);
// }
// let sorted = new Array(n);

// mergeSort(array, 0, array.length - 1);

// console.log(array[count - 1]);

// function merge(arr, left, mid, right) {
//   let i = left;
//   let j = mid + 1;
//   let k = left;
//   while (i <= mid && j <= right) {
//     if (arr[i] <= arr[j]) {
//       sorted[k++] = arr[i++];
//     } else {
//       sorted[k++] = arr[j++];
//     }
//   }
//   if (i > mid) {
//     for (; j <= right; j++) {
//       sorted[k++] = arr[j];
//     }
//   } else {
//     for (; i <= mid; i++) {
//       sorted[k++] = arr[i];
//     }
//   }
//   for (let a = left; a <= right; a++) {
//     arr[a] = sorted[a];
//   }
// }

// function mergeSort(arr, left, right) {
//   if (left < right) {
//     let mid = parseInt((left + right) / 2);
//     mergeSort(arr, left, mid);
//     mergeSort(arr, mid + 1, right);
//     merge(arr, left, mid, right);
//   }
// }

//4-2. K번재 수

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let [n, k] = input[0].split(' ').map(Number);
// let arr = input[1].split(' ').map(Number);

// arr.sort(function (a, b) {
//   return a - b;
// });

// console.log(arr[k - 1]);

//5-1.좌표 정렬하기

function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left;
  while (i <= mid && j <= right) {
    if (arr[i][0] < arr[j][0] || (arr[i][0] === arr[j][0] && arr[i][1] <= arr[j][1])) {
      sorted[k++] = arr[i++];
    } else {
      sorted[k++] = arr[j++];
    }
  }
  if (i > mid) {
    for (; j <= right; j++) {
      sorted[k++] = arr[j];
    }
  } else {
    for (; i <= mid; i++) {
      sorted[k++] = arr[i];
    }
  }
  for (let a = left; a <= right; a++) {
    arr[a] = sorted[a];
  }
}

function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = parseInt((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
const data = [];
for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  data.push([x, y]);
}

let sorted = new Array(n).fill([]);

mergeSort(data, 0, n - 1);

let answer = data.map((point) => `${point[0]} ${point[1]}`).join('\n');

console.log(answer);

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let n = Number(input[0]);
// let data = [];
// for (let i = 1; i <= n; i++) {
//   let [x, y] = input[1].split(' ').map(Number);
//   data.push([x, y]);
// }
// function compare(a, b) {
//   if (a[0] != b[0]) return a[0] - b[0];
//   else return a[1] - b[1];
// }
// data.sort(compare);

// let answer = '';
// for (let point of data) {
//   answer += point[0] + ' ' + point[1] + '\n';
// }
// console.log(answer);
