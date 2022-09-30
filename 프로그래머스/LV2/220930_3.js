// H-index (성공)

function solution(citations) {
    let answer = 0;

    citations = citations.sort((a, b) => b - a);

    for (let idx = 0; idx < citations.length; idx++) {
        if (idx >= citations[idx]) {
            return idx;
        }
    }

    return citations.length;
}
