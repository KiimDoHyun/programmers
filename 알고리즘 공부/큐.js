// 배열
class Queue_Array {
    constructor() {
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.queue[this.rear++] = value;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front]; // -> 배열의 해당 인덱스는 empty 상태가 된다. 배열의 길이가 줄어드는것은 아니다. 또한 선형 시간이 걸린다
        this.front += 1;
        return value;
    }

    peek() {
        return this.queue[this.front];
    }

    size() {
        return this.rear - this.front;
    }
}

// !  주의 shift 함수는 선형 시간이 걸리기 때문에 큐에서 사용하지 말 것
/*
예시
const queue = [1,2,3,4];
queue.push(3);  //? enqueue
queue.shift();  //? dequeue -> 선형시간이 걸리기 때문에 사용 X
*/

// 연결리스트
class Node {
    constructor(value) {
        this.value = value;
        this.next = nul;
    }
}

class Queue_LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(newValue) {
        const newNode = new Node(newValue);
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size += 1;
    }

    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        this.size -= 1;
        return value;
    }

    peek() {
        return this.head.value;
    }
}

/*
연결리스트로 원형 큐를 구현할 때 이점이 없다.
 */

// 원형 큐 배열
class Queue_array_Circular {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.queue = [];
        this.front = 0;
        this.rear = 0;
        this.size = 0;
    }

    enqueue(value) {
        if (this.isFull()) {
            console.log("Queue is full.");
            return;
        }

        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.maxSize; // 무한히 뒤로 가지 않고 최대 크기 내에서 움직이게 한다.
        this.size += 1;
    }

    dequeue() {
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front = (this.front + 1) % this.maxSize;
        this.size -= 1;
        return value;
    }

    isFull() {
        return this.size === this.maxSize;
    }

    peek() {
        return this.queue[this.front];
    }
}

/*********************************************

큐 연습 문제: 프린터

*********************************************/

// 큐를 구현해서 풀어본다. 연결리스트 형태로 구현한다.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(newValue) {
        const newNode = new Node(newValue);

        // 최초에 추가하는 경우를 반드시 고려한다.
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    peek() {
        return this.head.value;
    }
}

function solution(priorities, location) {
    // 큐 생성
    const queue = new Queue();

    for (let i = 0; i < priorities.length; i++) {
        // 값(우선순위)과 인덱스를 저장한다.
        queue.enqueue([priorities[i], i]);
    }

    // 내림차순 정렬
    // 우선순위가 높은 순서대로 정렬된다.
    priorities.sort((a, b) => b - a);

    let count = 0;
    while (true) {
        // 큐의 맨 앞 값(비교할 현재 값)을 가져온다.
        const currentValue = queue.peek();

        // 현재 값의 우선순위가 정렬된 우선순위와 비교애서 낮다면
        // 맨뒤로 보낸다.
        if (currentValue[0] < priorities[count]) {
            queue.enqueue(queue.dequeue());
        }
        // 현재 값의 우선순위가 정렬된 우선순위와 비교해서 같거나 높다면
        else {
            // 큐에서 제거한다
            const value = queue.dequeue();

            // 카운트를 올린다(출력한다.)
            count += 1;

            // 만약 현재 작업이 구하고자 하는 작업의 인덱스라면 리턴한다.
            if (location === value[1]) {
                return count;
            }
        }
    }

    return count;
}

