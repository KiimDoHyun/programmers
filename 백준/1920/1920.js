const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");

const targetArr = input[1].split(" ").sort();
const checkArr = input[3].split(" ");

const find = (num) => {
    let startIdx = 0;
    let endIdx = targetArr.length - 1;
    let result = "";

    while (1) {
        const minIdx = Math.floor((startIdx + endIdx) / 2);
        const mid = Number(targetArr[minIdx]);

        // 중앙값과 같으면 탈출
        if (num === mid) {
            result = "1\n";
            break;
        }
        // 중앙값이 아니면
        else {
            // 중앙값과 다른데 갈곳이 없으면 탈출
            if (startIdx >= endIdx) {
                result = "0\n";
                break;
            } else {
                // 내려간다
                if (num < mid) {
                    endIdx = minIdx - 1;
                }

                // 올라간다
                else if (num > mid) {
                    startIdx = minIdx + 1;
                }
            }
        }
    }

    return result;
};

const solution = (input) => {
    // targetArr 에 checkArr배열의 값들이 있는지 체크한다.

    let result = "";

    checkArr.forEach((item) => {
        result += find(Number(item));
    });

    console.log(result.trim());
};

solution(input);
