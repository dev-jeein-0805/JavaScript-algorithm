// 배열의 유사도

// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 
// solution 함수를 완성해주세요.

// [내 풀이]
function solution(s1, s2) {
    let count = 0;
    for(let ele of s1){
        s2.includes(ele) ? count++ : 0;
    }
    return count;
}

// [다른 사람의 풀이]
function solution(s1, s2) {
  const concat = [...s1, ...s2];
  const setConcat = Array.from(new Set(concat));

  return concat.length - setConcat.length;
}

const solution = (s1, s2) => s1.length + s2.length - Array.from(new Set(s1.concat(s2))).length;

function solution(s1, s2) {
  return s1.filter((v) => s2.includes(v)).length;
}
