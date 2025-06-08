// 정수 부분

// 실수 flo가 매개 변수로 주어질 때, 
// flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.

// [내 풀이]
function solution(flo) {
    return Math.floor(flo);
}

// [다른 사람의 풀이]
const solution = flo => ~~flo;

function solution(flo) {
    var answer = Math.trunc(flo);   
    return answer;
}

function solution(flo) {
  return parseInt(flo);
}
