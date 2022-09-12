function solution(m, musicinfos) {
    const getPlayTime = (start, end) => {
        const splitStart = start.split(":");
        const splitEnd = end.split(":");
        const startHour = Number(splitStart[0]);
        const startMin = Number(splitStart[1]);
        const endHour = Number(splitEnd[0]);
        const endMin = Number(splitEnd[1]);

        const resultH = endHour - startHour;
        const resultM = endMin - startMin;

        return resultM + resultH * 60;
    };

    musicinfos.forEach((musicinfo) => {
        console.log("musicinfo:", musicinfo);
        const splitResult = musicinfo.split(",");
        const startTime = splitResult[0];
        const endTime = splitResult[1];
        const title = splitResult[2];
        const melodyPart = splitResult[3];

        // 몇분이 재생되었는지
        const playTime = getPlayTime(startTime, endTime);

        let musicMelody = "";
        let musicMelodyIdx = 0;
        let target = "";
        for (let index = 0; index < playTime; index++) {
            if (index + 1 <= melodyPart.length) {
                if (melodyPart[index + 1] === "#") {
                    target = `${melodyPart[index]}${melodyPart[index + 1]}`;
                    index += 1;
                } else {
                    target = melodyPart[index];
                }

                console.log("target:", target);
            }
        }

        console.log("playTime:", playTime);
    });
    var answer = "";
    return answer;
}

solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]);
