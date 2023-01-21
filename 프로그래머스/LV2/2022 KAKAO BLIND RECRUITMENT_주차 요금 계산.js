
// 해쉬맵 + 단순구현

const LAST_TIME = '23:59'

// 시간계산 (분단위)
const calcTime = (start, end) => {
    const startSplit = start.split(':');
    const endSplit = end.split(':');
    
    const startHour = Number(startSplit[0])
    const startMin = Number(startSplit[1])
    
    const endHour = Number(endSplit[0])
    const endMin = Number(endSplit[1])
    
    let hour = endHour - startHour;
    let min = endMin - startMin;

    return (hour * 60) + min;
}

function solution(fees, records) {
    var answer = [];
    let checkObj = {};
    
    // 요금정보 상수화
    const DEFAULT_TIME = fees[0]
    const DEFAULT_PRICE = fees[1]
    const UNIT_TIME = fees[2]
    const UNIT_PRICE = fees[3]
    
    // 입차, 출차 시간으로 총 주차 시간을 계산한다.
    records.forEach((record) => {
        const splitResult = record.split(' ');
        const time = splitResult[0]
        const carNumber = splitResult[1]
        const type = splitResult[2]
        
        if(!checkObj[carNumber]) {
            checkObj[carNumber] = {}
            checkObj[carNumber].totalTime = 0;
            checkObj[carNumber].type = 'IN';
            checkObj[carNumber].time = time;
            checkObj[carNumber].fee = 0;
        }
        else {
            if(checkObj[carNumber].type === 'IN') {
                checkObj[carNumber].totalTime = checkObj[carNumber].totalTime + calcTime(checkObj[carNumber].time, time);
                checkObj[carNumber].type = 'OUT';
            }
            else if(checkObj[carNumber].type === 'OUT') {
                checkObj[carNumber].type = 'IN';
                checkObj[carNumber].time = time;
            }
            
        }
    })
    
    // 입차 기록만 있는 차량은 출차시간을 23:59분으로 계산한다.
    for(const carNumberKey in checkObj) {
        // 마지막 기록이 입차 인 경우 23:59분으로 계산후 최종 금액을 계산한다.
        if(checkObj[carNumberKey].type === 'IN') {
            checkObj[carNumberKey].totalTime = checkObj[carNumberKey].totalTime + calcTime(checkObj[carNumberKey].time, LAST_TIME)
        }
        
        const currentTotalTime = checkObj[carNumberKey].totalTime;

        // 현재 차량의 총 주차 시간이 기본 시간을 초과한 경우
        if(currentTotalTime > DEFAULT_TIME) {
            // 초과된 시간은 단위 시간만큼의 가격을 지불한다.
            checkObj[carNumberKey].fee = 
                DEFAULT_PRICE +
                Math.ceil((currentTotalTime - DEFAULT_TIME) / UNIT_TIME) * UNIT_PRICE // 추가 요금
        }
        else {
            checkObj[carNumberKey].fee = DEFAULT_PRICE;
        }

        answer.push({
            carNumber: carNumberKey,
            fee: checkObj[carNumberKey].fee
        })
    }
    
    // 정렬후 요금만 추출
    return answer
        .sort((a, b) => Number(a.carNumber) - Number(b.carNumber))
        .map((item) => item.fee)
}