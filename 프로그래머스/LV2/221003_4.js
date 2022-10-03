// 연습문제 > 숫자의 표현

// n을 연속된 자연수로 표현.
function solution(n) {
    var answer = 0;

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        for (let j = i; j <= n; j++) {
            sum += j;
            if (sum >= n) break;
        }

        if (sum === n) answer += 1;
    }
    return answer;
}
