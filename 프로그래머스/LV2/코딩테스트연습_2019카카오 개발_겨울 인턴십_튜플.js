function solution(s) {
    s = s
        .split('},{')
        .map((item) => item.replaceAll('{', '').replaceAll('}', '').split(','))
        .sort((a,b) => a.length - b.length)
    
    /*
    현재 문자열에서 앞에 존재하는 문자열을 제외한 나머지를 뒤에 붙인다.
    */
    // console.log(s)
    const answer = [];
    
    s.forEach((sItem) => {
        
        // console.log(sItem)
        if(answer.length === 0) {
            answer.push(Number(sItem[0]));
        }
        else {
            sItem.forEach((subItem) => {
                // console.log(subItem)
                if(!answer.find((findItem => findItem === Number(subItem)))) {
                    answer.push(Number(subItem));
                    
                }
            })
        }
    })
    
    
    return answer
//     let result = [];
//     s.forEach((currentItem) => {
//         if(result.length === 0) {
//             result.push(Number(currentItem))
//         }
//         else {
//             result.forEach((resultItem) => {
//                 currentItem = currentItem.replace(String(resultItem), '');
//             })
            
//             result.push(Number(currentItem))
//         }
//     })
    
    return []
    
}