// 비선형
// 그래프의 일종

/*
이진 트리
각 정점이 최대 2개의 자식을 가지는 트리

완전 이진 트리: 마지막 정점을 제외하고 모두 채워진 트리
포화 이진 트리: 마지막 정점 까지 모두 채워진 트리

이진 탐색 트리
힙
AVL 트리
레드 블랙 트리
자료구조에사용된다.

*/


/*
규칙

Left= index * 2;
Right = index * 2 + 1;
Parent = floo(index / 2);
*/
// 이진트리 배열
const tree = [
    undefined,
    // 1
    9,
    // 2: 1 * 2 , 3: 1 * 2 + 1
    3, 8,

    // 4: 2*2 5; 2*2+1 ....
    2, 5, undefined, 7,

    undefined, undefined, undefined, 4
]

// 연결리스트
// next 대신 left, right로 연결하면 됨.