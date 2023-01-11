// 연산자 우선순위
const levelObj = {
    "*": 3,
    "/": 3,
    "+": 2,
    "-": 2,
    "(": 1,
};

const solution = (inputs) => {
    const inputArr = inputs.split("");
    const stack = [];

    let result = "";
    inputArr.forEach((currentItem) => {
        // 최상위 스택 아이템
        const topStackItem = stack[stack.length - 1];

        // 현재 아이템이 연산자라면 비교를 시작한다.
        if (isNaN(Number(currentItem))) {
            if (stack.length < 1) {
                stack.push(currentItem);
            } else {
                // 여는 괄호의 경우 스택에 추가하고 다음 반복문으로 넘어간다.
                if (currentItem === "(") {
                    stack.push(currentItem);
                }

                // 닫는 괄호의 경우 여는 괄호가 나올때까지 pop 한다.
                else if (currentItem === ")") {
                    while (true) {
                        const targetItem = stack.pop();

                        // 여는 괄호를 만나면 종료.
                        if (targetItem === "(") break;

                        // 연산자 출력
                        result += targetItem;
                    }
                }

                // 현재 연산자가 스택의 최상위 연산자보다 우선순위가 같거나 낮다면 스택의 연산자를 pop 하고 현재 연산자를 push한다.
                else if (levelObj[currentItem] <= levelObj[topStackItem]) {
                    // 일반 연산자의 경우

                    result += stack.pop();

                    stack.push(currentItem);
                }
                // 현재 연산자가 스택의 최상위 연산자보다 우선순위가 높다면 스택에 push한다.
                else {
                    stack.push(currentItem);
                }
            }
        }
        // 숫자라면 바로 문자열에 추가하고 다음 반복문으로 넘어간다.
        else {
            result += currentItem;
        }
    });

    while (stack.length > 0) {
        result += stack.pop();
    }

    console.log("result:", result);
};

solution("(1+9)*(3-5)");
