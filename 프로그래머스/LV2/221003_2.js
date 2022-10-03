// 연습문제 > JadenCase 문자열 만들기

function solution(s) {
    let Arr = s.split(" ");
    var answer = "";

    // 숫자
    const numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    console.log(Arr.length);
    Arr.forEach((item, idx) => {
        // 빈문자열이 아닐때만 작업을 수햄한다.
        if (item) {
            let str = "";

            str = item.toLowerCase();

            if (numArr.some((el) => el !== item[0])) {
                str = `${item[0].toUpperCase()}${str.slice(1, str.length)}`;
            }
            answer += `${str}`;
        }

        // 마지막 문제열엔 공백을 더하지 않는다.
        if (idx !== Arr.length - 1) {
            answer += " ";
        }
    });
    return answer;
}
