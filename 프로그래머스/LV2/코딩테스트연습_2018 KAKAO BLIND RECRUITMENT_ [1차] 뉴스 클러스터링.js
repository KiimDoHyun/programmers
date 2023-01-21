// 2018 KAKAO BLIND RECRUITMENT > [1차] 뉴스 클러스터링

// function solution(str1, str2) {
//     // 대소문자는 동일시 한다.
//     // 특수문자가 있으면 그 쌍은 버린다.
//     console.log(str1)
//     console.log(str2)
    
//     const check = (input) => {
//         const reg = /^[a-z|A-Z]+$/
//         if(reg.test(input)) {
//             return String(input).toLowerCase();
//         }
//         else {
//             return false;
//         }
//     }
    
//     const getArr = (str) => {
//         let tempArr = [];
//         let strArr = str.split('');
//         strArr.forEach((el, idx) => {
//             if(idx < str.length - 1) {
//                 const first = check(el);
//                 const second = check(strArr[idx + 1]);
                
//                 if(first && second) {
//                     tempArr.push(`${first}${second}`)
//                 }
//             }
//         })
        
//         return tempArr;
//     }
    
//     let str1arr = getArr(str1);
//     let str2arr = getArr(str2);

//     // let str1arr =  ["1", "2", "4", "4", "4"]
//     // let str2arr =  ["4", "4", "5", "6", "7", "8", "8"]
//     console.log('str1arr', str1arr)
//     console.log('str2arr', str2arr)

//     let h = []
//     let g = [];


//     const getG = (arr1, arr2) => {
//         let temp1 = [...arr1];
//         let temp2 = [...arr2];
//         for(let i = 0; i<temp1.length; i++) {
//             for(let j = 0; j<temp2.length; j++) {
                
//                 if(i < temp2.length) {
//                     if(temp1[i] === temp2[j]) {
//                         g.push(temp1[i]);
//                         temp2.splice(j, 1);
//                         break;
//                     }
//                 }
//             }
//         }
//     }
    
//     (str1arr.length > str2arr.length? getG(str2arr, str1arr) : getG(str1arr, str2arr) )

    
//     g.forEach((el1) => {
//         let idx = str1arr.findIndex((el2) => el2 === el1);
//         if(idx !== -1) {
//             str1arr.splice(idx, 1);
//         }
//     })
    
//     g.forEach((el1) => {
//         let idx = str2arr.findIndex((el2) => el2 === el1);
//         if(idx !== -1) {
//             str2arr.splice(idx, 1);
//         }
//     })

//     h = [...str1arr, ...str2arr, ...g]
    

//     // console.log('str1arr', str1arr)
//     // console.log('str2arr', str2arr)
//     console.log('합: ',h, 'length: ', h.length)
//     console.log('교: ',g, 'length: ', g.length)
//     // console.log('result g/h: ', answer = g.length/h.length)

//     /*
//     a: aa aa aa ab bc
//     b: aa aa ab

//     합: aa aa aa ab ab bc
//     교: aa aa ab

//     1. aa ab bc
//     2. aa ab
//     3. 더한것 : aa ab bc



//     aa aa aa aa aa ab ab bc ->  aa ab bc

//     aa

//     aa

//     aa aa
//     aa aa aa

//     aa aa
//     */
    
//     var answer = 0;
    
//     if(!answer) {
//         console.log("?")
//     }
//     return answer;
// }

// solution('aababaaa', 'aaa')

// // const a = () => {
// //     let ar = [1,2,3,4,5];
// //     ar.splice(2,1);
// //     console.log(ar);
// // }

// // a();

function solution(str1, str2) {
    // 대소문자는 동일시 한다.
    // 특수문자가 있으면 그 쌍은 버린다.
    console.log(str1)
    console.log(str2)
    let answer = 0;
    let dup = [];
    let h = [];
    let g = [];

        const check = (input) => {
        const reg = /^[a-z|A-Z]+$/
        if(reg.test(input)) {
            return String(input).toLowerCase();
        }
        else {
            return false;
        }
    }
    
    const getArr = (str) => {
        let tempArr = [];
        let strArr = str.split('');
        strArr.forEach((el, idx) => {
            if(idx < str.length - 1) {
                const first = check(el);
                const second = check(strArr[idx + 1]);
                
                if(first && second) {
                    tempArr.push(`${first}${second}`)
                }
            }
        })
        
        return tempArr;
    }
    
    let str1arr = getArr(str1);
    let str2arr = getArr(str2);
    dup = [...new Set(str1arr.concat(str2arr))]

    console.log('dup: ', dup)

    dup.forEach((el) => {
        let count1 = 0;
        let count2 = 0;
        str1arr.forEach((el1) => {
            if(el === el1) {
                count1+=1;
            }
        })
        str2arr.forEach((el2) => {
            if(el === el2) {
                count2+=1;
            }
        })

        if(count1 >= count2) {
            for (let index = 0; index < count1; index++) {
                h.push(el);
            }
            for (let index = 0; index < count2; index++) {
                g.push(el);
            }
        }
        else {
            for (let index = 0; index < count2; index++) {
                h.push(el);
            }
            for (let index = 0; index < count1; index++) {
                g.push(el);
            }
        }
    })

        console.log('str1arr', str1arr)
    console.log('str2arr', str2arr)
    console.log('합: ', h)
    console.log('교: ', g)

    return answer;
}

solution('aababaaa', 'aaa')

// const a = () => {
//     let ar = [1,2,3,4,5];
//     ar.splice(2,1);
//     console.log(ar);
// }

// a();