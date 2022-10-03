// 월간 코드 챌린지 시즌1 > 이진 변환 반복하기

function solution(s) {
    var answer = [0, 0];

    while (s !== "1") {
        answer[0] += 1;
        // 0을 모두 제거한다.
        const del = s.replaceAll("0", "");

        // 제거한 0의 개수를 정답 배열에 추가한다.

        answer[1] += s.length - del.length;

        // del의 길이를 2진수 문자열로 변경한다.
        s = del.length.toString(2);
    }

    return answer;
}

// 다른 사람 코드에서 참고한 2진수 변환을 직접 구현한 함수
/*
function binary(n){
    let result = "";
    while(n!==0){
        result=n%2+""+result;
        n=Math.floor(n/2);
    }
    return result;
}
*/
