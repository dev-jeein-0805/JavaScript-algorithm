// 특정한 문자를 대문자로 바꾸기

// 영소문자로 이루어진 문자열 my_string과 
// 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, 
// my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 
// return 하는 solution 함수를 작성해 주세요.

// [내 풀이]
function solution(my_string, alp) {
    return my_string.split('').map(x => x === alp ? x.toUpperCase() : x).join('');
}

// [다른 사람의 풀이]
const solution=(s,a)=>s.replaceAll(a,a.toUpperCase())

function solution(my_string, alp) {
    let re = new RegExp(alp, "g");
    return my_string.replace(re, alp.toUpperCase());
}
