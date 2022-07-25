// 2021 카카오 채용연계형 인턴십 > 숫자 문자열과 영단어

function solution(s) {
    var answer = 0;
    let t = s;
    const strArr = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    strArr.forEach((item, idx) => {
        t = t.replace(RegExp(item, "g"), idx);
    });
    answer = Number(t);
    return answer;
}

/*

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    console.log(i);
    let arr = answer.split(numbers[i]);
    console.log(arr);
    answer = arr.join(i);
    console.log(answer);
  }

  return Number(answer);
}

*/

solution("one4seveneightone");
