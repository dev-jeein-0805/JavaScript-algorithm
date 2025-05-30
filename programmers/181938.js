// 두 수의 연산값 비교하기

// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 
// 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 
// 더 큰 값을 return하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.

// [내 풀이] - 181939 활용
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), 2 * a * b);
}

console.log(solution(2, 91)); // 364

// [다른 사람의 풀이]
function solution(a, b) {
    let num1 = parseInt(a+""+b+"");
    let num2 = 2*a*b;
    return num1 > num2 ? num1 : num2;
}