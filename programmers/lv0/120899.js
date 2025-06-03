// 가장 큰 수 찾기

// 정수 배열 array가 매개변수로 주어질 때, 
// 가장 큰 수와 그 수의 인덱스를 담은 배열을 
// return 하도록 solution 함수를 완성해보세요.

// [내 최초 풀이] -> 틀림
function solution(array) {
    let num = Math.max(array);
    return [num, array.indexOf(num)];
}

// JavaScript의 Math.max() 함수는 인자로 전달된 여러 숫자들 중에서 가장 큰 수를 찾을 때 사용됩니다. 
// 예를 들어, Math.max(1, 5, 3)처럼 사용하면 5를 반환합니다.

// 하지만 Math.max()에 배열 자체를 인자로 넘겨주면 예상대로 작동하지 않습니다. 
// Math.max()는 배열을 단일 인자로 처리하려고 시도하며, 이 경우 보통 숫자가 아닌 값을 받게 되어 
// NaN (Not a Number)을 반환하거나 올바르지 않은 결과를 낼 수 있습니다.

// 배열 안에 있는 숫자들 중에서 최댓값을 찾으려면, 
// Math.max() 함수에 배열의 요소들을 각각의 인자로 전달해주어야 합니다. 
// 이때 스프레드 구문(...배열)을 사용하면 배열의 요소들을 개별 인자로 쉽게 전달할 수 있습니다.

// [내 두 번째 풀이] -> 통과
function solution(array) {
    let num = Math.max(...array);
    return [num, array.indexOf(num)];
}

// [다른 사람의 풀이]
function solution(array, b = 0) {
    return array.map((el, idx) => {
        if(el > array[b]) b = idx;
        return [array[b], b];
    })[b];
}

function solution(array) {
    let max = Math.max(...array)
    return [
        max,
        array.findIndex(v => v === max)
    ];
}
