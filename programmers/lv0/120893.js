// 대문자와 소문자

// 문자열 my_string이 매개변수로 주어질 때, 
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 
// solution 함수를 완성해주세요.

// [내 풀이]
function solution(my_string) {
    return Array.from(my_string)
                .map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())
                .join('');
}

// 자바에서는 isUpperCase와 isLowerCase를 통해서 대소문자를 구분할 수 있다. 
// JavaScript에서는 이러한 함수가 없다.
// JavaScript에서는 문자.toUpperCase(), 문자.toLowerCase() 로 활용.

// 정규식
// 모든 문자가 소문자인지 확인하기 : /^[a-z]+$/.test(str)
// 모든 문자가 대문자인지 확인하기 : /^[A-Z]+$/.test(str)
// 문자열이 대소문자 혼합인지 확인하기 : /^(?=.*[a-z])(?=.*[A-Z]).+$/.test(str)


// [다른 사람의 풀이]
function solution(my_string) {
    return my_string.split("")
                    .map((v, index) => my_string.charCodeAt(index) < 97 ? v.toLowerCase() : v.toUpperCase())
                    .join("");
}
