function solution(s){
  let answer = true;
  let temp = '';
  let countP = 0;
  let countY = 0;
  
  temp = s.toLowerCase();

  for (let i = 0; i < temp.length; i++) {
    if(temp[i] === 'y'){
      countY += 1;
    } else if(temp[i] === 'p'){
      countP += 1;
    }
  }

  if(countY === countP) {
    answer = true
  } else{
    answer = false;
  }

  return answer;
}

solution('pPoooyY');