const checkObj = {
    "A": 1,
    "B": 2,
    "C": 3,
    "D": 4,
    "E": 5,
    "F": 6,
    "G": 7,
    "H": 8,
    "I": 9,
    "J": 10,
    "K": 11,
    "L": 12,
    "M": 13,
    "N": 14,
    "O": 15,
    "P": 16,
    "Q": 17,
    "R": 18,
    "S": 19,
    "T": 20,
    "U": 21,
    "V": 22,
    "W": 23,
    "X": 24,
    "Y": 25,
    "Z": 26
}

function solution(msg) {
    var answer = [];
//     head = 첫번째 문자열
//     tail = 두번째 문자열
//     Number = 26
//     while(tail의 다음이 더이상 갈 수 없을 때 까지) {
//         확인할 문자열 = head;
        
//         while(확인할 문자열 + tail 이 등록 되어있는 동안) {
//             확인할 문자열 += tail
//             tail += 1
//         }
        
//         확인할 문자열을 등록하고 결과 배열에 push 한다.
//         head를 tail 값으로 갱신한다.
//         tail은 갱신된 head+1로 갱신한다.
//     }
    
    
    let head = 0;
    let tail = 1;
    let addNumber = 27;
    
    while(head <= msg.length - 1) {
        let checkString = msg[head];
        
        while(checkObj[checkString + msg[tail]]) {
            checkString += msg[tail];
            tail += 1;
        }
        
        answer.push(checkObj[checkString]);
        checkObj[checkString + msg[tail]] = addNumber;
        addNumber += 1;
        head = tail;
        tail = head + 1;
    }

    
    /*
    
    현재 글자를 기준으로 등록되지 않은 글자가 나올때까지 앞으로 가본다.
    
    그 다음은 등록되지 않은글자에서 시작한다.
    
    */
    return answer;
}