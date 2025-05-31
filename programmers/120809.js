// 배열 두배 만들기

// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 
// solution 함수를 완성해주세요.

// [내 풀이]
function solution(numbers) {
    return numbers.map(x => x * 2);
}

// [다른 사람의 풀이]
function solution(numbers) {
    return numbers.reduce((a, b) => [...a, b * 2], []);
}

const solution = (numbers) => numbers.map((number) => number * 2)
