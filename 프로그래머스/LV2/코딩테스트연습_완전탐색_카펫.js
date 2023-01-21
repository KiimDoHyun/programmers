function solution(brown, yellow) {
    /*
    a*b = yellow
    a*2 + b*2 + 4 = brown
    을 만족 해야한다.
    
    a*2 = brown - 2*b - 4;
    a = (brown / 2) - b - 2;
    
    ((brown / 2) - b - 2)* b = yellow;
    
    -b^2 + (borwn / 2)*b - 2*b - yellow = 0;
    
    b^2 - (brown / 2)*b + 2*b + yellow = 0
    
    b^2 + (2 - (brown/2)) * b + yellow = 0;
    
    // 근의공식 변수
    _a = 1;
    _b = 2 - (brown / 2)
    _c = yellow
    
    // 근의공식
    x1 = -b - root(b^2 - 4*a*c) / 2* a
    x2 = -b + root(b^2 - 4*a*c) / 2 * a
    
    root -> Math.sqrt
    */
    const a = 1;
    const b = 2 - (brown / 2);
    const c = yellow
    
    const x1 = (-b - (Math.sqrt(b*b - 4*a*c))) / (2 * a); 
    
    const y1 = yellow / x1;
    
    return [x1 + 2, y1 + 2].sort((a,b) => b - a)
}