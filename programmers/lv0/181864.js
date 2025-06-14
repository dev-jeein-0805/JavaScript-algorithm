// 문자열 바꿔서 찾기

// 문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. 
// myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 
// pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

// [내 풀이]
function solution(myString, pat) {
    return +myString.split('').map(x => x === "A" ? "B" : "A").join('').includes(pat);
}

// [다른 사람의 풀이]
function solution(str, pat) {
    pat = pat.replaceAll('A', 'X').replaceAll('B', 'A').replaceAll('X', 'B')

    return str.indexOf(pat) === -1 ? 0 : 1
}
// 와, 신박하다!
