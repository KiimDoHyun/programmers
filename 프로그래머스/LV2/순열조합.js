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
    const makePermutation = (array, cnt) => {
        let returnArray = [];
        if (cnt === 1) {
            return array;
        } else {
            for (let idx = 0; idx < array.length; idx++) {
                const arrayItem = array[idx];

                // 현재 idx를 제외한 배열을 생성
                const nextArray = [
                    ...array.slice(0, idx),
                    ...array.slice(idx + 1),
                ];

                let result = makePermutation(nextArray, idx - 1);

                result = result.map((resultItem) =>
                    [arrayItem].concat(resultItem)
                );
                // result = result.map((resultItem) => {
                //     if(typeof resultItem === 'number') {
                //         return `${String(arrayItem)}${String(resultItem)}`
                //     }
                //     else {
                //         return `${String(arrayItem)}${resultItem.toString().replaceAll(',', '')}`
                //     }
                // })
                returnArray.push(...result);
            }
        }
        return returnArray;
    };

    // const combinationResult = makeCombination(array, 3);
    const permutationResult = makePermutation([1, 2, 3], 3);

    // console.log("조합 결과:", combinationResult);
    console.log("순열 결과:", permutationResult);
}

solution(5, 5);
