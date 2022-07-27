// Summer/Winter Coding(~2018) > 예산

function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    let cnt = 0;
    
    // 정렬 후 앞에서부터 더해본다.
    d.sort((a,b) => a - b);
    
    for(let i=0; i<d.length; i++) {
        sum += d[i];
        // 부서가 하나인 경우
        if(sum < budget) {
            cnt += 1;
            if(cnt === d.length) {
                answer = cnt;
                break;
            }
        }
        if(sum > budget) {
            answer = i;
            break;
        }
        else if (sum === budget) {
            answer = i + 1;
            break;
        }
    }
    return answer;
}