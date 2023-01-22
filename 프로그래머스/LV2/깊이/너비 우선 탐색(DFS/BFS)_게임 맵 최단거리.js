// 이동 가능 경로 탐색
const findPos = (pos) => {
    const arr = [];
    
    arr.push([pos[0] + 1,pos[1]])
    arr.push([pos[0] - 1,pos[1]])
    arr.push([pos[0],pos[1] + 1])
    arr.push([pos[0],pos[1] - 1])
    
    return arr;
}

// 0 으로 초기화
const initVisited = (row,col) => {
    return new Array(row)
        .fill(0)
        .map((_) => new Array(col).fill(0))
}

function solution(maps) {
    var answer = 0;
    
    const row = maps.length;
    const col = maps[0].length;
    
    // 방문 정보 초기화
    const visited = initVisited(row, col);
    visited[0][0] = 1;
    
    
    const queue = [[0,0]];
    
    while(queue.length > 0) {
        const currentPos = queue.shift();
        const ways = findPos(currentPos);
        
        ways.forEach((way) => {
            // 1. 벽이 아니고 -> map의 0 은 벽을 의미한다.
            // 2. 방문한 적이 없고 -> visited의 값이 0 이면 방문한 적이 없는 것이다.
            // 3. 범위를 벗어나지 않아야 한다. // 0보다 크고 5보다 작아야 한다.
            if(
                0 <= way[0] && way[0] < row && 
                0 <= way[1] && way[1] < col ) 
            {
                if(
                    maps[way[0]][way[1]] !== 0 &&
                    visited[way[0]][way[1]] === 0) {
                        queue.push(way)
                        visited[way[0]][way[1]] = visited[currentPos[0]][currentPos[1]] + 1
                    }
            }
           

            
        })
    }
    
    const endPoint = visited[row - 1][col - 1]
    return endPoint ? endPoint : -1
}