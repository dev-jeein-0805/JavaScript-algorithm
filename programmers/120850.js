// 문자열 정렬하기 (1)

// 문자열 my_string이 매개변수로 주어질 때, 
// my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 
// solution 함수를 작성해보세요.

// [내 풀이]
function solution(my_string) {
    const alphaArray = my_string.match(/[a-z]/g) || []; // 하단 1) 참고
    return Array.from(my_string)
                .filter(x => !alphaArray.includes(x))
                .map(x => Number(x))
                .sort((a, b) => a - b);
}

// 1)
// String.prototype.match() 메서드는 정규 표현식에 g(global) 플래그가 사용된 경우, 
// 매치되는 결과가 없으면 null을 반환합니다. 
// 매치되는 결과가 있다면 매치된 문자열들의 배열을 반환합니다.

// 만약 my_string에 소문자 알파벳이 하나도 없다면, 
// my_string.match(/[a-z]/g)는 null을 반환하게 됩니다. 
// 따라서 alphaArray 변수에는 null 값이 할당됩니다.

// .filter(x => !alphaArray.includes(x))
// 이때 alphaArray가 null이기 때문에, null의 메서드인 includes를 호출하려고 시도하게 됩니다. 
// 이는 JavaScript에서 "Cannot read properties of null (reading 'includes')"와 같은 
// TypeError 런타임 에러를 발생시킵니다.
// match 결과가 null일 경우를 대비하여 빈 배열 []을 기본값으로 사용하도록 수정하면 이 문제를 해결할 수 있습니다.

// [다른 사람의 풀이]
function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}

function solution(my_string) {
    return my_string.split("").filter((v) => !isNaN(v)).map((v) => v*1).sort((a,b) => a-b)
}

function solution(my_string) {
    return my_string.replace(/[^\d]/g,'').split('').map(v=>+v).sort();
}
