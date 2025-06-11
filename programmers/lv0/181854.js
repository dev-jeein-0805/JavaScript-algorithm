// 배열의 길이에 따라 다른 연산하기

// 정수 배열 arr과 정수 n이 매개변수로 주어집니다. 
// arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을, 
// arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을 
// return 하는 solution 함수를 작성해 주세요.

// [내 풀이]
function solution(arr, n) {
    return arr.length % 2 === 1 
            ? arr.map((v, i) => i%2 === 0 ? v+n : v)
            : arr.map((v, i) => i%2 === 1 ? v+n : v);
}

// [다른 사람의 풀이]
const solution = (arr, n) => arr.map((num, idx) => (
    arr.length % 2 !== idx % 2
    ? num + n
    : num
))
// Good👍

const solution=(a,n)=>a.map((v,i)=>a.length%2^i%2?v+n:v)
// ^ : caret operator는 XOR연산을 의미합니다
