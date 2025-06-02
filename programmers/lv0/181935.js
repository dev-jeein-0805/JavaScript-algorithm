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
    const isEven = n % 2 === 0; // n % 2 === 0 의 boolean 결과 값을 isEven이라는 이름의 변수에 저장. (n이 짝수 => true, 홀수 => false)
    const arr = Array.from({ length: n }, (_, i) => i + 1); // 하단 1) 참고
    const filter = arr.filter(n => {
        return isEven ? n % 2 === 0 : n % 2 === 1;
    })
    return isEven 
        ? filter.reduce((acc, curr) => acc + curr * curr, 0) // 하단 2) 참고
        : filter.reduce((acc, curr) => acc + curr, 0); 
}

function solution(n) {
    const array = Array(n).fill().map((x,idx)=> idx+1); // 하단 3) 참고
    return n%2 === 0 
        ? array.reduce((acc, curr) => curr%2===0 ? acc+Math.pow(curr,2) : acc, 0) // Math.pow(x,y) => x의 y제곱
        : array.reduce((acc, curr) => curr%2===0 ? acc : acc+curr, 0);
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
  return new Array(Math.ceil(n / 2)) // Math.ceil(x) => x의 올림
    .fill(undefined)
    .reduce((acc, _, i) => acc + (isOdd ? 2 * i + 1 : (2 * (i + 1)) ** 2), 0); // 하단 4) 참고
}

function solution(n) {
    if(n%2===1)
      return  (n+1)/2*((n + 1)/2) ;
    else
      return   n*(n+1)*(n+2)/6;
}

// 1)
// const arr = Array.from({ length: n }, (_, i) => i + 1);

// 첫 번째 매개변수: { length: n }

// 이것은 배열과 유사한 객체입니다. 
// 실제 배열은 아니지만, 배열처럼 length라는 속성을 가지고 있어서 Array.from()이 마치 배열처럼 다룰 수 있게 해줍니다.
// { length: n } 객체는 "나는 길이가 n인 배열처럼 행동할 거야"라고 Array.from()에게 알려주는 역할을 합니다.
// Array.from()는 이 length 속성 값을 보고, 해당 길이만큼의 요소를 가진 새로운 배열의 틀을 만듭니다. 
// 이때 초기 요소들의 값은 undefined로 채워집니다. (예: n이 5라면 [undefined, undefined, undefined, undefined, undefined])

// 두 번째 매개변수: (_, i) => i + 1

// 이것은 **선택적인 "mapping function"(매핑 함수)**입니다. 
// Array.from()은 첫 번째 매개변수에서 만든 배열의 틀을 순회하면서 각 요소에 대해 이 매핑 함수를 실행합니다.
// 매핑 함수는 각 요소를 **변환(mapping)**하여 새로운 값을 만드는 역할을 합니다.
// 이 매핑 함수 (_, i) => i + 1는 화살표 함수(arrow function) 문법으로 작성되었습니다. 
// 함수는 두 개의 인자(arguments)를 받습니다.
// 첫 번째 인자 (_): 현재 처리 중인 요소의 값입니다. 
// 위에서 설명드렸듯이 { length: n }의 경우 초기값은 undefined입니다. 
// 관례적으로 이 값을 사용하지 않을 때는 변수명을 _ (밑줄)로 표기하기도 합니다.
// 두 번째 인자 (i): 현재 처리 중인 요소의 **인덱스(index)**입니다. 
// 배열의 인덱스는 0부터 시작합니다. 따라서 이 인덱스는 0, 1, 2, ..., n-1 순서로 진행됩니다.
// => i + 1: 이 부분은 매핑 함수가 반환하는 값입니다. 현재 요소의 인덱스(i)에 1을 더한 값을 반환합니다.

// Array.from({ length: n }, (_, i) => i + 1); 코드가 동작하는 전체 과정:

// Array.from()은 첫 번째 매개변수 { length: n }를 보고, 길이가 n인 새로운 배열을 만들 준비를 합니다. 
// (내부적으로 [undefined, undefined, ..., undefined] (n개) 와 같은 임시 구조를 생각할 수 있습니다.)
// 이제 두 번째 매개변수인 매핑 함수 (_, i) => i + 1를 가지고, 이 임시 배열의 각 인덱스에 대해 함수를 실행합니다.
// 인덱스 0: 함수 실행 (_, 0) => 0 + 1, 결과는 1. 새 배열의 첫 번째 요소는 1이 됩니다.
// 인덱스 1: 함수 실행 (_, 1) => 1 + 1, 결과는 2. 새 배열의 두 번째 요소는 2가 됩니다.
// 인덱스 2: 함수 실행 (_, 2) => 2 + 1, 결과는 3. 새 배열의 세 번째 요소는 3이 됩니다.
// ...
// 인덱스 n-1: 함수 실행 (_, n-1) => (n-1) + 1, 결과는 n. 새 배열의 마지막 요소는 n이 됩니다.
// 이 과정을 거쳐 최종적으로 [1, 2, 3, ..., n]과 같은 형태로 요소가 채워진 새로운 배열이 완성됩니다.
// 이 완성된 배열이 const arr = ...에 의해 arr 변수에 저장됩니다.

// 2) 
// filter.reduce((acc, curr) => acc + curr * curr, 0)
// filter.reduce((acc, curr) => acc + curr, 0)

// reduce 메서드는 배열의 각 요소를 순회하며 하나의 값으로 줄이는 역할을 합니다.
// isEven이 true (n이 짝수)이면 filter 배열의 각 요소(curr)를 제곱(curr * curr)하여 acc(누적값)에 더합니다. 
// 초기 누적값은 0입니다. 즉, 필터링된 짝수들의 제곱의 합을 계산합니다.
// isEven이 false (n이 홀수)이면 filter 배열의 각 요소(curr)를 그대로 acc에 더합니다. 
// 초기 누적값은 0입니다. 즉, 필터링된 홀수들의 합을 계산합니다.

// 3) 
// const array = Array(n).fill().map((x,idx)=> idx+1);

// Array(n): 길이가 n인 빈 배열을 생성합니다.
// .fill(): 생성된 배열을 undefined로 채웁니다. map 함수를 사용하기 위해 필요한 단계입니다.
// .map((x, idx) => idx + 1): 배열의 각 요소에 대해 인덱스(idx)에 1을 더한 값을 반환하여 새로운 배열을 만듭니다. 
// 결과적으로 이 코드는 [1, 2, 3, ..., n] 형태의 배열을 생성합니다.

// 4)
// reduce((acc, _, i) => acc + (isOdd ? 2 * i + 1 : (2 * (i + 1)) ** 2), 0)

// (acc, _, i) => ...: reduce의 콜백 함수입니다. acc는 누적값(accumulator)이고, 
// _는 현재 배열 요소(current value)인데 여기서는 사용되지 않으므로 _로 표현했습니다. 
// i는 현재 요소의 인덱스(index)입니다.
// acc + (...): 누적값 acc에 계산된 값을 더합니다.
// (isOdd ? 2 * i + 1 : (2 * (i + 1)) ** 2): 이 부분이 핵심 계산 로직입니다.
// isOdd가 true이면 (즉, n이 홀수이면), 2 * i + 1을 계산합니다. 
// i는 0부터 시작하는 인덱스이므로, i가 0일 때는 1, 1일 때는 3, 2일 때는 5, ... 와 같이 1부터 시작하는 홀수를 생성합니다.
// isOdd가 false이면 (즉, n이 짝수이면), (2 * (i + 1)) ** 2를 계산합니다. 
// i는 0부터 시작하는 인덱스이므로, i가 0일 때는 (2 * 1)**2 = 2**2 = 4, 1일 때는 (2 * 2)**2 = 4**2 = 16, 
// 2일 때는 (2 * 3)**2 = 6**2 = 36, ... 와 같이 2부터 시작하는 짝수들의 제곱을 생성합니다.
// ** 2는 ES7에서 도입된 거듭제곱 연산자이며, Math.pow(..., 2)와 같습니다. ⭐️
