// readline
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line)
}).on('close', function(){ //이 안에 솔루션 코드 작성
    solution(input);
    process.exit();
});

// fs 
// /dev/stdin ./a.txt
// const start = new Date();
// const [n, ...arr] = require('fs').readFileSync('./a.txt').toString().trim().split('\n');

// const check = (str) => {
//     let _str = str.trim();
//     console.log('_str', _str.length)
//     let mid = Math.floor(_str.length/2);
//     const lastIdx = _str.length - 1;

//     if(_str % 2 !== 0) {
//         mid -= 1;
//     }

//     for (let index = 0; index <= mid; index++) {
//         if(_str[index] !== _str[lastIdx - index]) {
//             return false;
//         }
//     }

//     return true;
// }

// 문자열을 하나씩 잘라서 비교함 (시간초과)
// a b c d -> b c d, a c d, a b d
// const solution = inputs => {
//     let resultStr = '';
//     inputs.forEach((input) => {
//         if(check(input)) {
//             resultStr += '0\n';
//         }
//         else {
//             let isReverse = false;
//             for (let index = 0; index < input.length; index++) {
//                 const str = input.slice(0, index) + input.slice(index + 1, input.length);
//                 if(check(str)) {
//                     isReverse = true;
//                     break;
//                 }
//             }

//             if(isReverse) {
//                 resultStr += '1\n';
//             }
//             else {
//                 resultStr += '2\n';

//             }
//         }
//     })
//     console.log("resultStr: ", resultStr);
//     const end = new Date();
//     console.log("time", end - start)
// };

const isPalindrome = (str, _startIdx, _endIdx) => {
    // console.log('str', str)
    // console.log('_startIdx', _startIdx)
    // console.log('_endIdx', _endIdx)

    if(_startIdx > _endIdx) {
        return false;
    }
    let endIdx = _endIdx;
    for (let startIdx = _startIdx; startIdx < str.length; startIdx++) {
        // console.log('--startIdx', startIdx)
        // console.log('--endIdx', endIdx)
        // console.log('--str[startIdx]', str[startIdx])
        // console.log('--str[endIdx]', str[endIdx])
        if(startIdx > endIdx) {
            return true;
        }

        if(str[startIdx] !== str[endIdx]) {
            return false;
        }
        endIdx -= 1;

    }

    return true;
}

const solution = inputs => {
    let resultStr = '';
    inputs.forEach((input, idx) => {
        if(idx !== 0) {

            let _input = input.trim();
            let endIdx = _input.length - 1;
            // console.log('endIdx123123', endIdx)

            for (let startIdx = 0; startIdx < _input.length; startIdx++) {
                // 시작과 끝 idx 가 동일하면 종료.


                if(startIdx === endIdx || startIdx > endIdx) {
                    resultStr += '0\n'
                    break;
                }
                // 시작, 끝의 문자가 같으면 넘어간다.
                if(_input[startIdx] === _input[endIdx]) {
                    endIdx -= 1;
                    continue;
                }
                // 다르다면
                else {
            // console.log('//startIdx', startIdx)
            // console.log('//endIdx', endIdx)
            // idx 를 변경해서 테스트 해보고
                    // 만약 회문이 되면
                    if(isPalindrome(_input, startIdx + 1, endIdx) || isPalindrome(_input, startIdx, endIdx - 1)) {
                        resultStr += '1\n'
                        break;
                    }
                    else {
                        resultStr += '2\n'
                        break;
                    }
                }
            }
        }

    })

    console.log( resultStr)
}