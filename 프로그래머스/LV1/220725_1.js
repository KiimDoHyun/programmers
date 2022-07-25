// 2022 KAKAO BLIND RECRUITMENT > 신고 결과 받기

function solution(id_list, report, k) {
    var answer = [];
    console.log(id_list)
    console.log(report)
    console.log(k)
    const cntObj = {};
    const resultObj = {};
    
    // init
    id_list.forEach((el) => {
        cntObj[el] = {answerValue: 0, countValue: 0};
    })
    
    
    // check
    report.forEach((el) => {
        const user = el.split(' ')[0];
        const target = el.split(' ')[1];
        
        if(resultObj[user] === undefined) {
            cntObj[target].countValue = cntObj[target].countValue + 1
            resultObj[user] = [target];
        }
        else if(!resultObj[user].includes(target)) {
            cntObj[target].countValue = cntObj[target].countValue + 1
            resultObj[user] = [...resultObj[user], target]
        }
    })
    
    // count
    for (let key of Object.keys(resultObj)) {
        const user = key;
        const targetArr = resultObj[key];
        
        targetArr.forEach((el) => {
            if(cntObj[el].countValue >= k) {
                cntObj[user].answerValue = cntObj[user].answerValue + 1;
            }
            
        })
    }
    
        // count
    for (let key of Object.keys(cntObj)) {
        const user = key;
        const target = cntObj[key];

        answer.push(target.answerValue)
    }
    
    
    
    return answer;
}