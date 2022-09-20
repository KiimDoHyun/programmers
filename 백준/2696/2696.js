const [T, ...M] = require("fs")
    .readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\r\n");

const solution = (T, M) => {
    console.log(T);
    console.log(M);

    let resultStr = ""; // 최종 결과를 담을 문자열
    let middleArr = []; // 중앙값 계산을 위해 정렬값을 담을 배열
    let readArr = []; // 총 읽을 숫자를 담을 배열
    // 2
    // 1 3 5
    // 0 1 2
    // 1
    const setMiddleArr = (num) => {
        let resultIdx = 0;
        if (middleArr.length < 1) {
            middleArr.push(num);
        } else {
            for (let index = 0; index < middleArr.length; index++) {
                const element = middleArr[index];
                if (element <= num) {
                    resultIdx = index + 1;
                } else if (element > num) {
                    break;
                }
            }
            middleArr.splice(resultIdx, 0, num);
        }
    };
    let read_line_count = 0; // 읽어야 할 줄 개수.

    const setReadLineCount = (num) => {
        resultStr += `${Math.ceil(num / 2)}\n`;
        if (num > 10) {
            read_line_count = Math.ceil(num / 10);
        } else {
            read_line_count = 1;
        }
    };
    M.forEach((el, idx) => {
        middleArr = [];
        if (idx === 0) {
            setReadLineCount(el);
        } else {
            if (read_line_count > 0) {
                readArr.push(...el.split(" "));
                read_line_count -= 1;
            } else {
                setReadLineCount(el);
            }
        }

        if (read_line_count === 0) {
            let str = "";
            let addCnt = 0;
            // console.log("readArr:", readArr);

            readArr.forEach((readArrEl, idx) => {
                // 현재까지 읽은 값을 바탕으로 정렬한다.
                // 홀수라면 현재 중앙값을 읽는다.
                setMiddleArr(Number(readArrEl));

                // 배열은 0부터 시작하기 때문에 짝수로 체크(실제로 홀수번째다.)
                if (idx % 2 === 0) {
                    addCnt += 1;
                    str += `${middleArr[idx / 2]}`;
                    if (addCnt % 10 == 0) {
                        str += "\n";
                    } else {
                        str += " ";
                    }
                }
            });
            // console.log("씨발 체크", str.trim());
            // console.log("씨발 체크", str.trim().length);
            resultStr += str.trim() + "\n";
            readArr = [];
        }
    });
    console.log(resultStr);
};

solution(T, M);
