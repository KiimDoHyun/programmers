// 월간 코드 챌린지 시즌3 > 없는 숫자 더하기

function solution(numbers) {
    const initNum = 0;
    const numbersSum = numbers.reduce((prev, cur) => prev + cur, initNum);
    
    return 45 - numbersSum;
}