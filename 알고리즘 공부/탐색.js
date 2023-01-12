// BFS
/*
Queue로 구현 가능 하다.

*/


/*********************************************

BFS: 가장 먼 노드

*********************************************/
function solution(n, edge) {
    /*
    시작은 1번이다.
    
    n만큼의 노드가 존재한다.
    
    1 에서 시작해서 n 까지 노드에 대해 최단 거리를 측정한다.
    
    */

    /*
    shift의 최적화를 고려해서 자료크기가 커지면 class Queue를 구현해서 BFS를 해결하도록 한다.
        - 큐.js Queue 클래스 참고
    */
    
    // 방문 정보를 저장한다.
    let visitedInfo = new Array(n + 1).fill(0);
    visitedInfo[1] = 1;
    // 노드의 연결정보를 종합한 자료를 만든다.
    let edgeInfo = {};
    for(let i = 1; i<= n; i++) {
        edgeInfo[i] = [];
    }
    
    edge.forEach((edgeItem) => {
        const start = edgeItem[0];
        const end = edgeItem[1];
        
        // 양방향으로 연결한다.
        edgeInfo[start].push(end)
        edgeInfo[end].push(start)
    })
    
    // BFS
    const queue = [1];
    while(queue.length > 0) {
        const src = queue.shift(); // shift는 O(n) 이지만 자바스크립트 엔진에서 최적화된다?
        for(const dest of edgeInfo[src]) {
            // 방문하지 않은 노드만 계산을 진행한다.
            if(visitedInfo[dest] === 0) {
                queue.push(dest)
                
                // 현재 노드의 거리는 이전 노드의 거리 + 1 이다.
                visitedInfo[dest] =  visitedInfo[src] + 1
            }
        }
    }
    
    
    const max = Math.max(...visitedInfo)
    return visitedInfo.filter((filterItem) => filterItem === max).length
}


// DFS
/*
Stack으로 구현 가능하다.
*/