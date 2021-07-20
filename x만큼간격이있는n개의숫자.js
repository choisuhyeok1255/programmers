function solution(x, n) {
  const answer = [];

  let temp = x;
  for (let i = 0; i < n; i++) {
    answer.push(temp);
    temp = temp + x;
  }

  return answer;
}

console.log(solution(2, 5));
