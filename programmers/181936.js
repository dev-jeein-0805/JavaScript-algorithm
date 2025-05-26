// 공배수

// 정수 number와 n, m이 주어집니다. 
// number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 
// solution 함수를 완성해주세요.

// [내 처음 풀이]
function solution(number, n, m) {
    return number % (n * m) ? 0 : 1;
}

// [틀려서 다시 푼 풀이]
function solution(number, n, m) {
    return number % n === 0 ? (number % m === 0 ? 1 : 0) : 0;
}

// [다른 사람 풀이]
function solution(number, n, m) {
  return +!(number % n || number % m);
}

// number % n과 number % m 둘 다 0일 때만, 이 OR 연산의 결과는 0 (falsy)이 됩니다. 
// (즉, number가 n으로도 나누어떨어지고 m으로도 나누어떨어질 때)
// !(number % n || number % m): 논리 NOT (!) 연산자입니다.
// number % n || number % m의 결과가 0이 아닌 값(truthy)이라면, 이 NOT 연산의 결과는 false가 됩니다. 
// (둘 중 하나라도 나누어떨어지지 않을 때)
// number % n || number % m의 결과가 0(falsy)이라면, 이 NOT 연산의 결과는 true가 됩니다. 
// (둘 다 나누어떨어질 때)
// +!(number % n || number % m): 단항 덧셈 연산자 (+) 입니다.
// 이 연산자는 뒤따라오는 값을 숫자로 변환하는 역할을 합니다.
// true는 1로 변환되고, false는 0으로 변환됩니다.