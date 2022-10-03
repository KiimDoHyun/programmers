// Summer/Winter Coding(~2018) > 영어 끝말잇기

function solution(n, words) {
    var answer = [0, 0];
    let record = []; // 얘기한 단어 목록

    for (let idx = 0; idx < words.length; idx++) {
        if (idx === 0) {
            record.push(words[idx]);
            continue;
        }

        if (
            words[idx][0] !== words[idx - 1][words[idx - 1].length - 1] ||
            record.some((el) => el === words[idx])
        ) {
            answer[0] = (idx % n) + 1; // 말한사람의 번호
            answer[1] = Math.floor(idx / n) + 1; // 해당 사람이 몇번째 말했는지 번호
            break;
        }
        record.push(words[idx]);
    }

    return answer;
}
