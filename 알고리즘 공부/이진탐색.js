// 이진 탐색
/*
배열을 반으로 나누고 어느 영역에 속하는지 찾아가는 방법

비교가 발생할때마다 배열을 반으로 줄인다. 

logN 만큼의 시간복잡도를 가진다.
*/

// 슈도코드
const pseudocode = () => {
    const arr = [];
    let lower = 0;
    let upper = arr.length - 1;
    let idx = -1;

    while (lower <= upper) {
        /*
        중간 인덱스를 구한다
        
        분기한다
        만약 중간 인덱스가 찾고자 하는 값이면 종료
        
        만약 중간 인덱스의 값이 찾고자 하는 값보다 작다면
        
        만약 중간 인덱스의 값이 찾고자 하는 값보다 크다면
        */
    }
};

// 예제
/*
리스트 L 과, 그 안에서 찾으려 하는 원소 x 가 인자로 주어질 때, x 와 같은 값을 가지는 원소의 인덱스를 리턴하는 함수 solution() 을 완성하세요. 
만약 리스트 L 안에 x 와 같은 값을 가지는 원소가 존재하지 않는 경우에는 -1 을 리턴합니다. 
리스트 L 은 자연수 원소들로 이루어져 있으며, 크기 순으로 정렬되어 있다고 가정합니다. 또한, 동일한 원소는 두 번 이상 나타나지 않습니다.

예를 들어,
L = [2, 3, 5, 6, 9, 11, 15]
x = 6
의 인자들이 주어지면, L[3] == 6 이므로 3 을 리턴해야 합니다.

또 다른 예로,
L = [2, 5, 7, 9, 11]
x = 4
로 주어지면, 리스트 L 내에 4 의 원소가 존재하지 않으므로 -1 을 리턴해야 합니다.
*/

const solution = (L, x) => {
    let lower = 0;
    let upper = L.length - 1;
    let middle = null;

    if (L[lower] === x) return lower;
    else if (L[upper] === x) return upper;

    while (lower <= upper) {
        middle = (lower + upper) / 2;

        // 만약 중간값이 찾고자 하는 값이면 종료
        if (L[middle] === x) return middle;

        // 만약 중간값이 찾고자 하는 값보다 작다면
        if (L[middle] < x) {
            // 범위를 중간값 이상으로 조정한다.
            lower = middle + 1;
        }
        // 만약 중간값이 찾고자 하는 값보다 크다면
        else {
            // 범위를 중간값 이하로 조정한다.
            upper = middle - 1;
        }
    }
};

const answer = solution([2, 3, 5, 6, 9, 11, 15], 3);
console.log(">> answer:", answer);
