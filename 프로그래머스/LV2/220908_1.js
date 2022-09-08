// 스택/큐 > 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge = new Array(bridge_length); // -> 내부 값을 다 더하면 총 무게.
    bridge.fill(0);
    let _truck_weights = [...truck_weights];
    let crossed_truck = [];
    let weightSum = 0;

    console.log("truck_weights", truck_weights);

    /*
    다리에 하나 올리고 작업1 증가시키고 시작.
    */
    bridge[0] = truck_weights[0];
    weightSum = truck_weights[0];
    answer += 1;
    _truck_weights.shift();

    const Update_Bridge = (truck) => {
        // 맨앞에 트럭만 추가
        if (truck) {
            bridge[0] = truck;
            weightSum += truck;
        }
        // 전체 오른쪽으로 한칸 이동.
        else {
            // 맨앞에 0을 추가하고
            bridge.splice(0, 0, 0);

            // 맨끝에 나갈 트럭의 무게를 빼고
            weightSum -= bridge[bridge.length - 1];

            // 맨끝 트럭이 나갈차례가 된다면 작업을 완료한 배열을 업데이트 한다.
            if (bridge[bridge.length - 1] > 0) {
                crossed_truck.push(1);
            }

            // 맨끝 트럭을 뺸다
            bridge.pop();
        }
    };
    /*
    
    
    맨앞에 하나를 올리고, 맨뒤에 하나를 빼고.
    
    */

    while (crossed_truck.length !== truck_weights.length) {
        console.log("--start");
        console.log("answer", answer);
        answer += 1;
        const target_Truck = _truck_weights[0];
        console.log("target_Truck", target_Truck);
        console.log("bridge1", bridge);

        Update_Bridge();
        console.log("bridge2", bridge);

        // 다리에 올라갈 수 있는지?
        if (weightSum + target_Truck <= weight) {
            Update_Bridge(target_Truck);
            _truck_weights.shift();
        }

        console.log("bridge3", bridge);
        console.log("crossed_truck", crossed_truck);
        console.log("end--");
    }

    return answer;
}

solution(2, 10, [7, 4, 5, 6]);

/*
7 4 5 6

다리위에 첫번쨰 트럭을 올리고 시작한다

7,0 시간 1

1. 타겟을 찾는다. 트럭 배열의 맨앞이 타겟
타겟: 4

2. 다리가 업데이트 된다.
0, 7
트럭이 빠지면 작업을 완료한 배열에 업데이트 한다.

업데이트 했는데 다 건넜다면 종료.


3. 다리위에 올라갈수 있는지 체크한다.
올라갈수 없으면 1번으로 간다.
올라갈수 있으면 다리위에 올리고 트럭 배열 맨앞을 제거하고 1번으로 간다.





*/
