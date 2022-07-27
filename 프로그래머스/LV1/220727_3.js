function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    
    // 정렬 후 앞에서부터 더해본다.
    d.sort((a,b) => a - b);
    
    for(let i=0; i<d.length; i++) {
        sum += d[i];

        if(sum > budget) {
            answer = i;
            break;
        }
        else if (sum === budget) {
            answer = i + 1;
            break;
        }

        // 다 더했는데 예산보다 작은경우 + 모두 다 더한경우 = 전체 부서에 지원 가능.
        else if (sum < budget) {
            if(i === d.length - 1) {
                console.log('?', i)
                answer = i + 1;
                break;
            }
        }
    }
    return answer;
}