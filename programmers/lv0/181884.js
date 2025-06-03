// n보다 커질 때까지 더하기

// 정수 배열 numbers와 정수 n이 매개변수로 주어집니다. 
// numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 
// 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

// [내 풀이]
function solution(numbers, n) {
    let sum = 0;
    for(let ele of numbers){
        if(sum <= n){ sum += ele; }
    }
    return sum;
}

// [다른 사람의 풀이]
function solution(numbers, n) {
    var answer = 0;
    let i = 0;
    while(answer <= n) {
        answer += numbers[i++]
    }
    return answer;
}

function solution(numbers, n) {
    return numbers.reduce((a,c,i,t)=>(a<=n)?a+c:a)
}

function solution(numbers, n) {
  return numbers.reduce((prev, num) => (prev <= n ? prev + num : prev), 0);
}
// 내가 구현하고 싶었던 코드 ⭐️

function solution(numbers, n) {
    let ans = 0;
    while (ans<=n) ans+=numbers.shift();
    return ans;
}
// shift() 처음 본다

function solution(numbers, n) {
    const array = [0]
    for (let i = 0; i < numbers.length; i++){
        array.push(array[i]+numbers[i])
    }
    return array.filter((v)=>v>n)[0]
}
