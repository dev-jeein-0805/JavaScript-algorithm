// 제곱수 판별하기

// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 
// 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 
// solution 함수를 완성해주세요.

// [내 풀이]
function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

// [다른 사람의 풀이]
function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}