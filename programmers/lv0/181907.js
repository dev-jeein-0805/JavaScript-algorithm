// 문자열의 앞의 n글자

// 문자열 my_string과 정수 n이 매개변수로 주어질 때, 
// my_string의 앞의 n글자로 이루어진 문자열을 return 하는 
// solution 함수를 작성해 주세요.

// [내 풀이]
function solution(my_string, n) {
    return my_string.slice(0, n);
}

// [다른 사람의 풀이]
function solution(my_string, n) {
  return my_string.substring(0, n);
}
// substring() vs substr()
// substr() 함수는 자바스크립트에서 deprecated, 즉 폐기된 함수입니다. 
// MDN 관련 레퍼런스를 보시면 이제 쓰지 말라고 빨간색 글씨로 경고하고 있습니다.
