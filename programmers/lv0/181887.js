// 홀수 vs 짝수

// 정수 리스트 num_list가 주어집니다. 
// 가장 첫 번째 원소를 1번 원소라고 할 때, 
// 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 
// return 하도록 solution 함수를 완성해주세요. 
// 두 값이 같을 경우 그 값을 return합니다.

// [내 풀이]
function solution(num_list) {
    oddSum = num_list.reduce((acc, curr, i) => i % 2 === 0 ? acc + curr : acc, 0)
    evenSum = num_list.reduce((acc, curr, i) => i % 2 === 1 ? acc + curr : acc, 0)
    return Math.max(oddSum, evenSum);
}

// [다른 사람의 풀이]
function solution(num_list) {
    let even = 0;
    let odd = 0

    num_list.map((v, idx) => {
        !(idx % 2) ? even += v : odd += v; 
    })

    return odd > even ? odd : even; 
}

function solution(num_list) {
    let odd = 0;
    let even = 0;

    num_list.forEach((x,i) => i%2 == 0 ? even += x : odd += x);


    return Math.max(odd, even);
}

function solution(num_list) {
    return Math.max(...num_list.reduce(([o, e], c, i) => i % 2 ? [o + c, e] : [o, e + c], [0, 0]));
}
// ⭐️

function solution(num_list) {
    const sum = (condition) => num_list.filter((_, index) => condition(index)).reduce((acc, cur) => acc + cur, 0);

    const oddSum = sum((index) => index % 2 === 0);
    const evenSum = sum((index) => index % 2 === 1);

    return oddSum < evenSum ? evenSum : oddSum;
}
