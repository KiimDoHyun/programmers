// 2019 KAKAO BLINE RECRUITMENT > 오픈채팅방

function solution(record) {
    let idObj = {};
    let el = null;
    let msg = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }
    var answer = [];
    
    
    // id , name
    record.forEach((item) => {
        el = item.split(' ');
        if(el[0] !== "Leave") {
            idObj[el[1]] = el[2];
        }
    })
    
    // answer array
    record.forEach((item) => {
        el = item.split(' ');
        if(el[0] !== 'Change') {
            answer.push(`${idObj[el[1]]}${msg[el[0]]}`)
        }
    })

    return answer;
}