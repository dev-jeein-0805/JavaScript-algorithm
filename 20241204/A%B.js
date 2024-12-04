// https://www.acmicpc.net/problem/10869

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// let data = input[0].split(' ');

let a = Number(input[0].split(' ')[0]);
let b = Number(input[0].split(' ')[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b)); // 🌟
console.log(a % b);

// JavaScript 에서 나누기 연산(/)을 수행하면 실수 데이터가 반환될 수 있다.
// 따라서 몫을 구하기 위해서는 parseInt() 함수를 사용한다.
