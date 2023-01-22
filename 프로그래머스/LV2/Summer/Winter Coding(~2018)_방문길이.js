function solution(dirs) {
    let start = [0,0]
    const moveHistory = [];
    
    for(index in dirs) {
        const currentDirection = dirs[index];
        let currentPos = [...start];
        
        switch(currentDirection) {
            case 'U':
                currentPos[1] = start[1] + 1
                break;
                // y+1
            case 'D':
                currentPos[1] = start[1] - 1
                break;
                // y-1
            case 'R':
                currentPos[0] = start[0] + 1
                break;
                // x+1
            case 'L':
                currentPos[0] = start[0] - 1
                break;
                // x-1
        }
        
        // 현재 이동이 범위를 벗어나는가?
        if(Math.abs(currentPos[0]) > 5 || Math.abs(currentPos[1]) > 5) {
            continue;
        }
        
        // 원래 방향과 반대방향을 비교한다.
        const currentMove1 = `${start.join('')}${currentPos.join('')}`; // 원래이동
        const currentMove2 = `${currentPos.join('')}${start.join('')}`; // 반대
        
        // 중복이 있는경우
        if(
            moveHistory.find((findItem) => findItem === currentMove1) || 
            moveHistory.find((findItem) => findItem === currentMove2)) {
            start = [...currentPos]
            continue;
        }
        
        
        moveHistory.push(currentMove1);
        // 이동 기록에 없는 경우

        
        start = [...currentPos]
    }
    
    return moveHistory.length
}