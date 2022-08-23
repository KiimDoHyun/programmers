// 2020 KAKAO BLIND RECRUITMENT > 문자열 압축

function solution(s) {
    var answer = s.length;
    const getSplit = (str, num) => {
        let arr = [];
        let start = 0;

        for (let i = 0; i < str.length; i++) {
            if (i === start) {
                start = i + num;
                arr.push(str.slice(i, i + num));
            }
        }

        return arr;
    };

    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        const arr = getSplit(s, i);
        let resultStr = "";
        let count = 1;
        let target = "";
        arr.forEach((el, idx) => {
            if (target === "") {
                target = el;
            } else {
                if (target !== el) {
                    resultStr = `${resultStr}${
                        count === 1 ? "" : count
                    }${target}`;

                    target = el;
                    count = 1;
                } else {
                    count += 1;
                }
            }

            if (idx === arr.length - 1) {
                resultStr = `${resultStr}${count === 1 ? "" : count}${target}`;
            }
        });

        if (answer >= resultStr.length) {
            answer = resultStr.length;
        }
        // console.log("resultStr: ", resultStr)
    }
    return answer;
}
