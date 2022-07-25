// 탐욕법 > 체육복

function solution(n, lost, reserve) {
    var answer = 0;
    let student = [];
    let count = 0;
    
    for(let i = 1; i<=n; i++) {
        const realIdx = i-1;
        student[realIdx] = 1;
        if(lost.includes(i)) {
            student[realIdx] = student[realIdx] - 1;
        }
        if(reserve.includes(i)) {
            student[realIdx] = student[realIdx] + 1;
        }
    }
    
    student.forEach((el, idx) => {
        let checked = false;
        if(el === 2) {
            if(idx - 1 >= 0) {
                if(student[idx - 1] === 0) {
                    student[idx - 1] = 1;
                    student[idx] = 1;
                    checked = true;
                }
            }
            if(checked === false) {
                if(idx + 1 < student.length) {
                    if(student[idx + 1] === 0) {
                        student[idx + 1] = 1;
                        student[idx] = 1;
                    }
                }
            }
        }
    })
    
    student.forEach((el) => {
        if(el > 0) {
            count += 1;
        }
    })
    
    answer = count;
    return answer;
}