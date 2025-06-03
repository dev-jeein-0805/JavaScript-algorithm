// 9로 나눈 나머지

// 음이 아닌 정수를 9로 나눈 나머지는 그 정수의 각 자리 숫자의 합을 
// 9로 나눈 나머지와 같은 것이 알려져 있습니다.
// 이 사실을 이용하여 음이 아닌 정수가 문자열 number로 주어질 때, 
// 이 정수를 9로 나눈 나머지를 return 하는 solution 함수를 작성해주세요.

// [내 풀이]
function solution(number) {
    let sum = 0;
    Array.from(number).map(x => sum += Number(x));
    return sum % 9;
}

// [다른 사람의 풀이]
const solution=n=>BigInt(n)%9n

function solution(number) {
    return Array.from(number).reduce((acc, v) => acc + Number(v), 0) % 9
}
// Number() vs parseInt()

function solution(number) {
    return [...number].reduce((a,b) => +a+(+b))%9;
}
