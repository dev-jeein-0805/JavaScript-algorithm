// 최댓값 만들기 (1)

// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 
// solution 함수를 완성해주세요.

// [내 풀이]
function solution(numbers) {
    const sortedNumbers = numbers.sort((a, b) => b - a); // 배열 내림차순 정렬.

    return sortedNumbers[0] * sortedNumbers[1];
}

function solution(numbers) {
    const maxValue = Math.max(...numbers);
    const remainingNumbers = numbers.filter(number => number !== maxValue);
    const secondMaxValue = Math.max(...remainingNumbers);

    return maxValue * secondMaxValue;
}

// [다른 사람의 풀이]
function solution(numbers) {
    let [a, b] = numbers.sort((a,b) => b - a);
    return a * b;
}

function solution(numbers) {
    numbers = numbers.sort((a, b) => a - b);
    return numbers.at(-1) * numbers.at(-2);
}

function solution(numbers) {
    const max1 = numbers.reduce((max, n) => max > n ? max : n, 0)
    const index = numbers.findIndex((n) => n === max1);

    numbers.splice(index, 1)

    const max2 = numbers.reduce((max, n) => max > n ? max : n, 0)

    return max1 * max2;
}

function solution(numbers) {
    numbers.sort((a, b) => a - b).reverse();
    return numbers[0] * numbers[1];
}

function solution(numbers) {
    return numbers.sort((a,b)=>b-a).slice(0,2).reduce((a,b)=>a*b);
}

// Math.max(), Math.min() 
// Function.prototype.apply()
// Spread Operator(전개 연산자)
