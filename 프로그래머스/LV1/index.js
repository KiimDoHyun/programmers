// function solution(board, moves) {
//     var answer = 0;
//     let popCount = 0;
//     let basket = [];
//     let itemPos = {};
//     let length = board[0].length;
//     // console.log("length", length);

//     // console.log(board[4][4]);
//     //console.log(board.length)

//     moves.forEach((item) => {
//         console.log("go", item);
//         if (!itemPos[item]) {
//             for (let i = 0; i < length; i++) {
//                 if (board[i][item - 1] === 0) {
//                     continue;
//                 } else {
//                     basket.push(board[i][item - 1]);
//                     itemPos[item] = i;
//                     console.log("itemPos", itemPos);
//                     break;
//                 }
//             }
//         } else {
//             console.log("item", item);
//             console.log("itemPos[item]", itemPos[item]);
//             console.log("item - 1", item - 1);
//             basket.push(board[itemPos[item]][item - 1]);

//             itemPos[item] =
//                 itemPos[item] + 1 >= board.lengt
//                     ? board.lengt
//                     : itemPos[item] + 1;
//         }

//         console.log("basket", basket);

//         if (basket[basket.length - 1] === basket[basket.length - 2]) {
//             basket.pop();
//             basket.pop();
//             popCount += 1;
//         }
//     });

//     console.log("popCount", popCount);
//     return answer;
// }

function solution(board, moves) {
    var answer = 0;

    let itemPos = {};
    let basket = [];
    let popCnt = 0;
    board.forEach((item1, idx1) => {
        item1.forEach((_, idx2) => {
            if (board[idx1][idx2] !== 0 && !itemPos[idx2 + 1]) {
                itemPos[idx2 + 1] = idx1;
            }
        });
    });
    console.log(itemPos);

    moves.forEach((item) => {
        console.log("?1", item - 1);
        console.log("?2", itemPos[item]);
        console.log("?3", board[item - 1][itemPos[item]]);
        if (itemPos[item] < board.length) {
            basket.push(board[itemPos[item]][item - 1]);
            itemPos[item] = itemPos[item] + 1;

            if (basket[basket.length - 1] === basket[basket.length - 2]) {
                popCnt += 2;
                basket.pop();
                basket.pop();
            }
        }
    });
    console.log(basket);
    console.log(popCnt);
    return answer;
}

solution(
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
);
