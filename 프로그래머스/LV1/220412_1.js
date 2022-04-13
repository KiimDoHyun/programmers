// 2021 Dev-Matching:웹 백엔드 개발자(상반기) > 로또의 최고 순위와 최저 순위

function solution(lottos, win_nums) {
  let win_nums_obj = {};
  win_nums.forEach((item) => {
    win_nums_obj[item] = true;
  });

  let count = 0;
  let zero_cnt = 0;
  lottos.forEach((item) => {
    if (item === 0) {
      zero_cnt += 1;
    } else {
      if (win_nums_obj[item]) {
        count += 1;
      }
    }
  });

  var answer = [];
  answer.push(count + zero_cnt < 2 ? 6 : 7 - (count + zero_cnt));
  answer.push(count < 2 ? 6 : 7 - count);
  return answer;
}
