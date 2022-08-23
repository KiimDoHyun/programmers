const [a, b] = require("fs")
    .readFileSync("./a.txt")
    .toString()
    .trim()
    .split("\n");

/*
시작
  1을 선택(고정)하고 -> 나머지 [2, 3, 4] 중에서 2개씩 조합을 구한다.
  [1, 2, 3] [1, 2, 4] [1, 3, 4]
  2를 선택(고정)하고 -> 나머지 [3, 4] 중에서 2개씩 조합을 구한다.
  [2, 3, 4]
  3을 선택(고정)하고 -> 나머지 [4] 중에서 2개씩 조합을 구한다. 
  [] 
  4을 선택(고정)하고 -> 나머지 [] 중에서 2개씩 조합을 구한다.
  []
종료
*/
// 조합
const getCombination = (array, getCount) => {
    // console.log("현재 getCount", getCount);
    const resultArr = [];
    if (getCount === 1) {
        // console.log("카운트 1 이라 탈출", array);
        return array;
    }
    // console.log("현재 array:", array);
    array.forEach((arr, idx) => {
        const rest = array.slice(idx + 1);

        // console.log("--target", arr);
        // console.log("--rest", rest);
        const combination = getCombination(rest, getCount - 1);

        const result = combination.map((item) => [arr, ...item].sort());
        // console.log("combination result", result);

        resultArr.push(...result);
    });
    // console.log("combination resultArr", resultArr);

    return resultArr;

    // 뭔가 결과를 리턴해야다음 재귀에서도 쓴다...
};

// a, e, i, o, u이게 하나라도 포함된(모음) + 최소 두개의 자음이 포함된.
const check = (strArr) => {
    console.log("strArr", strArr);
    const reg1 = /[aeiou]/g;
    const reg2 = /[^a|e|i|o|u]/g;

    const result1 = strArr.match(reg1);
    const result2 = strArr.match(reg2);

    console.log("reg1", strArr.match(reg1));
    console.log("reg2", strArr.match(reg2));
    console.log("reg1 test", reg1.test(strArr));
    console.log("reg2 test", reg2.test(strArr));

    // 모음이 하나라도 있는지
    if (!result1 || result1.length < 1) {
        console.log(1);
        return false;
    }

    // 자음이 두개 이상인지.
    if (!result2 || result2.length < 2) {
        console.log(2);
        return false;
    }

    return true;
};

const solution = (firstLine, secondLine) => {
    const L = firstLine[0];
    const C = firstLine[1];
    const strArr = secondLine;
    // console.log("L", L);
    // console.log("C", C);
    console.log("---------Start---------strArr", strArr);

    // 조합
    let result = getCombination(strArr, L);
    console.log(">> result", result);

    // 정규화
    result = result.map((item) => item.toString("").replaceAll(",", ""));
    console.log("result", result);
    result.sort();
    console.log("result", result);

    let resultStr = "";
    result.forEach((item) => {
        if (check(item)) {
            resultStr += item + "\n";
        }
    });

    console.log("resultStr", resultStr);
};

solution(a.replace("\r", "").split(" "), b.replace("\r", "").split(" "));
