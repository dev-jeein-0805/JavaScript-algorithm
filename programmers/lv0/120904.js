// 숫자 찾기

// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 
// num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 
// return 하도록 solution 함수를 완성해보세요.
// num에 k가 여러 개 있으면 가장 처음 나타나는 자리를 return 합니다.

// [내 풀이]
function solution(num, k) {
    String(num).split('').filter((v, i) => 
    if(v === k){
        return i + 1;
    } else {
        return -1;
    })
}
// 틀림

function solution(num, k) {
    return String(num).split('').forEach((v, i) => v === k ? i + 1 : -1);
}
// 틀림
// forEach 메서드는 배열의 각 요소에 대해 주어진 함수를 한 번씩 실행하기만 할 뿐, 
// 어떤 값을 반환하지 않습니다. 즉, forEach 메서드 자체는 항상 undefined를 반환합니다.
// forEach 콜백 함수 내부에 return i + 1 또는 return -1이 있더라도, 
// 이 return 문은 단지 현재 콜백 함수의 실행을 멈추고 다음 요소로 넘어가게 할 뿐, 
// solution 함수 전체의 실행을 멈추고 값을 반환하지는 않습니다.

function solution(num, k) {
    const index = String(num).split('').findIndex(v => v == k);
    return index === -1 ? -1 : index + 1;
}
// 통과
// findIndex은 값을 못 찾을 경우 -1 반환

// [다른 사람의 풀이]
function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
}

function solution(num, k) {
    return ("❤" + num).indexOf(k);
}

const solution=(n,k)=>[..."X"+String(n)].indexOf(String(k));
