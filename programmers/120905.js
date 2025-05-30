// n의 배수 고르기

// 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, 
// numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 
// solution 함수를 완성해주세요.

// [내 풀이]
function solution(n, numlist) {
    const array = [];
    for(const ele of numlist){
        ele % n === 0 ? array.push(ele) : 0;
    }
    return array;
}

// [다른 사람의 풀이]
function solution(n, numlist) {
    return numlist.filter(num => num % n === 0);
}
