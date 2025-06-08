// 0 떼기

// 정수로 이루어진 문자열 n_str이 주어질 때, 
// n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 
// return하도록 solution 함수를 완성해주세요.

// [내 풀이]
function solution(n_str) {
    return String(Number(n_str));
}

// [다른 사람의 풀이]
const solution=s=>+s+''

function solution(n_str) {
  return n_str.replace(/^0+/, '');
}

function solution(n_str) {
    var answer = '';
    return n_str.replaceAll(/^[0]+/g, '')
}

function solution(n_str) {
    return String(+n_str);
}
