// 원하는 문자열 찾기

// 알파벳으로 이루어진 문자열 myString과 pat이 주어집니다. 
// myString의 연속된 부분 문자열 중 pat이 존재하면 1을 그렇지 않으면 0을 
// return 하는 solution 함수를 완성해 주세요.
// 단, 알파벳 대문자와 소문자는 구분하지 않습니다.

// [내 풀이]
function solution(myString, pat) {
    return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}

// [다른 사람의 풀이]
const solution=(s,p)=>+(s.toLowerCase().includes(p.toLowerCase()))
// 삼항 연산자 대신 +() 사용 ⭐️
// 다음에 결과가 true 는 1, false 는 0 반환하는 문제면 써먹어보기!

function solution(myString, pat) {
    return [...myString.matchAll(new RegExp(pat, 'ig'))].length >= 1 ? 1 : 0;
}

function solution(myString, pat) {
    return new RegExp(pat, 'i').test(myString) ? 1 : 0
}