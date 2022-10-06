// 2018 KAKAO BLIND RECRUITMENT > 카카오 사각형 자르기

function solution(m, n, board) {
    var answer = 0;
    let boardArr = [...board];

    boardArr = boardArr.map((arr) => arr.split(""));
    // console.log('초기상태\n', boardArr)
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
        // console.log('지운상태\n', boardArr)

        // 원래 배열을 수정한다.
        // 아래에서 위로 올라가면서 찾는다.
        for (let i = 0; i < n; i++) {
            let findEmpty = false;
            let emptyPos = null;

            let j = m - 1;
            while (j >= 0) {
                const target = boardArr[j][i];
                // console.log(`target: ${target}, j: ${j} i: ${i}, `)

                // 만약 빈문자열을 찾았고 처음 찾는거라면
                // 현재 위치를 기억한다.
                if (target === " " && findEmpty === false) {
                    findEmpty = true;
                    emptyPos = { x: j, y: i };
                    j -= 1;
                }
                // 빈문자열이 아닌 곳을 만난다면 기억해둔 위치와 바꾼다.
                else if (target !== " " && findEmpty === true) {
                    // 값 교체
                    boardArr[emptyPos.x][emptyPos.y] = boardArr[j][i];
                    boardArr[j][i] = " ";

                    // 바꾼위치 한칸 위로가서 다시 탐색한다.
                    j = emptyPos.x - 1;
                    findEmpty = false;
                    emptyPos = {};
                } else {
                    j -= 1;
                }
            }
        }
        // console.log('수정상태\n', boardArr)
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
