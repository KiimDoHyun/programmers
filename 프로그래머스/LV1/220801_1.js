// 2021 KAKAO BLIND RECRUITMENT > 신규 아이디 추천

function solution(new_id) {
    var answer = new_id;
    answer = new_id.toLowerCase();
    /*
        [^] : 특정 문자열 제외
        /g : 전역 검색
        {m,n} : 반복횟수 m:최소, n:최대
        \특수문자 : 특수문자 선택
        ^A: A로 시작
        A&: A로 종료
    */
    const reg1 = /[^a-z0-9\-\_\.]/g
    answer = answer.replace(reg1, '')

    const reg2 = /[\.]{2,}/g
    answer = answer.replace(reg2, '.')
    
    const removeHeadDot = /^\./g
    answer = answer.replace(removeHeadDot, '')
    
    const removeTailDot = /\.$/g
    answer = answer.replace(removeTailDot, '')
    
    do {
        if(answer.length < 1) {
            answer += 'a';
        } else if(answer.length < 3) {
            answer+= answer[answer.length - 1]
        }
        if(answer.length >= 16) {
            answer = answer.slice(0,15)
        }
        answer = answer.replace(removeTailDot, '')
        
    } while(answer.length < 3)

    return answer;
}