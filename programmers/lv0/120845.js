// 주사위의 개수

// 머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 
// 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 
// 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 
// 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 
// 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

// [내 풀이]
function solution(box, n) {
    return Math.floor(box[0]/n) * Math.floor(box[1]/n) * Math.floor(box[2]/n);
}

// [다른 사람의 풀이]
function solution(box, n) {
    return box.reduce((acc,v) => acc * Math.floor(v / n), 1);
}

function solution(box, n) {
    let [width, length, height] = box;
    return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
}

function solution(box, n) {
    return box.map(v=>~~(v/n)).reduce((a,v)=>a*v,1);
}
