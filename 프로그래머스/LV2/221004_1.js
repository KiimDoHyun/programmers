// 탐욕법(Greedy) > 구명보트


/*
보트은 2명까지만 탄다
limit 무게를 넘어갈수 없다.

1. people을 내림차순으로 정렬
2. 배열의 맨앞과 맨뒤를 더해서 limit 보다 크면 맨 앞만 배에 태운다. left+=1
3. limit 보다 작거나 같으면 둘다 배에 태운다. left+=1, right-=1;
4. 만약 맨 왼쪽 사람 무게가 limit의 절반 이하라면 남음 사람을 2로 나눈 수 만큼의 보트를 준비한다.

*/
function solution(people, limit) {
    var answer = 0;
    let left = 0;
    let right = people.length - 1;
    
    people = people.sort((a,b) => b - a);

    while(people[left] > limit / 2) {
        if(people[left] + people[right] > limit) {
            left += 1;
            answer += 1;
        }
        else if(people[left] + people[right] <= limit) {
            left += 1;
            right -= 1;
            answer += 1;
        }
    }
    
    answer += Math.ceil((right - left + 1) / 2);
    return answer;
}
