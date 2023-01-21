function solution(storey) {
    let answer = 0;
    storey = String(storey).split('');
    
    // 다음 자리수에 더할 값 +1 / 0
    let calcNumber = 0;
    
    for(let i = storey.length - 1; i >= 0; i--) {
        const current = Number(storey[i]) + calcNumber;
        // 마지막 숫자인 경우
        if(i === 0) {
            if(current >= 6) {
                answer += 1;
            }    
        }
        
        if(current >= 6) {
            // 올린다.
            calcNumber = 1;
            
            answer += (10 - current);
        }
        else if(current <= 4) {
            // 내린다.
            calcNumber = 0;
            
            answer += current;
        }
        else if(current === 5) {
            // 다음 자리수가 없으면 5 리턴
            if(i === 0) {
                answer += 5;
            }
            // 다음 자리수가 있을때
            else {
                if(Number(storey[i-1])>= 5) {
                    calcNumber = 1;
                    answer += (10 - current);
                }
                else {
                    calcNumber = 0;
            
                    answer += current;
                }
            }
            // 현재 숫자가 5일때 다음 자리숫자가 5 이상이면 더한다.
        }
    }
    
    // 마지막 자리수를 계산했는데 6이상이다? 10 의 보수 + 1을 더한값이 최종 값이 된다.
    
    return answer
}

/*
마지막 자리수 계산을놓쳐서 오래걸린 문제

ex)
마지막 자리수가 4 라면 이동횟수에 4를 더하면 끝이다.

마지막 자리수가 6이라면 이동횟수에 4를 더하고 1을 추가로 더 더한다.
*/