function solution(n,m){
  let star = '';
  let answer = '';

  for(let i = 0; i < n; i++){
    star += '*'
  }

  for(let j = 0; j < m; j++){
      answer += star + '\n'
  }
  
  return answer
}


solution(2,2)