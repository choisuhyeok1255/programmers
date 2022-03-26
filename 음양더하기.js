function solution(absolutes, signs) {
    let answer = 0;

    absolutes.forEach((item, index) => {
        if(signs[index]){
            answer += item
        } else {
            answer -= item
        }
    })

    return answer;
}

solution([4,7,12], [true,false,true])