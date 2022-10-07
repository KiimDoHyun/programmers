/*

부모 / 자식 으로 입력을 받는다.

부모 하위 자식들을 가진 객체로 구성한다.
*/

/*

                    0
        1           2           3
    4       5       11         15 16 
  6 7 8    9 10   13  14
            
*/
const input = [
    ["0", "1"],
    ["0", "2"],
    ["0", "3"],
    ["1", "4"],
    ["1", "5"],
    ["4", "6"],
    ["4", "7"],
    ["4", "8"],
    ["5", "9"],
    ["5", "10"],
    ["2", "11"],
    ["11", "13"],
    ["11", "14"],
    ["3", "15"],
    ["3", "16"],
];

const makeTreeData = (data) => {
    let temp = {};

    data.forEach((item) => {
        if (temp[item[0]] === undefined) {
            temp[item[0]] = [];
        }

        temp[item[0]].push(item[1]);
    });

    return temp;
};

let treeData = null;

// 너비우선 탐색
const BFS = (curItems) => {
    let childList = [];
    if (curItems.length > 0) {
        for (let i = 0; i < curItems.length; i++) {
            console.log("[출력]: ", curItems[i]);

            const tempSubItem = treeData[curItems[i]];
            if (tempSubItem) childList.push(...tempSubItem);
        }
        BFS(childList);
    } else {
        return;
    }
};

// 깊이우선 탐색
const DFS = (cur) => {
    // 현재 위치에서 자식이 있으면.
    if (treeData[cur]) {
        for (let i = 0; i < treeData[cur].length; i++) {
            const target = treeData[cur][i];
            console.log("[출력]: ", target);
            DFS(target);
        }
    }
    // 자식이 없으면
    // 여기서 걸리면 마지막 까지 도달한 경우.
    else {
        // console.log("[마지막]: ", cur);
        return;
    }
};

const solution = (input) => {
    treeData = makeTreeData(input);
    console.log("treeData", treeData);

    // 너비우선 탐색
    console.log("--너비우선--\n");
    BFS(treeData["0"]);
    console.log("--너비우선--\n");

    // 깊이우선 탐색
    console.log("--깊이우선--\n");
    DFS("0");
    console.log("--깊이우선--\n");
};

solution(input);
