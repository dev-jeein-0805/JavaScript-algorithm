// 접두사인지 확인하기

// 어떤 문자열에 대해서 접두사는 특정 인덱스까지의 문자열을 의미합니다. 
// 예를 들어, "banana"의 모든 접두사는 
// "b", "ba", "ban", "bana", "banan", "banana"입니다.
// 문자열 my_string과 is_prefix가 주어질 때, 
// is_prefix가 my_string의 접두사라면 1을, 아니면 0을 
// return 하는 solution 함수를 작성해 주세요.

// [내 풀이]
function solution(my_string, is_prefix) {
    const list = [];
    for(i=1; i < my_string.length; i++){
        list.push(my_string.slice(0, i));
    }
    return +(list.includes(is_prefix));
}

// [다른 사람의 풀이]
function solution(my_string, is_prefix) {
  return +my_string.startsWith(is_prefix);
}
// startsWith()

function solution(my_string, is_prefix) {
    return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0
}

function solution(my_string, is_prefix) {
    return my_string.split(is_prefix)[0]===""?1:0;
}

function solution(my_string, is_prefix) {
    var answer = 0;

    if(my_string.length < is_prefix.length){
        return 0;
    }

    for(let i = 0; i<is_prefix.length; i++){
        if(my_string[i] !== is_prefix[i]){
            return 0;
        }
    }

    return 1;;
}

const solution = (my_string, is_prefix) => {
    const regExp = new RegExp(`^${is_prefix}`);
    // console.log(regExp)
    if(regExp.test(my_string)) return 1;
    return 0;
}

const solution = (my_string, is_prefix) => +(my_string.indexOf(is_prefix) == 0);

const solution = (str, pre) => str.indexOf(pre) === 0 ? 1 : 0

function solution(my_string, is_prefix) {
    var answer = 0;

    return (new RegExp(`^${is_prefix}`, 'g')).test(my_string) ? 1 : 0;
}

function solution(ms, ip) {
    return ms.split(ip)[0] === '' ? 1 : 0
}
