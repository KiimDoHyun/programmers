function solution(arr1, arr2) {
    var answer = [];
    
    const a = arr1.length;
    const b = arr2[0].length;
    
    for(let i = 0; i<a; i++) {
        const arr =[];
        for(let j = 0; j<b; j++) {
            
            const target1 = arr1[i];
            const target2 = [];
            
            for (let k =0; k<arr2.length; k++) {
                target2.push(arr2[k][j])
            }
            
            let sum = 0;
            for (let l = 0; l<target1.length; l++) {
                sum += target1[l]*target2[l]
            }
            
            arr.push(sum);
            
        }
        answer.push(arr)
    }
    
    return answer;
}

/*
행렬 곱셈 구현
*/