// 모음 제거

// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 
// 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 
// solution 함수를 완성해주세요.

// [내 풀이]
function solution(my_string) {
    return my_string.split('')
        .filter(x => !['a', 'e', 'i', 'o', 'u'].includes(x)) // filter는 콜백 함수가 true를 반환하는 요소만 남긴다. ⭐️
        .join('');
}

// [다른 사람의 풀이]
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}

// 정규표현식 캡쳐링
// https://smile-haha.tistory.com/55
// https://happy-coding-day.tistory.com/232


function solution(my_string) {
    return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}
// 문자열->배열로 바꾸는 방법은 아래!
// my_string.split('')
// Array.from(문자열)

// includes는 배열 메소드이자 문자열 메소드