const [N, r, c] = require("fs")
    .readFileSync("./a.txt")
    .toString()
    .trim()
    .split(" ");
/*
N 3  2  1
  1, 2, 3
*/
const solution = (N, r, c) => {
    console.log("N", N);
    console.log("r", r);
    console.log("c", c);

    let _N = Number(N);
    let _r = Number(r);
    let _c = Number(c);

    let count = 0;

    const checkPos = (checkNumber, N) => {
        let count = null;
        const DOUBLE_CHECK_NUMBER = checkNumber * checkNumber;
        if (_r < checkNumber && _c < checkNumber) {
            count = 0;
        } else if (_r < checkNumber && _c >= checkNumber) {
            _c -= checkNumber;
            count = DOUBLE_CHECK_NUMBER;
        } else if (_r >= checkNumber && _c < checkNumber) {
            _r -= checkNumber;
            count = DOUBLE_CHECK_NUMBER * 2;
        } else {
            _c -= checkNumber;
            _r -= checkNumber;
            count = DOUBLE_CHECK_NUMBER * 3;
        }

        return count;
    };

    while (_N !== 0) {
        const checkNumber = Math.pow(2, _N) / 2;

        console.log("checkNumber", checkNumber);
        console.log("시작");

        count += checkPos(checkNumber, _N);
        _N -= 1;
    }

    console.log("count", count);
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

0 1 2 3 4 5 6 7 
0 1 2 3 4 5 6 7 

6 3

N = 3
2^N = 8
/2 = 4

x가 4보다 크고 y가 4보다 작다. 2사분면 ->  4*4가 2개 -> 16*2 = 32
6 3 -> 2 3

N = 2
2^N = 4
/2 = 2

x가 2보다 크고 y가 2보다 크다. 3사분면 -> 2*2가 3개 -> 12

2 3 -> 0 1 1사분면. -> 2번째 -> 2 

= 32+ 12+2 = 46 - 1 =  45(답)


2 3
0 2 => 2


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
