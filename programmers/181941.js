// <문자 리스트를 문자열로 변환하기>
// 문자들이 담겨있는 배열 arr 가 주어집니다. 
// arr 의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// 입출력 예
// arr = ["a","b","c"];
// result = "abc";

function solution(arr) {
    return arr.reduce((acc, b) => acc + b, '');
}

arr1 = ['a', 'c', 'e'];
console.log(solution(arr1));