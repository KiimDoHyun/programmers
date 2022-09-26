// 2017 팁스타운 > 짝지어 제거하기

function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        // 스택에 추가한다.
        stack.push(s[i]);
        if (stack.length < 2) {
            continue;
        }
        // 만약 스택에 2개 이상이 쌓였을때 끝에 2개비교해서 같으면 pop
        else {
            if (stack[stack.length - 1] === stack[stack.length - 2]) {
                stack.pop();
                stack.pop();
            }
        }
    }

    return stack.length > 0 ? 0 : 1;
}
