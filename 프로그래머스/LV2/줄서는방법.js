function solution(n, k) {
    let answer = [];
    const getCount = (num) => {
        let temp = 1;
        for (let i = 1; i <= num; i++) {
            temp *= i;
        }
        return temp;
    };
    let nCount = getCount(n);
    let changeCount = nCount / n; // 첫번째 숫자가 바뀌는 지점
    let changePos = Math.floor((k - 1) / changeCount); // 몇번째 바뀌는 지점에 있는지
    let changeIdx = k % changeCount; // 해당 지점에서 몇번째인지.

    // console.log("changeIdx:", changeIdx);
    let permutationResult = [];
    // n의 길이만큼 1부터 채운 배열을 생성한다.
    let array = new Array(n);
    for (let i = 1; i <= n; i++) {
        array[i - 1] = i;
    }
    // console.log("origin:", array);

    while (n > 0) {
        if (k === 0) {
            answer.push(array[0]);
            array = [...array.slice(0, 0), ...array.slice(0 + 1)];
            n -= 1;
            continue;
        }
        // console.log("n", n);
        // console.log("k", k);
        nCount = getCount(n); // 팩토리얼
        changeCount = nCount / n; // 첫번째 숫자가 바뀌는 지점
        changePos = Math.floor((k - 1) / changeCount); // 몇번째 바뀌는 지점에 있는지
        changeIdx = changePos === 0 ? k : k % changeCount; // 해당 지점에서 몇번째인지.

        // console.log("경우의수:", nCount);
        // console.log("숫자가 바뀌는 지점:", changeCount);
        // console.log("몇번째 바뀌는 지점에 있는지:", changePos);
        // console.log("해당 지점에서 몇번째인지:", changeIdx);
        // console.log("[숫자]", array[changePos]);
        answer.push(array[changePos]);

        n -= 1;
        k = changeIdx;
        array = [...array.slice(0, changePos), ...array.slice(changePos + 1)];
        // console.log("array:", array);
    }
    console.log(answer);
    // return permutationResult[changeIdx - 1];
    return answer;
}

solution(5, 12);

/*
[ 1, 2, 3, 4, 5 ],
[ 1, 2, 3, 5, 4 ],
[ 1, 2, 4, 3, 5 ],
[ 1, 2, 4, 5, 3 ]
[ 1, 2, 5, 3, 4 ]
[ 1, 2, 5, 4, 3 ],
[ 1, 3, 2, 4, 5 ],
[ 1, 3, 2, 5, 4 ]
[ 1, 3, 4, 2, 5 ],
[ 1, 3, 4, 5, 2 ],
[ 1, 3, 5, 2, 4 ],
[ 1, 3, 5, 4, 2 ]
[ 1, 4, 2, 3, 5 ],
[ 1, 4, 2, 5, 3 ], <--
[ 1, 4, 3, 2, 5 ]
[ 1, 4, 3, 5, 2 ]
[ 1, 4, 5, 2, 3 ],
[ 1, 4, 5, 3, 2 ],
[ 1, 5, 2, 3, 4 ],
[ 1, 5, 2, 4, 3 ]
[ 1, 5, 3, 2, 4 ]
[ 1, 5, 3, 4, 2 ],
[ 1, 5, 4, 2, 3 ],
[ 1, 5, 4, 3, 2 ]



n: 5
k: 14
n!: 120
숫자가 바뀌는 시점: 24

위치: 0번째,
idx: 14번.
배열 1 2 3 4 5
값: 1

배열 변경: 2 3 4 5
n: 4
k: 14
n: 24
숫자가 바뀌는 시점: 6

위치: 2번째
idx: 2
값: 4

배열변경: 2 3 5

n: 3
k: 2
n: 6
숫자가 바뀌는 시점: 2

위치: 0
idx: 2
값: 2

배열변경: 3 5

n: 2
k: 2
n!: 2
숫자가 바뀌는 시점:1 

5

3


2 3 5

2 3 5
2 5 3
3 2 5
3 5 3
5 2 3
5 3 2


 */
