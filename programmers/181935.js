// 홀짝에 따라 다른 값 반환하기

// 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 
// n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

// [나의 풀이]
function solution(n) {
    let sum = 0;
    if (n % 2 === 1) {
        for (let i = 1; i <= n; i += 2) {
            sum += i;
        }
    } else {
        for (let i = 2; i <= n; i += 2) {
            sum += i * i;
        }
    }
    return sum;
}

// [다른 사람의 풀이]
function solution(n) {
    const isEven = n % 2 === 0;
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    const filter = arr.filter(n => {
        return isEven ? n % 2 === 0 : n % 2 === 1;
    })
    return isEven 
        ? filter.reduce((acc, curr) => acc + curr * curr, 0)
        : filter.reduce((acc, curr) => acc + curr, 0); 
}

function solution(n) {
    const array = Array(n).fill().map((x,idx)=> idx+1);
    return n%2 === 0 ? array.reduce((a,b) => b%2===0 ? a+Math.pow(b,2) : a, 0) : array.reduce((a,b) => b%2===0 ? a : a+b, 0);
}

function solution(n) {
  let answer = 0;
  const isEven = n % 2 === 0;
  for (let i = 1; i <= n; i++) {
    if (isEven ? i % 2 === 0 : i % 2 !== 0) {
      answer += isEven ? i * i : i;
    }
  }
  return answer;
}

function solution(n) {
    let oddSum = 0;
    let evenSum = 0;

    for(let i = n; i > 0; i--) {
        if(i%2==0) {
            evenSum += Math.pow(i, 2);
        } else {
            oddSum += i;
        }
    }

    return n%2 == 0 ? evenSum : oddSum;
}

function solution(n) {
  const isOdd = n % 2 === 1;
  return new Array(Math.ceil(n / 2))
    .fill(undefined)
    .reduce((acc, _, i) => acc + (isOdd ? 2 * i + 1 : (2 * (i + 1)) ** 2), 0);
}

function solution(n) {
    if(n%2===1)
      return  (n+1)/2*((n + 1)/2) ;
    else
      return   n*(n+1)*(n+2)/6;
}