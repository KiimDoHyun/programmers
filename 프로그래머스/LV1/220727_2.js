// Summer/Winter Coding(~2018) > 소수 만들기

function solution(nums) {
    var answer = 0;
    let combInfo = [];
    
    const setComb = () => {
        nums.forEach((_, firstIdx) => {
            
            for(let secondIdx = 0; secondIdx<nums.length; secondIdx++) {
                if(firstIdx !== secondIdx) {
                    for(let thirdIdx = 0; thirdIdx<nums.length; thirdIdx++) {
                        if(thirdIdx !== firstIdx && thirdIdx !== secondIdx) {
                            let str = nums.map((_,idx) => {
                                if(idx === firstIdx) {
                                    return '1';    
                                }
                                else if(idx === secondIdx) {
                                    return '1';    
                                } 
                                else if(idx === thirdIdx) {
                                    return '1';    
                                } 
                                else {
                                    return '0';
                                }
                            })
                            
                            combInfo.push(str.join(''))
                        }
                    }
                }
            }
        })
        
        combInfo = [...new Set(combInfo)]
    }
    
    const isPrime = (num) => {
        for(let i=2; i*i <= num; i++) {
            if(num % i === 0) {
                return false;
            }
        }
    
        return true;
    }
    
    setComb();
    
    combInfo.forEach((el) => {
        let sum = 0;
        
        for(let i = 0; i< el.length; i++) {
            if(el[i] == 1) {
                sum += Number(nums[i]);
            }
        }
        
        // check prime
        if(isPrime(sum)) {
            answer += 1;
        }
    })
    
    return answer;
}