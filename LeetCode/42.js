// Trapping Rain Water

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let startObj = { num: 0, idx: 0 };
    let endObj = { num: 0, idx: 0 };
    let waterSum = 0;
    console.log(height);

    const calculateWater = (start, end, isReverse = false) => {
        let result = 0;
        for (
            let i = isReverse ? start.idx - 1 : start.idx + 1;
            isReverse ? i > end.idx : i < end.idx;
            isReverse ? i-- : i++
        ) {
            result += start.num - height[i];
        }

        console.log("result", result);
        return result;
    };

    for (let idx = 0; idx < height.length; idx++) {
        const item = height[idx];
        if (startObj.num === 0) {
            startObj.num = item;
            startObj.idx = idx;
        } else {
            // 더 높은 막대가 바로 다음인경우
            if (item >= startObj.num && idx - 1 === startObj.idx) {
                startObj.num = item;
                startObj.idx = idx;
            }
            // 더 높은 막대가 바로 다음이 아닌 경우.
            else if (item >= startObj.num && idx - 1 !== startObj.idx) {
                endObj.num = item;
                endObj.idx = idx;

                console.log("start", startObj);
                console.log(" end ", endObj);

                // 계산하고 start, end 를 초기화 한다.

                // 계산
                console.log("--계산--");
                waterSum += calculateWater(startObj, endObj);
                console.log("------------------------");

                // 초기화
                startObj.num = endObj.num;
                startObj.idx = endObj.idx;

                endObj.num = 0;
                endObj.idx = 0;

                // 만약 start 가 정해졌지만 end가 끝가지 가도 정해지지 않으면
                // 끝에서 다시 해당 위치까지 반복한다.
            }
        }
    }

    console.log("Job End----");
    console.log("start", startObj);
    console.log(" end ", endObj);
    console.log("----Job End");

    if (endObj.idx !== height.length - 1) {
        console.log("--Start Reverse--");
        const finishIdx = startObj.idx;
        startObj = { num: 0, idx: 0 };
        endObj = { num: 0, idx: 0 };

        // 다시 거꾸로 간다.
        for (let idx = height.length - 1; idx >= finishIdx; idx--) {
            const item = height[idx];
            if (startObj.num === 0) {
                startObj.num = item;
                startObj.idx = idx;
            } else {
                // 더 높은 막대가 바로 다음인경우
                if (item >= startObj.num && idx + 1 === startObj.idx) {
                    startObj.num = item;
                    startObj.idx = idx;
                }
                // 더 높은 막대가 바로 다음이 아닌 경우.
                else if (item >= startObj.num && idx + 1 !== startObj.idx) {
                    endObj.num = item;
                    endObj.idx = idx;

                    console.log("start", startObj);
                    console.log(" end ", endObj);
                    console.log("------------------------");

                    // 계산하고 start, end 를 초기화 한다.

                    // 계산
                    waterSum += calculateWater(startObj, endObj, true);
                    console.log("--계산--");

                    // 초기화
                    startObj.num = endObj.num;
                    startObj.idx = endObj.idx;

                    endObj.num = 0;
                    endObj.idx = 0;

                    // 만약 start 가 정해졌지만 end가 끝가지 가도 정해지지 않으면
                    // 끝에서 다시 해당 위치까지 반복한다.
                }
            }
        }
    }

    console.log("water", waterSum);

    return waterSum;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
