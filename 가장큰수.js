function solution(a, b) {
  let answer = 0;
  const tempA = a.sort((a, b) => a - b);
  const tempB = b.sort((a, b) => b - a);

  const res = tempA.map((item, index) => {
    return item * tempB[index];
  });

  for (let i = 0; i < res.length; i++) {
    answer = answer + res[i];
  }

  return answer;
}

solution([1, 4, 2], [5, 4, 4]);
