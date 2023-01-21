const Work = {
    'A': 1,
    'E': 2,
    'I': 3,
    'O': 4,
    'U': 5
}
const WorkArr = [null,  'A', 'E', 'I', 'O', 'U'];

function solution(word) {
    const stack = [];

    let count = 0;
    
    let work = "ADD"; // COMP
    while(true) {
        // 동작은 2가지 현재 문자를 증가시킨다, 추가한다.
        // 초기 작업은 추가한다.
        
//         if(현재 작업 = 추가) {
//             스택에 A push
            
//             if(스택 길이가 5 라면) {
//                 다음 작업 = 비교
//             }
//         }
//         else if(현재작업 = 비교) {
//             비교문자열 = 스택에서 하나 뽑는다.
//             if(비교문자열 = U) {
//                 다음 작업 = 비교
//             }
//             else if(비교문자열 !== U) {
//                 마지막 문자열 증가
//                 스택에 push
                
//                 if(스택 길이가 5보다 작다면) {
//                     다음 작업 = 추가
//                 }
//                 else {
//                     다음 작업 = 비교
//                 }
//             }
//         }
        if(work === 'ADD') {
            stack.push("A");
            count += 1;
            
            if(stack.length === 5) {
                work = 'COMP'
            }
        }
        else {
            const lastStr = stack.pop();
            if(lastStr === 'U') {
                work = 'COMP';
            }
            else {
                stack.push(WorkArr[Work[lastStr] + 1]);
                count += 1;
                
                if(stack.length < 5) {
                    work = 'ADD'
                }
                else {
                    work = 'COMP'
                }

            }
        }
        
        if(stack.join().replaceAll(',', '') === word) {
            return count;
        }
    }
}