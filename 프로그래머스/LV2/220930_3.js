// H-index (실패)

function solution(citations) {
    console.log(citations);
    let countUp = 0;
    let countDown = 0;
    const Max = Math.max(...citations);
    if (Max === 0) {
        return 0;
    }

    for (let targetH = 0; targetH <= Max; targetH++) {
        countUp = 0;
        countDown = 0;
        citations.forEach((citation) => {
            if (citation >= targetH) {
                countUp += 1;
            } else if (citation <= targetH) {
                countDown += 1;
            }
        });

        if (countUp === targetH && countUp >= countDown) {
            break;
        }
    }

    return countUp;
}
