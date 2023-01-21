function solution(k, tangerine) {
    /*
    서로 다른 종류의 수를 최소화 한다.
    */
    const infoObj = {};
    
    tangerine.forEach((item) => {
        if(!infoObj[item]) {
            infoObj[item] = 1
        }
        else {
            infoObj[item] = infoObj[item] + 1
        }
    })
    
    // 내림차순 정렬
    const array = Object.values(infoObj).sort((a, b) => b - a)
    
    // 담고자 하는 개수를 센다.
    for(let i = 0; i < array.length; i++) {
        k -= array[i];
        
        if(k < 1) {
            return i + 1;
        }
    }
}

/*

4 개 고른다.


1 2 2 3 3 4 5 5

6개, 4개 를 팔고 싶다.

1 1 
2 2
3 2 
4 1
5 2
-> 개수 순으로 정렬한다.

2개를 팔고 싶다.

1 4
2 3
3 1
*/