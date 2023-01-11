// 피보나치
const Fibonacci = (num) => {
    if (num <= 1) return num;

    return Fibonacci(num - 1) + Fibonacci(num - 2);
};

const solution = (N) => {
    // 0과 1 은 그대로 리턴한다.
    if (N === 0) return 0;
    else if (N === 1) return 1;

    // 이전값, 현재값, 더한값을 선언한다.
    let prev = 0;
    let cur = 1;
    let sum = 1;

    const FibonacciResult = Fibonacci(N);

    //
    while (N >= 2) {
        // 종료 조건을 위해 N을 1 감소한다.
        N -= 1;

        // 최종값은 이전값과 현재값을 더한값이다.
        sum = prev + cur;

        // 최신화는 한 값은 반복문이 유효하다면 최종값에 반영된다.
        // 이전값은 현재값으로
        prev = cur;
        // 현재값은 최종값으로 최신화 한다.
        cur = sum;
    }

    console.log("sum:", sum);
    console.log("FibonacciResult:", FibonacciResult);
};

// solution(5);

// 0 1 1 2 3 5 8 13 21 34

// 이진탐색 재귀함수
/*
L: 리스트
x: 찾을 값
*/
const binsearch = (L, x, lower, upper) => {
    // 찾지 못한 경우
    // lower 와 upper 에 의해 결정될 것이다.
    if (lower > upper) return -1;

    // 중간값
    const mid = Math.floor((lower + upper) / 2);

    // 중간값이 찾고자 한 값인 경우
    if (x === L[mid]) {
        return L[mid];
    }
    // 찾고자 하는 값이 중간값보다 작은경우 처리
    else if (x < L[mid]) {
        return binsearch(L, x, lower, mid - 1);
    }
    // 찾고자 하는 값이 중간값보다 큰경우 처리
    else {
        return binsearch(L, x, mid + 1, upper);
    }
};

const main = () => {
    const arr = [1, 3, 4, 5, 7, 8, 11, 14, 16, 28, 50, 79, 80];
    const target = 79;
    const findResult = binsearch(arr, target, 0, arr.length - 1);
    console.log("findResult:", findResult);
};

main();

// 병합 정렬 nlogn
/*

여러 데이터를 반씩 나눠서 하나가 될떄까지 나눈다

2개씩 묶기 시작한다 이때 정렬해서 묶는다

2개씩 묶인 데이터를 다시 2개씩 묶어서 4개로 만든다

이떄 맨 앞 데이터를 비교해서 정렬하면 된다. -> 정렬된 길이가 4인 데이터가 된다.

정렬을 다 할때까지 묶는 것을 반복한다


*/
