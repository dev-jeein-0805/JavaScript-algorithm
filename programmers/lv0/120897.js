// 약수 구하기

// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 
// return하도록 solution 함수를 완성해주세요.

// [내 풀이]
function solution(n) {
    const list = [];
    for(i=1; i <= n; i++) {
        if(n % i === 0) {list.push(i);}  
    }
    return list;
}

// [다른 사람의 풀이]
function solution(n) {
    return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
}
// 뭐가 더 빠를까?

function solution(n) {
    let s = new Set();
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n%i === 0) {
            s.add(i);
            s.add(n/i);
        }
    }
    return [...s].sort((a,b)=>a-b);
}
