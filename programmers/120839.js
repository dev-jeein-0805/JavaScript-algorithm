// 가위 바위 보

// 가위는 2 바위는 0 보는 5로 표현합니다. 
// 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, 
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 
// return하도록 solution 함수를 완성해보세요.

// [내 풀이]
function solution(rsp) {
    const returnArr = [];
    const array = Array.from(rsp);
    for(i=0; i<array.length; i++){
        if(array[i] === "2"){
            returnArr.push("0");
        }else if(array[i] === "5"){
            returnArr.push("2");
        }else if(array[i] === "0"){
            returnArr.push("5");
        }
    }
    return returnArr.join('');
}

// [다른 사람의 풀이]
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}
// 각각 대응되는게 있으면 객체를 사용한다! 

function solution(rsp) {
    return rsp.split("").map((v) => v==="2" ? 0 : (v==="0" ? 5 : 2)).join("")
}
