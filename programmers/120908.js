// 문자열안에 문자열

// 문자열 str1, str2가 매개변수로 주어집니다. 
// str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

// [내 풀이]
function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}

// [다른 사람의 풀이]
function solution(str1, str2) {
    return str1.indexOf(str2) === -1 ? 2 : 1;
}

// JavaScript의 문자열 메소드인 indexOf는 특정 문자열이 처음으로 나타나는 인덱스를 반환합니다. 
// 만약 해당 문자열이 존재하지 않는다면, -1을 반환합니다.

function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2;
}
// split으로 안 나뉘면 하나가 나오고, 나뉘면 2개로 나온다.
// 만약 마지막에 해당 문자가 있으면?
// 예를 들어: str1 = "hello" str2 = "o" 이 경우, 
// str1.split(str2)는 ["hell", ""]라는 배열을 반환하게 됩니다. 이 배열의 길이는 2입니다. 
// 따라서 위의 로직으로는 str2가 str1에 포함되어 있다는 것을 올바르게 판별하게 됩니다.

function solution(str1, str2) {
     return -~!str1.includes(str2);
}

function solution(str1, str2) {
    var answer = 0;
    return str1.match(str2) ? 1 : 2;
}

function solution(str1, str2) {
    var answer = 0;
    const str = str1.replace(str2,'');
    if (str != str1){
        answer = 1;
    }else {
        answer = 2;
    }
    return answer;
}

function solution(str1, str2) {
    return str1.search(str2) !== -1 ? 1 : 2
}

const solution=(str1,str2)=>[1,2][(str1.indexOf(str2)===-1)+0]

var solution=(a,b)=>Number(!a.includes(b))+1
