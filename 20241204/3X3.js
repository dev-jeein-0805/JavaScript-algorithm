// https://www.acmicpc.net/problem/2588

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);
let b = Number(input[1]);

console.log(a * Number(input[1][2]));
console.log(a * Number(input[1][1]));
console.log(a * Number(input[1][0]));
console.log(a * b);


// let a = input[0];
// let b = input[1];

// x_1 = b[2]; // 일의 자리
// x_2 = b[1]; // 십의 자리
// x_3 = b[0]; // 백의 자리

// console.log(Number(a) * Number(x_1));
// console.log(Number(a) * Number(x_2));
// console.log(Number(a) * Number(x_3));
// console.log(Number(a) * Number(b));
