// 마지막 두 원소

// 정수 리스트 num_list가 주어질 때, 
// 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 
// 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 
// 추가하여 return하도록 solution 함수를 완성해주세요.

// [내 풀이]
function solution(num_list) {
    const n = num_list.length - 1;
    num_list[n + 1] = num_list[n] > num_list[n - 1] 
                        ? num_list[n] - num_list[n - 1]  : num_list[n] * 2;
    return num_list;
}

// [다른 사람의 풀이]
function solution(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a - b) : a * 2];
}
// 배열 꺼꾸로 하고 구조분해할당후 0번1번째 크기비교후 배열풀어서 조건 추가
// const [a, b] = num_list.slice(-2) 
// 1. reverse()로 배열을 뒤집고, [a, b]로 구조 분해해서 a, b 변수에 할당 
// 2. spread 연산자로 배열을 복사해서 펼치고, 배열의 맨 끝에 삼항 연산식 결과 추가
