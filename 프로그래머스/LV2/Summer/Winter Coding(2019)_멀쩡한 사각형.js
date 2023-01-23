const getLCM = (num1, num2) => {
    let big = Math.max(num1, num2)
    let small = Math.min(num1, num2)
    let r = -1;
    while(r !== 0) {
            r = big % small;

            big = small;
            small = r;
    }
    
    return big;
}

function solution(w, h) {
    var answer = 1;

    return w * h - (w+h-getLCM(w,h));
}

/*
1 * 1 0
1*2 2 0
2*2 4 2
2*3 6 2
2*4 8 4
3*3 9 6


w * h - (w+h-최대공약수)
???

-> 기울기로 풀어봐야함
*/
