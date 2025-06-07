// l로 만들기

// 알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 
// 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 
// return 하는 solution 함수를 완성해 주세요.

// [내 풀이]
function solution(myString) {
    return myString.split('').map(x => x < "l" ? "l" : x).join('');
}

// [다른 사람의 풀이]
const solution = myString => myString.replace(/[a-k]/g,'l')

function solution(myString) {
    return [...myString].map((v) => v < 'l' ? 'l' : v).join('');
}
// 알파벳 자체로 크기비교 가능 (아스키코드 넘버)
// 자바 였으면 이거 안될텐테 알아갑니다.!~~
// [...myString] 대신 Array.from(myString) 으로 했는데 
// 알파벳 자체 비교는 되지만 테스트케이스중에 시간이 엄청 오래걸리는것도 있네요. 
// 그에 비해 정규식 방식은 많이 빠르네요.. 정규식 공부해야되나.
