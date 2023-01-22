function solution(skill, skill_trees) {
    var answer = 0;
    const checkSillInfo = {};
    
    // 스킬 정보 초기화
    for(const index in skill) {
        const currentSkill = skill[index]
        checkSillInfo[currentSkill] = Number(index);
    }
    
    skill_trees.forEach((skillTree) => {
        let isCorrect = true;
        let prev = null; // 현재 스킬 index
        
        for(const index in skillTree) {
            const currentSkill = skillTree[index];
            const currentSkillOrder = checkSillInfo[currentSkill]
            
            if(currentSkillOrder === undefined) continue;
         
            // 처음 나타난 유효 스킬
            if(prev === null) {
                prev = currentSkillOrder;
                // 만약 0번 스킬이 아니면 불가능한 스킬트리
                if(currentSkillOrder !== 0) {
                    // console.log('처음 나타난 유효 스킬이 0이 아닌경우', currentSkillOrder)
                    isCorrect = false;
                    break;
                }
            }
            // 두번째 스킬부터
            else {
                // 이전 스킬보다 작은 스킬인 경우
                if(prev > currentSkillOrder) {
                    // console.log('이전 스킬보다 작은 스킬인 경우')
                    isCorrect = false;
                    break;
                }
                // 이전 스킬보다 큰 스킬인 경우
                else {
                    // 그 차이가 1이 아닌 경우
                    if(currentSkillOrder - prev !== 1) {
                        // console.log('그 차이가 1이 아닌 경우')
                        isCorrect = false;
                        break;
                    }
                }
            }
            prev = currentSkillOrder;
        }
        
        if(isCorrect) {
            answer += 1;
            // console.log('정상', skillTree)
        }
        else {
            // console.log('비정상', skillTree)
        }
        // console.log('\n')
    })
    
    return answer;
}

/*
스킬 트리의 각 문자열에서

스킬의 문자열에 해당하는 문자열을 추출한다

조건
반드시 첫 스킬부터 나타나야한다
증가하는 규칙을 따른다.
중간을 건너뛰면 안된다. (스킬의 순서가 1씩 증가해야 하는데 2가 증가하면 안된다.)


BACDE -> BCD : C부터 등장 안함 X
CBADF -> CBD : C부터 등장함, 이전 스킬과 1씩 차이가 남 O
AECB -> CB   : C부터 등장함, 이전 스킬과 1씩 차이가 남 O
BDA -> BD    : C부터 등장안함 X

*/