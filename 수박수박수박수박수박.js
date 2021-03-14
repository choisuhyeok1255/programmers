function solution(n) {
  let answer = '';
  const su = '수';
  const bak = '박';

  for(let i = 0; i < n; i++){
    i % 2 === 0 ? answer += su : answer += bak;
  }

  return answer;

}

solution("3");
solution("4");