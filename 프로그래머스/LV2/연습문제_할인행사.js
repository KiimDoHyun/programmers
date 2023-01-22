const myBag = {};

// 가방이 비었는지  체크
const isEmpty = () => {
    for(const bagItem in myBag) {
        const currentAmount = myBag[bagItem];
        
        if(currentAmount !== 0) {
            return false;
        }
    }
    
    return true;
}

function solution(want, number, discount) {
    var answer = 0;
    
    // 최초 정보 초기화
    for(let i = 0; i<want.length; i++) {
        myBag[want[i]] = number[i];
    }
    
    let head = 0;
    let tail = 9;
    
    // 초기 1회 수정
    for(let i = head; i<= tail; i++) {
        const currentItem = discount[i];
        if(myBag[currentItem] !== undefined) {
            myBag[currentItem] = myBag[currentItem] - 1;
        }
    }
    
    // 수량 체크
    if(isEmpty()) answer += 1;
    
    while(tail < discount.length - 1) {
        head += 1;
        tail += 1;
        
        if(myBag[discount[head - 1]] !== undefined) {
            myBag[discount[head - 1]] = myBag[discount[head - 1]] + 1;
        }
        
        if(myBag[discount[tail]] !== undefined) {
            myBag[discount[tail]] = myBag[discount[tail]] - 1;
        }
        
        if(isEmpty()) answer += 1;

        
    }
    
    return answer;
}

/*
const number = 0;
if(number) --> false 의 결과인걸 유의해야한다.
 */