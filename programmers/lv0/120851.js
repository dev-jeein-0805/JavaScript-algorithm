// 숨어있는 숫자의 덧셈 (1)

// 문자열 my_string이 매개변수로 주어집니다. 
// my_string안의 모든 자연수들의 합을 return하도록 
// solution 함수를 완성해주세요.

// [내 풀이]
function solution(my_string) {
    return Array.from(my_string)
                .filter(x => !isNaN(x))
                .map(x => Number(x))
                .reduce((acc, cur) => acc + cur, 0);
}

// [다른 사람의 풀이]
function solution(my_string) {
    return my_string.replace(/[^0-9]/g, '')
                    .split('')
                    .reduce((acc, curr) => acc + Number(curr), 0);
}

function solution(my_string) {
    return [...my_string].reduce((acc,cur)=>Number(cur) ? +acc + +cur : acc, 0)
}

function solution(my_string) {
    let sum = 0;
    for (const ch of my_string) {
        if (!isNaN(ch)) sum += +ch;
    }
    return sum;
}

function solution(my_string) {
    return my_string.match(/[0-9]/g).reduce((a,b) => parseInt(a)+parseInt(b));
}

function solution(my_string) {
    return my_string.replaceAll(/[^\d]/g, '').split('').map(v=>+v).reduce((a,v)=>a+v,0);
}
