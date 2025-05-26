// n의 배수

// 정수 num과 n이 매개 변수로 주어질 때, 
// num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 
// solution 함수를 완성해주세요.

// [내 풀이]
function solution(num, n) {
    return num % n == 0 ? 1 : 0; 
}


// [다른 사람의 풀이]
function solution(num, n) {
  return +!(num % n);
}

// !(num % n):
// 이것은 논리 부정 연산자(logical NOT operator) !입니다.
// ! 연산자는 뒤따라오는 값을 **불리언(boolean)**으로 변환한 다음 그 결과를 반전시킵니다.
// 자바스크립트에서 0은 false로 간주되고, 
// 0이 아닌 다른 숫자들(양수, 음수 모두)은 true로 간주됩니다.
// 따라서 !(num % n)는 다음과 같이 동작합니다.
// num % n 결과가 0이면 (num이 n으로 나누어 떨어지면), 
// !0은 !false가 되어 true가 됩니다.
// num % n 결과가 0이 아니면 (num이 n으로 나누어 떨어지지 않으면), 
// !(0이 아닌 수)는 !true가 되어 false가 됩니다.

// +!(num % n):
// 이것은 단항 덧셈 연산자(unary plus operator) +입니다.
// + 연산자는 피연산자를 숫자로 변환하려고 시도합니다.
// 불리언 값에 + 연산자를 적용하면 다음과 같이 변환됩니다.
// +true는 1이 됩니다.
// +false는 0이 됩니다.


function solution(num, n) {
    return num % n ? 0 : 1
}

// 나머지가 0으로 없으면 배수니까, 1을 리턴해야 함. num % n 값이 0이면 false 니까.