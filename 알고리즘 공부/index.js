// 클로저
function fn1(intialValue) {
    let fn1Value = intialValue;

    function Add(addNum) {
        console.log(`초기값은 ${fn1Value} 입니다.`);
        return (fn1Value += addNum);
    }

    return Add;
}

let adder1 = fn1(1);
let adder2 = fn1(100);

console.log(adder1(2));
console.log(adder2(2));

console.log(adder1(30));
