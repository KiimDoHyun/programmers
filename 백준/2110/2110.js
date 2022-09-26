const [A, ...M] = require("fs")
    .readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\r\n");

/*
4 3
1
3
7
8


1 3 7 8

최대거리: 7
최소거리: 2

2 3 4 5 6 7

시작: 2
중간: 4
끝:  7

설치: 2



*/

/*
설치해야할 개수 3
1 2 3 4 5 6 7 8

시작: 1
중앙: 4
끝  : 9

설치 가능 개수: 2
- 설치해야할 개수보다 작기 때문에 중앙값 이하로 간다. (더 많이 설치 해야하니깐.)
(start 유지, end 는 min)

1 2 3 

시작: 1
중앙: 2
끝  : 3

설치 가능 개수:3
- 설치 해야할 개수가 일치한다. 중앙값을 늘려본다.

시작: 3
중앙: 3
끝  : 3



*/

// 1 2 _ 4 _ _ _ 8 9

// 중앙값
const getMid = (min, max) => Math.floor((min + max) / 2);

const getCount = (houseArr, mid) => {
    let element = Number(houseArr[0]);
    console.log("--------");
    console.log("target:", element);
    let count = 1;
    for (let index = 1; index < houseArr.length; index++) {
        const target = Number(houseArr[index]);
        if (target - element >= mid) {
            console.log("getCount 찾았다.");
            console.log("target:", target);
            console.log("--------");
            console.log("");
            count += 1;
            element = target;
        }
    }

    return count;
};

const solution = (A, M) => {
    // 1개 이상 공백 제거, 분리
    const splitResult = A.replace(/\s/g, "").split("");

    const N = splitResult[0]; // 집의 개수
    const C = Number(splitResult[1]); // 공유기의 개수
    const houseArr = M.sort((a, b) => a - b);

    let start = 1;
    // let minGap = Number(houseArr[1]) - Number(houseArr[0]);
    let end = Number(houseArr[houseArr.length - 1]) - Number(houseArr[0]);
    let answer = 0; // 현재 설치 개수

    // console.log("splitResult:", splitResult);
    // console.log("N:", N);
    console.log("C:", C);
    // console.log("houseArr:", houseArr);

    while (start <= end) {
        const mid = getMid(start, end);
        console.log("mid:", mid);
        // console.log("minGap:", minGap);
        // console.log("maxGap:", maxGap);
        answer = getCount(houseArr, mid);
        // 반대경우라면 간격을 늘린다.
        if (answer >= C) {
            start = mid + 1;
            answer = mid;
        }
        // 만약 카운트가 C보다 작다면 더 많이 설치 해야 하니까 간격을 줄이고
        else {
            end = mid - 1;
        }
        // count를 구하고
    }

    console.log("answer:", answer);

    // // 설치개수가 공유기 개수와 동일하면 탈출한다. ㅌ
    // while (1) {
    //     const mid = getMid(minGap, maxGap);

    //     count = getCount(houseArr, mid);

    //     if(count === C) {

    //     }
    //     console.log("mid:", mid);
    // }
};

solution(A, M);
