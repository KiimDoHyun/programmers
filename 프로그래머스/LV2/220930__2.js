// 입력값 n을 k진수 로 바꾸고 0으로 잘라서 소수 찾기

function solution(n, k) {
    let change_result = n.toString(k).split(0);
    var answer = 0;

    const isPrime = (num) => {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    };

    console.log(change_result);
    -change_result.forEach((num) => {
        if (Number(num) > 1) {
            console.log("num", num);
            if (isPrime(Number(num))) {
                answer += 1;
                console.log("소수 O", num);
            } else {
                console.log("소수 X", num);
            }
        }
    });
    return answer;
}
