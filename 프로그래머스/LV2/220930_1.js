// 카카오 사각형 자르기 (히든케이스 실패)

function solution(m, n, board) {
    var answer = 0;
    let boardArr = [...board];

    boardArr = boardArr.map((arr) => arr.split(""));

    let workDone = false;
    let deleteList = []; // 지워야할 리스트
    while (workDone === false) {
        // 가장 오른쪽, 가장 아래쪽 라인까지 검색할 필요는 없다.
        // 전체 배열을 한번 돌면서 지워야 할 대상을 찾는다.
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const target = boardArr[i][j];

                // 만약 타겟이 빈문자열이면 넘어간다.
                if (target === " ") continue;
                else {
                    // 비교할 대상들을 선언하고.
                    let right = boardArr[i][j + 1];
                    let right_bottom = boardArr[i + 1][j + 1];
                    let bottom = boardArr[i + 1][j];

                    // 각비교 대상이 빈 문자열이면
                }

                // 만약 target이 비어있는 칸이 아니고
                // 오른쪽, 오른쪽 대각 아래, 아래와 target이 같다면.
                if (
                    target !== "" &&
                    target === boardArr[i + 1][j] &&
                    target === boardArr[i][j + 1] &&
                    target === boardArr[i + 1][j + 1]
                ) {
                    // 2*2에 해당하는 좌표를 빈문자열로 바꾼다.
                    // 문제: 겹쳐있는 경우는 어떻게?
                    // 해결: 지워야할 좌표를 배열로 저장하고 한바퀴 돌면 해당 좌표를 다 바꾼다.
                    // 고민: 근데 그럼 반복 수가 많아지는데......

                    deleteList.push({ x: i, y: j });
                    deleteList.push({ x: i + 1, y: j });
                    deleteList.push({ x: i, y: j + 1 });
                    deleteList.push({ x: i + 1, y: j + 1 });
                }
            }
        }

        // 만약 더이상 지울게 없으면 탈출
        if (deleteList.length < 1) workDone = true;
        // 지울게 있으면 지운다.
        else {
            deleteList.forEach((delPosition) => {
                const delTarget = boardArr[delPosition.x][delPosition.y];

                // 지워지지 않은 곳이면
                // 지우고 카운트를 올린다.
                if (delTarget !== "") {
                    boardArr[delPosition.x][delPosition.y] = " ";
                }
                // 지워진곳을 또지우고 카운트를 올리면 중복으로 셀수 있기 때문
            });

            // 다 지우고 배열을 초기화 해준다.
            deleteList = [];
        }

        // 원래 배열을 수정한다.
        for (let i = m - 1; i > 1; i--) {
            for (let j = 0; j < n; j++) {
                const target = boardArr[i][j];

                // 빈문자열이 아닐때
                if (target !== " ") {
                    // 만약 아래로 내려갈수 있다면.
                    let go = true;
                    let startIdx = i;
                    while (go) {
                        if (startIdx === 0) break;
                        const up = boardArr[startIdx - 1][j];
                        if (up !== " ") {
                            boardArr[i - 1][j] = boardArr[startIdx - 1][j];
                            boardArr[startIdx - 1][j] = " ";
                            break;
                        } else {
                            startIdx -= 1;
                        }
                    }
                    // if(boardArr[i + 1][j] === ' ') {
                    //     // 타겟을 한칸 내린다.
                    //     boardArr[i + 1][j] = target;
                    //     boardArr[i][j] = ' ';
                    // }
                }
            }
        }
    }
    // 체크한다.
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const target = boardArr[i][j];

            // 빈문자열일때
            if (target === " ") {
                answer += 1;
            }
        }
    }

    return answer;
}

/*

aa
bb
aa
bb
zz
zz
cc

**
**
aa
bb
aa
bb
cc

*/
