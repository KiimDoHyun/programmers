function solution(arr) {
    var answer = 0;
    arr = arr.sort((a,b) => b - a);
    
    console.log(arr)
    
    let a = null;
    let b = null;
    let r = -1;
    while(arr.length > 0) {
        console.log('currentArr', arr)
        a = arr.pop();
        b = arr.pop();
        
        // a만 남은 경우 a를 리턴하면 종료.        
        if(b === undefined) {
            console.log(b)
            return a;
        }
        
        // 큰 수를 a로 변경
        if(b > a) {
            const temp = a;
            a = b;
            b = temp;
        }
        console.log('a', a)
        console.log('b', b)
        
        const originA = a;
        const originB = b;
        console.log('originA',originA)
        console.log('originB', originB)
        
        // 최대공약수를 구한다.
        while(r !== 0) {
            r = a % b;

            a = b;
            b = r;
        }
        
        // 최대 공약수는 a에 담겨있다.
        
        // 두 수의 최소 공배수를 구하고 배열에 push
        console.log('a,b 의 최대공약수',a)
        console.log('a,b 의 최소공배수',originA * originB / a)
        arr.push(originA * originB / a);
        r = -1;
    }
    
    return answer;
}

/*
a를 b로 나눈 나머지를 r 이라고한다.
b와 r 에 대해 다시 반복한다.

r이 0 이면 그때 r이 최대공약수다

단 a > b를 만족해야 한다.

2 4 30
*/