function solution(n)
{
  let answer = 0;

  const temp = ''+n;

  for(let i = 0; i < temp.length; i++){
    answer += +temp[i];
  }

  return answer;
}

solution(123);