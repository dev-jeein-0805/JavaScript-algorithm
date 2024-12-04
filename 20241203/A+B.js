// https://www.acmicpc.net/problem/1000

let fs = require('fs'); // fs 모듈 불러오기 
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); // 라인 별로 구분

let line = input[0].split(' '); // 첫 라인 뭉터기를 공백으로 다시 배열로 나눔 // ["1", "2"]

let a = parseInt(line[0]); // 1
let b = parseInt(line[1]); // 2

console.log(a + b);


// fs 모듈 : 파일 시스템과 상호작용할 수 있게 해주는 Node.js의 내장 모듈
// fs.readFileSync('/dev/stdin') : 표준 입력에서 데이터를 동기적으로 읽어옵니다.
// split('\n') 메서드 : 문자열을 줄 단위로 나누어 배열로 만듭니다.

