const [T, ...M] = require("fs")
    .readFileSync("./input.txt")
    .toString()
    .trim()
    .split("\r\n");
/*
최대힙과 최소힙을 이용하여 해결
최소힙: 최소값이 앞으로, 부모노드의 값이 자식노드의 값보다 항상 작다, 가장 작은 값이 루트다
최대힙: 최대값이 앞으로, 부모노드의 값이 자식노드들의 값보다 항상 크다, 가장 큰값이 루트다

>> 최대힙구현.
1. 값을 배열의 맨 마지막에 추가한다.
2. 부모를 찾는다.
 - 부모idx = 현재 Math.floor(idx / 2)
3. 부모 값과 비교해서 크다면 부모와 변경을, 작다면 유지한고 종료한다.
4. 값을 변경했다면 현재 루트인지 확인후 루트가 아니라면 2번으로가서 반복. (루트이거나, 작다면 종료.) 

문제해결

최대힙, 최소힙으로 나누어 값을 졍렬한 후, 최대힙에서 최대값을 찾으면 된다.

최대힙 -> 최소힙 순서로 채운다. (항상 최대힙이 최소힙보다 길이가 크거나 같아야 한다.)
최대힙엔 중앙값 이하의 수, 최소힙엔 중앙값 이상의 수가 오도록.



*/

const solution = (T, M) => {
    let resultStr = ""; // 최종 결과를 담을 문자열
    let readArr = []; // 총 읽을 숫자를 담을 배열

    let Max = [];
    let Min = [];
    // 2
    // 1 3 5
    // 0 1 2
    // 1

    let read_line_count = 0; // 읽어야 할 줄 개수.

    const setReadLineCount = (num) => {
        if (resultStr === "") {
            resultStr += `${Math.ceil(num / 2)}\n`;
        } else {
            resultStr += `\n${Math.ceil(num / 2)}\n`;
        }
        if (num > 10) {
            read_line_count = Math.ceil(num / 10);
        } else {
            read_line_count = 1;
        }
    };

    const swap = (arr, a, b) => {
        let temp = null;
        temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;

        return arr;
    };

    // 최대힙 삭제
    const DeleteHeap = (arr, type) => {
        arr[0] = arr[arr.length - 1];
        arr.pop();

        let curIdx = 0;
        let child1 = null;
        let child2 = null;
        let target = null;
        let targetIdx = null;

        while (1) {
            child1 = arr[curIdx * 2 + 1];
            child2 = arr[curIdx * 2 + 2];
            if (child1 === undefined && child2 === undefined) break;

            // 자식을 찾고 경우의수를 따진다. (둘다있는지, 하나만 있는지)
            if (type === "MAX") {
                if (child1 && child2) {
                    target = child1 >= child2 ? child1 : child2;
                    targetIdx =
                        child1 >= child2 ? curIdx * 2 + 1 : curIdx * 2 + 2;
                } else if (child1 && !child2) {
                    target = child1;
                    targetIdx = curIdx * 2 + 1;
                } else if (!child1 && child2) {
                    target = child2;
                    targetIdx = curIdx * 2 + 2;
                }
            } else if (type === "MIN") {
                if (child1 && child2) {
                    target = child1 <= child2 ? child1 : child2;
                    targetIdx =
                        child1 <= child2 ? curIdx * 2 + 1 : curIdx * 2 + 2;
                } else if (child1 && !child2) {
                    target = child1;
                    targetIdx = curIdx * 2 + 1;
                } else if (!child1 && child2) {
                    target = child2;
                    targetIdx = curIdx * 2 + 2;
                }
            }

            // 최대인지 최소인지에 따라 처리 방식이 다르다(등호 방향이 다른다.)
            if (type === "MAX") {
                if (target <= arr[curIdx]) {
                    break;
                } else {
                    swap(arr, curIdx, targetIdx);
                    curIdx = targetIdx;
                }
            } else if (type === "MIN") {
                if (target >= arr[curIdx]) {
                    break;
                } else {
                    swap(arr, curIdx, targetIdx);
                    curIdx = targetIdx;
                }
            }
        }

        return arr;
    };
    // 최대힙
    const makeMaxHeap = (item = null) => {
        // 1. 일단 추가한다.
        if (item !== null) {
            Max.push(item);
        }

        // 2. 부모를 찾는다.
        let curIdx = Max.length - 1;
        let parentIdx = Math.floor((curIdx - 1) / 2);

        if (curIdx === 0) return;

        while (1) {
            if (curIdx === 0 || Max[parentIdx] >= Max[curIdx]) {
                break;
            } else if (curIdx !== 0 && Max[parentIdx] < Max[curIdx]) {
                Max = swap(Max, parentIdx, curIdx);
                curIdx = parentIdx;
                parentIdx = Math.floor(curIdx / 2);
            }
        }
    };

    // 최소힙
    const makeMinHeap = (item = null) => {
        // 1. 일단 추가한다.
        if (item !== null) {
            Min.push(item);
        }

        // 2. 부모를 찾는다.
        let curIdx = Min.length - 1;
        let parentIdx = Math.floor((curIdx - 1) / 2);

        if (curIdx === 0) return;

        while (1) {
            if (curIdx === 0 || Min[parentIdx] <= Min[curIdx]) {
                break;
            } else {
                Min = swap(Min, parentIdx, curIdx);
                curIdx = parentIdx;
                parentIdx = Math.floor(curIdx / 2);
            }
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
            let strArr = [];
            // console.log("readArr:", readArr);
            readArr.forEach((arrayItem, idx) => {
                // 최대 힙 부터 채운다.
                if (idx % 2 === 0) {
                    makeMaxHeap(Number(arrayItem));

                    if (Max.length > 0 && Min.length > 0 && Max[0] > Min[0]) {
                        // console.log("여기 들어오기는 하냐?");
                        // 최대힙과 최소힙의 값을 바꾼다.
                        // 최대, 최소 힙의 [0]을 지우고 마지막 원소로 채운다.
                        // 교환할 값을 각 힙에 추가한다.

                        // 각 힙의 최대, 최소값을 삭제후 정렬한다.
                        const temp_Max_Top = Max[0];
                        const temp_Min_Top = Min[0];
                        // Max[0] = Max[Max.length - 1];
                        // Max.pop();
                        // 삭제후 재정렬
                        Max = DeleteHeap(Max, "MAX");

                        // Min[0] = Min[Min.length - 1];
                        // Min.pop();
                        // 삭제후 재정렬
                        Min = DeleteHeap(Min, "MIN");

                        // 교체할 값을 넣어준다.
                        makeMaxHeap(temp_Min_Top);
                        makeMinHeap(temp_Max_Top);
                    }

                    // 최대힙의 최대값을 꺼내면 중앙값이다.
                    strArr.push(Max[0]);
                } else {
                    makeMinHeap(Number(arrayItem));
                }
                // console.log("---------------");
                // console.log("최종 Max:", Max);
                // console.log("");
                // console.log("최종 Min:", Min);
                // console.log("---------------");
                // 추가가 완료되었으면 검사한다.
                // 만약 최대힙의 최대값이 최소힙의 최소값보다 작다면
                // 둘을 바꾸고 다시 정렬작업을 한다.
            });

            console.log("strArr:", strArr);
            strArr.forEach((strItem, idx) => {
                if (idx > 0 && idx % 9 === 0) {
                    resultStr += `${strItem}\n`;
                } else if (idx !== strArr.length - 1) {
                    resultStr += `${strItem} `;
                } else if (idx === strArr.length - 1) {
                    resultStr += `${strItem}`;
                }
            });

            readArr = [];
            Min = [];
            Max = [];
            // console.log(str);
        }
    });
    console.log(resultStr);
    // console.log(resultStr.length);
    console.log(resultStr.replace(/\n/g, "@"));
    // console.log(resultStr.replace(/\n/g, "#"));
};

solution(T, M);

/*
3
9
1 2 3 4 5 6 7 8 9
9
9 8 7 6 5 4 3 2 1
23
23 41 13 22 -3 24 -31 -11 -8 -7
3 5 103 211 -311 -45 -67 -73 -81 -99
-33 24 56
*/
