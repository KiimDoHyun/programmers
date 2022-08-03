// 깊이/너비 우선 탐색(DFS/BFS) > 타겟 넘버

const DFS = (sum, idx, array, target) => {
    console.log('현재 idx: ', idx, idx === array.length? `최종 sum: ${sum}` :  `현재 sum: ${sum}`)
    // 끝에 도착
    if(idx === array.length) {
        if(sum === target) {
            return 1;
        }
        else {
            return 0;
        }
    }
    // 아직 중간
    else {
        return DFS(sum + array[idx], idx + 1, array, target) + DFS(sum - array[idx], idx + 1, array, target);
    }
}

function solution(numbers, target) {
    var answer = DFS(0, 0, numbers, target)
    return answer;
}

solution([1,1,1,1,1], 3)