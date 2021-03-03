function solution(seoul) {
    
  let seoulArr = seoul;
  let answer = '';
  
  seoulArr.forEach((name, index) => {
    let indexNum = index;
    if(name === 'Kim') answer = `김서방은 ${indexNum}에 있다`;
  });
  
  return answer;
}

solution(["Jane","Kim"]);