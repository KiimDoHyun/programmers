// 해시 > 위장
/*

a: 1개
b: 2개
c: 4개

각 경우에 하나씩 선택하는경우 + 선택 안하는 경우가 있다.
각 경우는 n + 1 만큼의 경우의 수가 있기 때문에 각 경우의 수를 모두 곱하고
모두 선택 안한 경우 1을 빼주면 정답
*/

function solution(clothes) {
    var answer = 1;
    let clothesObj = {};
    clothes.forEach((cloth) => {
        const cloth_type = cloth[1];

        if (!clothesObj[cloth_type]) {
            clothesObj[cloth_type] = 1;
        } else {
            clothesObj[cloth_type] = clothesObj[cloth_type] + 1;
        }
    });

    console.log("clothesObj", clothesObj);

    for (let key in clothesObj) {
        answer *= Number(clothesObj[key]) + 1;
    }

    answer -= 1;

    /*
    
    a1 a2
    b1 b2
    
    a1
    a2
    b1
    b2
    
    a1 b1
    a1 b2
    a2 b1
    a2 b2
    
    -> 8개
    */
    return answer;
}
