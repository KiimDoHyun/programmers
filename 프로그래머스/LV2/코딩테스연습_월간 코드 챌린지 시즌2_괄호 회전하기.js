const checkString = (s) => {
    const stack = [];
    for(let i = 0; i<s.length; i++) {
        const currentStr = s[i];

        switch(currentStr) {
            case '[':
            case '(':
            case '{':
                stack.push(currentStr);
                break;
            case ']':
                if(stack.length < 1 || stack.pop() !== '[') {
                    return false;
                }
                break;
            case '}':
                if(stack.length < 1 ||stack.pop() !== '{') {
                    return false;
                }
                break;
            case ')':
                if(stack.length < 1 ||stack.pop() !== '(') {
                    return false;
                }
                break;
        }
    }
    
    return stack.length > 0 ? false : true;
}

const rotate = (s) => {
     const firstStr = s[0];
    s = s.slice(1,s.length + 1);
    s += firstStr;
    
    return s;
}

function solution(s) {
    const origin = s;
    let count = 0;
        
        // 문자열을 돌면서 올바른 문자열인지 체크한다.
        /*
        1. 현재 문자열을 체크한다
        1-1 올바른 문자열이라면 count+1
        1-2 올바르지 않은 문자열이라면 /
        2 문자열을 회전한다
        2-1 첫 문자열과 같은지 비교한다
        2-2 같다면 count 리턴
        2-3 다르면 1 부터 다시
        */
        
    while(true) {
        const isCorrect = checkString(s);
        
        if(!isCorrect && (s.length % 2) === 1) {
            return 0;
        }
        else if (isCorrect) {
            count += 1;
        }

        s = rotate(s);

        if(s === origin) {
            return count;
        }
    }
            
}
