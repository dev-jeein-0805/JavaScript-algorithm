// 배열 만들기 1

// 정수 n과 k가 주어졌을 때, 1 이상 n 이하의 정수 중에서 k의 배수를 
// 오름차순으로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// [내 풀이]
function solution(n, k) {
    return Array(n).fill(1).map((v, i) => v + i).filter(x => x%k === 0);
}

// [다른 사람의 풀이]
function solution(n, k) {
    var answer = [];
    for(let i = k ; i <= n; i+=k){
        answer.push(i)
    }
    return answer;
}
// ⭐️ i+=k ⭐️

const solution=(n,k)=>Array(~~(n/k)).fill(k).map((v,i)=>v*(i+1))
// double tilde(~~)는 Math.floor()처럼 활용할 수 있다고 보시면 됩니다.
// https://velog.io/@proshy/JS-tilde과-double-tilde연산자

function* multiple(n, k) {
  let value = 0;
  while (value + k <= n) {
    yield (value += k);
  }
}

function solution(n, k) {
  return [...multiple(n, k)];
}
// 제너레이터?

const solution = (n, k) => {
    const result = [0];
    while(Math.max(...result) <= n){
        result.push(Math.max(...result)+k);
    }
    // console.log(result)
    result.pop();
    result.shift();
    return result;
}
