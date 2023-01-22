const changeNumberObj = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
}

const changeType = (number, type) => {
    const resultStack = [];
    
    while(true) {
        let M = Math.floor(number / type); // 몫
        let N =number % type; // 나머지
        
        if(M < type) {
            resultStack.push(N >= 10? changeNumberObj[N] : N);
            
            if(M > 0) {
                resultStack.push(M);
            }
            break;
        }
        else {
            resultStack.push(N >= 10? changeNumberObj[N] : N);
            number = M;
        }
    }
    
    return resultStack.reverse();
}

function solution(n, t, m, p) {
    var answer = '';
    
//     현재 순서 = 1
//     원래 숫자 = 0
//     while(t > 0) {
//         변환된 숫자가 담긴 스택 = 진수 변경(원래 숫자); -> 변환 결과를 거꾸로 정렬된 배열로 받는다.
        
//         while(변환된 숫자가 담긴 스택의 길이 > 0) {
//             타겟 = 스택에서 pop
            
//             if(현재순서 === 튜브의 순서(p)) {
//                 answer += 타겟
//             }
            
//             현재 순서 = (현재순서 + 1) % m
//         }
        
//         원래 숫자 += 1;
//     }
    
    let currentOrder = 1;
    let originNumber = 0;
    
    while(t > 0) {
        const changedNumber = originNumber.toString(n).toUpperCase();
        let index = 0;
        
        while(index < changedNumber.length) {
            const currentTarget = changedNumber[index]
            
            if(currentOrder === p) {
                answer += String(currentTarget);
                t -= 1;
                
                if(t < 1) {
                    break;
                }
            }
            
            currentOrder += 1
            
            if(currentOrder > m) {
                currentOrder = 1;
            }
            index += 1;
        }
        
        originNumber += 1;
    }

    
    return answer
}