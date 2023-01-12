// 문자열을 저장하고 효율적으로 탐색하기 위한 트리형태의 자료구조
// 검색어 자동완성

class Node {
    constructor(value = '') {
        this.value = value;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    // 추가
    insert(string) {
        let currentNode = this.root;

        for(const char of string) {
            // 만약 현재 노드에서 자른 문자열(char)을 간선으로 가지고 있지 않다면 
            // 현재 자른 문자열을 키로 가지고 현재 노드에 현재 자른 문자열을 더한 값을 추가한다
            if(!currentNode.children.has(char)) {
                currentNode.children.set(
                    char,
                    new Node(currentNode.value + char)
                )
            }

            currentNode = currentNode.childNodes.get(char)
        }
    }

    // 체크
    // 문자열 추가 로직과 동일하다.
    has(string) {
        let currentNode = this.root;

        for(const char of string) {
            if(!currentNode.children.has(char)) {
                return false;
            }
            currentNode = currentNode.children.get(char)
        }

        return true;
    }
}


/*********************************************

트라이 연습문제: 자동 완성

*********************************************/

// 트라이 자료구조를 구현한다.
class Node {
    constructor(value = '') {
        this.value = value;
        this.count = 1;
        this.children = new Map();
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    
    insert(string) {
        let currentNode = this.root;
        for(const char of string) {
            if(!currentNode.children.has(char)) {
                currentNode.children.set(
                    char,
                    new Node(currentNode.value + char)
                )
            }
            else {
                // 이미 자식 char 가 존재하면 해당 count 를 증가시킨다.
                currentNode.children.get(char).count = currentNode.children.get(char).count += 1;
            }
            
            currentNode = currentNode.children.get(char)
        }
    }
    
    has(string) {
        let currentNode = this.root;
        
        let findCount = 1;
        for(const char of string) {
            if(!currentNode.children.has(char)) {
                return false;
            }
            
            currentNode = currentNode.children.get(char)
            // console.log('찾을 대상: ', string)
            // console.log(currentNode)
            
            // 현재 찾는 단어라면 리턴한다.
            if(string === currentNode.value) {
                return findCount;
            }
            // 현재 찾는 단어가 아니지만 count가 1 이라면 리턴한다.
            else if(currentNode.count === 1) {
                return findCount;
            }
            
            findCount += 1;
        }
        
        // console.log(count)
        // console.log("\n\n")
        return true;
    }
}

function solution(words) {
    var answer = 0;
    const trie = new Trie();
    
    words.forEach((word) => {
        trie.insert(word)
    })
    
    words.forEach((word) => {
        answer += trie.has(word)
    })
    
    return answer;
}