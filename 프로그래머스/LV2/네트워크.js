// 깊이/너비 우선 탐색(DFS/BFS) > 네트워크

function solution(n, computers) {
    var answer = 0;
    let treeObj = {};
    let visited = {};
    
    const makeTreeObj = (parent, child) => {
        treeObj[`${parent}`].push(child);
    }
    
    computers.forEach((computer, idx) => {
        treeObj[`${idx}`] = [];
        computer.forEach((item, itemIdx) => {
            if(idx !== itemIdx && computer[idx] === 1 && item === 1) makeTreeObj(idx, itemIdx)
        })
    })
    
    console.log(treeObj);
    
    const DFS = (cur) => {
        // 자식이 존재한다면.
        if(treeObj[`${cur}`].length > 0) {
            for(let i = 0; i< treeObj[`${cur}`].length; i++) {
                if(!visited[treeObj[`${cur}`][i]]) {
                    visited[treeObj[`${cur}`][i]] = true;
                    DFS(treeObj[`${cur}`][i]);
                }
            }
        }
        // 자식이 존재하지 않다면
        else {
            return ;
        }
    }
    
    for(let i = 0; i<computers.length; i++) {
        // 방문한 적이 없는 노드에 한해서.
        if(!visited[`${i}`]) {
            visited[`${i}`] = true;
            DFS(i);
            answer+=1;
            // 깊이 우선 탐색 시작.
        }
        // i를 방문 배열에 넣는다.
        // i를 시작으로 깊이 우선 탐색을 진행한다.
        // 탐색을 진행하면서 방문한 곳을 저장한다.
        // 탈출하면 answer에 1을 더한다.
        // 깊이 우선 탐색을 진행한 개수가 정답이 된다.
    }
    
    return answer;
}