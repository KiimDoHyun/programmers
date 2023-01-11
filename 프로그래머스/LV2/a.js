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
                ...array.slice(idx + 1)
            ];

            let result = makePermutation(nextArray, combCnt - 1);

            result = result.map((resultItem) => [arrayItem].concat(resultItem));
            returnArray.push(...result);
        }
    }
    return returnArray;
};

// 이상함.
const getPermutation = (array, cnt) => {
    let returnArray = [];
    if (cnt === 1) {
        return array;
    } else {
        for (let idx = 0; idx < array.length; idx++) {
            const arrayItem = array[idx];

            // 현재 idx를 제외한 배열을 생성
            const nextArray = [...array.slice(0, idx), ...array.slice(idx + 1)];

            let result = getPermutation(nextArray, idx - 1);

            result = result.map((resultItem) => [arrayItem].concat(resultItem));
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
