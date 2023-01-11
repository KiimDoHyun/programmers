// 힙은 우선슌위 큐(개념)를 구현하기 적합한 자료구조임


// 우선순위 큐
// 루트에 가장 높은 값을 가진다.

/*
힙 우선순위가 높은 요소가 먼저 나간다.

루트가 가장 큰 값인 최대힙
루트가 가장 작은 최소 힙
이 있다.

요소의 추가는 가장 마지막 노드에,
요소의 삭제는 루트만 가능하다.
 - 요소가 삭제되면 가장 마지막 정점이 루트에 올라간다.
*/

// 최대힙
// 최대힙 최 상단에 가장 큰값이 존재한다.
class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    // 추가
    push(value) {
        // 가장 마지막에 아이템을 추가한다.
        this.heap.push(value);

        // 현재 인덱스 (마지막 인덱스에서 시작한다)
        let currentIndex = this.heap.length - 1;

        // 부모 인덱스 (현재 인덱스 / 2)
        let parentIndex = Math.floor(currentIndex / 2);

        // 현재 추가할 값을 부모와 비교한다.
        /*
        종료 조건
        1. 더이상 올라갈 곳이 없을때
            - 계산을 편하게 하기위해 배열의 0번째 인덱스에 null 이 들어있다. 부모 노드의 인덱스를 구했는데 0이라면 현재 노드가 부모노드에 해당한다.
        2. 현재 값이 부모보다 큰경우
            - 부모는 자식보다 큰 값을 가져야 하는 규칙때문.

        종료 조건을 만족하기 전까지 현재 값을 부모값과 바꿔나간다.
        */

        while(parentIndex !== 0 && this.heap[parentIndex] < value) {
            // 현재값과 부모값을 바꾼다.
            const temp = this.heap[parentIndex]
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;

            // 현재 인덱스를 부모 인덱스로 바꾸고 부모 인덱스를 갱신한다. (부모의 부모 인덱스로)
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    // 삭제
    pop() {
        // 비어있는 경우
        if(this.heap.length === 1) {
            return 0;
        }
        // 원소가 하나만 있는 경우
        /*
        이 경우 예외처리가 되지 않으면 
        this.heap[1] = this.heap.pop();

        이때 원소를 하나 빼고 다시 그 자리에 채워넣는 형태가 된다.
        
        */
        if(this.heap.length === 2) {
            return this.heap.pop();
        }

        // 최상단 아이템을 반환한다.
        const returnvalue = this.heap[1];

        // 힙 최상단 아이템을 가장 마지막 아이템으로 교체한다.
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        // 최상단으로 올려진 값의 위치를 찾아나간다.
        /*
        종료조건
        1. 현재 값이 왼쪽, 오른쪽 노드와 비교했을때 큰 경우.
            최대 힙은 부모가 자식보다 큰 값을 유지하기 때문에 왼쪽, 오른쪽 자식과 비교해서 큰 값이면 더이상 이동하지 않는다.
        */
        while (
            this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex]
        ) {
            // 반복문을 반복한다는건 현재 노드가 왼쪽 혹은 오른쪽 보다 작다는 뜻이다. (혹은 둘다보다 작다.)
            // 위치를 바꾸는건 더 큰 값과 비교해서 바꾼다.
            if(this.heap[leftIndex] < this.heap[rightIndex]) {
                // 위치를 바꾼다.
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[rightIndex];
                this.heap[rightIndex] = temp;

                // 현재 인덱스를 갱신한다.
                currentIndex = rightIndex;
            }
            else {
                // 위치를 바꾼다.
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;

                // 현재 인덱스를 갱신한다.
                currentIndex = leftIndex;
            }

            // 변경된 현재 인덱스로 다시 자식 인덱스를 갱신한다.
            rightIndex = currentIndex * 2 + 1;
            leftIndex = currentIndex * 2;
        }

        return returnvalue;
    }
}

/*********************************************

최대힙 연습문제: 배상 비용 최소화

*********************************************/
function solution(no, works) {
    // 예외처리 모든 작업의 합보다 no가 크면 배상 비용을 낼 필요가 없다.
    // 주어진 시간 내에 모든 작업을 완료하기 때문에 계산이 필요없음.
    if (works.reduce((a, b) => a + b) <= no) { 
      return 0;
    }
    
        /*
    각 값을 제곱한 결과중에서 가장 작은 결과값을 구해야 한다
    따라서 모든 값을 골고루 줄여나가야 한다.
    
    최대 힙을 구현하고 문제를 해결한다
    매번 큰값, 작은 값을 구하는 문제는 최대한 힙으로 해결한다.
    
    이 문제는 가장 큰값의 일을 1씩 줄여나가면서 해결한다.
    */

    
    // 최대 힙을 생성한다.
    const heap = new MaxHeap();
    works.forEach((work) => {
        heap.push(work);
    })
    
    // no 만큼의 일을 제거한다.
    for(let i = 0; i<no; i++) {
        // 최대값을 추출하고 1을 뺀 다음 다시 추가한다.
        heap.push(heap.pop() - 1);
    }    
    
    return heap.heap.reduce((a,b) => a + b * b)
}