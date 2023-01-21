// 소수 구하기
const isPrime = (number) => {
    if(number <= 1) {
        return false;
    }
    
    if(number === 2 || number === 3) {
        return true;
    }
    
    for(i = 2; i*i<=number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    
    return true;
}

// 진수 구하기
const changeType = (n, k) => {
    let resultString = []
    while(true) {
        let M = Math.floor(n / k);
        let N = n % k;
        
        if(M < k) {
            resultString.push(N);
            resultString.push(M);
            break;
        }
        else {
            resultString.push(N);
            n = M;
        }
    }
    
    return resultString.reverse().join("");
}

function solution(n, k) {
    var answer = 0;
    
    changeType(n, k)
        .split('0')
        .forEach((item) => {
        if(isPrime(item)) {
            answer += 1;
        }
    })

    /*
        소수 체크,
        진수 변경
        
        5를 2 진수로?
        
        5를 2 로 나누면 몫이 2 고 나머지가 1
        
        몫2 를 2 로 나누면 몫이 1 이고 니머지가 0
        101
        
        4 를 2로 나누면 몫이 2 고 나머지가 0
        몫 2 를 2 로 나누면 몫이 1이고 나머지가 0
        
        3을 2 로 나누면 몫이 1이고 나머지가 1 -> 종료
        100
    */
    return answer;
}