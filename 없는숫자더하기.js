function solution(numbers) {
    const temp = [0,1,2,3,4,5,6,7,8,9];

    let answer = 0;
    temp.forEach((item) => {
        if(!numbers.includes(item)){
            answer += item
        }
    })
    
    return answer;
}

solution([1,2,3,4,6,7,8,0]);