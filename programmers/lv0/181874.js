// A 강조하기

// 문자열 myString이 주어집니다. 
// myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, 
// "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 
// return 하는 solution 함수를 완성하세요.

// [내 풀이]
function solution(myString) {
    return myString
            .split('')
            .map(x => x === 'a' ? 'A' : x === x.toUpperCase() && x !== '' ? x.toLowerCase() : x)
            .join('');
}
// 테스트 5개 중 4개만 통과

function solution(myString) {
    return myString.toLowerCase().split('').map(x => x === 'a' ? 'A' : x).join('');
}
// 통과

// [다른 사람의 풀이]
const solution=s=>s.toLowerCase().replaceAll('a','A');

const solution = (myString) => {
    return [...myString.replace(/a/g,'A')].map(v=>{
        if(/[B-Z]/.test(v)) return v.toLowerCase();
        return v;
    }).join('')
}
