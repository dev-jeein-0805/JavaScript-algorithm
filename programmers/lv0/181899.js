// 카운트 다운

// 정수 start_num와 end_num가 주어질 때, 
// start_num에서 end_num까지 1씩 감소하는 수들을 차례로 담은 리스트를 
// return하도록 solution 함수를 완성해주세요.

// [내 풀이]
function solution(start_num, end_num) {
    const list = [];
    for(i=start_num; i>=end_num; i--){
        list.push(i);
    }
    return list;
}

// [다른 사람의 풀이]
const solution = (start, end) => Array(start-end+1).fill(start).map((v,i)=>v-i);

function solution(start, end) {
    return Array.from(Array(start - end + 1), (_, i) => start - i);
}
