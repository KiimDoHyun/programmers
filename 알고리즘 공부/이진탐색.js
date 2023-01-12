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


// 이진 탐색 트리
// 부모를 기준으로 왼쪽 자식은 부모보다 작은값, 오른쪽 자식은 부모보다 큰 값을 가지는 트리다.

// 삭제
/*
가장 말단 노드의 삭제는 별다른 로직이 없다.
하나의 자식만 가지는 졍우 제거되는 부모 정점과 자식 정점을 연결한다.

두개의 자식을 가진 노드를 제거하는 경우
왼쪽 서브트리에서 가장 큰값 혹은 오른쪽 서브트리에서 가장 작은값과 교체한다.
*/

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        
        // 루트가 비어있는 경우 루트에 추가하고 종료
        if(this.root === null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;
        while(currentNode !== null) {
            // 현재 노드보다 추가할 값이 작은경우 (오른쪽으로 이동한다.)
            if(currentNode < value) {
                // 현재 노드의 오른쪽이 비어있다면 오른쪽에 노드를 추가하고 종료
                if(currentNode.right === null) {
                    currentNode.right = newNode;
                    break;
                }

                // 노드가 비어있지 않으면 오른쪽으로 이동한다.
                currentNode = currentNode.right;
            }
            // 현재 노드보다 추가할 값이 작은경우 (왼쪽으로 이동한다.)
            else {
                // 현재 노드의 왼쪽이 비어있다면 왼쪽에 노드를 추가하고 종료
                if(currentNode.left === null) {
                    currentNode.left = newNode;
                    break;
                }

                // 노드가 비어있지 않으면 왼쪽으로 이동한다.
                currentNode = currentNode.left;
            }
        }
    }

    has(value) {
        let currentNode = this.root;
        while(currentNode !== null) {
            if(currentNode === value) {
                return true;
            }

            if(currentNode < value) {
                currentNode = currentNode.right;
            }
            else {
                currentNode = currentNode.left;
            }
        }

        return false;
    }
}

/*********************************************

이진탐색 연습문제: 입국 심사

*********************************************/

function solution(n, times) {
    /*
    해결 전략
    
    10억 -> 로그시간을 수행하는 알고리즘을 쓴다 => 이진탐색을 쓴다.
    
    times -> 선형 로그시간으로 가능하다
    
    목적은 특정 값을 찾는것이 아닌 심사를 마치는 최소 시간.(조건)
     ㄴ 결정문제 라고한다. => 해결 알고리즘 : 이진 탐색 = 파라메트릭 서치(Parametric Saerch)
    
    시간: 1 ~ 10억 * n 분 사이
    면접관들이 몇명을 처리하는가?
    
    처리 가능한 입국자가 n 보다 작다면, 분을 올리고 입국자가 n 보다 크다면 분을 낮춘다.
    
    면접관이 시간대비 몇 명을 처리할 수 있는가?
    시간 / 심사시간 = 심사관 당 처리 가능한 입국자 수
    
    모든 요소 중 X를 만족하는 가장 큰/작은 값을 만족하는 지점이 어디인가? 라는 형태로 문제가 나온다면 이진 탐색 혹은 파라메트릭 서치 문제일 가능성이 높다.
    */
    
    // 처리시간 정렬
    const sortedTimes = times.sort((a,b) => a - b); // nlogn
    
    // 처리 시간의 범위를 구한다.
     // 대기자 1명, 처리시간 1 분일때( 최소 )
    let left = 1;

    // 업무처리 속도가 가장 느린 면접관이 모든 대기자를 처리하는 경우
    let right = sortedTimes[sortedTimes.length - 1] * n; 
    
    while(left <= right) {
        // 체크해볼 시간(중간값에 해당한다.)
        const mid = Math.floor((left + right) / 2);
        
        // sum 시간 / 심사시간
        /*
        현재 찾아볼 값(중간값) 동안 몇명을 심사할 수 있는지 체크한다.
        첫번 째 예시로 보면
        중간값인 30분 동안 
        7분 걸리는 심사관은 4명
        10분 걸리는 심사관은 3명을 처리하게 되고
        총 7명을 처리할 수 있다.
        
        따라서
        30분이라는 시간동안 원래 처리하기로 한 입국자 수보다 많이 처리할 수 있으니 (시간이 덜 걸리니)
        시간을 줄여서 다시 확인해 본다.
        */
        const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
        
        if(sum < n) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    
    return left;
}