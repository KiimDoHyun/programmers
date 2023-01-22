

// 알고리즘은 맞지만 효율성 탈락
/*
function solution(n) {
    var answer = '';
    let count = 0;
    let addCount = 1;
    const stack = [];
    let work = "ADD" // "COMP"
    while(count !== n) {
        if(work === 'ADD') {
            for(let i = 0; i<addCount; i++) {
                stack.push(1);
            }
            count += 1;
            addCount = 0;
            work = 'COMP'
        }
        else {
            const stackTopNumber = stack.pop();
            
            switch(stackTopNumber) {
                case undefined:
                    addCount += 1;
                    work = 'ADD';
                    break;
                case 1:
                    stack.push(2);
                    
                    if(addCount > 0)  {
                        work = "ADD"
                    }
                    else {
                        count += 1;
                    }
                    break;
                case 2:
                    stack.push(4);
                    
                    if(addCount > 0)  {
                        work = "ADD"
                    }
                    else {
                        count += 1;
                    }
                    break;
                case 4:
                    addCount += 1;
                    work = 'COMP'
                    break;
            }
        }
    }
    
    
    return stack.join("")
}
*/

// 규칙을 이용한다.
function solution(n) {
    const stack = [];
    while(n > 3) {
        let M = Math.floor(n / 3); // 몫
        let N = n % 3; // 나머지
        
        // 나머지가 0이라면 몫을 하나 낮추고 나머지를3으로 맞춘다.
        if(N === 0) {
            M -= 1;
            N = 3;
        }
        
        stack.push(N === 3 ? 4 : N)
        n = M;
    }
    stack.push(n === 3 ? 4 : n)
    return stack.reverse().join("")
    
}

/*
1 0 1 -> 1
2 0 2 -> 2
3 1 0 -> 0 이 아니고 4
3 0 3 -> 3 -> 4

4 1 1 -> 11
5 1 2 -> 12
6 2 0 -> 20 이 아니고 14
6 1 3 -> 13 -> 14

7 2 1 -> 21
8 2 2 -> 22
9 3 0 -> 100 이 아니고 24
9 2 3
2 0 2 -> 23 -> 24


6 2 0
2 0 2

1 1
2 2
3 4
4 11
5 12
6 14
7 21
8 22
9 24
10 41
11 42
12 44
13 111
14 112
15 114
16 121
17 122
18 124
19 141
20 142
21 144
22 211
*/

//     추가할 개수 = 1;
//     카운트 0
    
//     while(카운트가 num 이 아닌동안) {
//         if(현재 작업이 더하는거라면) {
//             스택에 1 을 추가할 개수 만큼 push
//             카운트 증가
//             추가할 개수 0으로 초기화
//             현재 작업을 비교하는것으로 변경
//         }   
//         else if(현재 작업이 비교해야 한다면) {
//             현재 숫자 = 스택의 최 상단 값
//             스택 pop
//             if(만약 현재 숫자가 아예 없다면) {
//                 다음 작업에서 추가할 개수 + 1;
//                 다음 작업을 더하는 것으로 변경
//             }
//             else if(만약 현재 숫자 1 이라면) {
//                 스택에 2 push
//                 만약 추가할 개수가 존재한다면
//                 현재 작업을 더하는것으로 변경
                
//                 만약 추가할 개수가 없다면
//                 카운트 증가
//             }
//             else if(만약 현재 숫자 2 이라면) {
//                 스택에 4 push
//                 만약 추가할 개수가 존재한다면
//                 현재 작업을 더하는것으로 변경
                
//                 만약 추가할 개수가 없다면
//                 카운트 증가
//             }
//             else if(만약 현재 숫자 4 이라면) {
//                 다음 작업에서 추가할 개수 + 1;
//                 다음 작업을 comp로 
//             }
//         }
//     }
// -> 알고리즘은 맞지만 효율성에서 탈락함.