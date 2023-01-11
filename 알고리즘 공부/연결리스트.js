class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {any} value 찾고자 하는 값
     * @returns
     */
    find(value) {
        let curNode = this.head;
        while (curNode.value !== value) {
            curNode = curNode.next;
        }

        return curNode;
    }

    /**
     * @param {any} newValue 추가하고자 하는 값
     * @returns
     */
    append(newValue) {
        // 노드 생성
        const newNode = new Node(newValue);

        // 첫 노드 생성인 경우
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        // 기존 리스트에 추가하는 경우
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    /**
     * @param {any} node 추가할 위치의 노드
     * @param {any} newValue 추가하고자 하는 값
     * @returns
     */
    insert(node, newValue) {
        // 노드 생성
        const newNode = new Node(newValue);

        // 추가할 노드의 next를 바라보게 한다.
        newNode.next = node.next;

        // 추가할 노드는 새로운 값을 바라보게 한다.
        node.next = newNode;
    }

    /**
     * @param {any} value 삭제하고자 하는 값
     * @returns
     */
    remove(value) {
        let prevNode = this.head;
        while (prevNode.next.value !== value) {
            prevNode = prevNode.next;
        }

        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next;
        }
    }

    display() {
        let curNode = this.head;
        let displayString = "[";
        while (curNode !== null) {
            displayString += `${curNode.value}, `;
            curNode = curNode.next;
        }
        displayString = displayString.slice(0, displayString.length - 2);
        displayString += "]";
        console.log("displayString:", displayString);
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);

linkedList.display();

linkedList.remove(3);
linkedList.display();

linkedList.insert(linkedList.find(1), 90);
linkedList.display();
/*

1 2 3 4 5


remove 4

3 -> 5 가 되어야 한다.

4를 가리키는 노드를 찾는다.

3 이 4를 가리키는 노드다.

3의 next 는 3.next.next로 교체한다.
단 prev.next가 null이 아닐때 next next 로 교체한다.

prev.next가 null 이라면 이미 마지막 노드라는 뜻이고 더이상 참조할 노드가 없기 때문이다.

*/
