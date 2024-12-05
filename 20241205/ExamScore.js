// https://www.acmicpc.net/problem/9498

// A : 90 ~ 100점
// B : 80 ~ 89점
// C : 70 ~ 79점
// D : 60 ~ 69점
// F : 나머지

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

data = Number(input[0]);

function check(a) {
    if (90 <= a && a <= 100) console.log('A');
    else if (80 <= a && a <= 89) console.log('B');
    else if (70 <= a && a <= 79) console.log('C');
    else if (60 <= a && a <= 69) console.log('D');
    else console.log('F');
}

check(data);

// let fs = require('fs');
// let score = fs.readFileSync('/dev/stdin');

// switch score
//     case 'A': 100 >= score >= 90,
//     case 'B': 90 > score >= 80,
//     case 'C': 80 > score >= 70,
//     case 'D': 70 > score >= 60,
//     case 'F': 60 > score >= 0,

