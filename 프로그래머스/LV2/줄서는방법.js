function solution(n, k) {
    const getCount = (num) => {
        let temp = 1;
        for (let i = 1; i <= num; i++) {
            temp *= i;
        }
        return temp;
    };
    const nCount = getCount(n);
    const changeCount = nCount / n; // 첫번째 숫자가 바뀌는 지점
    const changePos = Math.floor((k - 1) / changeCount); // 몇번째 바뀌는 지점에 있는지
    const changeIdx = k % changeCount; // 해당 지점에서 몇번째인지.

    console.log("changeIdx:", changeIdx);
    let permutationResult = [];
    // n의 길이만큼 1부터 채운 배열을 생성한다.
    let array = new Array(n);
    for (let i = 1; i <= n; i++) {
        array[i - 1] = i;
    }

    // console.log("nCount:", nCount);
    // console.log("바뀌는 지점 수:", changeCount);
    // console.log("구하고자 하는 k:", k);
    // console.log(
    //     "몇번째 바뀌는 지점에 있는지:",
    //     Math.floor((k - 1) / changeCount)
    // );
    // console.log("해당 지점에서 idx가 어떻게 되는지:", k % changeCount);

    // console.log("첫번째 숫자: ", Math.floor((k - 1) / changeCount) + 1);

    // 순열 (중복X)
    // combCnt: 몇개를 고를것인가
    const makePermutation = (array, combCnt) => {
        let returnArray = [];
        if (combCnt === 1) {
            return array;
        } else {
            for (let idx = 0; idx < array.length; idx++) {
                // 현재 아이템
                const arrayItem = array[idx];
                // 다음 넘겨줄 배열
                // 현재 선택한 값을 제외한 나머지 배열을 넘긴다.
                const nextArray = [
                    ...array.slice(0, idx),
                    ...array.slice(idx + 1),
                ];

                let result = makePermutation(nextArray, combCnt - 1);
                result = result.map((resultItem) =>
                    [arrayItem].concat(resultItem)
                );
                returnArray.push(...result);
            }
        }
        return returnArray;
    };

    // 첫번째 숫자를 가지로 순열을 구한다면?

    for (let idx = 0; idx < array.length; idx++) {
        if (idx === changePos) {
            const arrayItem = array[idx];
            const nextArray = [...array.slice(0, idx), ...array.slice(idx + 1)];
            let result = makePermutation(nextArray, n - 1);
            permutationResult = result.map((resultItem) =>
                [arrayItem].concat(resultItem)
            );
        }
    }

    console.log("결과를 보자꾸나", permutationResult);
    console.log("origin:", array);

    // const permutationResult = makePermutation(array, n);

    // console.log("순열 결과:", permutationResult);

    // n명의 사람이 줄을 서는 모든 방법 : 순열.
    // 순열에서 구한 배열의 k번째 값을 반환한다.

    return permutationResult[changeIdx - 1];
}

solution(5, 14);

/*
  [ 1, 2, 3 ]
  [ 1, 3, 2 ]
  [ 2, 1, 3 ]
  [ 2, 3, 1 ]
  [ 3, 1, 2 ]
  [ 3, 2, 1 ]


  n개가 있다면
  경우의 수는 n!개 만큼 존재한다.


1 2 3 4 5

n!를 n으로 나눈 값에 해당하는 수 일때마다 앞자리가 바뀐다.

ex) n = 5, k = 24

5! = 120

수가 바뀌는 지점: 120 / 5 = 24번째.

순열을 배열로 모두 구했다고 했을때 idx
0~23 까지 1
24~47 까지 2
48 71 까지 3
72 95 까지 4
96 119 까지 5

k 를 바뀌는 지점에 해당하는 24를 이용해서 계산해보면

24 / 24 = 1
24 % 24 = 0 ....

24에서 1 뺀 값으로 계산한다면?

23 / 24 = 0
23 % 24 = 23

0번째 위치에서 idx 가 23인 값.

k 에서 1을 빼고 계산하면 된다.

k = 1 이라면

k - 1 = 0

바뀌는 지점 24. 




가 해당된다.



 */
