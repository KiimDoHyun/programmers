// 연습문제 > 피보나치 수

function solution(n) {
    let fibonacci = new Array(n);
    fibonacci[0] = 0;
    fibonacci[1] = 1;

    // 1234567로 나눈 n 번째 피보나치 수를 출력함.
    // 정수형을 벗어나기 때문에 매번 1234567 보다 작은수로 값을 변경한다.
    for (let idx = 2; idx <= n; idx++) {
        fibonacci[idx] = (fibonacci[idx - 1] + fibonacci[idx - 2]) % 1234567;
    }

    return fibonacci[n];
}
