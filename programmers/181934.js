// 조건 문자열

// 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

// 두 수가 n과 m이라면
// ">", "=" : n >= m
// "<", "=" : n <= m
// ">", "!" : n > m
// "<", "!" : n < m
// 두 문자열 ineq와 eq가 주어집니다. 
// ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 
// 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 
// return하도록 solution 함수를 완성해주세요.

// [내 풀이]
function solution(ineq, eq, n, m) {
    return eq === "=" 
        ? ineq === ">" ? (n >= m ? 1 : 0) : (n <= m ? 1 : 0)
        : ineq === ">" ? (n > m ? 1 : 0) : (n < m ? 1 : 0)
}

// [다른 사람의 풀이]
const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq]; // 하단 1) 참고
  return Number(op(n, m)); // 하단 2) 참고
}

// 객체의 키 마다 다른 계산을 하는 함수를 "값"으로 주고, 
// 솔루션에서 동적으로 키값을 받아 해당하는 키의 함수를 op변수에 넣고 계산한 뒤 리턴, 
// Number(true)->1, Number(false)->0

function solution(ineq, eq, n, m) {
    if (eq === '=' && n === m) return 1
    if (ineq === '<' && n < m) return 1
    if (ineq === '>' && n > m) return 1
    return 0
}

function solution(ineq, eq, n, m) {
    var str = (n + ineq + eq + m).replace("!","")
    var answer = eval(str) ? 1 : 0;
    return answer;
}
// eval() 함수는 사용에 주의해야 할 함수입니다.
// eval()은 인자로 받은 문자열을 어떤 내용이든 JavaScript 코드로 실행하기 때문에, 
// 만약 str의 내용이 예상치 못하거나 악의적인 코드로 변조될 수 있다면 보안에 매우 취약해질 수 있습니다. 
// 따라서 일반적으로 eval() 함수는 사용이 권장되지 않습니다.

function solution(ineq, eq, n, m) {
    var answer = eval(`${n}${ineq}${eq === "!" ? "" : eq}${m}`) ? 1 : 0
    return answer;
}


// 1)
// const op = operations[ineq + eq];

// 예를 들어, ineq가 ">"이고 eq가 "="라면 ineq + eq는 ">="가 되고, 
// operations[">="]는 (n, m) => n >= m 함수가 됩니다. 
// 따라서 op에는 이 (n, m) => n >= m 함수가 담기게 됩니다.

// 2)
// Number(op(n, m))

// op(n, m)는 3번 단계에서 op 변수에 할당된 함수를 실제 n과 m 값을 사용하여 호출하는 것입니다. 
// 이 함수의 결과는 true 또는 false (불리언 값)가 됩니다.
// Number(...)는 괄호 안의 값을 숫자로 변환하는 JavaScript의 내장 함수입니다. 
// JavaScript에서 불리언 값 true는 숫자 1로, false는 숫자 0으로 변환됩니다.