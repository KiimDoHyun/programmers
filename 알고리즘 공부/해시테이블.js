/*********************************************

해시테이블 연습 문제: 베스트앨범

묶는것과 정렬하는것이 핵심인 연습 문제

고차함수로 단순화 하면 더 좋을듯

*********************************************/

function solution(genres, plays) {
    var answer = [];

    // 전체 정보를 객체에 저장한다.
    // 장르별로 저장한다.
    const obj = {};

    for (let i = 0; i < genres.length; i++) {
        const currentGen = genres[i];
        const currentPlay = plays[i];

        if (!obj[currentGen]) {
            obj[currentGen] = {};
            obj[currentGen].totalPlayTime = currentPlay;
            obj[currentGen].list = [];
            obj[currentGen].list.push({ playTime: currentPlay, id: i });
        } else {
            obj[currentGen].totalPlayTime += currentPlay;
            obj[currentGen].list.push({ playTime: currentPlay, id: i });
        }
    }

    // console.log(obj)

    // 총 재생시간이 높은 순서 정보를 가진 배열을 생성한다.
    let playTimeOrder = [];

    // 정보가 담긴 객체를 수정한다. (각 노래의 재생시간을 정렬하기 위함.)
    for (let key in obj) {
        // 재생 시간이 높은 순서대로 정렬한다.
        // 단 이미 고유번호가 낮은 순으로 정렬 되어있었기 때문에 같은 재생시간이어도 고유번호가 낮은 순으로 정렬된다.
        obj[key].list.sort((a, b) => b.playTime - a.playTime);

        // 총 재생시간 정렬을 위해 아이템을 추가한다.
        playTimeOrder.push({
            genres: key,
            totalPlayTime: obj[key].totalPlayTime,
        });
    }

    // 총 재생시간이 높은 순서대로 정렬한다.
    playTimeOrder.sort((a, b) => b.totalPlayTime - a.totalPlayTime);
    // console.log("총 재생시간 순서", playTimeOrder)

    // 재생시간이 높은 장르 부터 아이템을 추출한다.
    playTimeOrder.forEach((item) => {
        const currentGenres = item.genres;

        // 아이템은 최대 2개 까지 추출한다.
        if (obj[currentGenres].list.length >= 2) {
            answer.push(obj[currentGenres].list[0].id);
            answer.push(obj[currentGenres].list[1].id);
        } else {
            answer.push(obj[currentGenres].list[0].id);
        }
    });

    // -> 애초에 obj를 배열로 만들어서 정렬하면 playTimeOrder 이 데이터가 필요 없을듯

    // 고유번호: 인덱스번호

    /*
    
    1. 어떤 장르가 많이 재생 되었는가
    2. 어떤 노래의 재생 시간이 긴가
    3. 어떤 노래의 고유번호가 낮은가
    */
    return answer;
}
