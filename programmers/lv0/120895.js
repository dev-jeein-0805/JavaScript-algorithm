// 인덱스 바꾸기

// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, 
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 
// return 하도록 solution 함수를 완성해보세요.

// [내 최초 풀이] -> 틀림
function solution(my_string, num1, num2) {
    let temp = '';
    temp = my_string[num2];
    my_string[num2] = my_string[num1];
    my_string[num1] = temp;
    return my_string;
}

// 제시하신 코드가 틀린 이유는 JavaScript에서 문자열(String)은 
// 불변(immutable)이기 때문입니다. 
// 불변하다는 것은 한 번 생성된 문자열의 내용을 직접 변경할 수 없다는 의미입니다.

// 코드에서 my_string[num2] = my_string[num1]; 와 같이 
// 문자열의 특정 인덱스에 직접 값을 할당하려고 시도하고 있습니다. 
// 하지만 JavaScript에서는 이러한 방식으로 문자열의 개별 문자를 수정할 수 없습니다. 
// 이러한 할당 시도는 무시되거나 오류가 발생할 수 있으며, 원래 문자열은 전혀 변경되지 않습니다.

// 문자열의 내용을 변경하려면, 원하는 변경사항을 적용한 새로운 문자열을 생성해야 합니다.
// 예를 들어, 문자열을 배열로 변환하여 요소를 교환한 뒤 다시 문자열로 합치는 방법을 사용할 수 있습니다.

// [내 두 번째 풀이] -> 틀림
function solution(my_string, num1, num2) {
    const array = Array.from(my_string);
    let num3 = array[num2];
    array.replace(array[num2], array[num1]);
    array.replace(array[num1], num3);
    return array.join('');
}

// JavaScript의 배열(Array)에는 replace라는 메소드가 존재하지 않습니다. 
// replace 메소드는 주로 문자열(String)에서 특정 패턴을 찾아 다른 문자열로 교체할 때 사용하는 메소드입니다.

// [내 세 번째 풀이] -> 통과
function solution(my_string, num1, num2) {
    const array = Array.from(my_string);
    let num3 = array[num2];
    array[num2] = array[num1];
    array[num1] = num3;
    return array.join('');
}

// [다른 사람의 풀이]
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}
// 구조분해할당 이런 것도 가능하구나! ⭐️

function solution(my_string, num1, num2) {
  return my_string
    .split("")
    .map((v, i) =>
      i === num1 ? my_string[num2] : i === num2 ? my_string[num1] : v
    )
    .join("");
}
