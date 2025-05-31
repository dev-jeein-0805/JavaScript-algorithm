// 짝수는 싫어요

// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 
// return하도록 solution 함수를 완성해주세요.

// [내 풀이]
function solution(n) {
    let array = [];
    newNumber = n % 2 === 0 ? n - 1 : n;
    for(i=0; i < newNumber/2; i++){
        array.push(i*2 + 1)
    }
    return array;
}

// [다른 사람의 풀이]
function solution(n) {
    var answer = [];
    for (let i = 1; i<=n; i+=2) answer.push(i)
    return answer;
}
// that's what I want! ⭐️i+=2⭐️

const solution = (n) => 
    Array
        .from({ length: n }, (_, i) => i + 1)
        .filter(i => i % 2 !== 0)

function solution(n) {
    return Array(n).fill(1).map((v,i)=>v+i).filter(v=>v%2===1);
}

function solution(n) {
    return Array(n).fill(0).map((v,index) => v+1+index).filter((v) => v%2);
}
