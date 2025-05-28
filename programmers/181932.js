// 코드 처리하기

// 문자열 code가 주어집니다.
// code를 앞에서부터 읽으면서 만약 문자가 "1"이면 mode를 바꿉니다. 
// mode에 따라 code를 읽어가면서 문자열 ret을 만들어냅니다.

// mode는 0과 1이 있으며, idx를 0 부터 code의 길이 - 1 까지 1씩 키워나가면서 
// code[idx]의 값에 따라 다음과 같이 행동합니다.

// mode가 0일 때
// code[idx]가 "1"이 아니면 idx가 짝수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
// code[idx]가 "1"이면 mode를 0에서 1로 바꿉니다.

// mode가 1일 때
// code[idx]가 "1"이 아니면 idx가 홀수일 때만 ret의 맨 뒤에 code[idx]를 추가합니다.
// code[idx]가 "1"이면 mode를 1에서 0으로 바꿉니다.
// 문자열 code를 통해 만들어진 문자열 ret를 return 하는 solution 함수를 완성해 주세요.

// 단, 시작할 때 mode는 0이며, return 하려는 ret가 만약 빈 문자열이라면 대신 "EMPTY"를 return 합니다.

// [내 풀이]
function solution(code) {
    let answer = "";
    let mode = 0;

    for (let i = 0; i < code.length; i++) {
        const char = code[i];

        if (char === "1") {
            // 현재 문자가 "1"이면 모드 토글 (0 <-> 1)
            mode = 1 - mode;
        } else {
            if (mode === 0) {
                answer += i % 2 === 0 ? char : ""; 
            } else {
                answer += i % 2 === 1 ? char : "";
            }
        }
    }
    return answer.length === 0 ? "EMPTY" : answer;
}

// 처음에 틀렸던 이유 : mode 도 매개변수 처리했더니 계속 error. 왜 error 인지는 ..

// [다른 사람의 풀이]
function solution(code) {
    var answer = code.replaceAll("1","").split("").filter((val, idx)=> idx%2 === 0).join("");
    return answer.length > 0 ? answer : "EMPTY";
}

function solution(code) {
    let odd = false
    return Array.from(code).reduce((acc, v, i) => {
        if (v === '1') {
            odd = !odd
            return acc
        }
        return (i % 2 === (odd ? 1 : 0)) ? acc + v : acc
    }, '') || 'EMPTY'
}

function solution(code) {
    let answer = '';
    let mode = false;

    code.split('').forEach((x,i) => {
        if(x == 1){
            mode = !mode;
        }
        if(x.match('[\a-z\]')){
            if(!mode){
                answer += i%2 == 0 ? x : '';
            }else{
                answer += i%2 == 1 ? x : '';
            }
        }
    });

    return answer.length > 0 ? answer : "EMPTY";
}

function solution(code) {
  let ret = '';
  let mode = 0;
  [...code].forEach((char, i) => {
    if (char === '1') {
      mode = Math.abs(mode - 1);
      return;
    }
    ret += i % 2 === mode ? char : '';
  });

  return ret.length === 0 ? 'EMPTY' : ret;
}

function solution(code) {
    var answer = '';
    let ret = [];
    let mode = true;

    code = code.split("");

    for(let i = 0; i < code.length; i++){
        if(code[i] === "1"){
            mode = !mode
        }else if(!mode&& i%2 !== 0){
            ret.push(code[i])
        }else if(mode && i%2 ===0){
            ret.push(code[i])
        }
    }

    answer = ret.join("")
    if(ret.length === 0) answer = "EMPTY"
    return answer;
}

function solution(code) {
    let ans ='';
    let m = true;
    [...code].forEach((v,i)=>v==1?m=!m:ans+=!(i%2)==m?v:'')
    return ans||'EMPTY'
}

function solution(code) {
    let ret = '';
    for (let i = 0, mode = false; i < code.length; i++) {
        if (code[i] === '1') mode = !mode;
        else if ((mode && i % 2) || (!mode && !(i % 2))) {
            ret += code[i];
        }
    }
    return ret.length ? ret : 'EMPTY';
}
