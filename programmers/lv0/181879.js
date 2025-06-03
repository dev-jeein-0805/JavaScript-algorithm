// 길이에 따른 연산

// 정수가 담긴 리스트 num_list가 주어질 때, 
// 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 
// 10 이하이면 모든 원소의 곱을 return하도록 
// solution 함수를 완성해주세요.

// [내 풀이]
function solution(num_list) {
    return num_list.length >= 11 
            ? num_list.reduce((acc, curr) => acc + curr, 0)
            : num_list.reduce((acc, curr) => acc * curr, 1)
}

// [다른 사람의 풀이]
const solution = n => n.reduce((a, v) => n.length > 10 ? a+v : a*v) // ⭐️

function solution(num_list) {
    const mult = (acc, v) => acc * v;
    const add = (acc, v) => acc + v;

    return num_list.length > 10
        ? num_list.reduce(add, 0)
        : num_list.reduce(mult, 1);
}
// 가독성 좋다

function solution(n) {
    var answer = 0;

    if(n.length > 10){
        n.map((a)=>answer+=a)
    }
    else{
        answer += 1;
        n.map((a)=>answer*=a)
    }

    return answer;
}
// 이렇게 map 도 쓸 수 있네👍
