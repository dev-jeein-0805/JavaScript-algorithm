// 최댓값 만들기 (2)

// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 
// return하도록 solution 함수를 완성해주세요.

// [내 풀이]
function solution(numbers) {
    const ascendingNumbers = [...numbers].sort((a, b) => a - b);
    const n = ascendingNumbers.length;

    const maxTwo = ascendingNumbers[n - 1] * ascendingNumbers[n - 2];
    const minTwo = ascendingNumbers[0] * ascendingNumbers[1];

    return Math.max(maxTwo, minTwo);
}
// numbers.sort((a, b) => a - b) 가 아닌 [...numbers].sort((a, b) => a - b) 을 사용한 이유
// 입력 배열 numbers를 "복사한 후" 오름차순으로 정렬합니다. 원본 배열을 변경하지 않기 위해 복사본을 사용했습니다.

// [다른 사람의 풀이]
function solution(numbers) {
  return [
    ...new Set(
      numbers.reduce(
        (acc, cur, idx) => [
          ...acc,
          ...numbers.slice(idx + 1).map((v) => cur * v),
        ],
        []
      )
    ),
  ].sort((a, b) => b - a)[0];
}

var solution=n=>Math.max(...n.map((a,i)=>n.map((b,j)=>i!=j?a*b:-1/0)).flat())

function solution(numbers) {
    numbers.sort(function(a, b) {
        if(a > b) return 1;
        if(a === b) return 0;
        if(a < b) return -1;
    })
    return numbers[0]*numbers[1] > numbers[numbers.length-1] * numbers[numbers.length-2] 
            ? numbers[0]*numbers[1] : numbers[numbers.length-1] * numbers[numbers.length-2]
}
