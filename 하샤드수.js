function solution(x) {
  let answer = true;

  let tempArr = (''+x).split('');
  let temp = 0;

  console.log(tempArr);

  for(let i = 0; i < tempArr.length; i++){
    temp += +tempArr[i];
  }

  if(x % temp) answer = false;

  return answer;
}

solution(12);
solution(11);
solution(13);


// const solution = x => x % Array.from(x + '').reduce((acc, cur) => acc + +cur, 0) === 0;

// console.log(solution(10));
// console.log(solution(12));
// console.log(solution(11));
// console.log(solution(13));