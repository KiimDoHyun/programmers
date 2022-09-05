const [N, r, c] = require("fs")
    .readFileSync("./a.txt")
    .toString()
    .trim()
    .split(" ");

const getCord = (arr) => {
    let x = 0;
    let y = 0;
    arr.forEach((arrItem, idx) => {
        switch (arrItem) {
            case 0:
                x += 0;
                y += 0;
                break;
            case 1:
                x += 0;
                y += Math.pow(2, idx);
                break;
            case 2:
                x += Math.pow(2, idx);
                y += 0;
                break;
            case 3:
                x += Math.pow(2, idx);
                y += Math.pow(2, idx);
                break;
            default:
                break;
        }
    });

    return { x, y };
};
/*
N 3  2  1
  1, 2, 3
*/
const solution = (N, r, c) => {
    let start = new Date();
    let end = null;
    console.log("N", N);
    console.log("r", r);
    console.log("c", c);
    let count = -1;
    let jobFinish = false;
    const posArr = new Array(Number(N));
    // console.log('posArr: ', posArr)

    const Z = (N) => {
        for (let index = 0; index < 4; index++) {
            posArr[N - 1] = index;
            if (Number(N) === 1) {
                count += 1;
                // console.log("posArr: ", posArr);
                const cord = getCord(posArr);

                if (cord.x === Number(r) && cord.y === Number(c)) {
                    console.log("answer: ", count);
                    jobFinish = true;
                    end = new Date();
                    break;
                }
            } else {
                if (jobFinish) break;

                Z(N - 1);
            }

            // r,c 에 도착하면 탈출. -> 어떻게 탈출함?
            // 아니면 count 증가.
        }
    };

    Z(N, 0);

    console.log("start", start);
    console.log("end", end);
};

solution(N, r, c);

/*

N = 3

000
001
...
111

N = 4
0000
0001
0002
0003
0010
...
1111
*/

// N = 3 ( 8 )

/*

1 2 3 4 분면이 있음

00 01
10 11

1)
x: 0 ~ 3 (0 ~ (2^N / 2) - 1)
y: 0 ~ 3 (0 ~ (2^N / 2) - 1)

2)
x: 4 ~ 7 ((2^N / 2) ~ (2^N - 1))
y: 0 ~ 3 (0 ~ (2^N / 2) - 1)

3)
x: 0 ~ 3 (0 ~ (2^N / 2) - 1)
y: 4 ~ 7 ((2^N / 2) ~ (2^N - 1))

4)
x: 4 ~ 7 ((2^N / 2) ~ (2^N - 1))
y: 4 ~ 7 ((2^N / 2) ~ (2^N - 1))

8 -> 4 -> 2

ex)
2 / 3 / 3

00 01
10 11

2


N = 3
00 01 02 03 04 05 06 07
10 11 12 13 14 15 16 17
20 21 22 23 24 25 26 27
30 31 32 33 34 35 36 37
40 41 42 43 44 45 46 47
50 51 52 53 54 55 56 57
60 61 62 63 64 65 66 67
70 71 72 73 74 75 76 77

44

46

10





3
24 25
34 35

3
34 -> 여기올때까지 count 를 증가시켜야 하는지..?

*/
