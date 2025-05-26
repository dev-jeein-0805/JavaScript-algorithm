// 더 크 합치기

// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 
// 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, 
// a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.
// [최초 내 풀이]
function solution(a, b) {
    aPlusB = Number(toString(a) + toString(b));
    bPlusA = Number(toString(b) + toString(a));

    if(aPlusB >= bPlusA) {
        return aPlusB;
    }
    return bPlusA;
}

solution(9, 91);

// 틀림. 왜?

// 문제는 toString 함수 사용법입니다.
// 자바스크립트에서 숫자를 문자열로 변환할 때, 전역 함수로 toString()을 직접 호출하는 방식은 일반적으로 사용되지 않습니다. 
// 대신, 숫자의 메서드인 .toString()을 사용하거나, String() 생성자를 사용하거나, 
// 혹은 빈 문자열과의 덧셈 연산을 통해 암시적으로 문자열로 변환하는 방식을 사용합니다.
// 현재 코드에서는 toString(a)와 같이 사용되어, 
// toString이라는 함수가 정의되어 있지 않다는 오류(ReferenceError: toString is not defined)가 발생할 가능성이 높습니다.
// 이 문제를 해결하기 위해 숫자를 문자열로 정확하게 변환하는 방법으로 코드를 수정해야 합니다.

// [피드백 후 수정]
function solution(a, b) {
    // 숫자를 문자열로 변환하는 올바른 방법 사용
    const strA = String(a); // 또는 a.toString() 또는 '' + a
    const strB = String(b); // 또는 b.toString() 또는 '' + b

    const aPlusB = Number(strA + strB);
    const bPlusA = Number(strB + strA);

    if (aPlusB >= bPlusA) {
        return aPlusB;
    } else {
        return bPlusA;
    }
}

console.log(solution(9, 91)); // 예시 실행

// [다른 사람의 풀이]
// 템플릿 리터럴 안에서 a와 b는 자동으로 문자열로 변환된다. ("9", "91")
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}

function solution(a, b) {
    return Math.max(+(a.toString()+b.toString()),+(b.toString()+a.toString()));
}

function solution(a, b) {
  const calculate = (a, b) => +`${a}${b}`;
  return Math.max(calculate(a, b), calculate(b, a));
}