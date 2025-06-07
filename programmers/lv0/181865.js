// 간단한 식 계산하기

// 문자열 binomial이 매개변수로 주어집니다. 
// binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, 
// op는 '+', '-', '*' 중 하나입니다. 
// 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.

// [내 풀이]
function solution(binomial) {
    const newList = binomial.split(" ");
    const num1 = Number(newList[0]);
    const operator = newList[1];
    const num2 = Number(newList[2]);

    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    }
}

// [다른 사람의 풀이]
const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(' ');
  return ops[op](+a, +b);
}

function solution(binomial) {
    const [a,ex,b] = binomial.split(" ");    
    return (ex === "+")? +a+ +b : (ex === "-")? a - b : a*b
}
// return 에서 왜 +a+ +b 인지 궁금해요. a+b 아닌가여
// a와 b가 문자열 자료형이기 때문에 a + b로 쓰면 +를 문자열 연결 연산자로 인식하고 ab를 반환합니다

const solution = eval
// 🫢
// eval은 사용하지 않는 습관을 들입시다...!
