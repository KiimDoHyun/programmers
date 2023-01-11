/*
비선형: 하나의 자료 뒤에 여러개의 자료가 존재할 수 있음.
선형: 배열, 연결리스트

여러개의 간선을 가질 수 있다.
방향그래프와 무방향 그래프가 있다
간선은 가중치를 가질 수 있다.
사이클이 발생할 수 있다.

무방향 그래프
A-B
(A,B) 는 (B,A) 같다 연결만 되어있으면 출발, 도착은 의미가 없다. 

연결 그래프
모든 정점이 서로 이동가능한 그래프

비연결 그래프
특정 정점으로 접근이 불가능한 형태의 그래프

완전 그래프
모든 정점이 연결된 그래프

사이클
그래프의 정점과 간선의 부분 집합에서 순환이 되는 부분
*/

// 표현방법
// 1. 인접 행렬
// 정점의 크기만큼 2차원 배열을 만든다.
// 시작, 도착을 2차원 인덱스로 사용한다.

/*
graph[0][1] = true; 0 - 1은 연결되었다.
graph[2][4] = false; 2 - 4 는 연결되지 않았다.
*/

// 2. 인접 리스트
graph[0].push(1); // 0, 1은 연결 되었다.
graph[0] = [1, 3, 4]; // 0과 1,3,4는 연결관계다.

