// 문자 반복 출력하기

// 문자열 my_string과 정수 n이 매개변수로 주어질 때, 
// my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 
// solution 함수를 완성해보세요.

function solution(my_string, n){
    return my_string.split('').map((x) => {
        return x.repeat(n);
    }).join('');
}

// JavaScript에서 map() 함수는 배열의 메서드! 문자열에서 직접 사용 불가!
// my_string을 split('') 메서드를 사용하여 문자열을 문자 배열로 바꾸기
// 배열.join('') -> 다시 문자열로 합치기

// [다른 사람의 풀이]
function solution(my_string, n) {
    return [...my_string].map(v => v.repeat(n)).join("");
}

function solution(my_string, n) {
    return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '');
}

function solution(my_string, n) {
    let ans = '';
    for (let s of my_string) ans+=s.repeat(n);
    return ans;
}
