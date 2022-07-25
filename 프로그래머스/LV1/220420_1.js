// 2020 카카오 인턴십 > 키패드 누르기

function solution(numbers, hand) {
  var answer = "";
  let left = "*";
  let right = "#";
  let left_d = null;
  let right_d = null;
  let keyPad = {
    1: "1,1",
    2: "1,2",
    3: "1,3",
    4: "2,1",
    5: "2,2",
    6: "2,3",
    7: "3,1",
    8: "3,2",
    9: "3,3",
    "*": "4,1",
    0: "4,2",
    "#": "4,3",
  };
  numbers.forEach((num) => {
    // left
    if (num === 1 || num === 4 || num === 7) {
      answer += "L";
      left = num;
    }

    // right
    else if (num === 3 || num === 6 || num === 9) {
      answer += "R";
      right = num;
    }

    // calc distance
    else {
      let left_pos = keyPad[left].split(",");
      let right_pos = keyPad[right].split(",");
      let num_pos = keyPad[num].split(",");

      left_d =
        Math.abs(Number(num_pos[0]) - Number(left_pos[0])) +
        Math.abs(Number(num_pos[1]) - Number(left_pos[1]));

      right_d =
        Math.abs(Number(num_pos[0]) - Number(right_pos[0])) +
        Math.abs(Number(num_pos[1]) - Number(right_pos[1]));

      if (left_d < right_d) {
        answer += "L";
        left = num;
      } else if (left_d > right_d) {
        answer += "R";
        right = num;
      } else if (left_d === right_d) {
        if (hand === "right") {
          answer += "R";
          right = num;
        } else {
          answer += "L";
          left = num;
        }
      }
    }
  });
  return answer;
}
