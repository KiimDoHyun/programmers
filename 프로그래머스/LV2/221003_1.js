// 연습문제 > 최솟값 만들기

// 오름차순, 내림차순으로 정렬수 앞에서부터 곱하면 최솟값.
function solution(A, B) {
    var answer = 0;

    A = A.sort((a, b) => a - b); // 오름차순
    B = B.sort((a, b) => b - a); // 내림차순

    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }

    return answer;
}
