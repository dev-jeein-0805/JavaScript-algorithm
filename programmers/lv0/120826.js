// 특정 문자 제거하기

// 문자열 my_string과 문자 letter이 매개변수로 주어집니다. 
// my_string에서 letter를 제거한 문자열을 return하도록 
// solution 함수를 완성해주세요.

// [내 풀이]
function solution(my_string, letter){
    for(i=0; i < my_string.length; i++){
        if(my_string[i] === letter){
            continue;
        } else {
            new_string += my_string[i];
        }
    }
    return new_string;
}

// [다른 사람의 풀이]
function solution(my_string, letter) {
    return my_string.split(letter).join('');
}

function solution(my_string, letter) {
    return my_string.replaceAll(letter, "");
}

function solution(my_string, letter) {
    let reg = new RegExp(letter, 'g');
    return my_string.replace(reg, '');
}

function solution(my_string, letter) {
    return Array.from(my_string).filter(t => t !== letter).join('');
}

