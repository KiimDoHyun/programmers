function solution(n) {
    // n개의 배열을 먼저 만든다.
    let array = new Array(n);
    for (let i = 1; i <= n; i++) {
        array[i - 1] = i;
    }
    console.log("origin:", array);

    // 조합 (중복X)
    // combCnt: 몇개를 고를것인가
    const makeCombination = (array, combCnt) => {
        let returnArray = [];
        if (combCnt === 1) {
            console.log("combCnt가 1이라서 종료.");
            return array;
        } else {
            for (let idx = 0; idx < array.length; idx++) {
                // 현재 아이템
                const arrayItem = array[idx];
                console.log("현재 아이템", arrayItem);
                // 다음 넘겨줄 배열
                // 현재까지 선택된 값들을 제외한 나머지 배열을 넘긴다.
                const nextArray = array.slice(idx + 1);

                let result = makeCombination(nextArray, combCnt - 1);
                result = result.map((resultItem) =>
                    [arrayItem].concat(resultItem)
                );
                returnArray.push(...result);
            }
        }
        return returnArray;
    };

    // 순열 (중복X)
    // combCnt: 몇개를 고를것인가
    const makePermutation = (array, combCnt) => {
        let returnArray = [];
        if (combCnt === 1) {
            console.log("combCnt가 1이라서 종료.");
            return array;
        } else {
            for (let idx = 0; idx < array.length; idx++) {
                // 현재 아이템
                const arrayItem = array[idx];
                console.log("현재 아이템", arrayItem);
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

    const combinationResult = makeCombination(array, 3);
    const permutationResult = makePermutation(array, 5);

    // console.log("조합 결과:", combinationResult);
    console.log("순열 결과:", permutationResult);
}

solution(5, 5);
